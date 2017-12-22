import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnswerComponent } from './show-answer.component';

describe('ShowAnswerComponent', () => {
  let component: ShowAnswerComponent;
  let fixture: ComponentFixture<ShowAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
