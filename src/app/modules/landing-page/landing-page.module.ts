import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookKeepingPayrollComponent } from './book-keeping-payroll/book-keeping-payroll.component';
import { FinancialGstComponent } from './financial-gst/financial-gst.component';
import { KiwiSaverAdviceComponent } from './kiwi-saver-advice/kiwi-saver-advice.component';
import { EnsuringPeopleComponent } from './ensuring-people/ensuring-people.component';
import { TaxBusinessAdviceComponent } from './tax-business-advice/tax-business-advice.component';
import { TrusteeServicesComponent } from './trustee-services/trustee-services.component';
import { MortgageAdviceComponent } from './mortgage-advice/mortgage-advice.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'book-keeping-payroll',
        component: BookKeepingPayrollComponent
      },
      {
        path: 'financial-gst',
        component: FinancialGstComponent
      },
      {
        path: 'kiwisaver-advice',
        component: KiwiSaverAdviceComponent
      },
      {
        path: 'insuring-people',
        component: EnsuringPeopleComponent
      },
      {
        path: 'tax-business-advice',
        component: TaxBusinessAdviceComponent
      },
      {
        path: 'trustee-services',
        component: TrusteeServicesComponent
      },
      {
        path: 'mortgage-advice',
        component: MortgageAdviceComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    LandingPageComponent,
    BookKeepingPayrollComponent,
    FinancialGstComponent,
    KiwiSaverAdviceComponent,
    EnsuringPeopleComponent,
    TaxBusinessAdviceComponent,
    TrusteeServicesComponent,
    MortgageAdviceComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class LandingPageModule {}