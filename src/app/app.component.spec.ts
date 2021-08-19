import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// What comp you are taking up for Testing 
// group of specs (often called a suite).
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // test case / test spec
  it('should create the app', () => {

    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // Taking the App Comp class
    expect(app).toBeTruthy();
  });

  // test spec
  it(`should have as title 'unit-testing-amdocs-aug2021'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // Taking the App Comp class
    expect(app.title).toEqual('Welcome');
  });

  // test spec
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement; // Taking the App Comp HTML
    expect(compiled.querySelector('.content span').textContent).toContain('Welcome app is running!');
  });

  it('should add properly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // Taking the App Comp class
    expect(app.add(10, 20)).toEqual(30);
  });
});
