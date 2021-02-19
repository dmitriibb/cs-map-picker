import {MapModel} from './map.model';
import {TeamModel} from './team.model';

export class SessionStateModel {
  maps: MapModel[];
  bestOf: string;
  teamLeft: TeamModel;
  teamRight: TeamModel
  currentTeamIndex: number;
  currentAction: string;
}
