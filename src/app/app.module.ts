import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NavComponent } from './nav/nav.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute: Routes=[
  {
    path:"",
    component:ViewComponent
  },
  {
    path:"add",
    component:AddComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
