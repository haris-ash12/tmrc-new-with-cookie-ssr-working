import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersSpecificComponent } from './careers-specific.component';

describe('CareersSpecificComponent', () => {
  let component: CareersSpecificComponent;
  let fixture: ComponentFixture<CareersSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
