import { Component } from '@angular/core';
import { CategoriaLayout, Grupo } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-danzaclasica',
  imports: [CategoriaLayout],
  templateUrl: './danzaclasica.html',
  styleUrl: './danzaclasica.css'
})
export class Danzaclasica {
  titulo = 'Danza Clásica';
  fuenteTitulo = "'Gwendolyn', cursive";
  subtitulo = '¡La esencia más pura del ballet clásico!';
  imagenBanner = 'banner-danzacl.jpg';
  imagenLateral = 'danzacl1.png';
  intro = 'Desde los 3 años y SIN LÍMITE DE EDAD.';

  grupos: Grupo[] = [
    {
      titulo: 'BABY BALLET: de 3 a 6 años aprox.',
      descripcion: 'Iniciación al ballet para los/las más peques a través de actividades rítmico musicales que desarrollan sus funciones cognitivas y motrices.',
      complemento: 'Puede complementarse con DANZA URBANA KIDS.'
    },
    {
      titulo: 'BALLET JUNIOR: de 6 a 9 años aprox.',
      descripcion: 'Iniciación a la disciplina de la danza académica a través de la enseñanza básica de la metodología clásica.',
      complemento: 'Puede complementarse con DANZA URBANA JUNIOR.'
    },
    {
      titulo: 'BALLET JUVENIL: a partir de 10 años aprox.',
      descripcion: 'Danza clásica académica y técnica de puntas.',
      complemento: 'Puede complementarse con DANZA URBANA YOUTH.'
    },
    {
      titulo: 'BALLET PREMIUM: Iniciación, intermedio, avanzado y técnica de puntas.',
      descripcion: 'Ballet para adultos sin límite de edad en todos los niveles. Tanto si quieres iniciarte en la práctica del ballet, como si quieres retomar tus entrenamientos o mejorar la técnica, estas clases son para ti.'
    }
  ];
}