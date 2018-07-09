import { HttpModule } from '@angular/http'
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { TesteClassComponent } from './teste-class/teste-class.component';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { RatingComponent } from './rating/rating.component';
import { TitlecasePipe } from './titlecase.pipe';
import { TitleboxComponent } from './titlebox/titlebox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { CourseComponent } from './course/course.component';
import { ChangepasswordformComponent } from './changepassword-form/changepasswordform.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubService } from './services/github.services';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    TesteClassComponent,
    RatingComponent,
    TitlecasePipe,
    TitleboxComponent,
    LikeComponent,
    ZippyComponent,
    TemplatedrivenformComponent,
    CourseComponent,
    ChangepasswordformComponent,
    SignupFormComponent,
    PostsComponent,
    GithubfollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthorsService,
    CoursesService,
    PostService,
    GithubService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
