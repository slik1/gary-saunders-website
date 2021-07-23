import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-praise',
  templateUrl: './praise.component.html',
  styleUrls: ['./praise.component.scss']
})
export class PraiseComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() type: string;
  @Input() person: string;
  @Input() personTitle: string;
  @Input() position: string;

  constructor() { }

  ngOnInit(): void {
  }

}
