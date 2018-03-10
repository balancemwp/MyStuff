import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  question = 'Is this easy?';
  answer = 'Yep!';

  constructor() {console.clear(); }

  dontDoThis() {return [1, 2, 3]; }
}



