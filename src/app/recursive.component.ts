import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-recursive',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="header">
      <button class="back" routerLink="../">< Back</button>
      <div class="title">recursive {{recursiveCount}}</div>
    </div>
    <div class="content">
      <p>This is recursive page {{recursiveCount | json}}.</p>
      <button routerLink="recursive">recursive {{recursiveCount + 1}}</button>
    </div>
  `,
  host: { 'class': 'page' },
  styles: [],
})
export class RecursiveComponent {
  public recursiveCount = inject(Router).url.match(/recursive/g)?.length || 0;
}


export default [
  {
    path: '',
    component: RecursiveComponent
  },
  {
    path: 'recursive',
    loadChildren: () => import('./recursive.component'),
  }
] as Routes;
