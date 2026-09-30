<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Diagnóstico organizacional del tratamiento de datos personales
      .row.align-items-center.mb-3
        .col-xl
          .box___style_1.color___1(data-aos="flip-up").mb-3
            p.mb-0 El #[b diagnóstico organizacional del tratamiento de datos personales] permite reconocer cómo una entidad recolecta, almacena, usa, consulta, comparte, conserva o elimina información asociada a personas naturales. Este proceso constituye el punto de partida para aplicar buenas prácticas, establecer controles y prevenir riesgos relacionados con el manejo inadecuado de la información.
          p.mb-0 En una organización, los datos personales pueden encontrarse en documentos físicos, formularios digitales, hojas de cálculo, bases de datos, plataformas tecnológicas, correos electrónicos, contratos, registros académicos, historias laborales, encuestas, listados de asistencia o archivos compartidos. Por esta razón, el diagnóstico comprende no solo los documentos, sino también los procesos, responsables, finalidades, autorizaciones, accesos y evidencias asociados al tratamiento.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='' style="width: 400px").m-auto
      p.mb-0 Realizar un diagnóstico básico permite determinar si los datos tratados son necesarios, cuentan con una finalidad clara, disponen de la autorización correspondiente y se encuentran protegidos mediante medidas adecuadas. A partir del conocimiento del estado real de sus bases de datos, la organización puede tomar decisiones para corregir errores, disminuir riesgos y fortalecer la confianza de clientes, trabajadores, proveedores y demás titulares de la información.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Identificación de bases de datos personales
      p.mb-5 La #[b identificación de bases de datos personales] consiste en reconocer los conjuntos organizados de información que contienen datos de personas naturales. Estas bases pueden encontrarse en medios físicos o digitales y pertenecer a diferentes áreas, como talento humano, comercial, administrativa, financiera, académica, jurídica, atención al cliente o sistemas.
      .bg___color_1
        .px-5
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img2.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p Una base de datos personal no depende únicamente de una plataforma tecnológica. También puede estar conformada por carpetas físicas, formularios impresos, archivos de Excel, listados de asistencia, hojas de vida, contratos, encuestas, fotografías, registros de proveedores o comunicaciones almacenadas en correos electrónicos. Para identificar una base de datos personal, es pertinente formular las siguientes preguntas:
          .row.justify-content-center.mb-3
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿Qué datos personales se recolectan? 
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿En qué área o proceso se recolectan? 
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿Para qué se utiliza la información? 
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿Quién tiene acceso a los datos? 
            .col-xl-2.col-md-9(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿Dónde se almacenan? 
          .row.justify-content-center.mb-3
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿Existe autorización del titular? 
            .col-xl-2.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿Durante cuánto tiempo se conserva la información? 
            .col-xl-2.col-md-9(data-aos="zoom-in")
              .style___tarjeta_rob.h-100
                .p-4
                  p.mb-0.text-center ¿Qué riesgos pueden presentarse durante el tratamiento? 
          .row.justify-content-center.mb-5
            .col-xl-10
              .box___style_1.color___2(data-aos="flip-up").mb-3
                p.mb-0 Estas preguntas permiten establecer un panorama inicial sobre la ubicación, finalidad, acceso, conservación y condiciones de tratamiento de los datos personales.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
            .col
              h3 Bases de datos de clientes, empleados y proveedores
          p.mb-5 Las bases de datos de clientes, empleados y proveedores son comunes en la mayoría de las organizaciones. Cada una contiene información diferente y requiere controles acordes con su finalidad y nivel de riesgo. Para diferenciarlas, se deben considerar sus principales características:
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Bases de datos de clientes
                      p.mb-0 Pueden incluir nombres, números de identificación, teléfonos, correos electrónicos, direcciones, historial de compras, solicitudes, reclamos o información relacionada con servicios contratados. Su uso debe limitarse a las finalidades autorizadas, como atención comercial, facturación, prestación del servicio o comunicaciones previamente aceptadas.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Bases de datos de empleados
                      p.mb-0 Suelen contener hojas de vida, contratos, afiliaciones, datos bancarios, incapacidades, información familiar, certificaciones y registros laborales. Por el tipo de información que contienen, requieren mayor reserva, control de acceso y confidencialidad.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Bases de datos de proveedores
                      p.mb-0 Pueden incluir datos de contacto, identificación, información tributaria, contratos, certificaciones, soportes de pago y datos bancarios. Aunque suelen relacionarse con personas jurídicas, también pueden contener datos personales de representantes legales, contactos comerciales o proveedores naturales.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Reconocer el tipo de base de datos permite establecer controles de tratamiento y protección acordes con la información que contiene.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
        .col
          h3 Datos recolectados en formularios físicos y digitales
      p.mb-5 Los #[b formularios físicos y digitales] son medios frecuentes para recolectar datos personales. Se utilizan en inscripciones, solicitudes de información, encuestas, compras, procesos de selección, matrículas, eventos, trámites administrativos o atención de clientes.
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_2(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img7.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                p Un formulario adecuado debe solicitar únicamente los datos necesarios para cumplir una finalidad específica. Pedir información excesiva o sin relación con el trámite aumenta el riesgo de incumplimiento y afecta la confianza del titular. Todo formulario debe informar, de manera clara:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Quién recolecta la información. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Para qué se recolectan los datos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Qué tratamiento recibirá la información. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cuáles son los derechos del titular. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Dónde se consulta la política de tratamiento de datos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Qué canales existen para consultas o reclamos. 
      p.mb-5 En formularios físicos, la autorización puede evidenciarse mediante firma o aceptación escrita. En formularios digitales, puede conservarse mediante casillas de aceptación, registros de fecha y hora, trazabilidad del formulario o confirmaciones electrónicas. De esta manera, la organización conserva evidencia del proceso de recolección y de la autorización correspondiente.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
        .col
          h3 Reconocimiento de finalidades del tratamiento
      p.mb-5 La #[b finalidad del tratamiento] corresponde al propósito para el cual se recolectan y utilizan los datos personales. Reconocerla es fundamental, debido a que la información no debe utilizarse para actividades diferentes de aquellas informadas al titular. Las finalidades pueden variar según el área o proceso organizacional:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img8.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Talento humano
              p.mb-0.text-center La información puede utilizarse para gestionar contratos, nómina, seguridad social y bienestar laboral, de acuerdo con las necesidades propias de la relación laboral.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img9.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Área comercial
              p.mb-0.text-center Los datos pueden destinarse a la atención de clientes, gestión de ventas, trámite de garantías o envío de comunicaciones previamente autorizadas.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img10.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Área administrativa
              p.mb-0.text-center El tratamiento puede relacionarse con procesos de facturación, pagos, archivo documental o gestión de proveedores.
      p.mb-0 En todos los casos, la finalidad debe ser #[b clara, específica y comprensible]. Deben evitarse expresiones generales como «para cualquier actividad de la organización», porque el titular debe conocer con precisión el uso que se dará a sus datos.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Clasificación práctica de la información
      p.mb-5 La #[b clasificación práctica de la información] permite organizar los datos personales según su naturaleza, nivel de protección y riesgo. Esta clasificación contribuye a definir quién puede acceder a la información, cómo debe almacenarse, qué controles deben aplicarse y qué precauciones se requieren durante su uso.
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2(data-aos="flip-up")
            p.mb-0 No todos los datos personales tienen el mismo nivel de protección. Algunos pueden ser consultados con mayor facilidad; otros pertenecen al ámbito privado del titular, y algunos requieren protección reforzada porque pueden afectar su intimidad, dignidad o seguridad.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img11.svg', alt='' style="width: 190px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
        .col
          h3 Datos públicos, privados y semiprivados
      p.mb-5 A continuación, se presenta un video que permitirá profundizar en la clasificación de los datos personales y comprender las características que determinan sus condiciones de acceso, uso y tratamiento.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/C1dJWpq5lOY" title="Datos públicos, privados y semiprivados" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Datos públicos, privados y semiprivados
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
        .col
          h3 Datos sensibles en procesos organizacionales
      p Los #[b datos sensibles] son aquellos que pueden afectar la intimidad del titular o generar discriminación si se utilizan de forma inadecuada. Por esta razón, su tratamiento exige mayor cuidado y debe realizarse solo cuando exista una justificación clara.
      p.mb-5 En las organizaciones pueden encontrarse datos sensibles en certificados médicos, incapacidades, datos biométricos, restricciones laborales, información de salud, condiciones familiares, orientación psicológica o registros asociados a situaciones personales especiales. Cuando se identifiquen datos sensibles, deben aplicarse medidas reforzadas, entre ellas:
      .row.justify-content-center.mb-3
        .col-xl-10
          .box___style_2(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img12.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Restringir el acceso únicamente al personal autorizado. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evitar su recolección cuando no sea necesaria. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Conservarlos en medios seguros. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Informar claramente la finalidad del tratamiento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Protegerlos contra pérdida, alteración o divulgación indebida. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Eliminar la información cuando deje de ser necesaria. 
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_1.color___2(data-aos="flip-up").mb-3
            p.mb-0 Estas medidas contribuyen a reducir los riesgos derivados del tratamiento de información que requiere especial protección.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
        .col
          h3 Datos de niños, niñas y adolescentes
      p Los #[b datos de niños, niñas y adolescentes] requieren protección especial. Su tratamiento debe respetar el interés superior del menor y garantizar sus derechos fundamentales.
      p.mb-5 Estos datos pueden encontrarse en instituciones educativas, deportivas, culturales, de salud, recreativas o de servicios sociales. Pueden incluir nombres, documentos, edad, información de acudientes, fotografías, videos, registros académicos, datos de salud y autorizaciones de salida o de participación en actividades. Para proteger esta información, se recomienda:
      .row.justify-content-center.mb-3
        .col-xl-10
          .box___style_2(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img13.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Solicitar únicamente los datos necesarios. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Contar con autorización del representante legal cuando corresponda. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evitar publicar fotografías o videos sin autorización. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Restringir el acceso a información académica, médica o familiar. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Proteger listados, matrículas y datos de contacto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Capacitar al personal que maneja información de menores. 
      .row.justify-content-center.mb-0
        .col-xl-10
          .box___style_1.color___2(data-aos="flip-up").mb-3
            p.mb-0 La aplicación de estas medidas permite reforzar la protección requerida por las características particulares de estos titulares.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Análisis inicial de cumplimiento
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___1.fit___box_2(data-aos="flip-up").mb-3
            p.mb-0 El #[b análisis inicial de cumplimiento] permite determinar si la organización trata los datos personales de acuerdo con las finalidades, autorizaciones, derechos, deberes y controles establecidos. Este análisis contribuye a identificar debilidades y definir acciones de mejora.
          p.mb-0 El cumplimiento no depende únicamente de disponer de documentos escritos. También requiere que las políticas se apliquen, el personal conozca sus responsabilidades, los titulares puedan ejercer sus derechos y existan controles para prevenir accesos no autorizados, pérdida de información o uso indebido de los datos.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img14.png', alt='' style="width: 400px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
        .col
          h3 Verificación de autorizaciones
      p.mb-5 La #[b verificación de autorizaciones] consiste en determinar si la organización cuenta con evidencia de que el titular autorizó el tratamiento de sus datos personales. La autorización debe estar relacionada con una finalidad clara y conservarse como soporte. Durante esta revisión, se deben considerar los siguientes aspectos:
      .row.justify-content-center.mb-3
        .col-xl-10
          .box___style_2(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img15.jpg', alt='' style="width: 400px").m-auto
              .col-xl.fit___box_container
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Existencia de autorización del titular. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Finalidad informada. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Identificación del responsable del tratamiento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Medio utilizado para obtener la autorización. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fecha de autorización. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evidencia física o digital. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Relación entre los datos recolectados y la finalidad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Procedimiento para consultas, reclamos o revocatoria. 
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_1.color___2(data-aos="flip-up").mb-3
            p.mb-0 Una autorización incompleta o inexistente puede generar riesgos. Por ello, es importante revisar formatos, formularios, registros digitales y demás evidencias disponibles para determinar si respaldan adecuadamente el tratamiento realizado.
      .bg___color_2
        .px-5
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
            .col
              h3 Revisión de políticas existentes
          p.mb-5 La #[b política de tratamiento de datos personales] informa a los titulares cómo se recolecta, usa, almacena, protege y gestiona su información. Esta política debe ser clara, actualizada y accesible. Durante su revisión, se debe determinar si incluye:
          .row.justify-content-center.mb-3
            .col-xl-10
              .box___style_2(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t1/img16.jpg', alt='' style="width: 400px").m-auto
                  .col-xl.fit___box_container
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Identificación del responsable. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Finalidades del tratamiento. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Derechos de los titulares. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Procedimiento para consultas y reclamos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Canales de atención. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Tratamiento de datos sensibles, cuando aplique. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Medidas generales de seguridad. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Fecha de actualización.
          .row.justify-content-center.mb-5
            .col-xl-10
              .box___style_1.color___2(data-aos="flip-up").mb-3
                p.mb-0 No basta con disponer de una política almacenada en un archivo interno. Esta debe estar disponible para consulta y guardar correspondencia con las prácticas reales de la organización.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 70px").m-auto
            .col
              h3 Identificación de hallazgos básicos
          p.mb-5 Los #[b hallazgos básicos] son situaciones que evidencian debilidades, riesgos o posibles incumplimientos en el tratamiento de datos personales. Su identificación permite priorizar las acciones de mejora. Entre los hallazgos frecuentes se encuentran:
          .row.justify-content-center.mb-5
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img17.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Bases de datos sin responsable definido. 
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img18.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Formularios sin autorización clara. 
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img19.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Finalidades demasiado generales. 
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img20.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Datos sensibles recolectados sin justificación. 
            .col-xl-2.col-md-9.mt-4(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img21.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Acceso amplio a información reservada. 
          .row.justify-content-center.mb-5
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img22.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Políticas desactualizadas. 
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img23.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Falta de evidencias de autorización. 
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img24.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Archivos físicos sin control. 
            .col-xl-2.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img25.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Bases de datos antiguas sin depuración. 
            .col-xl-2.col-md-9.mt-4(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img26.svg', alt="" style="max-width: 90px").m-auto
                  p.mb-0.text-center Uso de datos para campañas no autorizadas. 
          p.mb-0 El diagnóstico debe finalizar con una relación básica entre el #[b área], los #[b datos tratados], el #[b riesgo identificado y la acción recomendada]. Esta relación permite convertir los hallazgos obtenidos durante el diagnóstico en insumos concretos para definir acciones de mejora y fortalecer la protección de los datos personales. 
          
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
