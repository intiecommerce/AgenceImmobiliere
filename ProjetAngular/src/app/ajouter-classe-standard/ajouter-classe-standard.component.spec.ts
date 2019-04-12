import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClasseStandardComponent } from './ajouter-classe-standard.component';

describe('AjouterClasseStandardComponent', () => {
  let component: AjouterClasseStandardComponent;
  let fixture: ComponentFixture<AjouterClasseStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterClasseStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterClasseStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
