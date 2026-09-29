import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialIcons } from '../social-icons/social-icons';

@Component({
  imports: [RouterLink, SocialIcons],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  menuAbierto = false;

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  @HostListener('document:click', ['$event'])
  onClickFuera(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Si el clic no es dentro del header, cerramos el menú
    if (!target.closest('.header')) {
      this.cerrarMenu();
    }
  }
}