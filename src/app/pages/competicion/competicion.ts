import { Component } from '@angular/core';
import { CategoriaLayout, Grupo, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-competicion',
  imports: [CategoriaLayout],
  templateUrl: './competicion.html',
  styleUrl: './competicion.css'
})
export class Competicion {
  titulo = 'Danza Urbana Competiciön';
  subtitulo = 'Entrena, mejora, compite y supera tus límites.';
  imagenBanner = 'banner-comp.jpg';
  intro = '¡Tu esfuerzo también se baila!';
  fuenteTitulo = "'Urban'";
  tituloModalidades = '¿Qué te ofrecemos?';
  columnasGrid = 4;

  grupos: Grupo[] = [];

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'dnzurbana',
      titulo: 'TÉCNICA Y COREOGRAFÍA',
      descripcion: 'Entrenamiento específico de técnica urbana y montaje de coreografías competitivas. Trabajamos la precisión, la energía y la interpretación para destacar en el escenario.'
    },
    {
      icono: 'cup',
      titulo: 'PREPARACIÓN PARA CAMPEONATOS',
      descripcion: 'Preparamos a nuestros bailarines para competir en campeonatos locales y nacionales, con entrenamientos enfocados a la puesta en escena y la competición.'
    },
    {
      icono: 'salute',
      titulo: 'TRABAJO EN EQUIPO Y VALORES',
      descripcion: 'Fomentamos el compañerismo, el respeto y la disciplina. Competir es importante, pero crecer como grupo lo es aún más.'
    },
    {
      icono: 'allages',
      titulo: 'PARA TODAS LAS EDADES Y NIVELES',
      descripcion: 'Contamos con preparación para todas las edades y niveles. Desde iniciación hasta alto rendimiento, cada bailarín tiene su lugar en el equipo.'
    }
  ];
}