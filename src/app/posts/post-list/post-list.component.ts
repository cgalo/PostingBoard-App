import { Component, Input } from '@angular/core';

import { Post }             from '../post.model';  //Import the 'Post' interface

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent
{
    @Input() posts: Post[] = [];    //List of 'Post'
}