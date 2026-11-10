import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalletAdultos } from './ballet-adultos';

describe('BalletAdultos', () => {
  let component: BalletAdultos;
  let fixture: ComponentFixture<BalletAdultos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalletAdultos],
    }).compileComponents();

    fixture = TestBed.createComponent(BalletAdultos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
