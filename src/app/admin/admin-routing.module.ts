import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountantComponent } from './accountant/accountant.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerListComponent } from './manager-list/manager-list.component';

const routes: Routes =  [
{
    
  path: '', 
  component:DashboardComponent,


children: [
//  {
//    path:'adminDashboard', component:DashboardComponent
//  },
{
  path:"accountant",
  component:AccountantComponent,
},
{
  path:"manager-list",
  component:ManagerListComponent,
},
{
  path:"agent-list",
  component:AgentListComponent,
},
{
  path:"admin-list",
  component:AdminListComponent,
}
]
},
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
