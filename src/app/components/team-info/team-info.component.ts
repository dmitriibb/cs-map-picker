import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  @Input() teamName = 'team name';

  @Input() selectedMaps = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedMaps.push({name: 'map name', logo: 'assets/maps/placeholder_map.png'});
  }

}
