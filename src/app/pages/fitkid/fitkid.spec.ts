import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fitkid } from './fitkid';

describe('Fitkid', () => {
  let component: Fitkid;
  let fixture: ComponentFixture<Fitkid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fitkid],
    }).compileComponents();

    fixture = TestBed.createComponent(Fitkid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
