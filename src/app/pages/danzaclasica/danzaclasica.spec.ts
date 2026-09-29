import { Component } from '@angular/core';
import { CategoriaLayout, Grupo } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-danzaclasica',
  imports: [CategoriaLayout],
  templateUrl: './danzaclasica.html',
  styleUrl: './danzaclasica.css'
})
export class DanzaClasica {
  titulo = 'Danza Clásica';
  subtitulo = '¡La esencia más pura del ballet clásico!';
  imagenBanner = 'banner-danzacl.png';
  imagenLateral = 'danzacl1.png';
  intro = 'Desde los 3 años y SIN LÍMITE DE EDAD.';

  grupos: Grupo[] = [
    // ... aquí los grupos
  ];
}