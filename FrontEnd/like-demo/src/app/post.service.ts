import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  id: number;
  content: string;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://localhost:65399/api';

  constructor(private http: HttpClient) { }

  // Fetch all posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  // Like a post
  likePost(postId: number): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts/${postId}/like`, {});
  }

  // Subscribe to real-time updates using EventSource
  subscribeToUpdates(): EventSource {
    return new EventSource(`${this.apiUrl}/subscribe`);
  }
}
