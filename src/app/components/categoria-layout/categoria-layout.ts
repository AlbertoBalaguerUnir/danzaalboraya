import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Grupo {
  titulo: string;
  descripcion: string;
  complemento?: string;
}

export interface ModalidadConIcono {
  icono: string;
  titulo: string;
  descripcion: string;
}

export interface Modalidad {
  titulo: string;
  secciones: { pregunta: string; respuesta: string }[];
}

@Component({
  selector: 'app-categoria-layout',
  imports: [CommonModule],
  templateUrl: './categoria-layout.html',
  styleUrl: './categoria-layout.css'
})
export class CategoriaLayout {
  @Input() titulo: string = '';
  @Input() fuenteTitulo: string = "'Roboto Thin', sans-serif";
  @Input() subtitulo: string = '';
  @Input() imagenBanner: string = '';
  @Input() imagenLateral: string = '';
  @Input() intro: string = '';
  @Input() grupos: Grupo[] = [];
  @Input() columnasGrid: number = 3;   // valor por defecto: 3 columnas

  // NUEVO: título personalizable del bloque de grupos
  @Input() tituloGrupos: string = 'Nuestros grupos:';

  // Modalidades desplegables
  @Input() modalidades: Modalidad[] = [];
  @Input() tituloModalidades: string = '';

  // Modalidades en grid con iconos
  @Input() modalidadesConIcono: ModalidadConIcono[] = [];
}
