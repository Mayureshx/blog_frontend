import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  userRole:any=localStorage.getItem("userRole");
  loginStatus:any=localStorage.getItem("loginStatus");
  obj:any;
  constructor(private router:Router, private service:PostapiService)
  {
   
  }
  addCategory(category:any)
  {
   
    
    this.service.addCategory(category).subscribe(
      (response) =>{
        alert('category added!!')
        this.router.navigate(['manage-category']);
      }
    );
  }
}
