import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],

})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'South Side',
      image: "/assets/Projects/south side image.jpg",
      technologies: 'Java, Android, Android Studio, Firebase, Google Maps API',
      url: 'https://github.com/ntokom89/OPSC_South_Side_APPLICATION',
      description: 'The android landmark naviagtion application that allows to mark landmarks as favourites, get directions to the landmark and customise user profile.',
      detailIsDisplayed: false
    },
    {
      title: 'Travel App',
      image: '/assets/Projects/Travel app image.jpg',
      technologies: 'Java, Android, Android Studio, Firebase',
      url: 'https://github.com/ntokom89/Travel__App',
      description: 'This is the travel android app in which the user can take a photo of the place that he/she is adding or use the gallery. The goal can be set by the user of amount of places that the user wants to visit.',
      detailIsDisplayed: false
    },
    {
      title: 'Library Assistant App',
      image: '/assets/Projects/shelf image FINAL (1).jpg',
      technologies: 'C#, ASP.NET, WPF',
      url: 'https://github.com/ntokom89/PROG7321_Task_1',
      description: 'The WPF application allows the user to identify call numbers of the books, sort the books or identify areas in which the call numbers belong to',
      detailIsDisplayed: false
    },
    {
      title: 'Government Blog',
      image: '/assets/Projects/Blog Image.jpg',
      technologies: 'Angular, NodeJs, Typescript, Javascript, MongoDB, APIs',
      url: 'https://github.com/ntokom89/Government-Blog',
      description: 'A very simple government post blog.',
      detailIsDisplayed: false
    }
  ];
  constructor(){}

  ngOnInit(): void {
    
  }

  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.title!=project.title).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }

  click(project: Project) {
    window.location.href = project.url;
  }
}
