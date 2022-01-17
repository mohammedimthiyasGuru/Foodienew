import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-view-info',
  templateUrl: './form-view-info.page.html',
  styleUrls: ['./form-view-info.page.scss'],
})
export class FormViewInfoPage implements OnInit {

  constructor() { }
  public ApproveComments = false;
  public RejectComments = false;
  ApprovedShow()
  {
    this.ApproveComments = !this.ApproveComments;
  }
  ngOnInit() {
  }

  RejectShow(){
    
  }

}
