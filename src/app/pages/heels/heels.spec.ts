import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Heels } from './heels';

describe('Heels', () => {
  let component: Heels;
  let fixture: ComponentFixture<Heels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heels],
    }).compileComponents();

    fixture = TestBed.createComponent(Heels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
