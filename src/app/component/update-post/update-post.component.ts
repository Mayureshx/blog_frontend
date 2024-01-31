import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../model/Post';
import { PostapiService } from '../../service/postapi.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  post:Post | undefined;
  categories:any;
  imageUrl: string = "/assets/img/noimage.png";
  fileToUpload: any;
  files:any;
  target:any;
  postId:any;
  singlePost:any;

  userRole:any=localStorage.getItem("userRole");
  loginStatus:any=localStorage.getItem("loginStatus");
  constructor(private router:Router, private service:PostapiService, private activatedRoute:ActivatedRoute)
  {
    this.postId = this.activatedRoute.snapshot.params['postId'];
    this.service.getSinglePost(this.postId).subscribe(
      (response) =>{this.singlePost=response; console.log(response);}
    );

    this.service.getAllCategories().subscribe(
      response => {
        console.log(response);
       
        this.categories=response;
      }
    );
  }


  updatePost(postId:any,title:any,content:any,categoryId:any,status:any)
  {
    
    this.service.updatePost(postId,title,content,this.files[0],Number(categoryId),status).subscribe(
      response =>{
        console.log(response); 
        alert('post updated!!');
        this.router.navigate(['manage-posts']);
      }
    );

    //console.log(this.post);
  
  }

  handleFileInput(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.files = this.target.files as FileList;
    //console.log(this.files);
    
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }
}
