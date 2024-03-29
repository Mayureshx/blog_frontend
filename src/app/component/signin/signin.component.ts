import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loginStatus:any=localStorage.getItem("loginStatus");

  constructor(private service:PostapiService, private router:Router)
  {
    if(this.loginStatus=="active")
    {
      this.router.navigate(['dashboard']);
    }
  }



  signinUser(obj:any)
  {
   
    this.service.signin(obj.value.email,obj.value.password).subscribe(

      response => {

        console.log(response);
        alert('login successful');
        localStorage.setItem("loginStatus","active");
        localStorage.setItem("email",obj.value.email);
        localStorage.setItem("userId",response.userId);
        localStorage.setItem("userName",response.userName);
        localStorage.setItem("userRole",response.userRole);
        this.router.navigate(['dashboard']);
    },

    () => { alert('Wrong email Id or password!!');  }

    );



  }

}
