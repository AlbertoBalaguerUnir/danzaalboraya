import { Component, OnInit, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  contenidoListo = signal(false);
  private esNavegador: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.esNavegador = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.esNavegador) {
      this.contenidoListo.set(true);
      return;
    }

    setTimeout(() => {
      this.contenidoListo.set(true);
    }, 600);
  }
}