/**
 * 
 */

import { Injectable }   from '@angular/core';
import { Subject }      from 'rxjs';

import { Post }         from './post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService
{
    //Properties
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    //Methods
    getPosts()
    {
        //Method returns a copy of the array of posts
        return [...this.posts];                                 //Create a new array that copies array of posts and return it
    }   //End of getPosts

    getPostUpdateListener()
    {
        //Returns an object that we can listen but not emmit
        return this.postsUpdated.asObservable();                
    }   //End of getPostUpdateListener

    addPosts(title: string, content: string)
    {
        //Method creates a new post and appends it to the list of posts
        const post: Post = {title: title, content: content}     //Create a new post
        this.posts.push(post);                                  //Add the post to our array of posts
        this.postsUpdated.next([...this.posts]);                //Pushes a copy of the posts after updating them
    }   //End of addPosts method
}   //End of PostsService class