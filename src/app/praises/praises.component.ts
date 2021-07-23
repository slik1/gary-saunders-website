import { Component, OnInit } from '@angular/core';
import { praisesData } from '../praisesData';
@Component({
  selector: 'app-praises',
  templateUrl: './praises.component.html',
  styleUrls: ['./praises.component.scss']
})
export class PraisesComponent implements OnInit {
  public praises = praisesData;
  constructor() { }

  ngOnInit(): void {
  }

}
