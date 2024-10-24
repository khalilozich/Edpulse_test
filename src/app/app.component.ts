import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  height!: number;

  constructor() {
    this.updateHeight();
  }

  onResize(event: any) {
    this.updateHeight();
  }

  updateHeight() {
    this.height = window.innerHeight;
  }

}
