import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapPickerComponent } from './components/map-picker/map-picker.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPickerComponent,
    TeamInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
