import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bailesocial } from './bailesocial';

describe('Bailesocial', () => {
  let component: Bailesocial;
  let fixture: ComponentFixture<Bailesocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bailesocial],
    }).compileComponents();

    fixture = TestBed.createComponent(Bailesocial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
