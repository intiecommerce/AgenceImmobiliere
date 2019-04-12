import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProprietaireComponent } from './modifier-proprietaire.component';

describe('ModifierProprietaireComponent', () => {
  let component: ModifierProprietaireComponent;
  let fixture: ComponentFixture<ModifierProprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
