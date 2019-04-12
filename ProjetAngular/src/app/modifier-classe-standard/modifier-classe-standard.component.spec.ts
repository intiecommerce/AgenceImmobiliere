import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierClasseStandardComponent } from './modifier-classe-standard.component';

describe('ModifierClasseStandardComponent', () => {
  let component: ModifierClasseStandardComponent;
  let fixture: ComponentFixture<ModifierClasseStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierClasseStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierClasseStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
