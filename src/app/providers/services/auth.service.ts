import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }
  // login method
  // login(email : any, password : any) {
  //   this.fireauth.signInWithEmailAndPassword(email,password).then( (res:any) => {
  //       localStorage.setItem('token','true');

  //       if(res.user.emailVerified == true) {
  //         this.router.navigate(['/panel']);
  //       } else {
  //         this.router.navigate(['/errorpage']);
  //       }

  //   }, (err:any) => {
  //       alert(err.message);
  //       this.router.navigate(['/login']);
  //   })
  // }


    // // sign out
    // logout() {
    //   this.fireauth.signOut().then( () => {
    //     localStorage.removeItem('token');
    //     this.router.navigate(['/login']);
    //   }, (err:any) => {
    //     alert(err.message);
    //   })
    // }

}
