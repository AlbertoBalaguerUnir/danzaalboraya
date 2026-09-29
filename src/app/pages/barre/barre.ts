import { Component } from '@angular/core';
import { CategoriaLayout, Grupo, Modalidad, ModalidadConIcono } from '../../components/categoria-layout/categoria-layout';

@Component({
  selector: 'app-barre',
  imports: [CategoriaLayout],
  templateUrl: './barre.html',
  styleUrl: './barre.css'
})
export class Barre {
  titulo = 'Método Barre';
  subtitulo = '¡Descubre el Ballet y el Pilates de moda!';
  imagenBanner = 'banner-barre.png';
  intro = 'ACTIVIDAD PARA JÓVENES Y ADULTOS.';
  tituloModalidades = '';
  fuenteTitulo = "'Cardenio'";
  columnasGrid = 3;

  grupos: Grupo[] = [];

  modalidades: Modalidad[] = [
    {
      titulo: '¿CÓMO SE TRABAJA?',
      secciones: [
        {
          pregunta: '¿Cómo se trabaja?',
          respuesta: 'La mayor parte del trabajo se realiza en la barra, con una parte del centro y el suelo.'
        }
      ]
    },
    {
      titulo: '¿QUÉ MATERIAL UTILIZAMOS?',
      secciones: [
        {
          pregunta: '¿Qué material utilizamos?',
          respuesta: 'Pelotas, bandas elásticas y pesas.'
        }
      ]
    },
    {
      titulo: 'BALLET TONIFICANTE INTENSO',
      secciones: [
        {
          pregunta: '¿Qué es?',
          respuesta: 'Clase desarrollada a partir de la metodología del Ballet clásico que aúna los principios de la técnica y las últimas innovaciones en entrenamiento para bailarines y bailarinas.'
        },
        {
          pregunta: '¿Para quién es?',
          respuesta: 'Adaptada a todo tipo de condición física y aptitudes. No es necesario que hayas bailado antes.'
        },
        {
          pregunta: '¿Cuál es el objetivo?',
          respuesta: 'No buscamos tanto trabajar la técnica clásica, sino todos los grupos musculares: tonificamos el cuerpo, desarrollamos masa muscular, ganamos flexibilidad, mejoramos problemas de espalda y otros dolores. Aprendemos a respirar, conectamos con nosotras/os mismas/os, ganamos sentido coreográfico y musical, y especialmente… nos mantenemos sanas/os mientras lo pasamos muy bien.'
        },
        {
          pregunta: '¿Qué materiales necesito?',
          respuesta: 'No te preocupes por ir cargada con tus propios materiales, tenemos todo lo necesario en el aula: esterillas, pelotas, bandas elásticas, pesos, bloques…'
        },
        {
          pregunta: '¿Con qué música vamos a trabajar?',
          respuesta: 'Música tranquila (Ballet Class) y otros tipos de música adecuados al tipo de clase.'
        }
      ]
    },
    {
      titulo: 'SUAVE, EMBARAZO Y PORTEO CON BEBÉ',
      secciones: [
        {
          pregunta: '¿Qué es?',
          respuesta: 'Clase de intensidad baja desarrollada a partir de la metodología del Ballet clásico y los principios del Pilates.'
        },
        {
          pregunta: '¿Para quién es?',
          respuesta: 'Para todo tipo de condición física, pero ideal para personas con algún tipo de limitación que condicione sus movimientos, como puede ser el embarazo, el llevar a tu bebé contigo, padecer fibromialgia o experimentar algún tipo de dolor u enfermedad.'
        },
        {
          pregunta: '¿Cuál es el objetivo?',
          respuesta: 'Luchar contra el sedentarismo y nuestras propias limitaciones, sentirnos sanos/as, en movimiento, ganar autoestima, recuperarnos de lesiones, mejorar nuestro estado de salud físico y mental. A su vez, tonificamos el cuerpo, desarrollamos masa muscular, ganamos flexibilidad, mejoramos problemas, aprendemos a respirar, conectamos con nosotras/os mismas/os, ganamos sentido coreográfico y musical, y especialmente… lo pasamos muy bien.'
        },
        {
          pregunta: '¿Qué materiales necesito?',
          respuesta: 'No te preocupes por ir cargada/o con tus propios materiales, tenemos todo lo necesario en el aula: esterillas, pelotas, bandas elásticas, pesos, bloques…'
        },
        {
          pregunta: '¿Con qué música vamos a trabajar?',
          respuesta: 'Música tranquila (Ballet Class) y otros tipos de música adecuados al tipo de clase.'
        }
      ]
    },
    {
      titulo: 'PILATES BARRA',
      secciones: [
        {
          pregunta: '¿Qué es?',
          respuesta: 'Clase en la barra desarrollada bajo el método Pilates.'
        },
        {
          pregunta: '¿Para quién es?',
          respuesta: 'Adaptada a todo tipo de condición física y aptitudes. No es necesario que hayas bailado antes.'
        },
        {
          pregunta: '¿Cuál es el objetivo?',
          respuesta: 'De la misma manera que en el Tonificante, buscamos trabajar todos los grupos musculares: tonificamos el cuerpo, desarrollamos masa muscular, ganamos flexibilidad, mejoramos problemas de espalda y otros dolores. Aprendemos a respirar, conectamos con nosotras/os mismas/os, ganamos sentido coreográfico y musical, y especialmente… nos mantenemos sanas/os mientras lo pasamos muy bien.'
        },
        {
          pregunta: '¿Qué materiales necesito?',
          respuesta: 'No te preocupes por ir cargada/o con tus propios materiales, tenemos todo lo necesario en el aula: esterillas, pelotas, bandas elásticas, pesos, bloques…'
        },
        {
          pregunta: '¿Con qué música vamos a trabajar?',
          respuesta: 'Música comercial, Pop, Rock, Electrónica…'
        }
      ]
    }
  ];

  modalidadesConIcono: ModalidadConIcono[] = [
    {
      icono: 'fit',
      titulo: 'MEJORA LA POSTURA Y EL RANGO DE MOVIMIENTO',
      descripcion: 'Trabajamos la alineación corporal y la movilidad articular para que tu cuerpo se mueva mejor en el día a día.'
    },
    {
      icono: 'artic',
      titulo: 'PREVIENE LESIONES Y ALIVIA DOLORES',
      descripcion: 'Fortalecemos la musculatura profunda y liberamos tensiones para prevenir molestias y mejorar el bienestar general.'
    },
    {
      icono: 'brazo',
      titulo: 'TONIFICA Y FORTALECE TODO EL CUERPO',
      descripcion: 'Ejercicios de bajo impacto que trabajan todos los grupos musculares, especialmente core, glúteos y brazos.'
    },
    {
      icono: 'flexi',
      titulo: 'AUMENTA LA FLEXIBILIDAD Y LA PROPIOCEPCIÓN',
      descripcion: 'Ganamos elasticidad y mejoramos la conciencia corporal, clave para un movimiento seguro y controlado.'
    },
    {
      icono: 'diversidad',
      titulo: 'PARA TODO TIPO DE CUERPOS Y EDADES',
      descripcion: 'Clases adaptadas a todas las condiciones físicas y niveles. Cada persona avanza a su ritmo.'
    },
    {
      icono: 'loto',
      titulo: '¡MÁS QUE UNA CLASE, ES UNA COMUNIDAD!',
      descripcion: 'Un espacio donde conocer gente, compartir y sentirse parte de un grupo. El Barre se disfruta en compañía.'
    }
  ];
}