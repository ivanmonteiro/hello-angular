import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
        this.posts.splice(0, 0, post);
      }, (error: AppError) => {
        if (error instanceof BadInputError) {
          //this.form.setErrors(error.ogiginalError.json())
        } else {
          throw error;
        }
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(345)
      .subscribe(null, 
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          
          if (error instanceof NotFoundError) {
            alert('This post has alredy been deleted.');
          } else {
            throw error;
          }
      })
  }
}
