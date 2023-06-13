import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBenefitComponent } from './page-benefit.component';

describe('PageBenefitComponent', () => {
  let component: PageBenefitComponent;
  let fixture: ComponentFixture<PageBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBenefitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
