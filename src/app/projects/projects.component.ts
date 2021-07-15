import { Component, OnInit } from '@angular/core';
import { projectsData } from '../projectsData';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects = projectsData;

  constructor() { }

  ngOnInit(): void {
  }

}
