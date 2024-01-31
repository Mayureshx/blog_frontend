import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  
  posts:any;
  count:any=0;
  keyword=this.route.snapshot.queryParamMap.get('keyword');
  constructor(private service:PostapiService,private router:Router,private route: ActivatedRoute)
  {
    
   
 
  this.service.searchPostByKeyword(this.keyword).subscribe(
    response => {
      console.log(response);
      this.posts=response;
      this.count=response.length;
      console.log(this.count)
      
    }
  );

  }


  
}


