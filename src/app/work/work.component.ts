import { Component, OnInit } from '@angular/core';
import { jobsData } from '../jobs-data';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public jobs = jobsData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
