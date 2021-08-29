import { Component, OnInit } from '@angular/core';
import {Directive, HostListener, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isOpened = false;
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
