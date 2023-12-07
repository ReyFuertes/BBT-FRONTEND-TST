import { TestBed } from '@angular/core/testing';
import { FinancialGstComponent } from './financial-gst.component';

describe('FinancialGstComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FinancialGstComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FinancialGstComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
