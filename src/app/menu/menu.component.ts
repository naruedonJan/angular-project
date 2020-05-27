import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  checkmenu = 0;
  constructor() { }

  ngOnInit() {
  }

  menuClick(){
    let menu = document.getElementById('menu-icon');
    let menucon = document.getElementById('menu-con');
    if(this.checkmenu == 0){
      menu.classList.remove('fa-bars');
      menu.classList.add('fa-times');
      menu.style.animation = "fade_in 0.5s forwards ease";
      menucon.style.animation = "openmenu 0.5s forwards ease";
      this.checkmenu = 1;

    }else if(this.checkmenu == 1){
      menu.classList.add('fa-bars');
      menu.classList.remove('fa-times');
      menu.style.animation = "fade_out 0.5s forwards ease";
      menucon.style.animation = "closemenu 0.5s forwards ease";
      this.checkmenu = 0;
    }

  }
}
