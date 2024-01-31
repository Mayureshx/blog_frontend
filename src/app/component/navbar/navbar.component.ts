import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  categories:any;
  userRole:any=localStorage.getItem("userRole");
  loginStatus:any=localStorage.getItem("loginStatus");
 
  userId:any=Number(localStorage.getItem("userId"));
  constructor(private service:PostapiService,private router:Router)
  {
    

    this.service.getAllCategories().subscribe(
      response => {
        console.log(response);
        this.categories=response;
      }
    );
  }
 

}
