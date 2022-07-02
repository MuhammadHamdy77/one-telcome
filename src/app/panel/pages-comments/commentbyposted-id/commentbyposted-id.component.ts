import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/providers/services/comments.service';

@Component({
  selector: 'app-commentbyposted-id',
  templateUrl: './commentbyposted-id.component.html',
  styleUrls: ['./commentbyposted-id.component.scss']
})
export class CommentbypostedIdComponent implements OnInit {
id:any;
allComments:any;
  constructor(private _http:CommentsService , private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCommentsByPostId();
  }
getCommentsByPostId(){
  this.id = this._ActivatedRoute.snapshot.params.id;
  this._http.getByPostid(this.id).subscribe((data)=>{
    this.allComments = data;
  })
}
}
