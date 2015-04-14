/// <reference path="../typings/aurelia.d.ts" />

import {inject} from 'aurelia-framework';
import {HttpClient, IHttpResponseMessage} from 'aurelia-http-client';

interface Post {
  Title: string;
  Content: string;
  Posted: string;
}

@inject(HttpClient)
export class Posts {
  public heading = "Posts";
  public posts: Post[];
  
  constructor(private http: HttpClient) {

  }

  public activate() {
    this.http.get('/posts').then((response: IHttpResponseMessage<Post[]>) => {
      this.posts = response.content;
      console.log(this.posts);
    });
  }
}
