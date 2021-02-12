import { Component, OnInit } from '@angular/core';
import {BEST_OF_1, BEST_OF_LIST, MAP_LIST, MAP_LOGO_PLACEHOLDER, TEAM_LOGO_PLACEHOLDER} from '../../core/constants';
import {AppStateService} from '../../service/app-state.service';
import {SessionConfig} from '../../model/session.config.model';
import {TeamModel} from '../../model/team.model';
import {MapModel} from '../../model/map.model';

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

  bestOfAll = [];
  bestOfSelected = BEST_OF_1;

  constructor(private appStateService: AppStateService) { }

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
    team1.logo = TEAM_LOGO_PLACEHOLDER;

    const team2 = new TeamModel()
    team2.name = this.team2;
    team2.logo = TEAM_LOGO_PLACEHOLDER;

    config.team1 = team1;
    config.team2 = team2;

    this.appStateService.setSessionConfig(config);
  }

}
