import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndepotentComponent } from './indepotent.component';

describe('IndepotentComponent', () => {
  let component: IndepotentComponent;
  let fixture: ComponentFixture<IndepotentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndepotentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndepotentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
