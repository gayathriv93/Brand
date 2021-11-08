import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NavComponent } from './Component/nav/nav.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { NotificationComponent } from './Pages/notification/notification.component';
import { CatelogueComponent } from './Pages/catelogue/catelogue.component';
import { GsnComponent } from './Pages/gsn/gsn.component';
import { InvoiceComponent } from './Pages/invoice/invoice.component';
import { UpdateComponent } from './Pages/update/update.component';
import { CustomerordersComponent } from './Pages/customerorders/customerorders.component';
import { StoreorderComponent } from './Pages/storeorder/storeorder.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ProfileComponent,
    NotificationComponent,
    CatelogueComponent,
    GsnComponent,
    InvoiceComponent,
    UpdateComponent,
    CustomerordersComponent,
    StoreorderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
