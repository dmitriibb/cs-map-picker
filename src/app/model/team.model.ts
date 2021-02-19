import {MapModel} from './map.model';
import {TEAM_LOGO_PLACEHOLDER} from '../core/constants';

export class TeamModel {
  name: string;
  logo: string;
  pickedMaps: MapModel[];

  constructor() {
    this.name = 'team name';
    this.logo = TEAM_LOGO_PLACEHOLDER;
    this.pickedMaps = [];
  }

}
