import {Component, OnInit, ViewChild} from '@angular/core';
import {
  BEST_OF_1,
  BEST_OF_LIST,
  TEAM_1_LOGO,
  TEAM_2_LOGO,
  TEAM_LOGO_PLACEHOLDER
} from '../../core/constants';
import {AppStateService} from '../../service/app-state.service';
import {SessionConfig} from '../../model/session.config.model';
import {TeamModel} from '../../model/team.model';
import {MapModel} from '../../model/map.model';
import {FileStorageService} from '../../service/file-storage.service';
import {
  ACTIVE_DUTY_MAP_LIST,
  ACTIVE_DUTY_MAP_POOL, CUSTOM_MAP_POOL, HOSTAGES_MAP_LIST,
  HOSTAGES_MAP_POOL,
  MAP_POOL_SET,
  RESERVE_MAP_LIST,
  RESERVE_MAP_POOL
} from '../../core/map-constants';

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

  mapsDropdown = [];
  mapsSelected = [];
  mapPoolDropdown = MAP_POOL_SET;
  mapPoolSelected = ACTIVE_DUTY_MAP_POOL;


  bestOfAll = [];
  bestOfSelected = BEST_OF_1;

  constructor(private appStateService: AppStateService, private fileStorageService: FileStorageService) { }

  ngOnInit(): void {

    this.initMapList();
    this.initBestOfList();

  }

  private initMapList() {
    this.setMapsDropdown(ACTIVE_DUTY_MAP_LIST);
  }

  private initBestOfList() {
    this.bestOfAll = [...BEST_OF_LIST];
  }

  applyConfig(event) {
    const config = new SessionConfig();
    config.maps = [...this.mapsSelected];
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

  mapPoolChanged(event) {
    switch (this.mapPoolSelected) {
      case ACTIVE_DUTY_MAP_POOL:
        this.setMapsDropdown(ACTIVE_DUTY_MAP_LIST);
        break;
      case RESERVE_MAP_POOL:
        this.setMapsDropdown(RESERVE_MAP_LIST);
        break;
      case HOSTAGES_MAP_POOL:
        this.setMapsDropdown(HOSTAGES_MAP_LIST);
        break;
      case CUSTOM_MAP_POOL:
        const element = document.getElementById('mapsInput') as HTMLElement;
        element.click();
        break;
    }
  }

  setMapsDropdown(maps: any[]) {
    this.mapsSelected = [];
    this.mapsDropdown = maps.map(map => {
      const newMap = new MapModel();
      newMap.name = map.name;
      newMap.logo = map.logo;
      return {label: map.name, value: newMap}
    })
  }

  private readFile(event, callback: Function): any {
    const files = event.files;
    if (!files.length) return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.error('Only images are supported.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      const data = reader.result.toString();
      callback(data);
    }
  }

  mapsInputChange(event) {
    this.uploadMapFiles(event);
  }

  private uploadMapFiles(event) {
    const files = event.target.files;
    if (!files.length) return;

    const mapList = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (_event) => {
        const newMap = new MapModel();
        newMap.name = this.truncFileName(file.name);
        newMap.logo = reader.result.toString();
        mapList.push({label:newMap.name, value: newMap});
      }

    }
    this.mapsSelected = [];
    this.mapsDropdown = mapList;
  }

  private truncFileName(fileName: string): string {
    return fileName.substring(0, fileName.lastIndexOf('.'));
  }

}
