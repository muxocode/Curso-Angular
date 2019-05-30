import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroBindingComponent } from './filtro-binding.component';

describe('FiltroBindingComponent', () => {
  let component: FiltroBindingComponent;
  let fixture: ComponentFixture<FiltroBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
