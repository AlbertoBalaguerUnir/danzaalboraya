import { Component } from '@angular/core';
import { CategoriaLayout, Grupo, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-danzaclasica',
  imports: [CategoriaLayout],
  templateUrl: './danzaclasica.html',
  styleUrl: './danzaclasica.css'
})
export class Danzaclasica {
  titulo = 'Danza Clásica';
  fuenteTitulo = "'Gwendolyn', cursive";
  subtitulo = 'Elegancia, técnica y bienestar';
  imagenBanner = 'banner-danzacl.jpg';
  intro = 'Descubre la magia del ballet. Tenemos un espacio para ti, desde los primeros pasos hasta grandes sueños.';

  // Título que aparecerá justo encima de los iconos
  tituloModalidades = 'Beneficios del Ballet para Adultos:';
  columnasGrid = 4;

  grupos: Grupo[] = [
    {
      titulo: 'BALLET JÓVENES: Niñas, Niños y Adolescentes',
      descripcion: 'Desde los primeros pasos hasta grandes sueños. Mejora tu postura, tu coordinación y tu fuerza.',
      complemento: `
        <span class="punto-lista">
          <img src="assets/iconos/check.jpg" alt="check" class="icono-texto"> Técnica clásica
        </span>
        <span class="punto-lista">
          <img src="assets/iconos/check.jpg" alt="check" class="icono-texto"> Coreografías adaptadas a cada nivel
        </span>
        <span class="punto-lista">
          <img src="assets/iconos/check.jpg" alt="check" class="icono-texto"> Trabajo en equipo y respeto
        </span>
        <span class="punto-lista">
          <img src="assets/iconos/check.jpg" alt="check" class="icono-texto"> Una forma única de crecer
        </span>
        <strong class="invitacion">¡Ven a bailar con nosotros!</strong>
      `
    },
    {
      titulo: 'BALLET ADULTOS: Todas las edades y niveles',
      descripcion: 'No hace falta experiencia previa. Una disciplina que combina la técnica clásica con un enfoque adaptado al adulto, para que disfrutes del ballet a cualquier edad y nivel.',
      complemento: 'Porque nunca es tarde para hacer lo que te hace bien.'
    }
  ];

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'bdyt-3',
      titulo: 'POSTURA Y ALINEACIÓN',
      descripcion: 'Mejora la postura y la alineación corporal.'
    },
    {
      icono: 'crzn',
      titulo: 'MENOS ESTRÉS',
      descripcion: 'Reduce el estrés y aporta bienestar.'
    },
    {
      icono: 'brazo',
      titulo: 'FUERZA Y MOVILIDAD',
      descripcion: 'Aumenta la fuerza, la flexibilidad y la movilidad.'
    },
    {
      icono: 'loto',
      titulo: 'CONEXIÓN',
      descripcion: 'Te ayuda a conectar con tu cuerpo y contigo misma/o.'
    }
  ];
}