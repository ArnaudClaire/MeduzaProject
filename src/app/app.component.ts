import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authServ: AuthService){}
  title = 'MeduzaProject';
  isAuth: boolean = false;
  auth:any;
  ngOnChanges() {
    this.auth=this.authServ.isAuth();
    console.log(this.auth);
    console.log(this.auth.currentUser);
  }
}
