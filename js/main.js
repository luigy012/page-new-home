// ============================================================
//  IVONNE TOUR RD — JAVASCRIPT (versión legible para editar)
//
//  Este archivo está des-minificado: cada cosa en su línea,
//  con espacios, para que puedas editar cómodo.
//
//  SECCIONES (usa Ctrl+F para saltar a cada una):
//    - FOTO / PIC .......... diccionario de fotos y buscador
//    - CATS ................ datos del HERO (3 categorías)
//    - renderDeck / paint .. dibujan el hero y sus cajas
//    - TRIBU ............... carrusel de videos
//    - XC / renderXc ....... excursiones por destino
//    - TOURS ............... slider de paquetes
//    - GUIDE ............... guía Angélica con modal
//    - REVEAL .............. animaciones al hacer scroll
//
//  Para cambiar los TEXTOS del hero: busca 'headline:' 'badge:' 'sub:'
//  Para cambiar las FOTOS: busca 'PIC(' o el diccionario FOTO
// ============================================================


/* ============================================================
   FOTOS REALES DE IVONNE TOUR RD
   Cada clave es un hueco del diseño; el valor es el archivo.
   ¿Quieres cambiar una foto? Cambia SOLO el nombre del archivo.
   Este HTML debe estar en la MISMA carpeta que las fotos.
   ============================================================ */
const FOTO = {
  'ivonnetierra9': 'mirador-valle-mar.jpg',
  'ivonneagua5': 'marina-botes.jpg',
  'ivonneeventos7': 'familia-safari.jpg',
  'buggy4': 'cuatrimoto-playa.jpg',
  'horse7': 'nina-caballo.jpg',
  'safari2': 'base-cuatrimotos.jpg',
  'snorkel3': 'cenote-selfie.jpg',
  'catamaran8': 'amigas-bote-1.jpg',
  'jetski6': 'cuatrimoto-playa.jpg',
  'dinner5': 'grupo-palapa-1.jpg',
  'party9': 'amigas-bote-2.jpg',
  'show1': 'grupo-evolution-1.jpg',
  'samana2': 'amigas-bote-1.jpg',
  'barro8': 'grupo-palapa-1.jpg',
  'fiesta3': 'grupo-palapa-2.jpg',
  'bahia5': 'marina-botes.jpg',
  'selva7': 'rio-grupo.jpg',
  'arrecife4': 'cenote-selfie.jpg',
  'cena11': 'grupo-evolution-1.jpg',
  'safari12': 'base-cuatrimotos.jpg',
  'hoyoazul6': 'ivonne-scape-park.jpg',
  'merengue9': 'grupo-cascada-1.jpg',
  'limon14': 'grupo-cascada-2.jpg',
  'ballena15': 'familia-safari.jpg',
  'snorkelx': 'cenote-selfie.jpg',
  'catx': 'amigas-bote-2.jpg',
  'jetx': 'cuatrimoto-playa.jpg',
  'buggyx': 'cuatrimoto-playa.jpg',
  'saonax': 'marina-botes.jpg',
  'hoyox': 'ivonne-scape-park.jpg',
  'ziplinex': 'nina-tirolesa.jpg',
  'telefx': 'mirador-valle-mar.jpg',
  'charcosx': 'rio-grupo.jpg',
  'doradax': 'marina-botes.jpg',
  'cityvx': 'grupo-evolution-2.jpg',
  'monkeyx': 'familia-cabras.jpg',
  'ballenasx': 'marina-botes.jpg',
  'limonx': 'grupo-cascada-3.jpg',
  'cayox': 'marina-botes.jpg',
  'rinconx': 'mirador-valle-mar.jpg',
  'haitisesx': 'rio-grupo.jpg',
  'kayaksx': 'amigas-bote-1.jpg',
  'zonacolx': 'grupo-evolution-2.jpg',
  'tresojosx': 'cenote-selfie.jpg',
  'farox': 'grupo-evolution-1.jpg',
  'acuariox': 'familia-cabras.jpg',
  'pcaribe6': 'marina-botes.jpg',
  'pterr4': 'cuatrimoto-playa.jpg',
  'pepica9': 'rio-grupo.jpg',
  'ptotal3': 'mirador-valle-mar.jpg',
  'promant7': 'amigas-bote-1.jpg'
};

function PIC(seed, w, h) {
  // Las fotos están en la carpeta images/
  return FOTO[seed] ? encodeURI('images/' + FOTO[seed]) : 'https://picsum.photos/seed/' + seed + '/' + w + '/' + h;
}

// (El detector de fotos del original se quitó para trabajar más limpio)

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* TRIBU */
const TRIBU = [{
    c: 'var(--b)',
    eye: 'Experiencia Acuatica',
    t: 'Adrenalina en Samana',
    s: 'Jet Ski Extreme',
    img: 'samana2'
  },
  {
    c: 'var(--g2)',
    eye: 'Aventura Terrestre',
    t: 'Dominando el Barro',
    s: 'Buggy Jungle',
    img: 'barro8'
  },
  {
    c: 'var(--o)',
    eye: 'Evento Exclusivo',
    t: 'Fiesta Infinita',
    s: 'Party Catamaran',
    img: 'fiesta3'
  },
  {
    c: 'var(--b)',
    eye: 'Experiencia Acuatica',
    t: 'Bahia de Suenos',
    s: 'Catamaran al Atardecer',
    img: 'bahia5'
  },
  {
    c: 'var(--g2)',
    eye: 'Aventura Terrestre',
    t: 'Selva Indomita',
    s: 'Zipline & Trekking',
    img: 'selva7'
  },
  {
    c: 'var(--b)',
    eye: 'Experiencia Acuatica',
    t: 'Colores del Arrecife',
    s: 'Snorkel en Saona',
    img: 'arrecife4'
  },
  {
    c: 'var(--o)',
    eye: 'Evento Exclusivo',
    t: 'Cena Bajo las Estrellas',
    s: 'Playa Privada',
    img: 'cena11'
  },
  {
    c: 'var(--g2)',
    eye: 'Aventura Terrestre',
    t: 'Barro y Polvo',
    s: 'Safari Dominicano',
    img: 'safari12'
  },
  {
    c: 'var(--b)',
    eye: 'Experiencia Acuatica',
    t: 'Salto al Hoyo Azul',
    s: 'Cenote Turquesa',
    img: 'hoyoazul6'
  },
  {
    c: 'var(--o)',
    eye: 'Evento Exclusivo',
    t: 'Noche de Merengue',
    s: 'Show Cultural',
    img: 'merengue9'
  },
  {
    c: 'var(--g2)',
    eye: 'Aventura Terrestre',
    t: 'Cascada El Limon',
    s: 'Cabalgata en Samana',
    img: 'limon14'
  },
  {
    c: 'var(--b)',
    eye: 'Experiencia Acuatica',
    t: 'Gigantes del Mar',
    s: 'Ballenas Jorobadas',
    img: 'ballena15'
  }
];
const track = document.getElementById('tribuTrack'),
  tdotsW = document.getElementById('tdots');
TRIBU.forEach((v, i) => {
  const a = document.createElement('article');
  a.className = 'vid';
  a.style.setProperty('--c', v.c);
  a.innerHTML = `<img src="${PIC(v.img,600,800)}" alt=""><span class="verified">✓ Tour Verificado</span><button class="play"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button><div class="vinfo"><span class="veyebrow">${v.eye}</span><h3 class="vtitle">${v.t}</h3><span class="vsub">${v.s}</span></div><span class="vbar"></span>`;
  track.appendChild(a);
  const d = document.createElement('i');
  if (i === 0) d.className = 'on';
  d.onclick = () => {
    const card = track.children[i];
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: 'smooth'
    });
  };
  tdotsW.appendChild(d);
});
const tdots = [...tdotsW.children];
track.addEventListener('scroll', () => {
  const cw = track.children[0].offsetWidth + 22;
  const n = Math.round(track.scrollLeft / cw);
  tdots.forEach((d, i) => d.classList.toggle('on', i === n));
});
document.querySelectorAll('.tribu .rn').forEach(btn => btn.onclick = () => track.scrollBy({
  left: btn.dataset.dir * 344,
  behavior: 'smooth'
}));

/* EXCURSIONES por destino (slider) */
const XC = {
  puntacana: [{
      img: 'snorkelx',
      extra: ['Equipo de snorkel premium', 'Refrigerio y bebidas a bordo'],
      dur: '2.5 h',
      name: 'Snorkel en Arrecifes',
      desc: 'Sumérgete en el ecosistema más vibrante del Caribe con equipo premium.',
      tag: '★ Favorito',
      price: 45
    },
    {
      img: 'catx',
      extra: ['Barra libre nacional', 'DJ en vivo y animación'],
      dur: '4 h',
      name: 'Fiesta en un Catamarán',
      desc: 'Barra libre, DJ en vivo y parada en piscina natural. La fiesta sobre el mar.',
      tag: 'Casi agotado',
      price: 89
    },
    {
      img: 'jetx',
      extra: ['Jet Ski individual o doble', 'Instructor certificado'],
      dur: '1.5 h',
      name: 'Jet Ski Adventure',
      desc: 'Adrenalina y velocidad pura por las calas más escondidas.',
      tag: 'Top ventas',
      price: 120
    },
    {
      img: 'buggyx',
      extra: ['Buggy full equipo', 'Casco, gafas y pañuelo'],
      dur: '3 h',
      name: 'Buggy Extremo',
      desc: 'Domina el barro y los senderos vírgenes en un todoterreno.',
      tag: 'Muy pedido',
      price: 65
    },
    {
      img: 'saonax',
      extra: ['Almuerzo buffet caribeño', 'Catamarán con barra libre'],
      dur: '8 h',
      name: 'Isla Saona Completa',
      desc: 'Playas blancas, piscina natural y almuerzo buffet en el paraíso.',
      tag: 'Imperdible',
      price: 95
    },
    {
      img: 'hoyox',
      extra: ['Entrada a Scape Park', 'Chaleco y casco incluidos'],
      dur: '5 h',
      name: 'Hoyo Azul & Scape Park',
      desc: 'Nada en un cenote turquesa rodeado de selva tropical.',
      tag: 'Nuevo',
      price: 79
    },
    {
      img: 'ziplinex',
      extra: ['12 cables de tirolesa', 'Arnés y casco profesional'],
      dur: '3 h',
      name: 'Zipline en la Selva',
      desc: 'Vuela sobre las copas de los árboles a toda velocidad.',
      tag: 'Pura adrenalina',
      price: 59
    }
  ],
  puertoplata: [{
      img: 'telefx',
      extra: ['Boleto de teleférico ida y vuelta', 'Acceso a jardines botánicos'],
      dur: '3 h',
      name: 'Teleférico Pico Isabel',
      desc: 'Vistas de 360° de la ciudad y el mar desde la cima.',
      tag: 'Vista top',
      price: 40
    },
    {
      img: 'charcosx',
      extra: ['Casco, chaleco y zapatos', 'Almuerzo dominicano'],
      dur: '5 h',
      name: '27 Charcos de Damajagua',
      desc: 'Salta y deslízate por cascadas naturales escondidas.',
      tag: '★ Favorito',
      price: 70
    },
    {
      img: 'doradax',
      extra: ['Day pass todo incluido', 'Silla y sombrilla en playa'],
      dur: '6 h',
      name: 'Playa Dorada Day Pass',
      desc: 'Sol, arena dorada y todo incluido frente al mar.',
      tag: 'Relax total',
      price: 55
    },
    {
      img: 'cityvx',
      extra: ['Guía historiador local', 'Paradas fotográficas'],
      dur: '4 h',
      name: 'City Tour Victoriano',
      desc: 'Recorre la arquitectura victoriana y el malecón histórico.',
      tag: 'Cultural',
      price: 35
    },
    {
      img: 'monkeyx',
      extra: ['Encuentro con monos ardilla', '7 cables de tirolesa'],
      dur: '4 h',
      name: 'Monkey Jungle & Zipline',
      desc: 'Conoce monos ardilla y vuela en tirolesa sobre la jungla.',
      tag: 'Familiar',
      price: 62
    }
  ],
  samana: [{
      img: 'ballenasx',
      extra: ['Embarcación certificada', 'Guía biólogo a bordo'],
      dur: '6 h',
      name: 'Avistamiento de Ballenas',
      desc: 'Observa ballenas jorobadas en su hábitat natural (temporada).',
      tag: 'Único',
      price: 99
    },
    {
      img: 'limonx',
      extra: ['Cabalgata ida y vuelta', 'Almuerzo típico y bebidas'],
      dur: '5 h',
      name: 'Cascada El Limón',
      desc: 'Cabalga hasta una cascada de 40m en plena selva.',
      tag: 'Aventura',
      price: 68
    },
    {
      img: 'cayox',
      extra: ['Traslado en lancha', 'Almuerzo buffet en la isla'],
      dur: '7 h',
      name: 'Cayo Levantado',
      desc: 'La isla Bacardí: arena blanca y aguas cristalinas.',
      tag: 'Imperdible',
      price: 85
    },
    {
      img: 'rinconx',
      extra: ['Almuerzo de pescado fresco', 'Tiempo libre en la playa'],
      dur: '8 h',
      name: 'Playa Rincón',
      desc: 'Una de las playas más hermosas del mundo, virgen y tranquila.',
      tag: 'Paraíso',
      price: 90
    },
    {
      img: 'haitisesx',
      extra: ['Recorrido en lancha techada', 'Visita a cuevas taínas'],
      dur: '6 h',
      name: 'Parque Los Haitises',
      desc: 'Manglares, cuevas taínas y aves exóticas en lancha.',
      tag: 'Naturaleza',
      price: 75
    },
    {
      img: 'kayaksx',
      extra: ['Kayak doble o individual', 'Chaleco salvavidas'],
      dur: '3 h',
      name: 'Kayak en Manglares',
      desc: 'Rema entre túneles de manglar en aguas tranquilas.',
      tag: 'Relax',
      price: 48
    }
  ],
  santodomingo: [{
      img: 'zonacolx',
      extra: ['Guía historiador certificado', 'Entradas a museos'],
      dur: '4 h',
      name: 'Zona Colonial',
      desc: 'Camina por la primera ciudad de América y su historia viva.',
      tag: 'Cultural',
      price: 42
    },
    {
      img: 'tresojosx',
      extra: ['Entrada al parque', 'Paseo en balsa por el lago'],
      dur: '3 h',
      name: 'Los Tres Ojos',
      desc: 'Lagos subterráneos color esmeralda en una cueva mágica.',
      tag: '★ Favorito',
      price: 38
    },
    {
      img: 'farox',
      extra: ['Entrada al monumento', 'Guía cultural'],
      dur: '3 h',
      name: 'Faro a Colón',
      desc: 'El monumento imponente que honra al descubridor.',
      tag: 'Histórico',
      price: 30
    },
    {
      img: 'acuariox',
      extra: ['Entrada al acuario', 'Recorrido por el túnel marino'],
      dur: '3 h',
      name: 'Acuario Nacional',
      desc: 'Un túnel de cristal rodeado de vida marina del Caribe.',
      tag: 'Familiar',
      price: 28
    }
  ]
};
const excTrack = document.getElementById('excTrack'),
  excTabs = document.getElementById('excTabs'),
  excDotsW = document.getElementById('excDots');
let excDots = [];
const CK = '<span class="ck"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
const CLK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const ZONA = {
  puntacana: 'Punta Cana / Bavaro',
  puertoplata: 'Puerto Plata',
  samana: 'Samana',
  santodomingo: 'Santo Domingo'
};
let xcTimers = [];

function renderXc(dest) {
  xcTimers.forEach(t => clearInterval(t));
  xcTimers = [];
  excTrack.innerHTML = '';
  excDotsW.innerHTML = '';
  const baseF = ['Recogida en tu hotel (' + ZONA[dest] + ')', 'Guia certificado bilingue', 'Kit basico de seguridad', 'Seguro de viaje incluido', 'Apto para todas las edades'];
  XC[dest].forEach((x, i) => {
    const a = document.createElement('article');
    a.className = 'xcard';
    const seeds = [x.img, x.img + 'b', x.img + 'c'];
    const slides = seeds.map((s, j) => `<div class="es ${j===0?'on':''}"><img src="${PIC(s,720,450)}" alt=""></div>`).join('');
    const dts = seeds.map((_, j) => `<i class="${j===0?'on':''}"></i>`).join('');
    const feats = [...x.extra, ...baseF];
    a.innerHTML = `<div class="ximg">${slides}<span class="xdur">${CLK} ${x.dur}</span><span class="xtag">${x.tag}</span><div class="xdots">${dts}</div></div>
      <div class="xbody"><h3 class="xname">${x.name}</h3><p class="xdesc">${x.desc}</p>
      <ul class="xfeats">${feats.map(f=>`<li>${CK}${f}</li>`).join('')}</ul>
      <div class="xfoot"><div class="xprice"><span>Desde</span><b>$${x.price}</b><small>/pers</small></div></div>
      <button class="btn btn-green" style="width:100%;margin-top:14px">Reservar Ahora <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>`;
    excTrack.appendChild(a);
    const es = [...a.querySelectorAll('.es')],
      xd = [...a.querySelectorAll('.xdots i')];
    let ci = 0;

    function show(n) {
      ci = (n + es.length) % es.length;
      es.forEach((e, k) => e.classList.toggle('on', k === ci));
      xd.forEach((e, k) => e.classList.toggle('on', k === ci));
    }
    xd.forEach((d, k) => d.addEventListener('click', ev => {
      ev.stopPropagation();
      show(k);
    }));
    if (!reduce) xcTimers.push(setInterval(() => show(ci + 1), 3400 + i * 300));
    const d = document.createElement('i');
    if (i === 0) d.className = 'on';
    d.onclick = () => {
      const c = excTrack.children[i];
      excTrack.scrollTo({
        left: c.offsetLeft - excTrack.offsetLeft,
        behavior: 'smooth'
      });
    };
    excDotsW.appendChild(d);
  });
  excDots = [...excDotsW.children];
  excTrack.scrollTo({
    left: 0
  });
}
excTrack.addEventListener('scroll', () => {
  if (!excTrack.children.length) return;
  const cw = excTrack.children[0].offsetWidth + 22;
  const n = Math.round(excTrack.scrollLeft / cw);
  excDots.forEach((d, i) => d.classList.toggle('on', i === n));
});
excTabs.addEventListener('click', e => {
  const t = e.target.closest('.tab');
  if (!t) return;
  [...excTabs.children].forEach(x => x.classList.toggle('active', x === t));
  renderXc(t.dataset.dest);
});
document.querySelectorAll('.exc .rn').forEach(btn => btn.onclick = () => excTrack.scrollBy({
  left: btn.dataset.xdir * 362,
  behavior: 'smooth'
}));
renderXc('puntacana');

/* TOURS slider */
const ICO = {
  transporte: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17h13V7H3zM16 10h3.5L22 13v4h-6z"/><circle cx="7" cy="18.5" r="1.4"/><circle cx="18" cy="18.5" r="1.4"/></svg>',
  comidas: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 3v9a3 3 0 0 0 6 0V3M7 12v9M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4 2.5-1 2.5-4-1-5-2.5-5zM17 12v9"/></svg>',
  hotel: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20V9l9-5 9 5v11M3 20h18M9 20v-6h6v6"/></svg>',
  guia: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.2"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>'
};
const ICO_L = {
  transporte: 'Traslados',
  comidas: 'Comidas',
  hotel: 'Hotel',
  guia: 'Guía'
};
const TOURS = [{
    img: 'pcaribe6',
    days: '3 Días',
    best: true,
    name: 'Caribe Total',
    desc: 'Tres días de inmersión total: playas de Saona, arrecifes secretos y noches inolvidables.',
    chips: ['Isla Saona', 'Alojamiento 4★', 'Open Bar', 'Fiesta & Discoteca'],
    rating: '4.9',
    was: 349,
    now: 249,
    itin: ['Isla Saona completa: piscina natural, almuerzo en la playa y regreso en catamarán.', 'Arrecifes escondidos en la mañana y tarde libre en la playa del hotel.', 'Zona colonial o playa, y salida de noche antes del regreso.'],
    inc: ['transporte', 'comidas', 'hotel', 'guia'],
    max: 'Máx 14 personas',
    cupo: 'Quedan 4 cupos este mes'
  },

  {
    img: 'pterr4',
    days: '2 Días',
    name: 'Trilogía Terrestre',
    desc: 'Buggies extremos, selva virgen y saltos en tirolesa. Pura adrenalina por tierra.',
    chips: ['Buggy', 'Zipline', 'Alojamiento', 'Almuerzo típico'],
    rating: '4.8',
    was: 199,
    now: 159,
    itin: ['Buggies por caminos de campo, parada en cueva y playa. Almuerzo típico.', 'Circuito de tirolesas sobre la selva y baño en el río antes de volver.'],
    inc: ['transporte', 'comidas', 'hotel', 'guia'],
    max: 'Máx 12 personas',
    cupo: 'Quedan 6 cupos este mes'
  },

  {
    img: 'pepica9',
    days: '2 Días',
    name: 'Exploración Épica',
    desc: 'Selva profunda, river kayaking y cenotes. La esencia indómita de la isla.',
    chips: ['Kayak', 'Cenotes', 'Eco-lodge', 'Comidas'],
    rating: '5.0',
    was: 179,
    now: 139,
    itin: ['Kayak río abajo entre la selva y almuerzo a la orilla del agua.', 'Cenotes de agua dulce y caminata guiada antes del regreso.'],
    inc: ['transporte', 'comidas', 'hotel', 'guia'],
    max: 'Máx 10 personas',
    cupo: 'Grupos pequeños · quedan 3 cupos'
  },

  {
    img: 'ptotal3',
    days: '3 Días',
    name: 'Aventura Total 360',
    desc: 'Tierra, mar y eventos en un solo viaje. La experiencia más completa del Caribe.',
    chips: ['Todo incluido', 'Guía privado', 'Traslados VIP', 'Hotel'],
    rating: '4.9',
    was: 399,
    now: 299,
    itin: ['Safari de montaña, finca típica y mirador con vista al mar.', 'Día completo de mar: catamarán, snorkel y playa.', 'Cultura y despedida: pueblo, comida local y noche libre.'],
    inc: ['transporte', 'comidas', 'hotel', 'guia'],
    max: 'Máx 16 personas',
    cupo: 'El más pedido en temporada alta'
  },

  {
    img: 'promant7',
    days: '2 Días',
    name: 'Escape Romántico',
    desc: 'Cena bajo las estrellas, catamarán al atardecer y spa frente al mar para dos.',
    chips: ['Cena gourmet', 'Spa', 'Catamarán', 'Suite'],
    rating: '5.0',
    was: 259,
    now: 199,
    itin: ['Llegada, spa de pareja frente al mar y cena privada bajo las estrellas.', 'Catamarán al atardecer con bebidas y regreso sin prisa.'],
    inc: ['transporte', 'comidas', 'hotel', 'guia'],
    max: 'Solo para 2 personas',
    cupo: 'Se reserva con 5 días de anticipación'
  }
];
const toursTrack = document.getElementById('toursTrack'),
  toursDotsW = document.getElementById('toursDots');
TOURS.forEach((t, i) => {
  const a = document.createElement('article');
  a.className = 'tour';
  a.innerHTML = `<div class="timg"><img src="${PIC(t.img,720,450)}" alt=""><span class="tday">${t.days}</span>${t.best?'<span class="tbest">Más Vendido</span>':''}<span class="tsave">Ahorra $${t.was-t.now}</span></div>
    <div class="tbody"><div class="ttop"><h3 class="tname">${t.name}</h3><div class="trate"><span class="stars">★</span>${t.rating}</div></div>
    <p class="tdesc">${t.desc}</p>
    <div class="tchips">${t.chips.map(c=>`<span class="tchip">${c}</span>`).join('')}</div>

    <div class="titin">
      <div class="titin-h">Día a día</div>
      ${t.itin.map((d,k)=>`<div class="tday-row"><span class="tday-n">${k+1}</span><div>${d}</div></div>`).join('')}
    </div>

    <div class="tinc">${t.inc.map(k=>`<span>${ICO[k]} ${ICO_L[k]}</span>`).join('')}<span>${t.max}</span></div>

    <div class="tprice">
      <div class="tsep">Reservando suelto te sale en <b>$${t.was}</b></div>
      <span class="tlabel">En paquete</span>
      <div class="prow"><s class="twas">$${t.was}</s><b class="tnow">$${t.now}</b><small>/pers</small></div>
      <span class="tgain">Te quedas con $${t.was-t.now}</span>
    </div>
    <div class="tcupo"><i></i>${t.cupo}</div>
    <button class="btn btn-green" style="width:100%;margin-top:14px">Reservar Ahora <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>`;
  toursTrack.appendChild(a);
  const d = document.createElement('i');
  if (i === 0) d.className = 'on';
  d.onclick = () => {
    const c = toursTrack.children[i];
    toursTrack.scrollTo({
      left: c.offsetLeft - toursTrack.offsetLeft,
      behavior: 'smooth'
    });
  };
  toursDotsW.appendChild(d);
});
const toursDots = [...toursDotsW.children];
toursTrack.addEventListener('scroll', () => {
  const cw = toursTrack.children[0].offsetWidth + 22;
  const n = Math.round(toursTrack.scrollLeft / cw);
  toursDots.forEach((d, i) => d.classList.toggle('on', i === n));
});
document.querySelectorAll('.packs .rn').forEach(btn => btn.onclick = () => toursTrack.scrollBy({
  left: btn.dataset.tdir * 382,
  behavior: 'smooth'
}));

/* GUÍA ANGÉLICA */
const GUIDE = [{
    topic: 'Vestimenta',
    title: 'Cómo vestir para los tours',
    dur: '0:45',
    img: 'gvest',
    text: 'Ropa ligera y transpirable, calzado cerrado para tierra y sandalias para el agua. Lleva una muda extra, gorra y lentes de sol.'
  },
  {
    topic: 'Reservar',
    title: 'Guía de reserva fácil',
    dur: '1:20',
    img: 'gres',
    text: 'Reserva con anticipación para asegurar tu cupo. Confirma fecha, hora y punto de recogida, y guarda siempre tu comprobante.'
  },
  {
    topic: 'Qué llevar',
    title: 'Qué llevar en tu mochila',
    dur: '0:55',
    img: 'gmoch',
    text: 'Protector solar, agua, toalla, cámara acuática y algo de efectivo para propinas y compras. Menos es más.'
  },
  {
    topic: 'Clima',
    title: 'Clima y mejor época',
    dur: '1:05',
    img: 'gclima',
    text: 'El Caribe es cálido todo el año. La temporada seca (dic–abr) es la ideal para excursiones al aire libre.'
  },
  {
    topic: 'Propinas',
    title: 'Propinas: cuánto y a quién',
    dur: '0:50',
    img: 'gprop',
    text: 'Un 10–15% para guías y choferes es lo habitual si quedaste satisfecho. Lleva billetes pequeños a mano.'
  },
  {
    topic: 'El día del tour',
    title: 'Qué esperar el día del tour',
    dur: '1:10',
    img: 'gdia',
    text: 'Llega 10 minutos antes al punto de recogida, desayuna ligero y ten tu comprobante listo. Relájate y disfruta.'
  },
  {
    topic: 'Seguridad',
    title: 'Consejos de seguridad',
    dur: '0:40',
    img: 'gseg',
    text: 'Sigue siempre las indicaciones del guía, usa chaleco salvavidas en el agua y cuida tus pertenencias en todo momento.'
  }
];
const gtabsW = document.getElementById('gtabs'),
  guideTrack = document.getElementById('guideTrack'),
  guideDotsW = document.getElementById('guideDots');
const gmodal = document.getElementById('gmodal'),
  gbox = document.getElementById('gbox'),
  gback = document.getElementById('gback');
let guideDots = [];
GUIDE.forEach((g, i) => {
  const tab = document.createElement('button');
  tab.className = 'gtab' + (i === 0 ? ' active' : '');
  tab.textContent = g.topic;
  tab.onclick = () => {
    const c = guideTrack.children[i];
    guideTrack.scrollTo({
      left: c.offsetLeft - guideTrack.offsetLeft,
      behavior: 'smooth'
    });
  };
  gtabsW.appendChild(tab);
  const a = document.createElement('article');
  a.className = 'gvid';
  a.innerHTML = `<img src="${PIC(g.img,500,720)}" alt=""><span class="gdur">${g.dur}</span><button class="gplay"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button><div class="gvinfo"><span class="geyebrow">${g.topic}</span><div class="gtitle">${g.title}</div></div>`;
  a.onclick = () => openGuide(i);
  guideTrack.appendChild(a);
  const d = document.createElement('i');
  if (i === 0) d.className = 'on';
  d.onclick = () => {
    const c = guideTrack.children[i];
    guideTrack.scrollTo({
      left: c.offsetLeft - guideTrack.offsetLeft,
      behavior: 'smooth'
    });
  };
  guideDotsW.appendChild(d);
});
guideDots = [...guideDotsW.children];
guideTrack.addEventListener('scroll', () => {
  const cw = guideTrack.children[0].offsetWidth + 20;
  const n = Math.round(guideTrack.scrollLeft / cw);
  guideDots.forEach((d, i) => d.classList.toggle('on', i === n));
  [...gtabsW.children].forEach((x, i) => x.classList.toggle('active', i === n));
});
document.querySelectorAll('.guide .rn').forEach(btn => btn.onclick = () => guideTrack.scrollBy({
  left: btn.dataset.gdir * 282,
  behavior: 'smooth'
}));

function openGuide(i) {
  const g = GUIDE[i];
  gbox.innerHTML = `<div class="gthumb"><img src="${PIC(g.img,700,400)}" alt=""><button class="gbigplay"><svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button><button class="gclose" id="gcloseBtn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></div><div class="gcontent"><span class="gceyebrow">${g.topic}</span><h3 class="gctitle">${g.title}</h3><p class="gctext">${g.text}</p></div>`;
  gmodal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('gcloseBtn').onclick = closeGuide;
}

function closeGuide() {
  gmodal.classList.remove('open');
  document.body.style.overflow = '';
}
gback.onclick = closeGuide;
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeGuide();
});

/* REVEAL + STAGGER */
const io = new IntersectionObserver((es) => {
  es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, {
  threshold: .14
});
document.querySelectorAll('.reveal,.stagger').forEach(el => io.observe(el));

/* ICONOS DE VIAJE QUE CAMBIAN (con vida) */
const TICONS = [
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 12l19-8-8 19-2.6-8.2L2 12z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3c3.2 3 3.2 15 0 18M12 3c-3.2 3-3.2 15 0 18" stroke="currentColor" stroke-width="1.7"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1z" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h2l-.7-11c1.9-.5 3.6.4 4.7 1.8-.1-2.5-1.9-3.9-4.2-4 1.8-1.2 3.9-.9 5.5.6-.7-2.4-3.2-3.5-5.6-2.7C12.2 3.6 11.2 3 10 3c1 .4 1.3 1.2 1.3 1.2S10 3.7 8.6 4.3c1 0 1.5.6 1.5.6C7.6 4.3 5.3 5.4 4.7 7.9c1.4-1.3 3.2-1.7 5-1-2.2 0-3.9 1.4-4 3.9 1.1-1.4 2.8-2.3 4.6-1.8L11 21z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3l6 9h-6V3zM11 5v7H5l6-7zM3 14h18l-2.5 4.5A4 4 0 0 1 15 21H9a4 4 0 0 1-3.5-2.5L3 14z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4h6a1 1 0 0 1 1 1v2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2V5a1 1 0 0 1 1-1zm1 3h4V6h-4v1z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4l-1.5 2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5L15 4H9zm3 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>'
];
document.querySelectorAll('.tic').forEach((slot, i) => {
  let k = (i * 2) % TICONS.length;
  slot.innerHTML = TICONS[k];
  if (reduce) return;
  setInterval(() => {
    slot.classList.add('fade');
    setTimeout(() => {
      k = (k + 1) % TICONS.length;
      slot.innerHTML = TICONS[k];
      slot.classList.remove('fade');
    }, 500);
  }, 3200 + i * 850);
});

/* preguntas de paquetes */
document.querySelectorAll('.pq button').forEach(b => {
  b.onclick = () => {
    const q = b.parentElement,
      ya = q.classList.contains('on');
    document.querySelectorAll('.pq').forEach(x => x.classList.remove('on'));
    if (!ya) q.classList.add('on');
  };
});

/* ===== IVONNE: protagonista + prueba social ===== */
const IVONNE_FOTO = 'ivonne-scape-park.jpg';
const CLIENTES = [
  ['familia-safari.jpg', 'Familia completa en el safari de montaña'],
  ['grupo-evolution-1.jpg', 'Grupo en Evolution Adventure Park'],
  ['grupo-palapa-1.jpg', 'Cerrando el día en la palapa'],
  ['familia-cabras.jpg', 'Parada con los animales — la favorita de los niños'],
  ['grupo-cascada-1.jpg', 'Todo el grupo listo para el descenso'],
  ['amigas-bote-2.jpg', 'Día de bote con las muchachas'],
  ['nina-caballo.jpg', 'Primera cabalgata'],
  ['grupo-evolution-2.jpg', 'Otro grupo que se fue feliz']
];
document.getElementById('ivoFoto').src = encodeURI(IVONNE_FOTO);
const ZM = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M11 8v6M8 11h6" stroke-linecap="round"/></svg>';
const ivoTrack = document.getElementById('ivoTrack');
ivoTrack.innerHTML = CLIENTES.map(([f, c], i) =>
  `<div class="ivo-shot" data-i="${i}"><img src="${encodeURI(f)}" alt="${c}" loading="lazy"><div class="zoom">${ZM}</div><div class="cap">${c}</div></div>`).join('');

/* ---- flechas + puntos ---- */
const ivoDots = document.getElementById('ivoDots');
CLIENTES.forEach((_, i) => {
  const d = document.createElement('i');
  if (i === 0) d.className = 'on';
  d.onclick = () => slideTo(i);
  ivoDots.appendChild(d);
});

function paso() {
  const c = ivoTrack.children[0];
  return c ? c.offsetWidth + 14 : 260;
}

function slideTo(i) {
  ivoTrack.scrollTo({
    left: i * paso(),
    behavior: 'smooth'
  });
}
document.getElementById('ivoPrev').onclick = () => ivoTrack.scrollBy({
  left: -paso() * 2,
  behavior: 'smooth'
});
document.getElementById('ivoNext').onclick = () => ivoTrack.scrollBy({
  left: paso() * 2,
  behavior: 'smooth'
});
ivoTrack.addEventListener('scroll', () => {
  const n = Math.round(ivoTrack.scrollLeft / paso());
  [...ivoDots.children].forEach((d, i) => d.classList.toggle('on', i === n));
});

/* ---- visor grande ---- */
const lb = document.getElementById('lb'),
  lbImg = document.getElementById('lbImg'),
  lbCap = document.getElementById('lbCap'),
  lbNum = document.getElementById('lbNum');
let lbI = 0;

function abrir(i) {
  lbI = (i + CLIENTES.length) % CLIENTES.length;
  const [f, c] = CLIENTES[lbI];
  lbImg.src = encodeURI(f);
  lbImg.alt = c;
  lbCap.textContent = c;
  lbNum.textContent = `${lbI+1} / ${CLIENTES.length}`;
  lb.classList.add('on');
  document.body.style.overflow = 'hidden';
}

function cerrar() {
  lb.classList.remove('on');
  document.body.style.overflow = '';
}
ivoTrack.addEventListener('click', e => {
  const s = e.target.closest('.ivo-shot');
  if (s) abrir(+s.dataset.i);
});
document.getElementById('lbX').onclick = cerrar;
document.getElementById('lbPrev').onclick = e => {
  e.stopPropagation();
  abrir(lbI - 1);
};
document.getElementById('lbNext').onclick = e => {
  e.stopPropagation();
  abrir(lbI + 1);
};
lb.addEventListener('click', e => {
  if (e.target === lb) cerrar();
});
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('on')) return;
  if (e.key === 'Escape') cerrar();
  if (e.key === 'ArrowLeft') abrir(lbI - 1);
  if (e.key === 'ArrowRight') abrir(lbI + 1);
});

// ============================================================
//  MENÚ HAMBURGUESA (abrir/cerrar en móvil)
// ============================================================

// Agarramos el botón hamburguesa y el menú
const burger = document.getElementById('burger');
const linksMenu = document.querySelector('.links');

// Cuando tocan el hamburguesa, abre/cierra el menú
burger.addEventListener('click', function(){
    burger.classList.toggle('open');      // la X del botón
    linksMenu.classList.toggle('open');   // el panel del menú
});

// Cuando tocan un enlace del menú, se cierra
linksMenu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
        burger.classList.remove('open');
        linksMenu.classList.remove('open');
    });
});

// ============================================================
//  BARRA SUPERIOR AL HACER SCROLL + PROGRESO DE LECTURA
// ============================================================

const scrollTop = document.getElementById('scrollTop');
const progress = document.getElementById('progress');

// Cada vez que el usuario hace scroll:
window.addEventListener('scroll', function(){

    // Cuánto se ha bajado (en píxeles)
    const bajado = window.scrollY;

    // Altura total que se puede scrollear
    const total = document.body.scrollHeight - window.innerHeight;

    // El porcentaje leído (0 a 100)
    const porcentaje = (bajado / total) * 100;

    // Llenamos la barra de progreso
    progress.style.width = porcentaje + '%';

    // Si bajó más de 400px, mostramos la barra. Si no, la escondemos.
    if(bajado > 400){
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});



