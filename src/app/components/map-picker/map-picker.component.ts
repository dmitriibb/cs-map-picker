import { Component, OnInit } from '@angular/core';
import {SessionConfig} from '../../model/session.config.model';
import {TeamModel} from '../../model/team.model';
import {MapModel} from '../../model/map.model';
import {
  ACTION_BAN,
  ACTION_PICK,
  BEST_OF_1, BEST_OF_3,
  BEST_OF_5,
  MAP_LOGO_PLACEHOLDER,
  TEAM_LOGO_PLACEHOLDER
} from '../../core/constants';
import {AppStateService} from '../../service/app-state.service';
import {SessionStateModel} from '../../model/session-state.model';
import _ from 'lodash';


@Component({
  selector: 'map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.css']
})
export class MapPickerComponent implements OnInit {

  teamLeft: TeamModel;
  teamRight: TeamModel;
  maps: MapModel[];
  bestOf = BEST_OF_1;
  currentTeamIndex = 0;
  currentTeam: TeamModel;
  currentAction = ACTION_PICK;
  actionRepeated = false;

  currentStateIndex = 0;
  statesHistory: SessionStateModel[];

  constructor(private appStateService: AppStateService) {
    this.appStateService.subscribeSessionConfig().subscribe(next => this.setSessionConfig(next));
  }

  ngOnInit(): void {
    this.setSessionConfig(this.placeHolderConfig());
  }

  public setSessionConfig(newConfig: SessionConfig) {
    if (!newConfig) return;

    this.teamLeft = _.cloneDeep(newConfig.team1);
    this.teamRight = _.cloneDeep(newConfig.team2);
    this.maps = _.cloneDeep(newConfig.maps);
    this.bestOf = newConfig.bestOf;

    if (newConfig.bestOf === BEST_OF_1 || newConfig.bestOf === BEST_OF_3) {
      this.currentAction = ACTION_BAN;
    } else {
      this.currentAction = ACTION_PICK;
    }

    this.actionRepeated = false;
    this.currentTeamIndex = 0;
    this.setNextTeam();

    this.currentStateIndex = 0;
    this.statesHistory = [];
  }

  mapCardClick(event, map: MapModel) {
    if (map.picked || map.banned)
      return;

    this.saveCurrentState();
    if (this.currentAction === ACTION_PICK) {
      this.pickMap(map);
    } else {
      this.banMap(map);
    }
    this.setNextState();
  }

  private pickMap(map: MapModel) {
    map.picked = true;
    this.currentTeam.pickedMaps.push(map);
  }

  private banMap(map: MapModel) {
    map.banned = true;
  }

  private saveCurrentState() {
    const state = new SessionStateModel();
    state.bestOf = this.bestOf;
    state.maps = _.cloneDeep(this.maps);
    state.currentTeamIndex = this.currentTeamIndex;
    state.currentAction = this.currentAction;
    state.teamLeft = _.cloneDeep(this.teamLeft);
    state.teamRight = _.cloneDeep(this.teamRight);

    this.statesHistory.push(state);
    this.currentStateIndex++;
  }

  private setNextState() {
    this.setNextTeam();
    this.setNextAction();
  }

  private setNextAction() {
    if (this.bestOf === BEST_OF_1) {
      this.currentAction = ACTION_BAN;
      return;
    }
    if (this.actionRepeated) {
      if (this.currentAction === ACTION_PICK)
        this.currentAction = ACTION_BAN
      else
        this.currentAction = ACTION_PICK;
    }
    this.actionRepeated = !this.actionRepeated;
  }

  private setNextTeam() {
    if (this.currentTeamIndex === 1) {
      this.currentTeamIndex = 2;
      this.currentTeam = this.teamRight;
    } else {
      this.currentTeamIndex = 1;
      this.currentTeam = this.teamLeft;
    }
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
