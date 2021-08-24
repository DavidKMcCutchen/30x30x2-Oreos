import { Component } from '@angular/core';

@Component({
  selector: 'oreo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Oreos';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'oreos', icon: 'view_list', title: 'Oreos'}
  ]
}
