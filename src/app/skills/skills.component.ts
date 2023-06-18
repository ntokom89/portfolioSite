import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JAVA',
      level: '',
      rating: 100,
    },
    {
      name: 'C#',
      level: '',
      rating: 100,
    },
    {
      name: 'SQL',
      level: '',
      rating: 90,
    },
    {
      name: 'Android',
      level: '',
      rating: 90,
    },
    {
      name: 'NoSQL',
      level: '',
      rating: 85,
    },
    {
      name: 'ASP.NET Core, EF Core, MVC',
      level: '',
      rating: 85,
    },
    {
      name: 'Angular, Angular Material',
      level: '',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: '',
      rating: 80,
    },
    {
      name: 'Typescript/Javascript',
      level: '',
      rating: 70,
    },
    {
      name: 'Ionic Framework',
      level: '',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}