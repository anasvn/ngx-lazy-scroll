import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxLazyScrollModule } from 'ngx-lazy-scroll';
@NgModule({
  imports:      [ BrowserModule, FormsModule,NgxLazyScrollModule ],
  declarations: [ 
                AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
