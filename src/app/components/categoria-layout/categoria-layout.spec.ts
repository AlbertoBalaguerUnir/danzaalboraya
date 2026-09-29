import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaLayout } from './categoria-layout';

describe('CategoriaLayout', () => {
  let component: CategoriaLayout;
  let fixture: ComponentFixture<CategoriaLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
