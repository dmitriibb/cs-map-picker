import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.css']
})
export class MapPickerComponent implements OnInit {

  teamLeft = 'Team A';
  teamRight = 'Team B'

  constructor() { }

  ngOnInit(): void {
  }

}
