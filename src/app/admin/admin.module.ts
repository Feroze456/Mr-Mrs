import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountantComponent } from './accountant/accountant.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { AgentListComponent } from './agent-list/agent-list.component';


@NgModule({
  declarations: [DashboardComponent, AccountantComponent, AdminListComponent, ManagerListComponent, AgentListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
