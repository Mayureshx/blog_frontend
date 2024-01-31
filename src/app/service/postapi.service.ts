import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  constructor(private http:HttpClient) { }
  
  allPostURL="http://localhost:8080/api/blog/posts";
  signupURL="http://localhost:8080/api/blog/signup"; 
  loginURL="http://localhost:8080/api/blog/login";   
  postsByCategoryURL="http://localhost:8080/api/blog/posts/";   
  singlePostURL="http://localhost:8080/api/blog/post/";
  getCommentsURL="http://localhost:8080/api/blog/comment/";  
  addCommentURL="http://localhost:8080/api/blog/comment/"; 
  addPostURL="http://localhost:8080/api/blog/post/"; 
  deletePostURL="http://localhost:8080/api/blog/post/"; 
  updatePostURL="http://localhost:8080/api/blog/post/"; 
  postsByUserIdURL="http://localhost:8080/api/blog/post/user/"; 
  getAllCommentsURL="http://localhost:8080/api/blog/comments";
  getCommentsByUserIdURL="http://localhost:8080/api/blog/comment/user/";
  deleteCommentByCommentIdURL="http://localhost:8080/api/blog/comment/";
  getCommentByCommentIdURL="http://localhost:8080/api/blog/getcomment/";
  updateCommentURL="http://localhost:8080/api/blog/comment/";
  getAllUsersURL="http://localhost:8080/api/blog/users";
  deleteUSerURL="http://localhost:8080/api/blog/user/";
  postSearchURL="http://localhost:8080/api/blog/post/search/";
  getAllcategoriesURL="http://localhost:8080/api/blog/categories";
  deleteCategoryURL="http://localhost:8080/api/blog/category/";
  addCategoryURL="http://localhost:8080/api/blog/category";
  fetchPostsURL="http://localhost:8080/api/blog/pageposts";
  postSearchByKeywordURL="http://localhost:8080/api/blog/post/search/";
  getAllPosts():Observable<any>
  {
   return this.http.get(this.allPostURL);
  }


  signup(user:User):Observable<any>
  {
     const headers={'content-type':'application/json'};
     const body=JSON.stringify(user);
     return this.http.post(this.signupURL,body,{'headers':headers});
  }
 
  signin(email:any, password:any):Observable<any>
  {
    
    const params=new HttpParams().set('email',email).set('password',password);
    console.log(params);
    return this.http.get(this.loginURL,{params});
  }

  postsByCategory(categoryId:any):Observable<any>
  {
    return this.http.get(this.postsByCategoryURL+categoryId);
  
  }

  getSinglePost(postId:any):Observable<any>
  {
    return this.http.get(this.singlePostURL+postId);
  }


  getCommentsForPost(postId:any):Observable<any>
  {
    return this.http.get(this.getCommentsURL+postId);
  }

  addComment(postId:number,userId:number,content:any):Observable<any>
  {
    
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(content);
    return this.http.post(this.addCommentURL+postId+'/'+userId,body,{'headers':headers});
  }

  addPost(postId:any, postTitle:string, content:string, image:File,categoryId:any,userId:any):Observable<any>
  {
    const formData:FormData=new FormData();
    formData.append("postId",postId);
    formData.append("postTitle",postTitle);
    formData.append("postContent",content);
    formData.append("postImage",image);
    formData.append("categoryId",categoryId);
    formData.append("userId",userId);
    return this.http.post(this.addPostURL,formData  );
  }
  deletePost(postId:any):Observable<any>
  {
    return this.http.delete(this.deletePostURL+postId);
  }
  updatePost(postId:any, postTitle:string, content:string, image:File,categoryId:any,status:any):Observable<any>
  {
    const formData:FormData=new FormData();
    formData.append("postId",postId);
    formData.append("postTitle",postTitle);
    formData.append("postContent",content);
    formData.append("postImage",image);
    formData.append("categoryId",categoryId);
    formData.append("status",status);
    return this.http.put(this.updatePostURL,formData  );
  }

  getPostsByUserId(userId:any):Observable<any>
  {
   
    return this.http.get(this.postsByUserIdURL+userId);
  }


  getAllComments():Observable<any>
  {
    return this.http.get(this.getAllCommentsURL);
  }

  getCommentsByUserId(userId:any):Observable<any>
  {
    return this.http.get(this.getCommentsByUserIdURL+userId);
  }


  deleteCommentByCommentId(commentId:any):Observable<any>
  {
    return this.http.delete(this.deleteCommentByCommentIdURL+commentId);
  }

  getCommentBycommentId(commentId:any):Observable<any>
  {
    return this.http.get(this.getCommentByCommentIdURL+commentId);
  }

  updateComment(comment:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(comment);
    return this.http.put(this.updateCommentURL,body,{'headers':headers});
  }

  getAllUsers():Observable<any>
  {
    return this.http.get(this.getAllUsersURL);
  }

  deleteUserById(userId:any):Observable<any>
  {
    return this.http.delete(this.deleteUSerURL+userId);
  }
   
  getPostByTitle(title:any):Observable<any>
  {
    const params = new HttpParams().set('postTitle', title);
    return this.http.get(this.postSearchURL,{params})
  }

  searchPostByKeyword(keyword:any):Observable<any>
  {
    const params = new HttpParams().set('keyword', keyword);
    return this.http.get(this.postSearchByKeywordURL,{params})
  }

  getAllCategories():Observable<any>
  {
    return this.http.get(this.getAllcategoriesURL);
  }

  deleteCategoryById(categoryId:any):Observable<any>
  {
    return this.http.delete(this.deleteCategoryURL+categoryId);
  }
  addCategory(obj:any):Observable<any>
  {
    //const headers={'content-type':'application/json'};
    //const body=JSON.stringify(obj);
    return this.http.post(this.addCategoryURL,obj);
  }

  fetchPosts(params: any): Observable<any> {
    return this.http.get(this.fetchPostsURL,{ params });
  }
}
