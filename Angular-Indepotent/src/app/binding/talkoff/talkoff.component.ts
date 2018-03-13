import { Component, OnInit, Input } from '@angular/core';
import { Talkoff } from '../../models/talkoff';

@Component({
  selector: 'app-talkoff',
  templateUrl: './talkoff.component.html',
  styleUrls: ['./talkoff.component.css']
})
export class TalkoffComponent implements OnInit {

  @Input() talkOffs: Talkoff[];

  constructor() { }

  ngOnInit() {
  }

  checkbox_Change(event: any, talkoff: Talkoff) {

    // clear the input when the checkbox is deselected
    if (event.checked === false && talkoff.OptionalFreeFormText.length > 0) {
      talkoff.OptionalFreeFormText = '';
      talkoff.FormattedText = '';
      talkoff.IsSelected = false;

    } else {
      if (talkoff.OptionalFreeFormText.length > 0) {
        talkoff.FormattedText = talkoff.AssemblyText[0] + talkoff.OptionalFreeFormText + talkoff.AssemblyText[1];
      } else {
        talkoff.FormattedText = talkoff.Text;
      }
    }
  }

  onKey(talkoff: Talkoff) {

    if (talkoff.OptionalFreeFormText.length > 0 && !talkoff.IsSelected) {
      talkoff.IsSelected = true;
    }

  }

  onblur(talkoff: Talkoff) {

    if (talkoff.OptionalFreeFormText.length > 0 ) {
       talkoff.HasOptionalFreeFormText = true;
      talkoff.FormattedText = talkoff.AssemblyText[0] + talkoff.OptionalFreeFormText + talkoff.AssemblyText[1];

    }

  }

}
