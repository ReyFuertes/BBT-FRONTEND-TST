import { TestBed } from '@angular/core/testing';
import { SignupNewsletterComponent } from './signup-newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SignupNewsletterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SignupNewsletterComponent
      ],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SignupNewsletterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
