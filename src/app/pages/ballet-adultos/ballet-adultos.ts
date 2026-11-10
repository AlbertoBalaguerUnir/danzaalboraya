import { Component } from '@angular/core';
import { CategoriaLayout, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-ballet-adultos',
  imports: [CategoriaLayout],
  templateUrl: './ballet-adultos.html',
  styleUrl: './ballet-adultos.css'
})
export class BalletAdultos {
  titulo = 'Ballet adultos';
  fuenteTitulo = "'Cardenio'";
  subtitulo = 'Elegancia, técnica y bienestar';
  imagenBanner = 'banner-balletadultos.jpg'; 
  intro = 'No hace falta experiencia previa. Una disciplina que combina la técnica clásica con un enfoque adaptado al adulto, para que disfrutes del ballet a cualquier edad y nivel. Porque nunca es tarde para hacer lo que te hace bien.';
  
  tituloModalidades = 'Beneficios del Ballet:';
  columnasGrid = 4; 

  grupos: any[] = []; // Vacío

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'bdyt-3', 
      titulo: 'POSTURA Y ALINEACIÓN',
      descripcion: 'Mejora la postura y la alineación corporal.'
    },
    {
      icono: 'brazo',
      titulo: 'FUERZA Y MOVILIDAD',
      descripcion: 'Aumenta la fuerza, la flexibilidad y la movilidad.'
    },
    {
      icono: 'crzn',
      titulo: 'MENOS ESTRÉS',
      descripcion: 'Reduce el estrés y aporta bienestar.'
    },
    {
      icono: 'loto',
      titulo: 'CONEXIÓN',
      descripcion: 'Te ayuda a conectar con tu cuerpo y contigo misma/o.'
    }
  ];
}