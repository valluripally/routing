import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { DepartmentListComponent } from '../department-list/department-list.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { DeptDetailComponent } from '../dept-detail/dept-detail.component';
const routeDoc:Routes=[
  {path:'department', component:DepartmentListComponent},
  {path:'employee', component:EmployeeListComponent},
  {path:'departments/:id',component:DeptDetailComponent},
  {path:'',redirectTo:'/department',pathMatch:'full'},
  {path:"**",redirectTo:'/department',pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routeDoc,)
  ],
  exports:[
    RouterModule
  ],
 
})
export class RoutingModuleModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent,DeptDetailComponent];