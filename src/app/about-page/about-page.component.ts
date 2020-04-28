import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],

})
export class AboutPageComponent implements OnInit {
  images = [
    'src/assets/img/old-memories.jpg',
    'src/assets/img/new-memories.jpg',
    'src/assets/img/camera/jpg'
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
