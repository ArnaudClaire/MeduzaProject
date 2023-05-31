import { AuthService } from './../../auth.service';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService) { }

  menu = false;
  modal=false;
  opacity = 1;
  isAuth: boolean=false;
  @HostListener('window:scroll', [])
  // ngOnInit() {
  //   this.isAuth=this.authService.connected;
  //   console.log(this.isAuth);
  // }

  onWindowScroll() {
    console.log(this.authService.connected);
    this.isAuth=this.authService.connected;
    const scrollPosition = window.pageYOffset;
    const maxOpacity = -1.95; // opacité maximale que vous souhaitez atteindre
    const minOpacity = 1; // opacité minimale que vous souhaitez atteindre
    const maxScroll = document.body.scrollHeight; // position de défilement maximale à laquelle vous souhaitez atteindre l'opacité maximale
    
    if (scrollPosition < maxScroll) {
      const opacityPercent = (scrollPosition / maxScroll) * 100;
      this.opacity = (opacityPercent / 100) * (maxOpacity - minOpacity) + minOpacity;
    } else {
      this.opacity = maxOpacity;
    }
    if(this.opacity <= 0){
      this.menu = true;
    }
    else{
      this.menu = false;
      this.modal=false;
    }
  }
  
  openModalMenu(){
    this.modal = !this.modal;
  }
}
