import { Component } from '@angular/core';
import { teamDetails } from "../../data/team"

export interface TeamMember {
  name: string;
  role: string;
  imageLink: string;
}

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  team: TeamMember[] = teamDetails;

}
