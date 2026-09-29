import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Danzaurbana } from './danzaurbana';

describe('Danzaurbana', () => {
  let component: Danzaurbana;
  let fixture: ComponentFixture<Danzaurbana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Danzaurbana],
    }).compileComponents();

    fixture = TestBed.createComponent(Danzaurbana);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
