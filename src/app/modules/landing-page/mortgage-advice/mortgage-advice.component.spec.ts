import { TestBed } from '@angular/core/testing';
import { MortgageAdviceComponent } from './mortgage-advice.component';

describe('MortgageAdviceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MortgageAdviceComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MortgageAdviceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
