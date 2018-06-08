import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetterComponent } from './resetter.component';

describe('ResetterComponent', () => {
  let component: ResetterComponent;
  let fixture: ComponentFixture<ResetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
