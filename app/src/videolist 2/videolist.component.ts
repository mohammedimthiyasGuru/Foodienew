import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.scss'],
})
export class VideolistComponent implements OnInit {
  slides = 0;
  constructor() { }

  ngOnInit(): void {
  }

  swipeEvent(e){
    let swipeDirection = e.direction;
    console.log('Swipe',swipeDirection);
    //2 = left;
    //4 = right;
    //8 = top;
    //16 = down;
 }

}
