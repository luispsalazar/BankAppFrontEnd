import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  template: `
    <div #dynamicElement>Dynamic Element</div>
    <button (click)="changeId()">Change ID</button>
  `,
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  title = 'Dashboard';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const element = this.el.nativeElement.querySelector('div');
    const uniqueId = 'dynamic-id-' + Math.random().toString(36).substr(2, 9);
    this.renderer.setAttribute(element, 'id', uniqueId); // Assigns a unique ID on initialization
  }

  changeId(): void {
    const element = this.el.nativeElement.querySelector('div');
    const newId = 'new-id-' + Date.now();
    this.renderer.setAttribute(element, 'id', newId); // Changes ID dynamically
  }
}