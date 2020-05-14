import { Component, EventEmitter, Output }  from '@angular/core';

import { Post }                             from '../post.model';  //Import the 'Post' interface

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
    enteredTitle    = '';
    enteredContent  = '';
    @Output() postCreated = new EventEmitter<Post>();

    onAddPost()
    {
        const post: Post = {
            title: this.enteredTitle,
            content: this.enteredContent
        };   //End of const post
        this.postCreated.emit(post);
    }   //End of onAddPost
}