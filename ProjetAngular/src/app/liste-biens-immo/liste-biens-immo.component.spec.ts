import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBiensImmoComponent } from './liste-biens-immo.component';

describe('ListeBiensImmoComponent', () => {
  let component: ListeBiensImmoComponent;
  let fixture: ComponentFixture<ListeBiensImmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBiensImmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBiensImmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
