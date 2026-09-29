import { Component } from '@angular/core';
import { CategoriaLayout, Grupo, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-latinos',
  imports: [CategoriaLayout],
  templateUrl: './latinos.html',
  styleUrl: './latinos.css'
})
export class Latinos {
  titulo = 'Bailes latinos, baile en línea y CUBBÁ';
  subtitulo = '¡Ritmo, energía y buena vibra!';
  tituloGrupos = '¿Por qué apuntarte a Bailes Latinos?';
  imagenBanner = 'banner-latin.png';
  intro = 'Salsa, Bachata, Merengue...';
  fuenteTitulo = "'Casual'";

  grupos: Grupo[] = [
    {
      titulo: 'PARA TODOS LOS PERFILES',
      descripcion: 'No importa tu edad, tu nivel o tu experiencia previa. Las clases están pensadas para que cualquier persona pueda disfrutar desde el primer día.'
    },
    {
      titulo: 'VEN SOLO/A, SIN PAREJA, ¡SIN EXPERIENCIA!',
      descripcion: 'No necesitas venir acompañado/a ni tener conocimientos previos. Solo ganas de pasarlo bien y mover el cuerpo al ritmo de la música.'
    },
    {
      titulo: 'COREOGRAFÍAS SENCILLAS Y MUCHA DIVERSIÓN',
      descripcion: 'Aprenderás pasos y coreografías fáciles de seguir, siempre con un ambiente distendido y divertido.'
    },
    {
      titulo: '¡LA MEJOR FORMA DE MANTENERTE ACTIVA Y HACER NUEVAS AMISTADES!',
      descripcion: 'Bailar es ejercicio, es diversión y es socializar. Conocerás gente con tus mismas ganas de disfrutar. ¡Anímate!'
    }
  ];

  modalidadesConIcono: ModalidadConIcono[] = [];
}