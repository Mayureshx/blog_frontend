import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users:any;

  loginStatus:any=localStorage.getItem("loginStatus");
  userRole:any=localStorage.getItem("userRole");
  constructor(private service:PostapiService,private router:Router)
  {
    this.service.getAllUsers().subscribe(
      response => {
        console.log(response);
        this.users=response;
      }
    );

  }

  deleteUser(userId:any)
  {
    // alert("User:"+userId + "If you delete User then all posts of user going to be deleted");
    if(confirm('Do you really want to delete this User: '+userId+"? And If you delete this User then all Posts will be Deleted"))
    {
    this.service.deleteUserById(userId).subscribe(
      response => { alert(response.message);
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
