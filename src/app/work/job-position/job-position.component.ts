import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.scss']
})
export class JobPositionComponent implements OnInit {

  @Input() date: string;
  @Input() company: string;
  @Input() description: string;
  @Input() title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
