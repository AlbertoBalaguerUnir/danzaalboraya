import { Component } from '@angular/core';
import { CategoriaLayout, Grupo, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-fitkid',
  imports: [CategoriaLayout],
  templateUrl: './fitkid.html',
  styleUrl: './fitkid.css'
})
export class Fitkid {
  titulo = 'FITKID';
  subtitulo = '¡Baile deportivo con energía!';
  imagenBanner = 'banner-fitkid.png';
  intro = 'Baile deportivo regulado por la FEBD, con posibilidad de competir, en el que trabajamos en torno a cuatro pilares fundamentales:';
  fuenteTitulo = "'kidsfont'";
  tituloGrupos = 'Sobre las clases:';
  columnasGrid = 4;

  grupos: Grupo[] = [
    {
      titulo: '¡LES ENCANTA!',
      descripcion: 'A los niños les encanta porque su autoestima se ve beneficiada al adquirir control sobre su cuerpo y lograr diferentes tipos de figuras.'
    },
    {
      titulo: 'COREOGRAFÍAS DE DIFERENTES ESTILOS',
      descripcion: 'Se realizan coreografías de diferentes estilos a partir de los cuatro pilares fundamentales: fuerza, flexibilidad, salto y acrobacia.'
    }
  ];

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'brazo',
      titulo: 'FUERZA',
      descripcion: 'Ganarán fuerza trabajando el control corporal y la musculatura de forma progresiva y adaptada a su edad.'
    },
    {
      icono: 'flexi',
      titulo: 'FLEXIBILIDAD',
      descripcion: 'Aumentarán la flexibilidad con ejercicios específicos que mejoran la movilidad y el rango de movimiento.'
    },
    {
      icono: 'acrobacia',
      titulo: 'ACROBACIA',
      descripcion: 'Aprenderán elementos acrobáticos de forma segura, desarrollando coordinación y control del cuerpo.'
    },
    {
      icono: 'salto',
      titulo: 'SALTO',
      descripcion: 'Trabajarán el salto como elemento clave del baile deportivo, mejorando la potencia y la técnica.'
    }
  ];
}