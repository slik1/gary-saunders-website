import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-praise',
  templateUrl: './praise.component.html',
  styleUrls: ['./praise.component.scss']
})
export class PraiseComponent implements OnInit {

  @Input() content: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
