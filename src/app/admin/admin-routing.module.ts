import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AddSteelBrandComponent } from './add-steel-brand/add-steel-brand.component';
import { AddSteelMatrialCategoryComponent } from './add-steel-matrial-category/add-steel-matrial-category.component';
import { AddSteelShapeComponent } from './add-steel-shape/add-steel-shape.component';
import { AddSteelSizeComponent } from './add-steel-size/add-steel-size.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { DisReportComponent } from './dis-report/dis-report.component';
import { AdminLoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { RetailReportComponent } from './retail-report/retail-report.component';


const routes: Routes = [
  {path:'', component: AdminMainComponent, children: [
      {path: 'addBrands', component: AddSteelBrandComponent},
      {path: 'addSize', component: AddSteelSizeComponent},
      {path: 'addShape', component: AddSteelShapeComponent},
      {path: 'addMaterial', component: AddSteelMatrialCategoryComponent},
      {path: 'retail-report', component: RetailReportComponent},
      {path: 'distributor-report', component: DisReportComponent},
      {path: 'admin-main', component: AdminMainComponent},
      {path: 'reset', component: ResetComponent}
  ]},
  {path: 'login', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
