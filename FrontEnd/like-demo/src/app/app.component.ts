import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [PostComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'like-demo';
}
