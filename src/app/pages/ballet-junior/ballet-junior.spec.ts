import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalletJunior } from './ballet-junior';

describe('BalletJunior', () => {
  let component: BalletJunior;
  let fixture: ComponentFixture<BalletJunior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalletJunior],
    }).compileComponents();

    fixture = TestBed.createComponent(BalletJunior);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
