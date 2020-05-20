import { Component }                        from '@angular/core';
import { NgForm }                           from '@angular/forms';

import { PostsService }                     from '../posts.service';    //Import 'PostsService' service

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
    //Properties
    enteredTitle    = '';
    enteredContent  = '';

    //Constructor for PostsService
    constructor (public postsService: PostsService)
    {

    }   //End of PostsService constructor

    
    //Functions
    onAddPost(form: NgForm)
    {
        if (form.invalid)
        {
            return;
        }
        
        this.postsService.addPosts(form.value.title, form.value.content);   //Save the given post
        form.resetForm();                                                   //Reset the form after saving it
    }   //End of onAddPost
}   //End of PostCreateComponent class