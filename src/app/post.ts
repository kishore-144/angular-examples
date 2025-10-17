import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


@Injectable({
  providedIn: 'root'
})
export class Post {
  private apiUrl='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {
    
  }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }
  getPost(id:number):Observable<Post>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }
  addPost(post:Partial<Post>):Observable<Post>{
    return this.http.post<Post>(this.apiUrl,post);
  }

  updatePost(post:Post){
    const url=`${this.apiUrl}/${post.id}`;
    return this.http.put<Post>(url,post);
  }

  deletePost(id:number):Observable<any>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
