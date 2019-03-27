import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosComponent } from './ultimos.component';

describe('UltimosComponent', () => {
  let component: UltimosComponent;
  let fixture: ComponentFixture<UltimosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
