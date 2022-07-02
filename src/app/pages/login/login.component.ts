import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formsLogin!: FormGroup;

  constructor(
     private fb : FormBuilder,
     private _router: Router
     ) { }

  ngOnInit(): void {
    this.fLogin();
  }


fLogin(){
  this.formsLogin =   this.fb.group({
    userName : ['' , [Validators.required , Validators.minLength(4)]],
    password : ['' , Validators.required]
});

}
  data:any[]=[
    {
      title: 'Hello',
      body: 'Hamdy',
      userId: 1,
    }
  ];
    
  sendForm(){
    if(this.formsLogin.valid){

      // alert(this.formsLogin.value);
      this._router.navigate(["/panel"])
    }else{
      alert("Please Type Your Enail AndPassword");
    }
  }
}
