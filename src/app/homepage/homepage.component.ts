import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../authService/login.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  displayUser = sessionStorage.getItem("UName");
  constructor(private serviece:LoginService,private rtr:Router){}

  logoutpage(){
    this.serviece.logoutuser();
  }
  gotodashboard(){
    this.rtr.navigate(['dashboard']);
  }


  imageObject = [{
    video: 'https://www.youtube.com/watch?v=BiTeY6CkSbQ',
    alt: 'youtube video'
}, {
    video: 'https://www.youtube.com/watch?v=3aH3iBp5fD0',
    alt: 'youtube video'
}, {
    video: 'https://www.youtube.com/watch?v=LXRJsPefnYo',
    alt: 'youtube video'
      }];
}
