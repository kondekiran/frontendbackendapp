import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  private loggedIn:boolean|undefined; //for canActivate service
  pswArray: Array<any>=[]; // geting the passwords container array from localstorage
  diaplayUName='';

  regCredentials:any; 
  

  constructor(private router:Router) { }

ngOnInit(){
 

}


  

  logoutuser(){
    this.router.navigate(['']);
    sessionStorage.clear();
  }
  canLogin(){ //for CanActivate
    if(!this.loggedIn){
      return false;
    }
    return true;
  }
login(user:User){
  const localstroragedata= localStorage.getItem('userdetailsArray');
  this.pswArray = JSON.parse(localstroragedata || '{}');
  console.log(this.pswArray);
  
  for(var item of this.pswArray){
    if(user.username === item.rgname && user.password ===item.password ){
      this.loggedIn = true;
      this.router.navigate(['homepage']);
      this.diaplayUName = item.rgname;
      sessionStorage.setItem("UName",this.diaplayUName);
    };  
  }
     
}

  
}

