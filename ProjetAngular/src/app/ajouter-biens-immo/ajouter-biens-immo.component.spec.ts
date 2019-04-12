import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBiensImmoComponent } from './ajouter-biens-immo.component';

describe('AjouterBiensImmoComponent', () => {
  let component: AjouterBiensImmoComponent;
  let fixture: ComponentFixture<AjouterBiensImmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBiensImmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBiensImmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
