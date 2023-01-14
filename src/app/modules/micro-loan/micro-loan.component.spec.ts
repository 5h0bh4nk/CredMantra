import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroLoanComponent } from './micro-loan.component';

describe('MicroLoanComponent', () => {
  let component: MicroLoanComponent;
  let fixture: ComponentFixture<MicroLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
