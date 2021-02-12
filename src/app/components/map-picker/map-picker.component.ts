import { Component, OnInit } from '@angular/core';
import {SessionConfig} from '../../model/session.config.model';
import {TeamModel} from '../../model/team.model';
import {MapModel} from '../../model/map.model';
import {MAP_LOGO_PLACEHOLDER, TEAM_LOGO_PLACEHOLDER} from '../../core/constants';
import {AppStateService} from '../../service/app-state.service';

@Component({
  selector: 'map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.css']
})
export class MapPickerComponent implements OnInit {

  teamLeft: TeamModel;
  teamRight: TeamModel;
  maps: MapModel[];

  constructor(private appStateService: AppStateService) {
    this.appStateService.subscribeSessionConfig().subscribe(next => this.setSessionConfig(next));
  }

  ngOnInit(): void {
    this.setSessionConfig(this.placeHolderConfig());
  }

  public setSessionConfig(newConfig: SessionConfig) {
    if (!newConfig) return;

    this.teamLeft = newConfig.team1;
    this.teamRight = newConfig.team2;
    this.maps = newConfig.maps;
  }

  placeHolderConfig(): SessionConfig {
    const config = new SessionConfig();
    config.maps = [];

    const team1 = new TeamModel();
    team1.name = 'team name';
    team1.logo = TEAM_LOGO_PLACEHOLDER;
    config.team1 = team1;

    const team2 = new TeamModel();
    team2.name = 'team name';
    team2.logo = TEAM_LOGO_PLACEHOLDER;
    config.team2 = team2;
    return config;
  }

}
