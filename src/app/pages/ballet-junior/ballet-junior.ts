import { Component } from '@angular/core';
import { CategoriaLayout, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-ballet-junior',
  imports: [CategoriaLayout],
  templateUrl: './ballet-junior.html',
  styleUrl: './ballet-junior.css'
})
export class BalletJunior {
  titulo = 'Ballet juvenil';
  fuenteTitulo = "'Cardenio'";
  subtitulo = 'Desde los primeros pasos hasta grandes sueños';
  imagenBanner = 'banner-balletjunior.jpg'; 
  intro = 'Mejora tu postura, tu coordinación y tu fuerza. Descubre una forma única de crecer mientras disfrutas de la danza.';
  

  tituloModalidades = '¿Qué trabajamos en clase?';
  columnasGrid = 4; 

  grupos: any[] = []; 

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'danza',
      titulo: 'TÉCNICA CLÁSICA',
      descripcion: 'Aprendemos las bases y la metodología de la danza académica.'
    },
    {
      icono: 'allages',
      titulo: 'COREOGRAFÍAS',
      descripcion: 'Adaptadas a cada nivel y edad para que disfruten aprendiendo.'
    },
    {
      icono: 'salute',
      titulo: 'TRABAJO EN EQUIPO',
      descripcion: 'Fomentamos el respeto, la disciplina y el compañerismo.'
    },
    {
      icono: 'flexi',
      titulo: 'CRECIMIENTO',
      descripcion: 'Una forma única de crecer mejorando la postura y la confianza.'
    }
  ];
}