import { TestBed } from '@angular/core/testing';
import { NewsBlogComponent } from './news-blog.component';

describe('NewsBlogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NewsBlogComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NewsBlogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
