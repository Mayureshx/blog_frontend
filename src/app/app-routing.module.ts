import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './component/add-post/add-post.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ManageCategoryComponent } from './component/manage-category/manage-category.component';
import { ManageCommentsComponent } from './component/manage-comments/manage-comments.component';
import { ManagePostsComponent } from './component/manage-posts/manage-posts.component';
import { ManageUsersComponent } from './component/manage-users/manage-users.component';
import { PostSearchComponent } from './component/post-search/post-search.component';
import { PostsCategoryComponent } from './component/posts-category/posts-category.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { UpdateCommentComponent } from './component/update-comment/update-comment.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { AuthguardGuard } from './service/authguard.guard';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
   },

   {
    path : 'home',
    component: HomeComponent
   },

 {
  path : 'signup',
  component: SignupComponent
 },
 
 {
  path : 'signin',
  component: SigninComponent
 },
 {
  path : 'dashboard',
  component: DashboardComponent, canActivate:[AuthguardGuard] 
 },
 {
  path : 'category/:categoryId',
  component: PostsCategoryComponent
 },
 {
  path : 'search',
  component: PostSearchComponent
 },
 {
  path : 'post/:postId',
  component: SinglePostComponent
 },
 {
  path : 'manage-posts',
  component: ManagePostsComponent, canActivate:[AuthguardGuard] 
 },
 {
  path : 'manage-comments',
  component: ManageCommentsComponent, canActivate:[AuthguardGuard] 
 },

 {
  path : 'manage-users',
  component: ManageUsersComponent, canActivate:[AuthguardGuard] 
 },
 {
  path : 'add-post',
  component: AddPostComponent, canActivate:[AuthguardGuard] 
 },
 {
  path : 'update-post/:postId',
  component: UpdatePostComponent, canActivate:[AuthguardGuard] 
 },
 {
  path : 'update-comment/:commentId',
  component: UpdateCommentComponent, canActivate:[AuthguardGuard] 
 },
 {
  path : 'search-result',
  component: SearchResultComponent
 },
 {
  path : 'manage-category',
  component: ManageCategoryComponent, canActivate:[AuthguardGuard] 
 },

 {
  path : 'add-category',
  component: AddCategoryComponent, canActivate:[AuthguardGuard] 
 }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
  })
export class AppRoutingModule { }
