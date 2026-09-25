/* instrumentos.js — GENERADO a partir de Code.gs (misma fuente que el servidor).
 * Instrumentos oficiales NOM-035-STPS-2018 (DOF 23/10/2018) y motor de calificación.
 * No editar a mano: si cambia Code.gs, regenerar. */
const NIVELES = ['Nulo o despreciable', 'Bajo', 'Medio', 'Alto', 'Muy alto'];
const ESCALA = ['Siempre', 'Casi siempre', 'Algunas veces', 'Casi nunca', 'Nunca'];

/* ============================================================================
 *  INSTRUMENTOS OFICIALES
 * ==========================================================================*/

const GUIA_I = {
  id: 'I',
  titulo: 'Cuestionario para identificar a los trabajadores que fueron sujetos a acontecimientos traumáticos severos',
  secciones: [
    {
      id: 'I', titulo: 'I.- Acontecimiento traumático severo',
      pregunta: '¿Ha presenciado o sufrido alguna vez, durante o con motivo del trabajo un acontecimiento como los siguientes:',
      items: [
        [1, 'Accidente que tenga como consecuencia la muerte, la pérdida de un miembro o una lesión grave?'],
        [2, 'Asaltos?'],
        [3, 'Actos violentos que derivaron en lesiones graves?'],
        [4, 'Secuestro?'],
        [5, 'Amenazas?, o'],
        [6, 'Cualquier otro que ponga en riesgo su vida o salud, y/o la de otras personas?']
      ]
    },
    {
      id: 'II', titulo: 'II.- Recuerdos persistentes sobre el acontecimiento (durante el último mes):',
      items: [
        [7, '¿Ha tenido recuerdos recurrentes sobre el acontecimiento que le provocan malestares?'],
        [8, '¿Ha tenido sueños de carácter recurrente sobre el acontecimiento, que le producen malestar?']
      ]
    },
    {
      id: 'III', titulo: 'III.- Esfuerzo por evitar circunstancias parecidas o asociadas al acontecimiento (durante el último mes):',
      items: [
        [9, '¿Se ha esforzado por evitar todo tipo de sentimientos, conversaciones o situaciones que le puedan recordar el acontecimiento?'],
        [10, '¿Se ha esforzado por evitar todo tipo de actividades, lugares o personas que motivan recuerdos del acontecimiento?'],
        [11, '¿Ha tenido dificultad para recordar alguna parte importante del evento?'],
        [12, '¿Ha disminuido su interés en sus actividades cotidianas?'],
        [13, '¿Se ha sentido usted alejado o distante de los demás?'],
        [14, '¿Ha notado que tiene dificultad para expresar sus sentimientos?'],
        [15, '¿Ha tenido la impresión de que su vida se va a acortar, que va a morir antes que otras personas o que tiene un futuro limitado?']
      ]
    },
    {
      id: 'IV', titulo: 'IV Afectación (durante el último mes):',
      items: [
        [16, '¿Ha tenido usted dificultades para dormir?'],
        [17, '¿Ha estado particularmente irritable o le han dado arranques de coraje?'],
        [18, '¿Ha tenido dificultad para concentrarse?'],
        [19, '¿Ha estado nervioso o constantemente en alerta?'],
        [20, '¿Se ha sobresaltado fácilmente por cualquier cosa?']
      ]
    }
  ]
};

const GUIA_II = {
  id: 'II',
  titulo: 'Cuestionario para identificar los factores de riesgo psicosocial en los centros de trabajo',
  items: {
    1: 'Mi trabajo me exige hacer mucho esfuerzo físico',
    2: 'Me preocupa sufrir un accidente en mi trabajo',
    3: 'Considero que las actividades que realizo son peligrosas',
    4: 'Por la cantidad de trabajo que tengo debo quedarme tiempo adicional a mi turno',
    5: 'Por la cantidad de trabajo que tengo debo trabajar sin parar',
    6: 'Considero que es necesario mantener un ritmo de trabajo acelerado',
    7: 'Mi trabajo exige que esté muy concentrado',
    8: 'Mi trabajo requiere que memorice mucha información',
    9: 'Mi trabajo exige que atienda varios asuntos al mismo tiempo',
    10: 'En mi trabajo soy responsable de cosas de mucho valor',
    11: 'Respondo ante mi jefe por los resultados de toda mi área de trabajo',
    12: 'En mi trabajo me dan órdenes contradictorias',
    13: 'Considero que en mi trabajo me piden hacer cosas innecesarias',
    14: 'Trabajo horas extras más de tres veces a la semana',
    15: 'Mi trabajo me exige laborar en días de descanso, festivos o fines de semana',
    16: 'Considero que el tiempo en el trabajo es mucho y perjudica mis actividades familiares o personales',
    17: 'Pienso en las actividades familiares o personales cuando estoy en mi trabajo',
    18: 'Mi trabajo permite que desarrolle nuevas habilidades',
    19: 'En mi trabajo puedo aspirar a un mejor puesto',
    20: 'Durante mi jornada de trabajo puedo tomar pausas cuando las necesito',
    21: 'Puedo decidir la velocidad a la que realizo mis actividades en mi trabajo',
    22: 'Puedo cambiar el orden de las actividades que realizo en mi trabajo',
    23: 'Me informan con claridad cuáles son mis funciones',
    24: 'Me explican claramente los resultados que debo obtener en mi trabajo',
    25: 'Me informan con quién puedo resolver problemas o asuntos de trabajo',
    26: 'Me permiten asistir a capacitaciones relacionadas con mi trabajo',
    27: 'Recibo capacitación útil para hacer mi trabajo',
    28: 'Mi jefe tiene en cuenta mis puntos de vista y opiniones',
    29: 'Mi jefe ayuda a solucionar los problemas que se presentan en el trabajo',
    30: 'Puedo confiar en mis compañeros de trabajo',
    31: 'Cuando tenemos que realizar trabajo de equipo los compañeros colaboran',
    32: 'Mis compañeros de trabajo me ayudan cuando tengo dificultades',
    33: 'En mi trabajo puedo expresarme libremente sin interrupciones',
    34: 'Recibo críticas constantes a mi persona y/o trabajo',
    35: 'Recibo burlas, calumnias, difamaciones, humillaciones o ridiculizaciones',
    36: 'Se ignora mi presencia o se me excluye de las reuniones de trabajo y en la toma de decisiones',
    37: 'Se manipulan las situaciones de trabajo para hacerme parecer un mal trabajador',
    38: 'Se ignoran mis éxitos laborales y se atribuyen a otros trabajadores',
    39: 'Me bloquean o impiden las oportunidades que tengo para obtener ascenso o mejora en mi trabajo',
    40: 'He presenciado actos de violencia en mi centro de trabajo',
    41: 'Atiendo clientes o usuarios muy enojados',
    42: 'Mi trabajo me exige atender personas muy necesitadas de ayuda o enfermas',
    43: 'Para hacer mi trabajo debo demostrar sentimientos distintos a los míos',
    44: 'Comunican tarde los asuntos de trabajo',
    45: 'Dificultan el logro de los resultados del trabajo',
    46: 'Ignoran las sugerencias para mejorar su trabajo'
  },
  bloques: [
    { intro: 'Para responder las preguntas siguientes considere las condiciones de su centro de trabajo, así como la cantidad y ritmo de trabajo.', items: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { intro: 'Las preguntas siguientes están relacionadas con las actividades que realiza en su trabajo y las responsabilidades que tiene.', items: [10, 11, 12, 13] },
    { intro: 'Las preguntas siguientes están relacionadas con el tiempo destinado a su trabajo y sus responsabilidades familiares.', items: [14, 15, 16, 17] },
    { intro: 'Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.', items: [18, 19, 20, 21, 22] },
    { intro: 'Las preguntas siguientes están relacionadas con la capacitación e información que recibe sobre su trabajo.', items: [23, 24, 25, 26, 27] },
    { intro: 'Las preguntas siguientes se refieren a las relaciones con sus compañeros de trabajo y su jefe.', items: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] },
    {
      filtro: 'clientes', introFiltro: 'Las preguntas siguientes están relacionadas con la atención a clientes y usuarios.',
      preguntaFiltro: 'En mi trabajo debo brindar servicio a clientes o usuarios:',
      notaFiltro: 'Si su respuesta fue "SÍ", responda las preguntas siguientes. Si su respuesta fue "NO" pase a las preguntas de la sección siguiente.',
      intro: '', items: [41, 42, 43]
    },
    {
      filtro: 'jefe', introFiltro: '',
      preguntaFiltro: 'Soy jefe de otros trabajadores:',
      notaFiltro: 'Si su respuesta fue "SÍ", responda las preguntas siguientes. Si su respuesta fue "NO", ha concluido el cuestionario.',
      intro: 'Las siguientes preguntas están relacionadas con las actitudes de los trabajadores que supervisa.', items: [44, 45, 46]
    }
  ],
  // Tabla 2: ítems que se califican Siempre=0 ... Nunca=4 (el resto Siempre=4 ... Nunca=0)
  positivos: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
  // Rangos: [a,b,c,d] → Nulo x<a · Bajo a≤x<b · Medio b≤x<c · Alto c≤x<d · Muy alto x≥d
  final: [20, 45, 70, 90],
  // Tabla 3
  estructura: [
    { cat: 'Ambiente de trabajo', r: [3, 5, 7, 9], dominios: [
      { dom: 'Condiciones en el ambiente de trabajo', r: [3, 5, 7, 9], dims: [
        ['Condiciones peligrosas e inseguras', [2]],
        ['Condiciones deficientes e insalubres', [1]],
        ['Trabajos peligrosos', [3]]] }] },
    { cat: 'Factores propios de la actividad', r: [10, 20, 30, 40], dominios: [
      { dom: 'Carga de trabajo', r: [12, 16, 20, 24], dims: [
        ['Cargas cuantitativas', [4, 9]],
        ['Ritmos de trabajo acelerado', [5, 6]],
        ['Carga mental', [7, 8]],
        ['Cargas psicológicas emocionales', [41, 42, 43]],
        ['Cargas de alta responsabilidad', [10, 11]],
        ['Cargas contradictorias o inconsistentes', [12, 13]]] },
      { dom: 'Falta de control sobre el trabajo', r: [5, 8, 11, 14], dims: [
        ['Falta de control y autonomía sobre el trabajo', [20, 21, 22]],
        ['Limitada o nula posibilidad de desarrollo', [18, 19]],
        ['Limitada o inexistente capacitación', [26, 27]]] }] },
    { cat: 'Organización del tiempo de trabajo', r: [4, 6, 9, 12], dominios: [
      { dom: 'Jornada de trabajo', r: [1, 2, 4, 6], dims: [
        ['Jornadas de trabajo extensas', [14, 15]]] },
      { dom: 'Interferencia en la relación trabajo-familia', r: [1, 2, 4, 6], dims: [
        ['Influencia del trabajo fuera del centro laboral', [16]],
        ['Influencia de las responsabilidades familiares', [17]]] }] },
    { cat: 'Liderazgo y relaciones en el trabajo', r: [10, 18, 28, 38], dominios: [
      { dom: 'Liderazgo', r: [3, 5, 8, 11], dims: [
        ['Escasa claridad de funciones', [23, 24, 25]],
        ['Características del liderazgo', [28, 29]]] },
      { dom: 'Relaciones en el trabajo', r: [5, 8, 11, 14], dims: [
        ['Relaciones sociales en el trabajo', [30, 31, 32]],
        ['Deficiente relación con los colaboradores que supervisa', [44, 45, 46]]] },
      { dom: 'Violencia', r: [7, 10, 13, 16], dims: [
        ['Violencia laboral', [33, 34, 35, 36, 37, 38, 39, 40]]] }] }
  ]
};

const GUIA_III = {
  id: 'III',
  titulo: 'Cuestionario para identificar los factores de riesgo psicosocial y evaluar el entorno organizacional en los centros de trabajo',
  items: {
    1: 'El espacio donde trabajo me permite realizar mis actividades de manera segura e higiénica',
    2: 'Mi trabajo me exige hacer mucho esfuerzo físico',
    3: 'Me preocupa sufrir un accidente en mi trabajo',
    4: 'Considero que en mi trabajo se aplican las normas de seguridad y salud en el trabajo',
    5: 'Considero que las actividades que realizo son peligrosas',
    6: 'Por la cantidad de trabajo que tengo debo quedarme tiempo adicional a mi turno',
    7: 'Por la cantidad de trabajo que tengo debo trabajar sin parar',
    8: 'Considero que es necesario mantener un ritmo de trabajo acelerado',
    9: 'Mi trabajo exige que esté muy concentrado',
    10: 'Mi trabajo requiere que memorice mucha información',
    11: 'En mi trabajo tengo que tomar decisiones difíciles muy rápido',
    12: 'Mi trabajo exige que atienda varios asuntos al mismo tiempo',
    13: 'En mi trabajo soy responsable de cosas de mucho valor',
    14: 'Respondo ante mi jefe por los resultados de toda mi área de trabajo',
    15: 'En el trabajo me dan órdenes contradictorias',
    16: 'Considero que en mi trabajo me piden hacer cosas innecesarias',
    17: 'Trabajo horas extras más de tres veces a la semana',
    18: 'Mi trabajo me exige laborar en días de descanso, festivos o fines de semana',
    19: 'Considero que el tiempo en el trabajo es mucho y perjudica mis actividades familiares o personales',
    20: 'Debo atender asuntos de trabajo cuando estoy en casa',
    21: 'Pienso en las actividades familiares o personales cuando estoy en mi trabajo',
    22: 'Pienso que mis responsabilidades familiares afectan mi trabajo',
    23: 'Mi trabajo permite que desarrolle nuevas habilidades',
    24: 'En mi trabajo puedo aspirar a un mejor puesto',
    25: 'Durante mi jornada de trabajo puedo tomar pausas cuando las necesito',
    26: 'Puedo decidir cuánto trabajo realizo durante la jornada laboral',
    27: 'Puedo decidir la velocidad a la que realizo mis actividades en mi trabajo',
    28: 'Puedo cambiar el orden de las actividades que realizo en mi trabajo',
    29: 'Los cambios que se presentan en mi trabajo dificultan mi labor',
    30: 'Cuando se presentan cambios en mi trabajo se tienen en cuenta mis ideas o aportaciones',
    31: 'Me informan con claridad cuáles son mis funciones',
    32: 'Me explican claramente los resultados que debo obtener en mi trabajo',
    33: 'Me explican claramente los objetivos de mi trabajo',
    34: 'Me informan con quién puedo resolver problemas o asuntos de trabajo',
    35: 'Me permiten asistir a capacitaciones relacionadas con mi trabajo',
    36: 'Recibo capacitación útil para hacer mi trabajo',
    37: 'Mi jefe ayuda a organizar mejor el trabajo',
    38: 'Mi jefe tiene en cuenta mis puntos de vista y opiniones',
    39: 'Mi jefe me comunica a tiempo la información relacionada con el trabajo',
    40: 'La orientación que me da mi jefe me ayuda a realizar mejor mi trabajo',
    41: 'Mi jefe ayuda a solucionar los problemas que se presentan en el trabajo',
    42: 'Puedo confiar en mis compañeros de trabajo',
    43: 'Entre compañeros solucionamos los problemas de trabajo de forma respetuosa',
    44: 'En mi trabajo me hacen sentir parte del grupo',
    45: 'Cuando tenemos que realizar trabajo de equipo los compañeros colaboran',
    46: 'Mis compañeros de trabajo me ayudan cuando tengo dificultades',
    47: 'Me informan sobre lo que hago bien en mi trabajo',
    48: 'La forma como evalúan mi trabajo en mi centro de trabajo me ayuda a mejorar mi desempeño',
    49: 'En mi centro de trabajo me pagan a tiempo mi salario',
    50: 'El pago que recibo es el que merezco por el trabajo que realizo',
    51: 'Si obtengo los resultados esperados en mi trabajo me recompensan o reconocen',
    52: 'Las personas que hacen bien el trabajo pueden crecer laboralmente',
    53: 'Considero que mi trabajo es estable',
    54: 'En mi trabajo existe continua rotación de personal',
    55: 'Siento orgullo de laborar en este centro de trabajo',
    56: 'Me siento comprometido con mi trabajo',
    57: 'En mi trabajo puedo expresarme libremente sin interrupciones',
    58: 'Recibo críticas constantes a mi persona y/o trabajo',
    59: 'Recibo burlas, calumnias, difamaciones, humillaciones o ridiculizaciones',
    60: 'Se ignora mi presencia o se me excluye de las reuniones de trabajo y en la toma de decisiones',
    61: 'Se manipulan las situaciones de trabajo para hacerme parecer un mal trabajador',
    62: 'Se ignoran mis éxitos laborales y se atribuyen a otros trabajadores',
    63: 'Me bloquean o impiden las oportunidades que tengo para obtener ascenso o mejora en mi trabajo',
    64: 'He presenciado actos de violencia en mi centro de trabajo',
    65: 'Atiendo clientes o usuarios muy enojados',
    66: 'Mi trabajo me exige atender personas muy necesitadas de ayuda o enfermas',
    67: 'Para hacer mi trabajo debo demostrar sentimientos distintos a los míos',
    68: 'Mi trabajo me exige atender situaciones de violencia',
    69: 'Comunican tarde los asuntos de trabajo',
    70: 'Dificultan el logro de los resultados del trabajo',
    71: 'Cooperan poco cuando se necesita',
    72: 'Ignoran las sugerencias para mejorar su trabajo'
  },
  bloques: [
    { intro: 'Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo.', items: [1, 2, 3, 4, 5] },
    { intro: 'Para responder a las preguntas siguientes piense en la cantidad y ritmo de trabajo que tiene.', items: [6, 7, 8] },
    { intro: 'Las preguntas siguientes están relacionadas con el esfuerzo mental que le exige su trabajo.', items: [9, 10, 11, 12] },
    { intro: 'Las preguntas siguientes están relacionadas con las actividades que realiza en su trabajo y las responsabilidades que tiene.', items: [13, 14, 15, 16] },
    { intro: 'Las preguntas siguientes están relacionadas con su jornada de trabajo.', items: [17, 18, 19, 20, 21, 22] },
    { intro: 'Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.', items: [23, 24, 25, 26, 27, 28] },
    { intro: 'Las preguntas siguientes están relacionadas con cualquier tipo de cambio que ocurra en su trabajo (considere los últimos cambios realizados).', items: [29, 30] },
    { intro: 'Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.', items: [31, 32, 33, 34, 35, 36] },
    { intro: 'Las preguntas siguientes están relacionadas con el o los jefes con quien tiene contacto.', items: [37, 38, 39, 40, 41] },
    { intro: 'Las preguntas siguientes se refieren a las relaciones con sus compañeros.', items: [42, 43, 44, 45, 46] },
    { intro: 'Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.', items: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56] },
    { intro: 'Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).', items: [57, 58, 59, 60, 61, 62, 63, 64] },
    {
      filtro: 'clientes', introFiltro: 'Las preguntas siguientes están relacionadas con la atención a clientes y usuarios.',
      preguntaFiltro: 'En mi trabajo debo brindar servicio a clientes o usuarios:',
      notaFiltro: 'Si su respuesta fue "SÍ", responda las preguntas siguientes. Si su respuesta fue "NO" pase a las preguntas de la sección siguiente.',
      intro: '', items: [65, 66, 67, 68]
    },
    {
      filtro: 'jefe', introFiltro: '',
      preguntaFiltro: 'Soy jefe de otros trabajadores:',
      notaFiltro: 'Si su respuesta fue "SÍ", responda las preguntas siguientes. Si su respuesta fue "NO", ha concluido el cuestionario.',
      intro: 'Las preguntas siguientes están relacionadas con las actitudes de las personas que supervisa.', items: [69, 70, 71, 72]
    }
  ],
  // Tabla 5: ítems que se califican Siempre=0 ... Nunca=4
  positivos: [1, 4, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
    44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 56, 57],
  final: [50, 75, 99, 140],
  // Tabla 6
  estructura: [
    { cat: 'Ambiente de trabajo', r: [5, 9, 11, 14], dominios: [
      { dom: 'Condiciones en el ambiente de trabajo', r: [5, 9, 11, 14], dims: [
        ['Condiciones peligrosas e inseguras', [1, 3]],
        ['Condiciones deficientes e insalubres', [2, 4]],
        ['Trabajos peligrosos', [5]]] }] },
    { cat: 'Factores propios de la actividad', r: [15, 30, 45, 60], dominios: [
      { dom: 'Carga de trabajo', r: [15, 21, 27, 37], dims: [
        ['Cargas cuantitativas', [6, 12]],
        ['Ritmos de trabajo acelerado', [7, 8]],
        ['Carga mental', [9, 10, 11]],
        ['Cargas psicológicas emocionales', [65, 66, 67, 68]],
        ['Cargas de alta responsabilidad', [13, 14]],
        ['Cargas contradictorias o inconsistentes', [15, 16]]] },
      { dom: 'Falta de control sobre el trabajo', r: [11, 16, 21, 25], dims: [
        ['Falta de control y autonomía sobre el trabajo', [25, 26, 27, 28]],
        ['Limitada o nula posibilidad de desarrollo', [23, 24]],
        ['Insuficiente participación y manejo del cambio', [29, 30]],
        ['Limitada o inexistente capacitación', [35, 36]]] }] },
    { cat: 'Organización del tiempo de trabajo', r: [5, 7, 10, 13], dominios: [
      { dom: 'Jornada de trabajo', r: [1, 2, 4, 6], dims: [
        ['Jornadas de trabajo extensas', [17, 18]]] },
      { dom: 'Interferencia en la relación trabajo-familia', r: [4, 6, 8, 10], dims: [
        ['Influencia del trabajo fuera del centro laboral', [19, 20]],
        ['Influencia de las responsabilidades familiares', [21, 22]]] }] },
    { cat: 'Liderazgo y relaciones en el trabajo', r: [14, 29, 42, 58], dominios: [
      { dom: 'Liderazgo', r: [9, 12, 16, 20], dims: [
        ['Escasa claridad de funciones', [31, 32, 33, 34]],
        ['Características del liderazgo', [37, 38, 39, 40, 41]]] },
      { dom: 'Relaciones en el trabajo', r: [10, 13, 17, 21], dims: [
        ['Relaciones sociales en el trabajo', [42, 43, 44, 45, 46]],
        ['Deficiente relación con los colaboradores que supervisa', [69, 70, 71, 72]]] },
      { dom: 'Violencia', r: [7, 10, 13, 16], dims: [
        ['Violencia laboral', [57, 58, 59, 60, 61, 62, 63, 64]]] }] },
    { cat: 'Entorno organizacional', r: [10, 14, 18, 23], dominios: [
      { dom: 'Reconocimiento del desempeño', r: [6, 10, 14, 18], dims: [
        ['Escasa o nula retroalimentación del desempeño', [47, 48]],
        ['Escaso o nulo reconocimiento y compensación', [49, 50, 51, 52]]] },
      { dom: 'Insuficiente sentido de pertenencia e, inestabilidad', r: [4, 6, 8, 10], dims: [
        ['Limitado sentido de pertenencia', [55, 56]],
        ['Inestabilidad laboral', [53, 54]]] }] }
  ]
};

// Guía de referencia V — Datos del trabajador
const GUIA_V = {
  campos: [
    { id: 'sexo', label: 'Sexo', tipo: 'opcion', opciones: ['Masculino', 'Femenino'] },
    { id: 'edad', label: 'Edad en años', tipo: 'opcion', opciones: ['15 - 19', '20 - 24', '25 - 29', '30 - 34', '35 - 39', '40 - 44', '45 - 49', '50 - 54', '55 - 59', '60 - 64', '65 - 69', '70 o más'] },
    { id: 'estadoCivil', label: 'Estado civil', tipo: 'opcion', opciones: ['Casado', 'Soltero', 'Unión libre', 'Divorciado', 'Viudo'] },
    { id: 'estudios', label: 'Nivel de estudios', tipo: 'opcion', opciones: ['Sin formación', 'Primaria', 'Secundaria', 'Preparatoria o Bachillerato', 'Técnico Superior', 'Licenciatura', 'Maestría', 'Doctorado'] },
    { id: 'estudiosEstado', label: 'Estado de los estudios', tipo: 'opcion', opciones: ['Terminada', 'Incompleta'], dependeDe: 'estudios', ocultarSi: 'Sin formación' },
    { id: 'puesto', label: 'Ocupación/profesión/puesto', tipo: 'texto' },
    { id: 'area', label: 'Departamento/Sección/Área', tipo: 'texto' },
    { id: 'tipoPuesto', label: 'Tipo de puesto', tipo: 'opcion', opciones: ['Operativo', 'Profesional o técnico', 'Supervisor', 'Gerente'] },
    { id: 'contratacion', label: 'Tipo de contratación', tipo: 'opcion', opciones: ['Por obra o proyecto', 'Por tiempo determinado (temporal)', 'Tiempo indeterminado', 'Honorarios'] },
    { id: 'tipoPersonal', label: 'Tipo de personal', tipo: 'opcion', opciones: ['Sindicalizado', 'Confianza', 'Ninguno'] },
    { id: 'jornada', label: 'Tipo de jornada de trabajo', tipo: 'opcion', opciones: ['Fijo nocturno (entre las 20:00 y 6:00 hrs)', 'Fijo diurno (entre las 6:00 y 20:00 hrs)', 'Fijo mixto (combinación de nocturno y diurno)'] },
    { id: 'rotacion', label: 'Realiza rotación de turnos', tipo: 'opcion', opciones: ['Sí', 'No'] },
    { id: 'tiempoPuesto', label: 'Tiempo en el puesto actual', tipo: 'opcion', opciones: ['Menos de 6 meses', 'Entre 6 meses y 1 año', 'Entre 1 a 4 años', 'Entre 5 a 9 años', 'Entre 10 a 14 años', 'Entre 15 a 19 años', 'Entre 20 a 24 años', '25 años o más'] },
    { id: 'experiencia', label: 'Tiempo experiencia laboral', tipo: 'opcion', opciones: ['Menos de 6 meses', 'Entre 6 meses y 1 año', 'Entre 1 a 4 años', 'Entre 5 a 9 años', 'Entre 10 a 14 años', 'Entre 15 a 19 años', 'Entre 20 a 24 años', '25 años o más'] }
  ]
};

// Tabla 4 / Tabla 7 — Criterios para la toma de acciones
const CRITERIOS_ACCION = {
  'Muy alto': 'Se requiere realizar el análisis de cada categoría y dominio para establecer las acciones de intervención apropiadas, mediante un Programa de intervención que deberá incluir evaluaciones específicas, y contemplar campañas de sensibilización, revisar la política de prevención de riesgos psicosociales y programas para la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral, así como reforzar su aplicación y difusión.',
  'Alto': 'Se requiere realizar un análisis de cada categoría y dominio, de manera que se puedan determinar las acciones de intervención apropiadas a través de un Programa de intervención, que podrá incluir una evaluación específica y deberá incluir una campaña de sensibilización, revisar la política de prevención de riesgos psicosociales y programas para la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral, así como reforzar su aplicación y difusión.',
  'Medio': 'Se requiere revisar la política de prevención de riesgos psicosociales y programas para la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral, así como reforzar su aplicación y difusión, mediante un Programa de intervención.',
  'Bajo': 'Es necesario una mayor difusión de la política de prevención de riesgos psicosociales y programas para: la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral.',
  'Nulo o despreciable': 'El riesgo resulta despreciable por lo que no se requiere medidas adicionales.'
};

/* ============================================================================
 *  REGLAS DE APLICACIÓN POR TAMAÑO DEL CENTRO DE TRABAJO (numeral 2 y 7.1)
 * ==========================================================================*/

function guiaPorTamano(n) {
  n = Number(n) || 0;
  if (n <= 15) return 'I';      // Sólo Guía I (5.5) + política (5.1), medidas (5.4), difusión (5.7)
  if (n <= 50) return 'II';     // Guía I + Guía II a TODOS los trabajadores (7.1 a)
  return 'III';                 // Guía I + Guía III, todos o muestra representativa (7.1 b, III.1)
}

// Guía III, numeral III.1, Ecuación 1: n = 0.9604 N / (0.0025 (N − 1) + 0.9604)
function tamanoMuestra(N) {
  N = Number(N) || 0;
  if (N <= 50) return N;
  return Math.ceil((0.9604 * N) / (0.0025 * (N - 1) + 0.9604));
}

function obligacionesPorTamano(n) {
  const g = guiaPorTamano(n);
  if (g === 'I') return 'Hasta 15 trabajadores: numerales 5.1, 5.4, 5.5, 5.7, 8.1 y 8.2 (Guía I para identificar acontecimientos traumáticos severos).';
  if (g === 'II') return 'De 16 a 50 trabajadores: numerales 5.1, 5.2, 5.4 a 5.8, 7.1 a), 7.2, 7.4 a 7.9 y Capítulo 8 (Guía I + Guía II a todos los trabajadores).';
  return 'Más de 50 trabajadores: numerales 5.1, 5.3 a 5.8, 7.1 b), 7.2 a 7.9 y Capítulo 8 (Guía I + Guía III; puede aplicarse a muestra representativa conforme a III.1).';
}

/* ============================================================================
 *  MOTOR DE CALIFICACIÓN
 * ==========================================================================*/

function nivelDe(x, r) {
  if (x < r[0]) return NIVELES[0];
  if (x < r[1]) return NIVELES[1];
  if (x < r[2]) return NIVELES[2];
  if (x < r[3]) return NIVELES[3];
  return NIVELES[4];
}

function itemsRequeridos(guia, filtros) {
  const req = [];
  guia.bloques.forEach(function (b) {
    if (b.filtro && !filtros[b.filtro]) return;
    b.items.forEach(function (n) { req.push(n); });
  });
  return req;
}

/**
 * @param {string} gid 'II' | 'III'
 * @param {Object} resp  {numItem: índiceOpción 0..4}  (0 = Siempre ... 4 = Nunca)
 * @param {Object} filtros {clientes: bool, jefe: bool}
 */
function calificarGuia(gid, resp, filtros) {
  const g = gid === 'II' ? GUIA_II : GUIA_III;
  filtros = filtros || {};
  const req = itemsRequeridos(g, filtros);
  const faltantes = req.filter(function (n) {
    const v = resp[n];
    return v === undefined || v === null || v === '' || isNaN(Number(v)) || Number(v) < 0 || Number(v) > 4;
  });
  if (faltantes.length) throw new Error('Cuestionario incompleto. Reactivos sin responder: ' + faltantes.join(', '));

  const pos = {};
  g.positivos.forEach(function (n) { pos[n] = true; });
  const valor = {};
  Object.keys(g.items).forEach(function (k) {
    const n = Number(k);
    if (req.indexOf(n) === -1) { valor[n] = 0; return; } // ítems de secciones filtradas con "NO" = 0
    const idx = Number(resp[n]);
    valor[n] = pos[n] ? idx : 4 - idx;
  });

  const out = { guia: gid, categorias: [], dominios: [], dimensiones: [], valores: valor };
  let total = 0;
  g.estructura.forEach(function (c) {
    let sc = 0;
    c.dominios.forEach(function (d) {
      let sd = 0;
      d.dims.forEach(function (dm) {
        const s = dm[1].reduce(function (a, n) { return a + valor[n]; }, 0);
        out.dimensiones.push({ categoria: c.cat, dominio: d.dom, nombre: dm[0], items: dm[1], puntaje: s });
        sd += s;
      });
      out.dominios.push({ categoria: c.cat, nombre: d.dom, puntaje: sd, nivel: nivelDe(sd, d.r) });
      sc += sd;
    });
    out.categorias.push({ nombre: c.cat, puntaje: sc, nivel: nivelDe(sc, c.r) });
    total += sc;
  });
  out.cfinal = total;
  out.nivelFinal = nivelDe(total, g.final);
  return out;
}

/** Guía I, criterio GR.I */
function evaluarGuiaI(r) {
  r = r || {};
  const si = function (n) { return r[n] === true || r[n] === 'SI' || r[n] === 'Sí' || r[n] === 1; };
  const rango = function (a, b) { const x = []; for (let i = a; i <= b; i++) x.push(i); return x; };
  const secI = rango(1, 6);
  secI.forEach(function (n) { if (r[n] === undefined || r[n] === null) throw new Error('Guía I incompleta (Sección I).'); });
  const evento = secI.some(si);
  let s2 = 0, s3 = 0, s4 = 0, valoracion = false, criterios = [];
  if (evento) {
    rango(7, 20).forEach(function (n) { if (r[n] === undefined || r[n] === null) throw new Error('Guía I incompleta (secciones II a IV).'); });
    s2 = rango(7, 8).filter(si).length;
    s3 = rango(9, 15).filter(si).length;
    s4 = rango(16, 20).filter(si).length;
    if (s2 >= 1) criterios.push('Sección II: al menos una respuesta "Sí"');
    if (s3 >= 3) criterios.push('Sección III: tres o más respuestas "Sí"');
    if (s4 >= 2) criterios.push('Sección IV: dos o más respuestas "Sí"');
    valoracion = criterios.length > 0;
  }
  return { evento: evento, siSecII: s2, siSecIII: s3, siSecIV: s4, requiereValoracion: valoracion, criterios: criterios };
}

