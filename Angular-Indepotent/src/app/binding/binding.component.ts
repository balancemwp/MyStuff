import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent implements OnInit {

  talkoffs = [];
  categories = [];
  origTalkoffs = [];

  isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.isHidden = true;

    this.categories = [{id: 1, Text: 'Insurance'},
                       {id: 2, Text: 'Bankrupcy'}];

    this.talkoffs = [{TalkoffTextId: 1, CategoryName: 'Insurance', isSelected: false, Text: 'This is a test', HasOptionalFreeFormText: false, OptionalFreeFormText: '', AssemblyText: []},
    {TalkoffTextId: 2, CategoryName: 'Insurance', isSelected: true, Text: 'Next payment will be 125.00 <->', HasOptionalFreeFormText: true, OptionalFreeFormText: '', AssemblyText: []}];
  }

  changeValue(event: any) {
    this.isHidden = false;

    if (this.origTalkoffs.length > 0) {
      this.talkoffs = this.origTalkoffs;
    } else {
      this.origTalkoffs = this.talkoffs;
    }

    this.talkoffs = this.talkoffs.filter(item => item.TalkoffTextId === event.value);

}

}
