import { Component, OnInit } from '@angular/core';
import {
  BEST_OF_1,
  BEST_OF_LIST,
  MAP_LIST,
  MAP_LOGO_PLACEHOLDER,
  TEAM_1_LOGO,
  TEAM_2_LOGO,
  TEAM_LOGO_PLACEHOLDER
} from '../../core/constants';
import {AppStateService} from '../../service/app-state.service';
import {SessionConfig} from '../../model/session.config.model';
import {TeamModel} from '../../model/team.model';
import {MapModel} from '../../model/map.model';
import {FileStorageService} from '../../service/file-storage.service';

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  team1 = '';
  team2 = '';

  team1Logo = TEAM_LOGO_PLACEHOLDER;
  team2Logo = TEAM_LOGO_PLACEHOLDER;

  mapsAll = [];
  mapsSelected = [];

  bestOfAll = [];
  bestOfSelected = BEST_OF_1;

  constructor(private appStateService: AppStateService, private fileStorageService: FileStorageService) { }

  ngOnInit(): void {

    this.initMapList();
    this.initBestOfList();

  }

  private initMapList() {
    this.mapsAll = [...MAP_LIST];
  }

  private initBestOfList() {
    this.bestOfAll = [...BEST_OF_LIST];
  }

  applyConfig(event) {
    const maps = this.mapsSelected.map(m => {
      const map = new MapModel();
      map.name = m;
      map.logo = MAP_LOGO_PLACEHOLDER;
      return map;
    })
    const config = new SessionConfig();
    config.maps = maps;
    config.bestOf = this.bestOfSelected;

    const team1 = new TeamModel()
    team1.name = this.team1;
    team1.logo = this.team1Logo;

    const team2 = new TeamModel()
    team2.name = this.team2;
    team2.logo = this.team2Logo;

    config.team1 = team1;
    config.team2 = team2;

    this.appStateService.setSessionConfig(config);
  }

  team1LogoInput(event) {
    this.readFile(event.target, (data) => {
      this.team1Logo = data;
      this.fileStorageService.put(TEAM_1_LOGO, data);
    });
  }

  team2LogoInput(event) {
    this.readFile(event.target, (data) => {
      this.team2Logo = data;
      this.fileStorageService.put(TEAM_2_LOGO, data);
    });
  }

  onInputChange(event) {
    console.log("eee");
  }

  private readFile(event, callback: Function): any {
    const files = event.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.error('Only images are supported.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      const url = reader.result;
      callback(url.toString());
    }
  }

}
