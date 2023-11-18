import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesPage } from './companies.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage
  },
  {
    path: '2',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesPageRoutingModule {}
