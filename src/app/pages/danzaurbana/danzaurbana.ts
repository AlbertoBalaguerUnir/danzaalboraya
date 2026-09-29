import { Component } from '@angular/core';
import { CategoriaLayout, Grupo } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-danzaurbana',
  imports: [CategoriaLayout],
  templateUrl: './danzaurbana.html',
  styleUrl: './danzaurbana.css'
})
export class Danzaurbana {
  titulo = 'Danza urbana';
  fuenteTitulo = "'Urban'";
  subtitulo = '¡Disfruta del street dance en el aula!';
  imagenBanner = 'banner-danzaurb.png';
  imagenLateral = 'danzaurb1.png';
  intro = 'Desde los 3 años y SIN LÍMITE DE EDAD.';

  grupos: Grupo[] = [
    {
      titulo: 'DANZA URBANA KIDS: de 3 a 6 años aprox.',
      descripcion: 'Iniciación al baile urbano para los/las más peques a través de actividades rítmicas y musicales que desarrollan sus funciones cognitivas y motrices.',
      complemento: 'Puede complementarse con BABY BALLET.'
    },
    {
      titulo: 'DANZA URBANA JUNIOR: de 6 a 9 años aprox.',
      descripcion: 'Categoría de danza urbana en nivel intermedio.',
      complemento: 'Posibilidad de COMPETIR. Puede complementarse con BALLET JUNIOR.'
    },
    {
      titulo: 'DANZA URBANA YOUTH: a partir de 10 años aprox.',
      descripcion: 'Categoría de danza urbana en un nivel intermedio/avanzado.',
      complemento: 'Posibilidad de COMPETIR. Puede complementarse con BALLET JUNIOR.'
    },
    {
      titulo: 'DANZA URBANA CEIP AUSIÀS MARCH: de 3 a 10 años aprox.',
      descripcion: 'Actividad desarrollada en el marco del Colegio Ausiàs March de Alboraya. Se admite alumnado de otros centros.'
    },
    {
      titulo: 'URBANO ABSOLUTA +15:',
      descripcion: 'Categoría de danza urbana dirigida a un alumnado entre 15 y 25 años aproximadamente.',
      complemento: 'Posibilidad de COMPETIR.'
    },
    {
      titulo: 'URBANO PREMIUM +25:',
      descripcion: 'Categoría de danza urbana dirigida a un alumnado adulto a partir de 25 años aproximadamente.',
      complemento: 'Posibilidad de COMPETIR.'
    }
  ];
}