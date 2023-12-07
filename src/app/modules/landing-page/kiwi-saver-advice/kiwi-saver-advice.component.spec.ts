import { TestBed } from '@angular/core/testing';
import { KiwiSaverAdviceComponent } from './kiwi-saver-advice.component';

describe('KiwiSaverAdviceComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        KiwiSaverAdviceComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(KiwiSaverAdviceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
