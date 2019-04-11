import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprComponent } from './suppr.component';

describe('SupprComponent', () => {
  let component: SupprComponent;
  let fixture: ComponentFixture<SupprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
