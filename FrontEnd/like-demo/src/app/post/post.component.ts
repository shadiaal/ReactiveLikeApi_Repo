
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
interface Post {
  id: number;
  content: string;
  likes: number;
}

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  eventSource: EventSource | null = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
    this.subscribeToUpdates();
  }

  ngOnDestroy() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }

  // Fetch posts from the server
  fetchPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  // Handle "Like" button click
  likePost(postId: number) {
    this.postService.likePost(postId).subscribe(updatedPost => {
      this.updatePostInView(updatedPost);
    });
  }

  // Subscribe to real-time updates
  subscribeToUpdates() {
    this.eventSource = this.postService.subscribeToUpdates();
    this.eventSource.onmessage = (event) => {
      const updatedPost = JSON.parse(event.data);
      this.updatePostInView(updatedPost);
    };

    this.eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      this.eventSource?.close();
      setTimeout(() => location.reload(), 5000); // Retry after 5 seconds
    };
  }

  // Update the post in the UI
  updatePostInView(updatedPost: Post) {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    } else {
      this.posts.push(updatedPost);
    }
  }
}
