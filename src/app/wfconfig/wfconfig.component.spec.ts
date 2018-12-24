import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WFconfigComponent } from './wfconfig.component';

describe('WFconfigComponent', () => {
  let component: WFconfigComponent;
  let fixture: ComponentFixture<WFconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WFconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WFconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
