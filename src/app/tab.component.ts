import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="header">{{tabName}}</div>
    <div class="content">content</div>
  `,
  host: { 'class': 'page' },
  styles: [``],
})
export class TabComponent {
  public tabName = inject(Router).url.split('/')[2];

  ngOnInit() {
    console.log(`TabComponent (${this.tabName}) > ngOnInit`);
  }
}


export default [
  {
    path: '',
    component: TabComponent,
  }
] as Routes;
