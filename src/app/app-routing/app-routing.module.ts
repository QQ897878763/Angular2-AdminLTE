import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component'
import { StarterComponent } from './../starter/starter.component'
import { AdminComponent } from './../admin/admin.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'login', pathMatch: 'full' }, //默认路由
        { path: 'starter', component: StarterComponent },
        { path:'login',component:LoginComponent},
        //{ path: '**', component: PageNotFoundComponent }, //404路由  
      ],
      { enableTracing: true }
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
