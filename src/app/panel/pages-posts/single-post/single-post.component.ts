import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/providers/services/comments.service';
import { PostsService } from 'src/app/providers/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  constructor(
    private _htppPost: PostsService ,
    private _htppComments: CommentsService ,
    private _ActivatedRoute:ActivatedRoute,
     ) { }
id!:number;
allData:any;
allComments:any;
  ngOnInit(): void {

    this.getSingPost();
    this.getCommentsByPostId();
  }
getSingPost(){
  this.id = this._ActivatedRoute.snapshot.params.id;
  this._htppPost.getPost(this.id).subscribe((data)=>{
    this.allData  = data;
    console.log(this.allData);
  });
}

getCommentsByPostId(){
  this.id = this._ActivatedRoute.snapshot.params.id;
  this._htppComments.getByPostid(this.id).subscribe((data)=>{
    this.allComments = data;
    console.log(this.allComments);
    
  })
}
}
