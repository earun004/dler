import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './login/login.component';
import { AddSteelBrandComponent } from './add-steel-brand/add-steel-brand.component';
import { AddSteelMatrialCategoryComponent } from './add-steel-matrial-category/add-steel-matrial-category.component';
import { AddSteelSizeComponent } from './add-steel-size/add-steel-size.component';
import { AddSteelShapeComponent } from './add-steel-shape/add-steel-shape.component';
import { DisReportComponent } from './dis-report/dis-report.component';
import { ResetComponent } from './reset/reset.component';
import { RetailReportComponent } from './retail-report/retail-report.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AdminLoginComponent, AddSteelBrandComponent, AddSteelMatrialCategoryComponent, AddSteelSizeComponent, AddSteelShapeComponent, DisReportComponent, ResetComponent, RetailReportComponent, AdminMainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
    
  ]
})
export class AdminModule { }
