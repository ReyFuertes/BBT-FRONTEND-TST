import { TestBed } from '@angular/core/testing';
import { BookKeepingPayrollComponent } from './book-keeping-payroll.component';

describe('BookKeepingPayrollComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookKeepingPayrollComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookKeepingPayrollComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
