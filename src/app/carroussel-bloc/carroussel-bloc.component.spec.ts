import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousselBlocComponent } from './carroussel-bloc.component';

describe('CarrousselBlocComponent', () => {
  let component: CarrousselBlocComponent;
  let fixture: ComponentFixture<CarrousselBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrousselBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrousselBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
