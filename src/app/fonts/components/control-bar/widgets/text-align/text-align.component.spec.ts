import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlignComponent } from './text-align.component';

describe('TextAlignComponent', () => {
  let component: TextAlignComponent;
  let fixture: ComponentFixture<TextAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
