import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorsService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
