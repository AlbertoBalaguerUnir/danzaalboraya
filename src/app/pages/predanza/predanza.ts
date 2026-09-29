import { Component } from '@angular/core';
import { CategoriaLayout, Grupo, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-predanza',
  imports: [CategoriaLayout],
  templateUrl: './predanza.html',
  styleUrl: './predanza.css'
})
export class Predanza {
  titulo = 'Pre danza: Baby Ballet / Urban Kids';
  subtitulo = '¡Primeros pasos en el baile!';
  imagenBanner = 'banner-predanza.png';
  intro = 'Las primeras clases de danza para los más peques de la casa.';
  fuenteTitulo = "'Kidsfont'";
  tituloGrupos = 'Nuestras categorías:';
  columnasGrid = 4;

  grupos: Grupo[] = [
    {
      titulo: 'BABY BALLET (+3 años)',
      descripcion: 'Descubren la música, la coordinación y la expresión corporal a través del ballet. Una iniciación suave y divertida al mundo de la danza clásica.'
    },
    {
      titulo: 'URBAN KIDS (+3 años)',
      descripcion: 'Se inician en el mundo urbano con ritmo, diversión y mucha energía. Aprenden los primeros pasos del street dance adaptados a su edad.'
    }
  ];

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'crzn',
      titulo: '¡GANAN CONFIANZA!',
      descripcion: 'A través del baile, los peques descubren lo que son capaces de hacer y refuerzan su autoestima en un entorno seguro.'
    },
    {
      icono: 'danza',
      titulo: '¡MEJORAN LA COORDINACIÓN!',
      descripcion: 'Trabajan el equilibrio, el control corporal y la sincronización de movimientos de forma natural y divertida.'
    },
    {
      icono: 'star',
      titulo: 'DESARROLLAN SU CREATIVIDAD',
      descripcion: 'La danza estimula su imaginación y les invita a expresarse con el cuerpo, la música y el movimiento.'
    },
    {
      icono: 'smile',
      titulo: 'APRENDEN EN UN AMBIENTE LÚDICO Y SEGURO',
      descripcion: 'La diversión y el juego son la base de cada clase. Aprenden sin darse cuenta, disfrutando con sus compañeros/as.'
    }
  ];
}