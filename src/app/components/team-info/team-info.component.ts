import {Component, Input, OnInit} from '@angular/core';
import {TeamModel} from '../../model/team.model';
import {MapModel} from '../../model/map.model';
import {MAP_LOGO_PLACEHOLDER, TEAM_LOGO_PLACEHOLDER} from '../../core/constants';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  @Input() team: TeamModel;

  selectedMaps: MapModel[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
