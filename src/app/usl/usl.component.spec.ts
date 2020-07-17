import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UslComponent } from './usl.component';

describe('UslComponent', () => {
  let component: UslComponent;
  let fixture: ComponentFixture<UslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
