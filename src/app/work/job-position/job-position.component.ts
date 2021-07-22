import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';



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
  
  isMobile:boolean = false;


  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 480px)')) {
      this.isMobile = true;
      console.log('yup mobile');
    }
  }

}
