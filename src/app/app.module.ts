import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularSelectModule } from 'dist/angular-select';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
