import { Component } from '@angular/core';

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  team: TeamMember[] = [
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'lorem lorem',
      image: '../../../assets/team_member.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'lorem lorem',
      image: '../../../assets/team_member.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'lorem lorem',
      image: '../../../assets/team_member.png'
    },
    {
      name: 'John Doe',
      position: 'CEO',
      description: 'lorem lorem',
      image: '../../../assets/team_member.png'
    }
  ];

}
