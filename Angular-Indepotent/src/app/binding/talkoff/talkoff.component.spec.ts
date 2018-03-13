import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkoffComponent } from './talkoff.component';

describe('TalkoffComponent', () => {
  let component: TalkoffComponent;
  let fixture: ComponentFixture<TalkoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
