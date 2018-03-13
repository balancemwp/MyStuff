import { Component, OnInit, Input } from '@angular/core';
import { Talkoff } from '../models/talkoff';

@Component({
  selector: 'app-indepotent',
  templateUrl: './indepotent.component.html',
  styleUrls: ['./indepotent.component.css']
})
export class IndepotentComponent implements OnInit {

  question = 'Why should I use Angular 2 instead of just Web Components?';
  answer   = 'Angular 2 has automatic, application-wide change detection.';
  angularVersion = 'latest stable';
  applinks = ['Home', 'About'];
  talkoffs = [];
  appTitle: string;

  changeTitle() {this.appTitle += ' *'; }

  constructor() { }

  ngOnInit() {

    this.talkoffs = [{TalkoffTextId: 1, isSelected: false, Text: 'This is a test', HasOptionalFreeFormText: false, OptionalFreeFormText: '', AssemblyText: []},
                     {TalkoffTextId: 2, isSelected: true, Text: 'Next payment will be 125.00 <->', HasOptionalFreeFormText: true, OptionalFreeFormText: '', AssemblyText: []}];

    const seachString = '<->';
      for (let index = 0; index < this.talkoffs.length; index++) {

        if (this.talkoffs[index].Text.search(seachString) > -1) {
          this.talkoffs[index].HasOptionalFreeFormText = true;
          this.talkoffs[index].AssemblyText = this.talkoffs[index].Text.split(seachString);
        }
        }
    }

}
