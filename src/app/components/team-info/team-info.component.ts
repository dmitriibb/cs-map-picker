import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  @Input()
  teamName = 'team name';

  constructor() { }

  ngOnInit(): void {
  }

}
