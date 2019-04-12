import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBiensImmoComponent } from './modifier-biens-immo.component';

describe('ModifierBiensImmoComponent', () => {
  let component: ModifierBiensImmoComponent;
  let fixture: ComponentFixture<ModifierBiensImmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierBiensImmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierBiensImmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
