import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  navigate() {
    this.router.navigateByUrl('/loginpage');
  }

  navigate1() {
    this.router.navigateByUrl('/home');
  }


}
