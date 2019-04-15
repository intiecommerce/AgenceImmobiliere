import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerVisiteComponent } from './supprimer-visite.component';

describe('SupprimerVisiteComponent', () => {
  let component: SupprimerVisiteComponent;
  let fixture: ComponentFixture<SupprimerVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
