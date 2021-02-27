import { Component, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-site';

  opened: boolean; 
  showMonster = false;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  @ViewChild('musicPlayer') musicPlayer: ElementRef;

  ngAfterViewInit() {
      console.log(this.musicPlayer.nativeElement);
  }

  changed(){
    console.log('changedddd................');

    this.checked ?  this.musicPlayer.nativeElement.play() : this.musicPlayer.nativeElement.pause();
  }
  
}
