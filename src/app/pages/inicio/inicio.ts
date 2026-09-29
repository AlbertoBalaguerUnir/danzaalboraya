import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone
} from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements AfterViewInit, OnDestroy {

  @ViewChild('carrusel', { static: false }) carruselRef!: ElementRef<HTMLDivElement>;

  private arrastrando = false;
  private inicioX = 0;
  private scrollInicial = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const carrusel = this.carruselRef.nativeElement;

    // Arrastre con ratón (para que también se pueda arrastrar en escritorio)
    carrusel.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  ngOnDestroy(): void {
    const carrusel = this.carruselRef?.nativeElement;
    if (carrusel) {
      carrusel.removeEventListener('mousedown', this.onMouseDown);
    }
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  siguiente(): void {
    const carrusel = this.carruselRef.nativeElement;
    const anchoItem = this.obtenerAnchoItem();
    carrusel.scrollBy({ left: anchoItem, behavior: 'smooth' });
  }

  anterior(): void {
    const carrusel = this.carruselRef.nativeElement;
    const anchoItem = this.obtenerAnchoItem();
    carrusel.scrollBy({ left: -anchoItem, behavior: 'smooth' });
  }

  private obtenerAnchoItem(): number {
    const carrusel = this.carruselRef.nativeElement;
    const primerItem = carrusel.querySelector('.carrusel-item') as HTMLElement;
    if (!primerItem) return 300;   // fallback

    const estilos = window.getComputedStyle(carrusel.querySelector('.carrusel-track') as HTMLElement);
    const gap = parseFloat(estilos.gap) || 30;
    return primerItem.offsetWidth + gap;
  }

  // ============================
  // Arrastre con ratón
  // ============================
  private onMouseDown = (e: MouseEvent) => {
    this.arrastrando = true;
    this.inicioX = e.pageX;
    this.scrollInicial = this.carruselRef.nativeElement.scrollLeft;
    this.carruselRef.nativeElement.style.cursor = 'grabbing';
  };

  private onMouseMove = (e: MouseEvent) => {
    if (!this.arrastrando) return;
    const delta = e.pageX - this.inicioX;
    this.carruselRef.nativeElement.scrollLeft = this.scrollInicial - delta;
  };

  private onMouseUp = () => {
    if (this.arrastrando) {
      this.arrastrando = false;
      this.carruselRef.nativeElement.style.cursor = 'grab';
    }
  };
}