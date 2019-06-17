import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsbuttonComponent } from './hsbutton.component';

describe('HsbuttonComponent', () => {
  let component: HsbuttonComponent;
  let fixture: ComponentFixture<HsbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
