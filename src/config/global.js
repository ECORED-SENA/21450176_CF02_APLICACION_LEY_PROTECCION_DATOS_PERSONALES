export default {
  global: {
    Name: 'Buenas prácticas para la protección de datos',
    Description:
      'Este componente formativo orienta la aplicación práctica de buenas prácticas, controles y ejercicios organizacionales para proteger datos personales. Aborda el diagnóstico del tratamiento de información, la recolección responsable, la implementación de controles, la gestión de solicitudes e incidentes y la elaboración de planes de mejora para prevenir riesgos y sanciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Diagnóstico organizacional del tratamiento de datos personales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación de bases de datos personales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación práctica de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis inicial de cumplimiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Controles para proteger la información personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Controles administrativos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Controles técnicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Controles físicos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de solicitudes, incidentes y riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Atención de derechos de los titulares',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gestión de incidentes de seguridad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Análisis de riesgos legales',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ejercicios prácticos de aplicación organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Caso práctico: empresa comercial',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Caso práctico: institución educativa',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Caso práctico: área de talento humano',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de mejora para la protección de datos personales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Elaboración del diagnóstico final',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Diseño de acciones de mejora',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Presentación del plan de protección de datos',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21450176_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Autorización',
      significado:
        'consentimiento otorgado por el titular para realizar el tratamiento de sus datos personales de acuerdo con las finalidades informadas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto organizado de datos personales que son objeto de tratamiento por parte de una organización.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio orientado a evitar el acceso, uso o divulgación de información personal por parte de personas no autorizadas.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'medida que permite limitar el ingreso a sistemas, archivos, bases de datos o espacios de acuerdo con las funciones y responsabilidades asignadas.',
    },
    {
      termino: 'Datos personales',
      significado:
        'información asociada o que puede asociarse a una persona natural determinada o determinable.',
    },
    {
      termino: 'Datos sensibles',
      significado:
        'información cuyo uso indebido puede afectar la intimidad del titular o generar situaciones de discriminación.',
    },
    {
      termino: 'Incidente de seguridad',
      significado:
        'situación que puede comprometer la confidencialidad, integridad o disponibilidad de los datos personales tratados por una organización.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'conjunto organizado de acciones destinadas a corregir hallazgos, reducir riesgos y fortalecer las medidas para la protección de datos personales.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de que ocurra una situación que afecte la protección de los datos personales, los derechos de los titulares o el cumplimiento organizacional.',
    },
    {
      termino: 'Titular',
      significado:
        'persona natural cuyos datos personales son objeto de tratamiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'INCIBE. (2024, 17 de abril). Cifrado de la información. Instituto Nacional de Ciberseguridad. ',
      link: 'https://www.incibe.es/ciudadania/tematicas/cifrado',
    },
    {
      referencia:
        'Kriptos. (2025, 2 de julio). Datos personales: qué es, tipos y ejemplos. Intelligent Solutions. ',
      link: 'https://www.kriptos.io/es/es-post/datos-personales-que-es-tipos-y-ejemplos',
    },
    {
      referencia:
        'VIU. (2024, 22 de noviembre). Incidentes de seguridad: ¿cómo prevenirlos? Universidad Nacional de Valencia. ',
      link: 'https://www.universidadviu.com/co/actualidad/nuestros-expertos/incidentes-de-seguridad-como-prevenirlos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
