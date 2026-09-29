import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bailenovios } from './bailenovios';

describe('Bailenovios', () => {
  let component: Bailenovios;
  let fixture: ComponentFixture<Bailenovios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bailenovios],
    }).compileComponents();

    fixture = TestBed.createComponent(Bailenovios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
