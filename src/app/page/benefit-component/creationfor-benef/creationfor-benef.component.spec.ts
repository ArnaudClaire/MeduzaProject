import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationforBenefComponent } from './creationfor-benef.component';

describe('CreationforBenefComponent', () => {
  let component: CreationforBenefComponent;
  let fixture: ComponentFixture<CreationforBenefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationforBenefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationforBenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
