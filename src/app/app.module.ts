import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AnimateModule } from '@wizdm/animate';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './projects/project/project.component';
import { JobPositionComponent } from './work/job-position/job-position.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { PraisesComponent } from './praises/praises.component';
import { PraiseComponent } from './praises/praise/praise.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    WorkComponent,
    ProjectComponent,
    JobPositionComponent,
    ContactComponent,
    PraisesComponent,
    PraiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    IvyCarouselModule,
    AnimateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
