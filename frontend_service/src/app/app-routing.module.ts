import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewPageComponent } from './feature/device_management/pages/overview-page/overview-page.component';
import { DeviceDetailsComponent } from './feature/device_management/pages/device-details/device-details.component';
import { RoomPageComponent } from './feature/room_management/pages/room-page/room-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'device-details/:id', component: DeviceDetailsComponent},
  { path: 'overview', component: OverviewPageComponent},
  { path: 'room', component: RoomPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
