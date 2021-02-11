import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapPickerComponent } from './components/map-picker/map-picker.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import {CardModule} from 'primeng/card';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MapPickerComponent,
    TeamInfoComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    TabViewModule,
    InputTextModule,
    FormsModule,
    MultiSelectModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
