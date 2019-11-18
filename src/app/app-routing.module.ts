import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule, DxTabPanelComponent } from 'devextreme-angular';
import { PolizaComponent } from './pages/alta-poliza/poliza.component';

const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'alta-poliza',
    component: PolizaComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DxTabPanelComponent],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent, PolizaComponent]
})
export class AppRoutingModule { }
