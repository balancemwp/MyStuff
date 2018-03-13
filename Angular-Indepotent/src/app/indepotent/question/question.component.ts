import { Component, OnInit, Input } from '@angular/core';
import { Talkoff } from '../../models/talkoff';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Input() links: string[];
  @Input() talkoffs: Talkoff[];

  constructor() { }

  ngOnInit() { }

  checkbox_Change(event: any, talkoff: Talkoff) {

    console.log('changed', event.checked );
    console.log('changed', talkoff.IsSelected );

    // clear the input when the checkbox is deselected
    if (event.checked === false && talkoff.OptionalFreeFormText.length > 0) {
      talkoff.OptionalFreeFormText = '';
      talkoff.FormattedText = '';
      talkoff.IsSelected = false;

    } else {
      if (talkoff.OptionalFreeFormText.length > 0) {
        talkoff.FormattedText = talkoff.AssemblyText[0] + talkoff.OptionalFreeFormText + talkoff.AssemblyText[1];
        console.log('Change: FormattedText', talkoff.FormattedText);
      } else {
        talkoff.FormattedText = talkoff.Text;
      }
    }
  }

  onKey(talkoff: Talkoff) {

    if (talkoff.OptionalFreeFormText.length > 0 && !talkoff.IsSelected) {
      console.log('onKey', talkoff.IsSelected);
      talkoff.IsSelected = true;
    }

  }

  onblur(talkoff: Talkoff) {

    console.log('Blured Pre-If: FormattedText', talkoff.FormattedText);
    console.log('Blur: FormattedText', talkoff.AssemblyText[0] + talkoff.OptionalFreeFormText + talkoff.AssemblyText[1]);

    if (talkoff.OptionalFreeFormText.length > 0 ) {
       talkoff.HasOptionalFreeFormText = true;
      talkoff.FormattedText = talkoff.AssemblyText[0] + talkoff.OptionalFreeFormText + talkoff.AssemblyText[1];
      console.log('Blur: FormattedText', talkoff.FormattedText);
    }

  }
}
