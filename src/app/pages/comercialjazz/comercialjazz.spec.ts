import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comercialjazz } from './comercialjazz';

describe('Comercialjazz', () => {
  let component: Comercialjazz;
  let fixture: ComponentFixture<Comercialjazz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comercialjazz],
    }).compileComponents();

    fixture = TestBed.createComponent(Comercialjazz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
