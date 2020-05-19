import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }                 from 'rxjs';

import { Post }             from '../post.model';       //Import the 'Post' interface
import { PostsService }     from '../posts.service';    //Import service 'PostsService'

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy
{
    //Properties
    posts: Post[] = [];                                                 //List of 'Post'
    private postsSub: Subscription;

    //Constructor
    constructor(public postsService: PostsService){}                    //Dependency injection

    ngOnInit()                                              
    {
        this.posts      = this.postsService.getPosts();
        //Listener to subject
        this.postsSub   = this.postsService.getPostUpdateListener().    //Take free arguments when data is emmited
        subscribe((posts: Post[]) => {
            this.posts  = posts;                                        //Set the posts we just recieved

        });
    }   //End of ngOnInit

    ngOnDestroy()
    {
        //This is called when the component is about to get destroyed, prevents memory leaks
        this.postsSub.unsubscribe();                                    //Remove subcription and prevent memory leaks
    }   //End of ngOnDestroy method
    
}   //End of PostListComponent class