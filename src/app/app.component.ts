import { Component }  from '@angular/core';

import { Post }       from './posts/post.model';  //Import the 'Post' interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];
  
  onPostAdded(post){
    this.storedPosts.push(post);
  }
}
