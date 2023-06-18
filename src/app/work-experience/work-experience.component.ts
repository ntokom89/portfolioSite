import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Developer',
      company: 'Alchemy Asset Management',
      duration: 'Jan 2023 - Now',
      description: [
       '●	I work with a team to complete the education web application that started development by the previous team.',
       '●	The payment system was added, allowing payments for content.',
       '●	Video upload added with video streaming optimised, improving user experience when viewing videos.',
       '●	Adverts added to the web application.',
       '●	Admin is now able to add a variety of course content like videos and files.',
       '●	Technologies: Angular with Ionic Framework, Typescript, HTML, CSS, Firebase, REST API.'
       
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
