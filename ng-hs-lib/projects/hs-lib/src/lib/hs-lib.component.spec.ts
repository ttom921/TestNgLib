import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsLibComponent } from './hs-lib.component';

describe('HsLibComponent', () => {
  let component: HsLibComponent;
  let fixture: ComponentFixture<HsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
