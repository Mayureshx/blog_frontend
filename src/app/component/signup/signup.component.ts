import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service:PostapiService, private router:Router)
  {

  }

  user:any;
  saveUser( userName:any, dob:any, email:any, password:any, repassword:any)
  {
    if(password==repassword)
    {
      this.user=new User(userName,password,email,dob,"USER");
      console.log(this.user)
      this.service.signup(this.user).subscribe(

      response => {
        console.log(response);
        alert('Signup successful!!');
        this.router.navigate(['/signin']);
    },
    (error) => { alert(error.message);  }


   );
   
  }
  else
  {
    alert('password does not match!!');
    window.location.reload();
  }
  }


  signupUser(signup:any)
  {
    console.log(signup.value);
    if(signup.value.password==signup.value.password_confirm)
    {
      this.user=new User(signup.value.username,signup.value.password,signup.value.email,signup.value.dob,"USER");
      console.log(this.user)
      this.service.signup(this.user).subscribe(

      response => {
        console.log(response);
        alert('Signup successful!!');
        this.router.navigate(['/signin']);
    },
    (error) => { alert('Something went wrong!!');  }


   );
   
  }
  else
  {
    alert('password does not match!!');
    //window.location.reload();
  }
  }
}
