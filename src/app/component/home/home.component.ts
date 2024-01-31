import { Component } from '@angular/core';
import { PostapiService } from 'src/app/service/postapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filterargs = {status: 'active'};
  posts:any=[];
  currentPost:any;
  currentIndex = -1;
  page = 1;
  size = 5;
  count = 0;
  
  constructor(private service:PostapiService)
  {
    this.retrievePosts();
   

  }
 
  getRequestParams(page: any, size: any): any {
    let params: any = {};

   

    if (page) {
      params[`page`] = page - 1;
    }

    if (page) {
      params[`pageSize`] = page;
    }

    return params;
  }



  retrievePosts(): void {
    const params = this.getRequestParams(this.page, this.size);

    this.service.fetchPosts(params)
      .subscribe({
        next: (data) => {
          const { posts, totalItems } = data;
          this.posts = posts;
          this.count = totalItems;
          console.log(this.posts)
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrievePosts();
  }

  setActivePost(post: any, index: number): void {
    this.currentPost = post;
    this.currentIndex = index;
  }

  filteredPosts(posts:any):any
  {
    var list:any;
    for(var p of posts)
    {
      if(p.status=="active")
      list.push(p);

    }
    console.log(list)
    return list;
  }

}
