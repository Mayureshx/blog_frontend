import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostsCategoryComponent } from './component/posts-category/posts-category.component';
import { PostSearchComponent } from './component/post-search/post-search.component';
import { ManagePostsComponent } from './component/manage-posts/manage-posts.component';
import { ManageCommentsComponent } from './component/manage-comments/manage-comments.component';
import { ManageUsersComponent } from './component/manage-users/manage-users.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';
import { UpdateCommentComponent } from './component/update-comment/update-comment.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { ManageCategoryComponent } from './component/manage-category/manage-category.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { UpdateCategoryComponent } from './component/update-category/update-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    SinglePostComponent,
    DashboardComponent,
    PostsCategoryComponent,
    PostSearchComponent,
    ManagePostsComponent,
    ManageCommentsComponent,
    ManageUsersComponent,
    AddPostComponent,
    UpdatePostComponent,
    UpdateCommentComponent,
    SearchResultComponent,
    ManageCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
