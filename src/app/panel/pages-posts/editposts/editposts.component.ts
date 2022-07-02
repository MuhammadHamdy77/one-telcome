import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/providers/services/posts.service';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.scss']
})
export class EditpostsComponent implements OnInit {

id:number = 0;
allData:any = {};

formEdit!: FormGroup;toastrService: any;
;
constructor(
  private _ActivatedRoute :ActivatedRoute , 
  private _http:PostsService , 
  private fb:FormBuilder,
  private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getDataPost();
    this.formsEditPost();
    
  }

getDataPost(){
  this.id = this._ActivatedRoute.snapshot.params.id;
  this._http.getPost(this.id).subscribe((data)=>{
    console.log(data);
    this.allData = data;
    this.setValueForm();
   
  })
}

formsEditPost(){
this.formEdit =this.fb.group({
  userId: [{ value: this.allData.userId} , Validators.required],
  id: [{ value: this.allData.id} , Validators.required],
  title: [{ value: this.allData.title}  , Validators.required],
  body: [{ value: this.allData.body}  , Validators.required],
})
}

setValueForm(){
  this.formEdit.controls['userId'].setValue(this.allData.userId);
  this.formEdit.controls['id'].setValue(this.allData.id);
  this.formEdit.controls['title'].setValue(this.allData.title);
  this.formEdit.controls['body'].setValue(this.allData.body);
}
  updatePost(formEdit:any){
    this._http.update(this.id , this.formEdit.value).subscribe((data)=>{
      // this.toast.success("Data Updated");
    })
  }

}
