import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent {
  categories:any;
  userRole:any=localStorage.getItem("userRole");
  loginStatus:any=localStorage.getItem("loginStatus");
 
  userId:any=Number(localStorage.getItem("userId"));
  constructor(private service:PostapiService,private router:Router)
  {
    if(this.userRole=="ADMIN")
  {
    this.service.getAllCategories().subscribe(
      response => {
        console.log(response);
        this.categories=response;
      }
    );
  }
  else
  {
    this.service.getCommentsByUserId(this.userId).subscribe(
      response => {
        console.log(response);
        this.categories=response;
      }
    );
    }

  }

  deleteCategory(categoryId:any)
  {
    if(confirm('Do you really want to delete this category?'))
    {
     this.service.deleteCategoryById(categoryId).subscribe(
      response => {alert('category deleted!!');
        window.location.reload();
    }
      
    );
    }


   
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }
}
