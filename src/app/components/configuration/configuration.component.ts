import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  team1 = '';
  team2 = '';

  mapsAll = [];
  mapsSelected = [];

  constructor() { }

  ngOnInit(): void {

    this.initMapList();

  }

  private initMapList() {
    const maps = [];
    maps.push('Dust II');
    maps.push({label:'Inferno', value: 'Inferno'});
    maps.push({label:'Mirage', value: 'Mirage'});
    maps.push({label:'Nuke', value: 'Nuke'});
    maps.push({label:'Overpass', value: 'Overpass'});
    maps.push({label:'Train', value: 'Train'});
    maps.push({label:'Vertigo', value: 'Vertigo'});
    maps.push({label:'Agency', value: 'Agency'});
    maps.push({label:'Anubis', value: 'Anubis'});
    maps.push({label:'Cache', value: 'Cache'});
    maps.push({label:'Office', value: 'Office'});
    this.mapsAll = maps;
  }
}
