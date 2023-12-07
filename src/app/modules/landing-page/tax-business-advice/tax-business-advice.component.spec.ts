import { TestBed } from '@angular/core/testing';
import { TaxBusinessAdviceComponent } from './tax-business-advice.component';

describe('TaxBusinessAdviceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TaxBusinessAdviceComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TaxBusinessAdviceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
