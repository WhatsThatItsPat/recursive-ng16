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
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      outline: 3px purple solid;
    }
    .header {
      display: flex;
      height: 40px;
      outline: 3px green solid;
      justify-content: center;
      align-items: center;
    }
    .content {
      outline: 3px yellow solid;
      flex-grow: 1;
    }
  `],
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