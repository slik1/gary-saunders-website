import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() description: string;
  @Input() skills: string;
  @Input() link: string;
  @Input() images: Array<object>;
  @Input() layout: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
