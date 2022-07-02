import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PostsService } from 'src/app/providers/services/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit , OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  allData:any=[];

  constructor(private _http: PostsService) { }
  
  ngOnInit(): void {
    this.optionSDataTables();
    this.getAllPost();
  }

  optionSDataTables(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
  getAllPost(){
    this._http.getAll().subscribe(data => {
      this.allData = data;
      this.dtTrigger.next();
    });
  }
editpost(id:number){

}
deletepost(id:number){
  this._http.delete(id).subscribe((data)=>{
    alert(`${id} is Deleted`);
    
  })
}
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
