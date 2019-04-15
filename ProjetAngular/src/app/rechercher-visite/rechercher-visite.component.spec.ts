import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherVisiteComponent } from './rechercher-visite.component';

describe('RechercherVisiteComponent', () => {
  let component: RechercherVisiteComponent;
  let fixture: ComponentFixture<RechercherVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
