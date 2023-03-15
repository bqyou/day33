import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemsComponent } from './components/add-items.component';
import { ListitemsComponent } from './components/listitems/listitems.component';
import { UserinfoComponent } from './components/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    ListitemsComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
