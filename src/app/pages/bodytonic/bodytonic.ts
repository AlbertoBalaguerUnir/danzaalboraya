import { Component } from '@angular/core';
import { CategoriaLayout, Grupo, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-bodytonic',
  imports: [CategoriaLayout],
  templateUrl: './bodytonic.html',
  styleUrl: './bodytonic.css'
})
export class Bodytonic {
  titulo = 'body tonic';
  subtitulo = '¡Fuerza, energía, tu mejor versión!';
  imagenBanner = 'banner-bodytonic.png';
  imagenLateral = '';
  intro = 'Contamos con 6 modalidades';
  tituloModalidades = '';
  fuenteTitulo = "'Bodytonic";

  grupos: Grupo[] = [];

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'bdyt-1',
      titulo: 'BODY PUMP',
      descripcion: 'Clase de entrenamiento de fuerza con barra, discos y música motivadora. Trabajamos todos los grupos musculares con repeticiones controladas. <strong>Mejoramos la tonificación, la resistencia y la postura.</strong>'
    },
    {
      icono: 'bdyt-2',
      titulo: 'STEP',
      descripcion: 'Entrenamiento cardiovascular coreografiado sobre plataforma (step). Subidas, bajadas y giros con movimientos rítmicos al ritmo de la música. <strong>Mejoramos la coordinación, la resistencia y quemamos calorías.</strong>'
    },
    {
      icono: 'bdyt-3',
      titulo: 'AERÓBICOS',
      descripcion: 'Clase clásica de fitness cardiovascular basada en coreografías sencillas y repetitivas al ritmo de música animada. <strong>Ideal para mejorar la resistencia, la coordinación y la salud cardiovascular.</strong>'
    },
    {
      icono: 'bdyt-4',
      titulo: 'HIIT',
      descripcion: 'High Intensity Interval Training. Entrenamiento de alta intensidad basado en intervalos cortos de ejercicio explosivo seguidos de breves descansos. <strong>Maximiza la quema de grasa y mejora la capacidad cardiovascular.</strong>'
    },
    {
      icono: 'bdyt-5',
      titulo: 'INTERVAL TRAINING',
      descripcion: 'Entrenamiento por intervalos que alterna ejercicios de alta y baja intensidad combinando fuerza y cardio. <strong>Mejora el rendimiento deportivo, la resistencia y el consumo calórico.</strong>'
    },
    {
      icono: 'bdyt-6',
      titulo: 'GAP',
      descripcion: 'Entrenamiento localizado de Glúteos, Abdomen y Piernas. Trabajamos con ejercicios específicos de tonificación y fortalecimiento. <strong>Esculpimos estas zonas clave y mejoramos la postura.</strong>'
    }
  ];
}