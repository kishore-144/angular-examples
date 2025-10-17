import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PostDesign {
  userId: number;
  id: number;
  title: string;
  body: string;
}


@Injectable({
  providedIn: 'root'
})
export class Poster {
  private apiUrl='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {
    
  }
  getPosts(): Observable<PostDesign[]> {
    const headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
    return this.http.get<PostDesign[]>(this.apiUrl, { headers });
  }
  getPost(id:number):Observable<PostDesign>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.get<PostDesign>(url);
  }
  addPost(post:Partial<PostDesign>):Observable<PostDesign>{
    return this.http.post<PostDesign>(this.apiUrl,post);
  }

  updatePost(post:PostDesign){
    const url=`${this.apiUrl}/${post.id}`;
    return this.http.put<PostDesign>(url,post);
  }

  deletePost(id:number):Observable<any>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
