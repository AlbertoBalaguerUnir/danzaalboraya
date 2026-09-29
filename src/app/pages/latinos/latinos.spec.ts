import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Latinos } from './latinos';

describe('Latinos', () => {
  let component: Latinos;
  let fixture: ComponentFixture<Latinos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Latinos],
    }).compileComponents();

    fixture = TestBed.createComponent(Latinos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
