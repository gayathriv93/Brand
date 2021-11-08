import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { profile } from 'console';
// import { pathToFileURL } from 'url';
import { CatelogueComponent } from './Pages/catelogue/catelogue.component';
import { CustomerordersComponent } from './Pages/customerorders/customerorders.component';
import { GsnComponent } from './Pages/gsn/gsn.component';
import { InvoiceComponent } from './Pages/invoice/invoice.component';
import { NotificationComponent } from './Pages/notification/notification.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { StoreorderComponent } from './Pages/storeorder/storeorder.component';
import { UpdateComponent } from './Pages/update/update.component';
// import { LoginComponent } from './Popups/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'customerorders', component: CustomerordersComponent },
  { path: 'storeorder', component: StoreorderComponent },
  { path: 'catelogue', component: CatelogueComponent },
  { path: 'gsn', component: GsnComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'invoice', component: InvoiceComponent },


  { path: '**', component: ProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
