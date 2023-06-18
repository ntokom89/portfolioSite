import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
  

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    BanerComponent,
    PersonalInformationComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
