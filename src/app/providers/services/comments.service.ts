import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
apiUrl:string = 'https://jsonplaceholder.typicode.com/comments/';
  constructor(private HttpClient:HttpClient) { }

  getAll():Observable<any>{
  return this.HttpClient.get(this.apiUrl)
  }

  getByPostid(id:number):Observable<any>{
    return this.HttpClient.get(this.apiUrl+id)
  }

}
