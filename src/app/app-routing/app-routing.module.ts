import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component'
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component'
import { StarterComponent } from './../starter/starter.component'
import { AdminComponent } from './../admin/admin.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'starter', pathMatch: 'full' }, //默认路由
        { path: 'starter', component: StarterComponent },
        //{ path: '**', component: PageNotFoundComponent }, //404路由  
      ],
      { enableTracing: true }
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
