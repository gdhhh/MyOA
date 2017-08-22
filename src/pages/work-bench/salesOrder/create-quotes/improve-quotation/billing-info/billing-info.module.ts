import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillingInfoPage } from './billing-info';

@NgModule({
  declarations: [
    BillingInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BillingInfoPage),
  ],
  exports: [
    BillingInfoPage
  ]
})
export class BillingInfoPageModule {}
