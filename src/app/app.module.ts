import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DropdownTempComponent } from './dropdown-temp/dropdown-temp.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, DropdownTempComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}