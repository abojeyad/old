/* ═══════════════════════════════════════════════════════════
   YOURDIS DATA — v1.0
   Single source of truth for products, brands, stores, images
   Referenced by index.html via <script src="yourdis-data.js">
═══════════════════════════════════════════════════════════ */

/* ── Image map: all product images in one place ─────────── */
var YOURDIS_IMAGES = {
  chanel:  'jpeg1.jpg',
  dior:    'jpeg2.jpg',
  tomford: 'jpeg3.jpg',
  ysl:     'jpeg4.jpg',
  armani:  'jpeg5.jpg',
  creed:   'jpeg6.jpg'
};

/* ── Product catalogue ───────────────────────────────────── */
var PRODUCTS = {
  chanel: {
    name:    'Bleu de Chanel EDP',
    brand:   'Chanel · 100ml · Eau de Parfum',
    img:     YOURDIS_IMAGES.chanel,
    initials:'Cd',
    bg:      'var(--b-purple)',
    notes:   '<span class="note-chip note-top">Top Notes: Citrus · Bergamot</span><span class="note-chip note-heart">Heart Notes: Vetiver · Cedarwood</span><span class="note-chip note-base">Base Notes: Patchouli · Labdanum</span>',
    desc:    'A modern masculine icon, Bleu de Chanel EDP opens with a crisp burst of citrus and bergamot before settling into a deep, woody heart of Vetiver and Cedarwood. The base of warm patchouli and labdanum leaves an elegant, long-lasting trail. This is a fragrance for the man who moves decisively — refined without effort, memorable without trying. Projection is confident and longevity exceeds 10 hours on skin.',
    price:   '485 SAR', orig: '620 SAR',
    store:   'Golden Scent', storeKey: 'amazon',
    badge:   '↓ 22% off', badgeClass: 'badge-fire',
    atl: '440 SAR', avg: '540 SAR', ath: '680 SAR',
    rating:  '4.6', reviews: '287',
    r1: 'Incredible longevity — 10+ hours. Found it for 485 SAR on Golden Scent thanks to Yourdis.',
    r2: 'Classic for a reason. The EDP has better projection than the EDT. Great value.',
    priceHistory: [
      { date: 'Today · 2 hrs ago', price: '485 SAR', dir: 'down' },
      { date: '14 Feb 2025',       price: '620 SAR', dir: 'up'   },
      { date: '02 Nov 2024',       price: '460 SAR', dir: 'down' },
      { date: '15 Aug 2024',       price: '660 SAR', dir: 'up'   },
      { date: '01 Jun 2024',       price: '510 SAR', dir: 'down' }
    ],
    storeComparison: [
      { key: 'amazon',      name: 'Golden Scent', ship: 'Free delivery · 1–2 days', price: '485 SAR', diff: 'Best price' },
      { key: 'namshi',      name: 'Nice One',     ship: 'Free delivery · 2–3 days', price: '510 SAR', diff: '+25 SAR'   },
      { key: 'sephora',     name: 'Asheq Al-Otor',ship: 'Delivery · 3–5 days',     price: '545 SAR', diff: '+60 SAR'   }
    ]
  },
  dior: {
    name:    'Dior Sauvage EDT',
    brand:   'Dior · 200ml · Eau de Toilette',
    img:     YOURDIS_IMAGES.dior,
    initials:'Dk',
    bg:      'var(--b-teal)',
    notes:   '<span class="note-chip note-top">Top Notes: Calabrian Bergamot</span><span class="note-chip note-heart">Heart Notes: Sichuan Pepper · Geranium</span><span class="note-chip note-base">Base Notes: Ambroxan · Cedar</span>',
    desc:    'Radically fresh and ruggedly clean, Sauvage EDT is a modern desert landscape in a bottle. Calabrian bergamot bursts open on a wave of Sichuan pepper, while a base of mineral Ambroxan and cedar root this scent in something untamed. Effortlessly versatile — it works as well in the boardroom as under open skies. One of the best-selling fragrances in the world for a reason. Projection is excellent and longevity sits at 8–10 hours.',
    price:   '310 SAR', orig: '370 SAR',
    store:   'Najd Al-Otheyah', storeKey: 'noon',
    badge:   '↓ 16% off', badgeClass: 'badge-good',
    atl: '285 SAR', avg: '355 SAR', ath: '430 SAR',
    rating:  '4.8', reviews: '1,203',
    r1: 'Best-selling scent for a reason. Fresh, clean and beast-mode projection.',
    r2: 'Versatile for office and evenings alike. This Yourdis alert saved me 60 SAR.',
    priceHistory: [
      { date: 'Today · 5 hrs ago', price: '310 SAR', dir: 'down' },
      { date: '20 Feb 2025',       price: '370 SAR', dir: 'up'   },
      { date: '10 Nov 2024',       price: '295 SAR', dir: 'down' },
      { date: '01 Sep 2024',       price: '400 SAR', dir: 'up'   },
      { date: '15 Jun 2024',       price: '320 SAR', dir: 'down' }
    ],
    storeComparison: [
      { key: 'noon',    name: 'Najd Al-Otheyah', ship: 'Free delivery · 1–2 days', price: '310 SAR', diff: 'Best price' },
      { key: 'amazon',  name: 'Golden Scent',    ship: 'Free delivery · 2–3 days', price: '340 SAR', diff: '+30 SAR'   },
      { key: 'namshi',  name: 'Nice One',        ship: 'Delivery · 3–5 days',      price: '365 SAR', diff: '+55 SAR'   }
    ]
  },
  tomford: {
    name:    'Tom Ford Tobacco Oud EDP',
    brand:   'Tom Ford · 50ml · Eau de Parfum',
    img:     YOURDIS_IMAGES.tomford,
    initials:'Tf',
    bg:      'var(--b-amber)',
    notes:   '<span class="note-chip note-top">Top Notes: Clove · Coriander</span><span class="note-chip note-heart">Heart Notes: Tobacco · Oud Wood</span><span class="note-chip note-base">Base Notes: Sandalwood · Tonka Bean</span>',
    desc:    'From the Private Blend collection, Tobacco Oud is an unapologetically opulent statement. The opening of spiced clove and coriander gives way to a rich, smoky heart of tobacco and rare oud wood. Sandalwood and tonka bean in the base create a creamy, enduring warmth that lingers for hours. This is a fragrance that commands presence — best reserved for evenings and special occasions. Longevity is exceptional, lasting 12+ hours with notable sillage.',
    price:   '590 SAR', orig: '650 SAR',
    store:   'Laudour', storeKey: 'sephora',
    badge:   '↓ 9% off', badgeClass: 'badge-good',
    atl: '560 SAR', avg: '640 SAR', ath: '750 SAR',
    rating:  '4.5', reviews: '342',
    r1: 'The definition of luxury. Oud lovers will not be disappointed. Worth every riyal.',
    r2: 'Massive projection, lasts all day. A true statement fragrance.',
    priceHistory: [
      { date: 'Today · 3 hrs ago', price: '590 SAR', dir: 'down' },
      { date: '10 Mar 2025',       price: '650 SAR', dir: 'up'   },
      { date: '05 Dec 2024',       price: '580 SAR', dir: 'down' },
      { date: '20 Sep 2024',       price: '720 SAR', dir: 'up'   },
      { date: '01 Jul 2024',       price: '600 SAR', dir: 'down' }
    ],
    storeComparison: [
      { key: 'sephora',     name: 'Laudour',        ship: 'Free delivery · 2–3 days', price: '590 SAR', diff: 'Best price' },
      { key: 'amazon',      name: 'Golden Scent',   ship: 'Free delivery · 1–2 days', price: '620 SAR', diff: '+30 SAR'   },
      { key: 'centrepoint', name: 'Deraah',         ship: 'Delivery · 4–6 days',      price: '645 SAR', diff: '+55 SAR'   }
    ]
  },
  ysl: {
    name:    'YSL Y Le Parfum',
    brand:   'Yves Saint Laurent · 60ml · Parfum',
    img:     YOURDIS_IMAGES.ysl,
    initials:'YS',
    bg:      'var(--b-pink)',
    notes:   '<span class="note-chip note-top">Top Notes: Bergamot · Ginger</span><span class="note-chip note-heart">Heart Notes: Sage · Suede</span><span class="note-chip note-base">Base Notes: Fir Balsam · Ambergris</span>',
    desc:    'Y Le Parfum takes the iconic Y DNA and deepens it considerably. Bergamot and ginger open with bright energy before surrendering to a distinguished heart of sage and suede — dry, sophisticated, unmistakably masculine. Fir balsam and ambergris in the base add a resinous warmth that carries the scent from day into night seamlessly. A perfect signature for the modern man. Expect 8–10 hours of consistent wear with moderate sillage.',
    price:   '290 SAR', orig: '350 SAR',
    store:   'V Perfume', storeKey: 'jarir',
    badge:   '↓ 17% off', badgeClass: 'badge-good',
    atl: '265 SAR', avg: '330 SAR', ath: '390 SAR',
    rating:  '4.4', reviews: '518',
    r1: 'Fresh and modern. The suede note really comes out on skin — distinctive.',
    r2: 'Great office scent. Picked it up at V Perfume for 290 SAR — deal of the month.',
    priceHistory: [
      { date: 'Today · 5 hrs ago', price: '290 SAR', dir: 'down' },
      { date: '01 Mar 2025',       price: '350 SAR', dir: 'up'   },
      { date: '15 Nov 2024',       price: '275 SAR', dir: 'down' },
      { date: '10 Aug 2024',       price: '380 SAR', dir: 'up'   },
      { date: '20 May 2024',       price: '295 SAR', dir: 'down' }
    ],
    storeComparison: [
      { key: 'jarir',   name: 'V Perfume',    ship: 'Free delivery · 2–3 days', price: '290 SAR', diff: 'Best price' },
      { key: 'noon',    name: 'Najd Al-Otheyah', ship: 'Free delivery · 1–2 days', price: '315 SAR', diff: '+25 SAR' },
      { key: 'amazon',  name: 'Golden Scent', ship: 'Delivery · 3–5 days',      price: '340 SAR', diff: '+50 SAR'   }
    ]
  },
  armani: {
    name:    'Acqua di Gio EDP',
    brand:   'Armani · 75ml · Eau de Parfum',
    img:     YOURDIS_IMAGES.armani,
    initials:'Aq',
    bg:      'var(--b-blue)',
    notes:   '<span class="note-chip note-top">Top Notes: Marine Accord · Bergamot</span><span class="note-chip note-heart">Heart Notes: Incense · Rosemary</span><span class="note-chip note-base">Base Notes: Patchouli · Mineral Amber</span>',
    desc:    'Acqua di Gio EDP elevates the legendary original with a deeper, more contemplative character. A marine accord and bergamot open fresh and clean, but the fragrance transforms meaningfully — incense and rosemary in the heart add a meditative depth rarely found in aquatics. Patchouli and mineral amber anchor the drydown beautifully. This is a refined upgrade for those who love the original but crave more substance. Longevity reaches 9–11 hours with a clean, close-wearing sillage.',
    price:   '265 SAR', orig: '350 SAR',
    store:   'Al-Sultan Perfumes', storeKey: 'namshi',
    badge:   '↓ 24% off', badgeClass: 'badge-fire',
    atl: '250 SAR', avg: '315 SAR', ath: '380 SAR',
    rating:  '4.7', reviews: '892',
    r1: 'Better than the EDT in every way. The incense adds depth without losing freshness.',
    r2: 'Yourdis caught this at the lowest price I\'ve seen. Grabbed two bottles!',
    priceHistory: [
      { date: 'Today · 1 hr ago',  price: '265 SAR', dir: 'down' },
      { date: '25 Feb 2025',       price: '350 SAR', dir: 'up'   },
      { date: '20 Oct 2024',       price: '255 SAR', dir: 'down' },
      { date: '05 Aug 2024',       price: '370 SAR', dir: 'up'   },
      { date: '10 Apr 2024',       price: '280 SAR', dir: 'down' }
    ],
    storeComparison: [
      { key: 'namshi',  name: 'Al-Sultan Perfumes', ship: 'Free delivery · 1–2 days', price: '265 SAR', diff: 'Best price' },
      { key: 'amazon',  name: 'Golden Scent',       ship: 'Free delivery · 2–3 days', price: '290 SAR', diff: '+25 SAR'   },
      { key: 'noon',    name: 'Najd Al-Otheyah',    ship: 'Delivery · 3–5 days',      price: '310 SAR', diff: '+45 SAR'   }
    ]
  },
  creed: {
    name:    'Creed Aventus',
    brand:   'Creed · 100ml · Eau de Parfum',
    img:     YOURDIS_IMAGES.creed,
    initials:'Cr',
    bg:      'var(--b-sage)',
    notes:   '<span class="note-chip note-top">Top Notes: Blackcurrant · Bergamot · Apple</span><span class="note-chip note-heart">Heart Notes: Birch · Jasmine · Rose</span><span class="note-chip note-base">Base Notes: Musk · Oakmoss · Ambergris</span>',
    desc:    'Creed Aventus is the fragrance that defined a generation of perfumery. Blackcurrant, bergamot and apple create a triumphant, fruity opening that gives way to a smoky birch heart — bold, charismatic, unmistakably powerful. Musk, oakmoss and ambergris in the base ensure remarkable longevity and a commanding trail. Every batch carries subtle variation, making each bottle a unique expression of this icon. A crown jewel in any collection. Expect 10–14 hours of exceptional longevity.',
    price:   '840 SAR', orig: '1,050 SAR',
    store:   'Asheq Al-Otor', storeKey: 'sephora',
    badge:   '↓ 20% off', badgeClass: 'badge-fire',
    atl: '810 SAR', avg: '990 SAR', ath: '1,150 SAR',
    rating:  '4.9', reviews: '2,104',
    r1: 'The king of fragrances. Every batch has slight variation which makes each bottle unique.',
    r2: '840 SAR is an absolute steal for 100ml Aventus. Yourdis alert worked perfectly.',
    priceHistory: [
      { date: 'Today · 2 days ago', price: '840 SAR',   dir: 'down' },
      { date: '01 Mar 2025',        price: '1,050 SAR', dir: 'up'   },
      { date: '10 Nov 2024',        price: '820 SAR',   dir: 'down' },
      { date: '15 Jul 2024',        price: '1,100 SAR', dir: 'up'   },
      { date: '01 Apr 2024',        price: '860 SAR',   dir: 'down' }
    ],
    storeComparison: [
      { key: 'sephora', name: 'Asheq Al-Otor', ship: 'Free delivery · 2–3 days', price: '840 SAR',   diff: 'Best price' },
      { key: 'amazon',  name: 'Golden Scent',  ship: 'Free delivery · 1–2 days', price: '895 SAR',   diff: '+55 SAR'   },
      { key: 'noon',    name: 'Najd Al-Otheyah',ship: 'Delivery · 3–5 days',     price: '1,050 SAR', diff: '+210 SAR'  }
    ]
  }
};

/* ── Brand catalogue ─────────────────────────────────────── */
var BRANDS = {
  chanel:    { name:'Chanel',            initials:'Cn', bg:'var(--b-purple)', origin:'France · Founded 1910', frags:'22 fragrances', best:'Best: 410 SAR',
    products:[{key:'chanel',  name:'Bleu de Chanel EDP', sub:'100ml · EDP',    price:'485 SAR', badge:'↓ 22% off', badgeClass:'badge-fire', img:YOURDIS_IMAGES.chanel,  imgBg:'var(--b-purple)', ini:'Cd'},
              {key:'chanel',  name:'Bleu de Chanel EDT', sub:'100ml · EDT',    price:'410 SAR', badge:'↗ Good',    badgeClass:'badge-good', img:YOURDIS_IMAGES.chanel,  imgBg:'var(--b-purple)', ini:'Cd'}] },
  dior:      { name:'Dior',              initials:'Dr', bg:'var(--b-teal)',   origin:'France · Founded 1946', frags:'31 fragrances', best:'Best: 295 SAR',
    products:[{key:'dior',    name:'Sauvage EDT',        sub:'200ml · EDT',    price:'310 SAR', badge:'↓ 16% off', badgeClass:'badge-good', img:YOURDIS_IMAGES.dior,    imgBg:'var(--b-teal)',   ini:'Dk'},
              {key:'dior',    name:'Sauvage Elixir',     sub:'60ml · Elixir',  price:'420 SAR', badge:'↓ 12% off', badgeClass:'badge-good', img:YOURDIS_IMAGES.dior,    imgBg:'var(--b-teal)',   ini:'Dk'}] },
  tomford:   { name:'Tom Ford',          initials:'Tf', bg:'var(--b-amber)',  origin:'USA · Founded 2006',   frags:'26 fragrances', best:'Best: 490 SAR',
    products:[{key:'tomford', name:'Tobacco Oud EDP',    sub:'50ml · EDP',     price:'590 SAR', badge:'↓ 9% off',  badgeClass:'badge-good', img:YOURDIS_IMAGES.tomford, imgBg:'var(--b-amber)',  ini:'Tf'}] },
  ysl:       { name:'YSL',               initials:'YS', bg:'var(--b-pink)',   origin:'France · Founded 1961', frags:'15 fragrances', best:'Best: 270 SAR',
    products:[{key:'ysl',     name:'Y Le Parfum',        sub:'60ml · EDP',     price:'290 SAR', badge:'↓ 17% off', badgeClass:'badge-good', img:YOURDIS_IMAGES.ysl,     imgBg:'var(--b-pink)',   ini:'YS'}] },
  armani:    { name:'Armani',            initials:'Ar', bg:'var(--b-blue)',   origin:'Italy · Founded 1975',  frags:'18 fragrances', best:'Best: 265 SAR',
    products:[{key:'armani',  name:'Acqua di Gio EDP',   sub:'75ml · EDP',     price:'265 SAR', badge:'↓ 24% off', badgeClass:'badge-fire', img:YOURDIS_IMAGES.armani,  imgBg:'var(--b-blue)',   ini:'Aq'},
              {key:'armani',  name:'Acqua di Gio Profumo',sub:'75ml · Parfum', price:'395 SAR', badge:'↓ 11% off', badgeClass:'badge-good', img:YOURDIS_IMAGES.armani,  imgBg:'var(--b-blue)',   ini:'Aq'}] },
  creed:     { name:'Creed',             initials:'Cr', bg:'var(--b-sage)',   origin:'UK · Founded 1760',    frags:'9 fragrances',  best:'Best: 840 SAR',
    products:[{key:'creed',   name:'Creed Aventus',      sub:'100ml · EDP',    price:'840 SAR', badge:'↓ 20% off', badgeClass:'badge-fire', img:YOURDIS_IMAGES.creed,   imgBg:'var(--b-sage)',   ini:'Cr'}] },
  memo:      { name:'Memo Paris',        initials:'Mm', bg:'var(--b-pink)',   origin:'France · Founded 2007', frags:'7 fragrances',  best:'Best: 510 SAR',
    products:[{key:'chanel',  name:'Irish Leather',      sub:'75ml · EDP',     price:'510 SAR', badge:'In Stock',   badgeClass:'badge-neutral',img:YOURDIS_IMAGES.chanel, imgBg:'var(--b-pink)',   ini:'Mm'}] },
  acqua:     { name:'Acqua di Parma',    initials:'Aq', bg:'var(--b-teal)',   origin:'Italy · Founded 1916',  frags:'5 fragrances',  best:'Best: 340 SAR',
    products:[{key:'dior',    name:'Colonia',            sub:'100ml · Cologne', price:'340 SAR', badge:'↗ Good',    badgeClass:'badge-good', img:YOURDIS_IMAGES.dior,    imgBg:'var(--b-teal)',   ini:'Aq'}] },
  bvlgari:   { name:'Bvlgari',           initials:'Bv', bg:'var(--b-amber)',  origin:'Italy · Founded 1884',  frags:'12 fragrances', best:'Best: 190 SAR',
    products:[{key:'tomford', name:'Man in Black',       sub:'100ml · EDP',    price:'190 SAR', badge:'↗ Good',    badgeClass:'badge-good', img:YOURDIS_IMAGES.tomford, imgBg:'var(--b-amber)',  ini:'Bv'}] },
  guerlain:  { name:'Guerlain',          initials:'Gu', bg:'var(--b-amber)',  origin:'France · Founded 1828', frags:'14 fragrances', best:'Best: 260 SAR',
    products:[{key:'ysl',     name:'Habit Rouge',        sub:'100ml · EDT',    price:'260 SAR', badge:'↗ Good',    badgeClass:'badge-good', img:YOURDIS_IMAGES.ysl,     imgBg:'var(--b-amber)',  ini:'Gu'}] },
  givenchy:  { name:'Givenchy',          initials:'Gc', bg:'var(--b-pink)',   origin:'France · Founded 1952', frags:'11 fragrances', best:'Best: 220 SAR',
    products:[{key:'dior',    name:'Gentleman Boisée',   sub:'100ml · EDP',    price:'220 SAR', badge:'↗ Good',    badgeClass:'badge-good', img:YOURDIS_IMAGES.dior,    imgBg:'var(--b-pink)',   ini:'Gc'}] },
  hermes:    { name:'Hermès',            initials:'Hr', bg:'var(--b-blue)',   origin:'France · Founded 1837', frags:'8 fragrances',  best:'Best: 380 SAR',
    products:[{key:'armani',  name:"Terre d'Hermès",     sub:'75ml · EDP',     price:'380 SAR', badge:'↗ Good',    badgeClass:'badge-good', img:YOURDIS_IMAGES.armani,  imgBg:'var(--b-blue)',   ini:'Hr'}] },
  narciso:   { name:'Narciso Rodriguez', initials:'Nk', bg:'var(--b-sage)',   origin:'USA · Founded 1997',   frags:'6 fragrances',  best:'Best: 195 SAR',
    products:[{key:'creed',   name:'For Her EDP',        sub:'50ml · EDP',     price:'195 SAR', badge:'↗ Good',    badgeClass:'badge-good', img:YOURDIS_IMAGES.creed,   imgBg:'var(--b-sage)',   ini:'Nk'}] }
};

/* ── Store catalogue ─────────────────────────────────────── */
var STORES = {
  amazon:      { name:'Golden Scent',       initials:'Gs', bg:'var(--b-blue)',   url:'goldenscent.com',  frags:'280+', drops:'18', low:'95 SAR',
    deals:[{key:'chanel',  name:'Bleu de Chanel EDP 100ml',     brand:'Chanel',    price:'485 SAR', orig:'620 SAR', badge:'↓ 22%', badgeClass:'badge-fire', img:YOURDIS_IMAGES.chanel,  imgBg:'var(--b-purple)', ini:'Cd'},
           {key:'armani',  name:'Acqua di Gio EDP 75ml',        brand:'Armani',    price:'265 SAR', orig:'350 SAR', badge:'↓ 24%', badgeClass:'badge-fire', img:YOURDIS_IMAGES.armani,  imgBg:'var(--b-blue)',   ini:'Aq'},
           {key:'dior',    name:'Sauvage Elixir 60ml',          brand:'Dior',      price:'420 SAR', orig:'480 SAR', badge:'↓ 12%', badgeClass:'badge-good', img:YOURDIS_IMAGES.dior,    imgBg:'var(--b-teal)',   ini:'Dk'}] },
  namshi:      { name:'Al-Sultan Perfumes', initials:'As', bg:'var(--b-teal)',   url:'al-sultan.com',    frags:'190+', drops:'11', low:'120 SAR',
    deals:[{key:'dior',    name:'Dior Sauvage EDT 200ml',       brand:'Dior',      price:'310 SAR', orig:'370 SAR', badge:'↓ 16%', badgeClass:'badge-good', img:YOURDIS_IMAGES.dior,    imgBg:'var(--b-teal)',   ini:'Dk'},
           {key:'armani',  name:'Acqua di Gio Profumo 75ml',    brand:'Armani',    price:'395 SAR', orig:'445 SAR', badge:'↓ 11%', badgeClass:'badge-good', img:YOURDIS_IMAGES.armani,  imgBg:'var(--b-blue)',   ini:'Aq'}] },
  sephora:     { name:'Asheq Al-Otor',      initials:'Ao', bg:'var(--b-pink)',   url:'asheqalotor.com',  frags:'450+', drops:'22', low:'110 SAR',
    deals:[{key:'tomford', name:'Tom Ford Tobacco Oud 50ml',    brand:'Tom Ford',  price:'590 SAR', orig:'650 SAR', badge:'↓ 9%',  badgeClass:'badge-good', img:YOURDIS_IMAGES.tomford, imgBg:'var(--b-amber)',  ini:'Tf'},
           {key:'chanel',  name:'Bleu de Chanel Parfum 50ml',   brand:'Chanel',    price:'680 SAR', orig:'750 SAR', badge:'↓ 9%',  badgeClass:'badge-good', img:YOURDIS_IMAGES.chanel,  imgBg:'var(--b-purple)', ini:'Cd'}] },
  noon:        { name:'Najd Al-Otheyah',    initials:'No', bg:'var(--b-amber)',  url:'najdalotheyah.com',frags:'210+', drops:'14', low:'115 SAR',
    deals:[{key:'ysl',     name:'YSL Y Le Parfum 60ml',         brand:'YSL',       price:'290 SAR', orig:'350 SAR', badge:'↓ 17%', badgeClass:'badge-good', img:YOURDIS_IMAGES.ysl,     imgBg:'var(--b-pink)',   ini:'YS'},
           {key:'creed',   name:'Creed Aventus 100ml',          brand:'Creed',     price:'840 SAR', orig:'1,050 SAR',badge:'↓ 20%',badgeClass:'badge-fire', img:YOURDIS_IMAGES.creed,   imgBg:'var(--b-sage)',   ini:'Cr'}] },
  centrepoint: { name:'Deraah',             initials:'Dr', bg:'var(--b-sage)',   url:'deraah.com',       frags:'85+',  drops:'5',  low:'150 SAR',
    deals:[{key:'dior',    name:'Dior Homme Sport EDT 100ml',   brand:'Dior',      price:'255 SAR', orig:'295 SAR', badge:'↓ 14%', badgeClass:'badge-good', img:YOURDIS_IMAGES.dior,    imgBg:'var(--b-teal)',   ini:'Dk'}] },
  jarir:       { name:'V Perfume',          initials:'Vp', bg:'var(--b-purple)', url:'vperfume.com',     frags:'40+',  drops:'3',  low:'180 SAR',
    deals:[{key:'armani',  name:'Acqua di Gio EdT 100ml',       brand:'Armani',    price:'180 SAR', orig:'215 SAR', badge:'↓ 16%', badgeClass:'badge-good', img:YOURDIS_IMAGES.armani,  imgBg:'var(--b-blue)',   ini:'Aq'}] }
};

/* ── Search catalogue — all searchable items ─────────────── */
var SEARCH_ITEMS = [
  { key:'chanel',  name:'Bleu de Chanel EDP', brand:'Chanel',    size:'150ml', store:'Golden Scent',    price:'595 SAR', orig:'850 SAR', badge:'↓ Best Price', badgeClass:'badge-fire', bg:'var(--b-purple)', ini:'Cd', img:YOURDIS_IMAGES.chanel  },
  { key:'chanel',  name:'Bleu de Chanel EDP', brand:'Chanel',    size:'100ml', store:'Kaneen',          price:'485 SAR', orig:'620 SAR', badge:'↓ Excellent',  badgeClass:'badge-fire', bg:'var(--b-purple)', ini:'Cd', img:YOURDIS_IMAGES.chanel  },
  { key:'chanel',  name:'Bleu de Chanel EDT', brand:'Chanel',    size:'100ml', store:'Najda ALOtheyah', price:'410 SAR', orig:'540 SAR', badge:'↓ Good',       badgeClass:'badge-good', bg:'var(--b-purple)', ini:'Cd', img:YOURDIS_IMAGES.chanel  },
  { key:'chanel',  name:'Bleu de Chanel Parfum',brand:'Chanel',  size:'50ml',  store:'Poone',           price:'395 SAR', orig:null,      badge:null,            badgeClass:null,         bg:'var(--b-purple)', ini:'Cd', img:YOURDIS_IMAGES.chanel  },
  { key:'dior',    name:'Dior Sauvage EDT',   brand:'Dior',      size:'100ml', store:'Namshi',          price:'310 SAR', orig:null,      badge:null,            badgeClass:null,         bg:'var(--b-teal)',   ini:'Dk', img:YOURDIS_IMAGES.dior    },
  { key:'armani',  name:'Acqua di Gio EDP',   brand:'Armani',    size:'75ml',  store:'Golden Scent',    price:'265 SAR', orig:null,      badge:null,            badgeClass:null,         bg:'var(--b-blue)',   ini:'Aq', img:YOURDIS_IMAGES.armani  },
  { key:'ysl',     name:'YSL Y Le Parfum',    brand:'YSL',       size:'60ml',  store:'V Perfume',       price:'290 SAR', orig:null,      badge:null,            badgeClass:null,         bg:'var(--b-pink)',   ini:'YS', img:YOURDIS_IMAGES.ysl    },
  { key:'tomford', name:'Tobacco Oud EDP',    brand:'Tom Ford',  size:'50ml',  store:'Asheq Al-Otor',   price:'590 SAR', orig:'650 SAR', badge:'↓ 9% off',     badgeClass:'badge-good', bg:'var(--b-amber)',  ini:'Tf', img:YOURDIS_IMAGES.tomford },
  { key:'creed',   name:'Creed Aventus',      brand:'Creed',     size:'100ml', store:'Asheq Al-Otor',   price:'840 SAR', orig:'1,050 SAR',badge:'↓ 20% off',   badgeClass:'badge-fire', bg:'var(--b-sage)',   ini:'Cr', img:YOURDIS_IMAGES.creed   }
];
