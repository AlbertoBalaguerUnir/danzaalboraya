import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bodytonic } from './bodytonic';

describe('Bodytonic', () => {
  let component: Bodytonic;
  let fixture: ComponentFixture<Bodytonic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodytonic],
    }).compileComponents();

    fixture = TestBed.createComponent(Bodytonic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
