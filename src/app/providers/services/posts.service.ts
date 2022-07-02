import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }
  apiUrlPost='https://jsonplaceholder.typicode.com/posts/';
  
  getAll():Observable<any>{
    return this._http.get(this.apiUrlPost);
  }
  getPost(id:number):Observable<any>{
    return this._http.get(this.apiUrlPost+id);
  }
  delete(id:number):Observable<any>{
  return this._http.delete(this.apiUrlPost+id)
  }
  update(id:number , data:any):Observable<any>{
    return this._http.put(this.apiUrlPost+id , data)
  }
  add(data:any):Observable<any>{
    return this._http.post(this.apiUrlPost , data);
  }
}
