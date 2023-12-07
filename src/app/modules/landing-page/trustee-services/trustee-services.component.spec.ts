import { TestBed } from '@angular/core/testing';
import { TrusteeServicesComponent } from './trustee-services.component';

describe('TrusteeServicesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TrusteeServicesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TrusteeServicesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
