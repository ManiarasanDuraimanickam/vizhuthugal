import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WFRequestResetComponent } from './wfrequest-reset.component';

describe('WFRequestResetComponent', () => {
  let component: WFRequestResetComponent;
  let fixture: ComponentFixture<WFRequestResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WFRequestResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WFRequestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
