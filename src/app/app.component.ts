import { Component, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'my-site';

  opened: boolean; 
  showMonster = false;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  @ViewChild('musicPlayer') musicPlayer: ElementRef;


  scrollToSection(id:string){

    const el: HTMLElement|null = document.getElementById(id);

    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }

    //document.getElementById(el).scrollIntoView({ behavior: "smooth"});
  }

  ngOnInit(){
    
  }

  ngAfterViewInit() {
      console.log(this.musicPlayer.nativeElement);      
  }

  changed(){
    console.log('changedddd................');

    this.checked ?  this.musicPlayer.nativeElement.play() : this.musicPlayer.nativeElement.pause();
  }
  
}
