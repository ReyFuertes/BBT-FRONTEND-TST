import { TestBed } from '@angular/core/testing';
import { EnsuringPeopleComponent } from './ensuring-people.component';

describe('EnsuringPeopleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EnsuringPeopleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EnsuringPeopleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
