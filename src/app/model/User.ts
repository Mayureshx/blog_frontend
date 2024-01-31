export class User
{
  //public userId:number ;
  public userName:string;
  public userPassword:string;
  public userEmail:string;
  public dob:Date;
  //public about:string;
  public role:string;


  constructor(userName:any,userPassword:any,userEmail:any, dob:any,  role:any)
  {
    //this.userId=userId;
    this.userName=userName;
    this.userEmail=userEmail;
    this.userPassword=userPassword;
    this.dob=dob;
    this.role=role;
  }
}