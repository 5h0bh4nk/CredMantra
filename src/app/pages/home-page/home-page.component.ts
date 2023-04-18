import { Component, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { IServices, services } from 'src/app/data/services';
import { IValues, values } from 'src/app/data/values';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router: Router) {}

  values: IValues[] = values;

  ourServices: IServices[] = services;

  goToScreen2() {
    document.getElementById("screen2")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
