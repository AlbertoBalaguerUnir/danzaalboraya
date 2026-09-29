import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Competicion } from './competicion';

describe('Competicion', () => {
  let component: Competicion;
  let fixture: ComponentFixture<Competicion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Competicion],
    }).compileComponents();

    fixture = TestBed.createComponent(Competicion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
