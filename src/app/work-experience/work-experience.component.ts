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
       '●	Added the payment system using PayPal, allowing payments for content.',
       '●	Video upload added with video streaming optimised, improving user experience when viewing videos.',
       '●	Adverts added to the web application to get revenue for the web application',
       '●	Modified course content upload which is able to upload videos and files like PowerPoint and pdf.',
       '●	Technologies: Angular with Ionic Framework, Typescript, HTML, CSS, Firebase, REST API.'
       
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
