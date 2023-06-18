import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
 myData: string[][] = [
  ['Name', 'Ntokozo Mweli'],
  ['DOB', '02/01/2002'],
  ['Education', 'IIE Bachelor of Computer Application'],
  ['Interests', 'Video Games, Coding, Reading'],];

  aboutMe: string[] = [
    'Hi, I am a capable software developer as a passion .',
    'Been programming for 9 years since high school starting with Java.',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as software developer at Alchemy Asset Management',
  ];


  constructor() {

  }

  ngOnInit(): void {
    
  }
}
