import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorCriteriosComponent } from './buscar-por-criterios.component';

describe('BuscarPorCriteriosComponent', () => {
  let component: BuscarPorCriteriosComponent;
  let fixture: ComponentFixture<BuscarPorCriteriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPorCriteriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPorCriteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
