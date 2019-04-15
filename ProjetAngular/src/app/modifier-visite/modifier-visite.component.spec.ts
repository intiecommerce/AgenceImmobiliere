import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVisiteComponent } from './modifier-visite.component';

describe('ModifierVisiteComponent', () => {
  let component: ModifierVisiteComponent;
  let fixture: ComponentFixture<ModifierVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
