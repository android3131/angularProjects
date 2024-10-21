import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Welcome to Angular!';
  isVisible: boolean = true;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}