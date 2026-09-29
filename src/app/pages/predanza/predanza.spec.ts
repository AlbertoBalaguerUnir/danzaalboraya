import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Predanza } from './predanza';

describe('Predanza', () => {
  let component: Predanza;
  let fixture: ComponentFixture<Predanza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Predanza],
    }).compileComponents();

    fixture = TestBed.createComponent(Predanza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
