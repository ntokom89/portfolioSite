import { Component, HostBinding, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent implements OnInit {
  @HostBinding('class.pc') pcMode = false;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    
  }
}
