import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Fader } from './route-animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWorkComponent } from './my-work/my-work.component';

@NgModule({
  declarations: [
    AppComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
