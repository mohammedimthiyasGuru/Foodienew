import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MasterasidePage } from './masteraside/masteraside.page';
import { MasterfooterPage } from './masterfooter/masterfooter.page';
import { MasterheaderPage } from './masterheader/masterheader.page';
import { MasterlayoutPage } from './masterlayout/masterlayout.page';

@NgModule({
  declarations: [
    MasterasidePage,
    MasterfooterPage,
    MasterheaderPage,
    MasterlayoutPage,
   
  ],
  exports: [
    MasterasidePage,
    MasterfooterPage,
    MasterheaderPage,
    MasterlayoutPage,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
