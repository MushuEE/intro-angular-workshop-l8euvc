import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HousingListComponent } from '../housing-list/housing-list.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HousingListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
