import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [{
    institute: 'Reddford House Blue Hills',
    course: 'NSC',
    duration: '2016-2019'
  },
  {
    institute: 'IIE Varsity College Waterfall',
    course: 'IIE Bachelor of Computer and Information Sciences in Application Development',
    duration: '2020-2022'
  },
  {
    institute: 'Oak Academy',
    course: 'Full Android 11 Masterclass Course',
    duration: '2021-2022'
  },
  {
    institute: 'Microsoft',
    course: 'AZ-900',
    duration: '2022'
  },
];

  constructor(){}
  ngOnInit(): void{

  }
}
