/* ═══════════════════════════════════════════════════════════
   YOURDIS — Translation System
   T('key')           → UI string in active language
   setLang('ar'|'en') → switch language + update DOM
   toggleLang()       → toggle between en / ar
   PRODUCTS           → bilingual product data array
═══════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════
   UI STRINGS
══════════════════════════════════════════════════════════ */
var TRANSLATIONS = {


/* ══════════════════════════════════════════════════════════
   Auth
══════════════════════════════════════════════════════════ */
  auth_tagline: {
    en: 'Compare and track prices for all products across every store',
    ar: 'قارن أسعار المنتجات وتتبّعها عبر جميع المتاجر'
  },
  auth_title: {
    en: 'Choose a login method',
    ar: 'اختر طريقة تسجيل الدخول'
  },
  auth_google: {
    en: 'Sign in with Google',
    ar: 'تسجيل دخول بواسطة جوجل'
  },
  auth_apple: {
    en: 'Sign in with Apple',
    ar: 'تسجيل دخول بواسطة أبل'
  },
  auth_email: {
    en: 'Continue with Email',
    ar: 'المتابعة عبر البريد الإلكتروني'
  },
  auth_guest: {
    en: 'Continue as Guest',
    ar: 'المتابعة كضيف'
  },
  auth_terms: {
    en: 'By continuing you agree to our Terms of Service and Privacy Policy',
    ar: 'بالمتابعة، فأنت توافق على شروط الخدمة وسياسة الخصوصية'
  },
  auth_lang_switch: {
    en: 'العربية',
    ar: 'English'
  },

/* ══════════════════════════════════════════════════════════
   OTP
══════════════════════════════════════════════════════════ */
  otp_back: {
    en: 'Back',
    ar: 'رجوع'
  },
  otp_title: {
    en: 'Enter code',
    ar: 'أدخل الرمز'
  },
  otp_sub: {
    en: 'We sent a 4-digit code to',
    ar: 'أرسلنا رمزًا مكوّنًا من 4 أرقام إلى'
  },
  otp_resend: {
    en: "Didn't receive it?",
    ar: 'لم تستلمه؟'
  },
  otp_resend_timer: {
    en: 'Resend in 0:42',
    ar: 'إعادة الإرسال خلال 0:42'
  },
  otp_confirm: {
    en: 'Verify & Continue',
    ar: 'تحقق ومتابعة'
  },

/* ══════════════════════════════════════════════════════════
   Home
══════════════════════════════════════════════════════════ */
  home_ai_name: {
    en: 'Ask Sina AI',
    ar: 'اسأل سينا'
  },
  home_ai_sub: {
    en: 'Ready to help',
    ar: 'جاهز للمساعدة'
  },
  home_search_ph: {
    en: 'Name, brand, or scent note',
    ar: 'الاسم أو البراند أو النوتة العطرية'
  },
  home_top_deals: {
    en: 'Top Deals Now',
    ar: 'أفضل العروض الآن'
  },
  home_see_all: {
    en: 'View all',
    ar: 'عرض الكل'
  },
  home_brands: {
    en: 'Browse by Brand',
    ar: 'الدور العطرية'
  },
  home_all_brands: {
    en: 'All brands',
    ar: 'كل العلامات'
  },
  home_personalized: {
    en: 'Personalized for You',
    ar: 'مخصص لك'
  },
  home_view_all: {
    en: 'View all',
    ar: 'عرض الكل'
  },
  home_price_drops: {
    en: 'Recent Price Drops',
    ar: 'آخر انخفاضات الأسعار'
  },
  home_trending: {
    en: 'Trending Now',
    ar: 'الأكثر رواجاً'
  },

  /* Shared card labels */
  card_available_in: {
    en: 'Available in',
    ar: 'متوفر في'
  },
  card_stores: {
    en: 'stores',
    ar: 'متاجر'
  },
  card_lowest: {
    en: 'Lowest:',
    ar: 'أقل سعر:'
  },
  card_highest: {
    en: 'Highest:',
    ar: 'أعلى سعر:'
  },
  card_savings: {
    en: 'Savings:',
    ar: 'التوفير:'
  },

/* ══════════════════════════════════════════════════════════
   Bottom nav
══════════════════════════════════════════════════════════ */
  nav_home: {
    en: 'Home',
    ar: 'الرئيسية'
  },
  nav_stores: {
    en: 'Stores',
    ar: 'المتاجر'
  },
  nav_alerts: {
    en: 'Alerts',
    ar: 'التنبيهات'
  },
  nav_activity: {
    en: 'My Profile',
    ar: 'ملفي'
  },

/* ══════════════════════════════════════════════════════════
   Search page
══════════════════════════════════════════════════════════ */  
  search_title: {
    en: 'Search',
    ar: 'البحث'
  },
  search_placeholder: {
    en: 'Name, brand, or scent note',
    ar: 'الاسم أو البراند أو النوتة العطرية'
  },
  search_filter: {
    en: 'Filter',
    ar: 'تصفية'
  },
  search_results: {
    en: 'results',
    ar: 'نتائج'
  },
  search_tap_compare: {
    en: 'tap to compare',
    ar: 'اضغط للمقارنة'
  },
  search_no_results: {
    en: 'No results found',
    ar: 'لا توجد نتائج'
  },
  search_no_results_sub: {
    en: 'Try a different name, brand, or note',
    ar: 'جرّب اسماً أو علامة أو رائحة مختلفة'
  },
  search_similar: {
    en: 'Similar products you may like',
    ar: 'منتجات مشابهة قد تعجبك'
  },
  filter_title: {
    en: 'Filter',
    ar: 'تصفية'
  },
  filter_reset: {
    en: 'Reset',
    ar: 'إعادة'
  },
  filter_apply: {
    en: 'Apply',
    ar: 'تطبيق'
  },
  filter_gender: {
    en: 'Gender',
    ar: 'الجنس'
  },
  filter_concentration: {
    en: 'Concentration',
    ar: 'التركيز'
  },
  filter_size: {
    en: 'Size',
    ar: 'الحجم'
  },
  filter_accords: {
    en: 'Accords',
    ar: 'الأوتار'
  },
  filter_brand: {
    en: 'Brand',
    ar: 'الدور العطرية'
  },
  filter_men: {
    en: 'Men',
    ar: 'رجال'
  },
  filter_women: {
    en: 'Women',
    ar: 'نساء'
  },
  filter_unisex: {
    en: 'Unisex',
    ar: 'للجنسين'
  },

/* ══════════════════════════════════════════════════════════
   Stores page
══════════════════════════════════════════════════════════ */  
  stores_title: {
    en: 'Stores',
    ar: 'المتاجر'
  },
  stores_verified: {
    en: 'Verified Stores',
    ar: 'المتاجر الموثّقة'
  },
  stores_verified_badge: {
    en: 'Verified',
    ar: 'موثّق'
  },
  stores_follow: {
    en: 'Follow',
    ar: 'متابعة'
  },
  stores_following: {
    en: 'Following ✓',
    ar: 'تتابعه ✓'
  },
  stores_followers: {
    en: 'Followers',
    ar: 'متابعين'
  },
  stores_products: {
    en: 'fragrances',
    ar: 'عطر'
  },
  stores_count_label: {
    en: 'stores',
    ar: 'متجر'
  },
  stores_search_ph: {
    en: 'Search stores…',
    ar: 'ابحث عن متجر…'
  },
  store_deals_label: {
    en: 'Products of this store',
    ar: 'منتجات هذا المتجر'
  },

/* ══════════════════════════════════════════════════════════
   Alerts page
══════════════════════════════════════════════════════════ */  
  alerts_title: {
    en: 'Price Alerts',
    ar: 'تنبيهات الأسعار'
  },
  alerts_set_from: {
    en: 'Set from any product page',
    ar: 'اضبطها من أي صفحة منتج'
  },
  alerts_active: {
    en: 'Active Alerts',
    ar: 'التنبيهات النشطة'
  },
  alerts_tracking: {
    en: 'active alerts tracking',
    ar: 'تنبيهات نشطة'
  },
  alerts_savings: {
    en: 'Potential savings: up to',
    ar: 'توفير محتمل: حتى'
  },
  alerts_if_drop: {
    en: 'if all drop',
    ar: 'إذا انخفضت كلها'
  },
  alerts_decreased: {
    en: 'Decreased',
    ar: 'انخفض'
  },
  alerts_increased: {
    en: 'Increased',
    ar: 'ارتفع'
  },
  alerts_in_stores: {
    en: 'In',
    ar: 'متوفر في'
  },
  alerts_stores: {
    en: 'stores',
    ar: 'متاجر'
  },
  alerts_empty_title: {
    en: 'No active alerts',
    ar: 'لا توجد تنبيهات نشطة'
  },
  alerts_empty_sub: {
    en: 'Set an alert from any product page to get notified when the price drops',
    ar: 'اضبط تنبيهاً من أي صفحة منتج ليصلك إشعار عند انخفاض السعر'
  },
  alerts_confirm_title: {
    en: 'Turn off this alert?',
    ar: 'إيقاف هذا التنبيه؟'
  },
  alerts_confirm_body: {
    en: "You won't be notified when this fragrance drops in price. You can re-enable it from the product page.",
    ar: 'لن تتلقى إشعاراً عند انخفاض سعر هذا العطر. يمكنك إعادة تفعيله من صفحة المنتج.'
  },
  alerts_confirm_yes: {
    en: 'Yes, turn off',
    ar: 'نعم، إيقاف'
  },
  alerts_confirm_keep: {
    en: 'Keep alert on',
    ar: 'إبقاء التنبيه'
  },
  
/* ══════════════════════════════════════════════════════════
   Activity page
══════════════════════════════════════════════════════════ */  
  activity_joined: {
    en: 'Joined',
    ar: 'منورنا من'
  },
  activity_cashback_desc: {
    en: 'Shop through Yourdis and earn 2% cashback on every purchase, credited directly to your wallet.',
    ar: 'تسوّق عبر يوردس واكسب استرداداً نقدياً بنسبة 2% على كل عملية شراء، تُضاف مباشرة إلى محفظتك.'
  },
  activity_purchases: {
    en: 'Total Purchases',
    ar: 'إجمالي المشتريات'
  },
  activity_cashback: {
    en: 'Cashback (2%)',
    ar: 'استرداد نقدي (2%)'
  },
  activity_orders: {
    en: 'Orders Placed',
    ar: 'الطلبات المُقدَّمة'
  },
  activity_savings: {
    en: 'Potential Savings',
    ar: 'قيمة التوفير'
  },
  activity_interests: {
    en: 'My Interests',
    ar: 'اهتماماتي'
  },
  activity_interests_sub: {
    en: "We've selected default interests for you. Tap Edit to customize them.",
    ar: 'اخترنا لك اهتمامات افتراضية. اضغط تعديل لتخصيصها.'
  },
  activity_edit: {
    en: 'Edit',
    ar: 'تعديل'
  },
  activity_wishlist: {
    en: 'Wishlist',
    ar: 'المفضلة'
  },
  activity_recently: {
    en: 'Recently Viewed',
    ar: 'شاهدته مؤخراً'
  },
  activity_see_all: {
    en: 'See all',
    ar: 'عرض الكل'
  },

/* ══════════════════════════════════════════════════════════
   Settings
══════════════════════════════════════════════════════════ */
  set_account: {
    en: 'Account',
    ar: 'الحساب'
  },
  set_profile: {
    en: 'Profile',
    ar: 'الملف الشخصي'
  },
  set_preferences: {
    en: 'Preferences',
    ar: 'التفضيلات'
  },
  set_currency: {
    en: 'Currency',
    ar: 'العملة'
  },
  set_language: {
    en: 'Language',
    ar: 'اللغة'
  },
  set_support: {
    en: 'Support',
    ar: 'الدعم'
  },
  set_help: {
    en: 'Help & FAQ',
    ar: 'المساعدة والأسئلة الشائعة'
  },
  set_privacy: {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية'
  },
  set_app_info: {
    en: 'App Info',
    ar: 'معلومات التطبيق'
  },
  set_up_to_date: {
    en: 'Up to date',
    ar: 'محدَّث'
  },
  set_sign_out: {
    en: 'Sign Out',
    ar: 'تسجيل الخروج'
  },
  set_sign_out_confirm: {
    en: 'Are you sure you want to sign out?',
    ar: 'هل أنت متأكد من تسجيل الخروج؟'
  },
  set_sign_out_yes: {
    en: 'Yes, sign out',
    ar: 'نعم، تسجيل الخروج'
  },
  set_cancel: {
    en: 'Cancel',
    ar: 'إلغاء'
  },

};



var LANG = 'en';

/* ══════════════════════════════════════════════════════════
   PRODUCT DATA — single source of truth, fully bilingual
   Access: PRODUCTS[0].nameEn / PRODUCTS[0].nameAr
   Helper: productField(p, 'name') → correct lang value
══════════════════════════════════════════════════════════ */
var PRODUCTS = [
  {
    id: 'chanel-bleu-edp',
    img: 'jpeg1.jpg',
    bg: '#EAE9FB',
    nameEn: 'Bleu de Chanel EDP',
    nameAr: 'بلو دو شانيل (أو دو بارفيوم)',
    brandEn: 'Chanel',
    brandAr: 'شانيل',
    size: '100ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    lowestPrice: 485,
    highestPrice: 600,
    savings: 115,
    currencyEn: 'SAR',
    currencyAr: 'ريال',
    storesCount: 5,
    initials: 'Cd',
    descEn: 'A modern masculine icon. Citrus and bergamot open brightly before settling into a deep woody heart of vetiver and cedarwood.',
    descAr: 'أيقونة ذكورية عصرية. تفتتح الرائحة بانتعاش الحمضيات والبرغموت قبل أن تستقر في قلب خشبي عميق من نجيل الهند وخشب الأرز.',
    notes: {
      topEn:   ['Citrus', 'Bergamot', 'Pink Pepper', 'Coriander', 'Mint'],
      topAr:   ['الحمضيات', 'البرغموت', 'الفلفل الوردي', 'الكزبرة', 'النعناع'],
      heartEn: ['Vetiver', 'Cedarwood', 'Melon'],
      heartAr: ['نجيل الهند', 'خشب الأرز', 'البطيخ'],
      baseEn:  ['Patchouli', 'Labdanum', 'Sandalwood', 'Amberwood'],
      baseAr:  ['الباتشولي', 'اللابدانوم', 'خشب الصندل', 'خشب العنبر']
    }
  },
  {
    id: 'dior-sauvage-elixir',
    img: 'jpeg2.jpg',
    bg: '#E0F4ED',
    nameEn: 'Sauvage Elixir',
    nameAr: 'سوفاج إكسير',
    brandEn: 'Dior',
    brandAr: 'ديور',
    size: '60ml',
    concentrationEn: 'Elixir',
    concentrationAr: 'إكسير',
    lowestPrice: 580,
    highestPrice: 720,
    savings: 140,
    currencyEn: 'SAR',
    currencyAr: 'ريال',
    storesCount: 3,
    initials: 'Dr',
    descEn: 'An extraordinary concentration of Sauvage. This fragrance pushes the limits of freshness and spice.',
    descAr: 'تركيز استثنائي من سوفاج. يتجاوز هذا العطر حدود الانتعاش والتوابل. قلب بري من اللافندر تبرزه الأخشاب الغنية.',
    notes: {
      topEn:   ['Cinnamon', 'Cardamom', 'Nutmeg', 'Bergamot'],
      topAr:   ['القرفة', 'الهيل', 'جوزة الطيب', 'البرغموت'],
      heartEn: ['Lavender'],
      heartAr: ['اللافندر'],
      baseEn:  ['Licorice', 'Sandalwood', 'Amber', 'Patchouli', 'Haiti Vetiver'],
      baseAr:  ['العرقسوس', 'خشب الصندل', 'العنبر', 'الباتشولي', 'نجيل الهند']
    }
  },
  {
    id: 'tomford-black-orchid',
    img: 'jpeg3.jpg',
    bg: '#FBF1E0',
    nameEn: 'Black Orchid',
    nameAr: 'بلاك أوركيد',
    brandEn: 'Tom Ford',
    brandAr: 'توم فورد',
    size: '50ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    lowestPrice: 420,
    highestPrice: 550,
    savings: 130,
    currencyEn: 'SAR',
    currencyAr: 'ريال',
    storesCount: 4,
    initials: 'Tf',
    descEn: 'A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice.',
    descAr: 'عطر فاخر وحسي يتكون من نفحات داكنة وغنية ومزيج ساحر من الأوركيد الأسود والتوابل.',
    notes: {
      topEn:   ['Truffle', 'Gardenia', 'Blackcurrant'],
      topAr:   ['الكمأ', 'الغاردينيا', 'الكشمش الأسود'],
      heartEn: ['Orchid', 'Spices', 'Fruit Notes', 'Lotus'],
      heartAr: ['الأوركيد', 'توابل', 'ملاحظات فواكه', 'اللوتس'],
      baseEn:  ['Dark Chocolate', 'Incense', 'Vanilla', 'Patchouli', 'Sandalwood'],
      baseAr:  ['الشوكولاتة الداكنة', 'البخور', 'الفانيليا', 'الباتشولي', 'خشب الصندل']
    }
  },
  {
    id: 'ysl-libre-intense',
    img: 'jpeg4.jpg',
    bg: '#FAEBF2',
    nameEn: 'Libre Intense',
    nameAr: 'ليبر إنتنس',
    brandEn: 'Yves Saint Laurent',
    brandAr: 'لوران',
    size: '90ml',
    concentrationEn: 'Eau de Parfum',
    concentrationAr: 'أو دو بارفيوم',
    lowestPrice: 460,
    highestPrice: 580,
    savings: 120,
    currencyEn: 'SAR',
    currencyAr: 'ريال',
    storesCount: 6,
    initials: 'YSL',
    descEn: 'A grand floral fragrance with a burning sensual heart. The signature lavender of Libre is twisted with a smoldering orchid accord.',
    descAr: 'عطر زهري فاخر بقلب حسي متقد. تمتزج لافندر ليبر الشهيرة مع الأوركيد المتوهج لتعطي عبقاً دافئاً ومميزاً.',
    notes: {
      topEn:   ['Lavender', 'Mandarin Orange', 'Bergamot'],
      topAr:   ['اللافندر', 'ماندرين', 'البرغموت'],
      heartEn: ['Lavender', 'Tunisian Orange Blossom', 'Orchid', 'Jasmine Sambac'],
      heartAr: ['اللافندر', 'زهر البرتقال التونسي', 'الأوركيد', 'ياسمين سامباك'],
      baseEn:  ['Madagascar Vanilla', 'Tonka Bean', 'Ambergris', 'Vetiver'],
      baseAr:  ['فانيليا مدغشقر', 'حبوب التونكا', 'العنبر', 'نجيل الهند']
    }
  },
  {
    id: 'mfk-baccarat-rouge-540',
    img: 'jpeg5.jpg',
    bg: '#E4F0FB',
    nameEn: 'Baccarat Rouge 540',
    nameAr: 'باكارات روج 540',
    brandEn: 'Kurkdjian',
    brandAr: 'كوردجيان',
    size: '70ml',
    concentrationEn: 'Extrait de Parfum',
    concentrationAr: 'إكستري دو بارفيوم',
    lowestPrice: 1250,
    highestPrice: 1500,
    savings: 250,
    currencyEn: 'SAR',
    currencyAr: 'ريال',
    storesCount: 2,
    initials: 'MFK',
    descEn: 'Luminous and sophisticated, it lays on the skin like an amber, floral and woody breeze. A poetic alchemy where jasmine and saffron carry mineral facets.',
    descAr: 'مشرق ومتطور، يستقر على البشرة كنسيم عنبري وزهري وخشبي. خيمياء شاعرية حيث تحمل نوتات الياسمين وتألق الزعفران جوانب معدنية فريدة.',
    notes: {
      topEn:   ['Saffron', 'Bitter Almond'],
      topAr:   ['الزعفران', 'اللوز المر'],
      heartEn: ['Egyptian Jasmine', 'Cedar'],
      heartAr: ['الياسمين المصري', 'خشب الأرز'],
      baseEn:  ['Ambergris', 'Woody Notes', 'Musk'],
      baseAr:  ['العنبر', 'ملاحظات خشبية', 'المسك']
    }
  }
];

/* ══════════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════════ */

/* UI string lookup */
function T(key) {
  var entry = TRANSLATIONS[key];
  if (!entry) { console.warn('Missing key: ' + key); return key; }
  return entry[LANG] || entry['en'] || key;
}

/* Product field in active language
   Usage: P(product, 'name') → 'Bleu de Chanel EDP' or 'بلو دو شانيل'
          P(product, 'concentration') → 'Eau de Parfum' or 'أو دو بارفيوم' */
function P(product, field) {
  var arKey = field + 'Ar';
  var enKey = field + 'En';
  if (LANG === 'ar' && product[arKey] !== undefined) return product[arKey];
  return product[enKey] !== undefined ? product[enKey] : (product[field] || '');
}

/* Price string with correct currency label */
function price(amount, product) {
  var cur = LANG === 'ar' ? product.currencyAr : product.currencyEn;
  return amount + ' ' + cur;
}

/* Availability string: "Available in 5 stores" / "متوفر في 5 متاجر" */
function storesLabel(product) {
  return T('card_available_in') + ' ' + product.storesCount + ' ' + T('card_stores');
}

/* Apply language to entire DOM */
function setLang(lang) {
  LANG = lang;
  var isAr = (lang === 'ar');
  var html  = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  html.style.fontFamily = isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";

  /* Static UI strings */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key  = el.getAttribute('data-i18n');
    var text = T(key);
    if (el.tagName === 'INPUT') {
      el.placeholder = text;
    } else if (el.children.length === 0) {
      el.textContent = text;
    } else {
      var span = el.querySelector('[data-i18n-text]');
      if (span) span.textContent = text;
    }
  });

  /* Lang switcher label */
  var sw = document.getElementById('lang-switcher');
  if (sw) sw.textContent = T('auth_lang_switch');

  /* Re-render dynamic product cards */
  if (typeof renderProductCards === 'function') renderProductCards();
  /* Reset brand chips so they re-render in new language next open */
  var fc = document.getElementById('fc-brand');
  if (fc) fc.innerHTML = '';
  /* App-level re-render hook — all screens register here */
  if (typeof onLangChange === 'function') onLangChange(lang);
}

function toggleLang() {
  setLang(LANG === 'en' ? 'ar' : 'en');
}

/* ══════════════════════════════════════════════════════════
   STORES DATA — bilingual store directory
   Access: STORES[0].nameEn / STORES[0].nameAr
   S(store,'name') → correct language value
══════════════════════════════════════════════════════════ */
var STORES = [
  {
    id: 'golden-scent',
    initials: 'GS', bg: 'var(--b-blue)',
    nameEn: 'Golden Scent',   nameAr: 'غولدن سنت',
    url: 'goldenscent.com',
    productCount: '480+',
    followersCount: '2.4k',
    verified: true
  },
  {
    id: 'namshi',
    initials: 'Nm', bg: 'var(--b-teal)',
    nameEn: 'Namshi',         nameAr: 'نمشي',
    url: 'namshi.com',
    productCount: '190+',
    followersCount: '1.8k',
    verified: true
  },
  {
    id: 'sephora',
    initials: 'Sp', bg: 'var(--b-pink)',
    nameEn: 'Sephora',        nameAr: 'سيفورا',
    url: 'sephora.com.sa',
    productCount: '450+',
    followersCount: '3.1k',
    verified: true
  },
  {
    id: 'noon',
    initials: 'Nn', bg: 'var(--b-amber)',
    nameEn: 'Noon',           nameAr: 'نون',
    url: 'noon.com',
    productCount: '210+',
    followersCount: '1.2k',
    verified: true
  },
  {
    id: 'asheq-al-otor',
    initials: 'AO', bg: 'var(--b-sage)',
    nameEn: 'Asheq Al-Otor',  nameAr: 'عاشق العطور',
    url: 'asheqalotor.com',
    productCount: '320+',
    followersCount: '980',
    verified: true
  },
  {
    id: 'najd-al-otheyah',
    initials: 'NO', bg: 'var(--b-purple)',
    nameEn: 'Najd Al-Otheyah',nameAr: 'نجد العطيه',
    url: 'najdalotheya.com',
    productCount: '140+',
    followersCount: '620',
    verified: true
  }
];

/* Store field in active language */
function S(store, field) {
  var arKey = field + 'Ar';
  var enKey = field + 'En';
  if (LANG === 'ar' && store[arKey] !== undefined) return store[arKey];
  return store[enKey] !== undefined ? store[enKey] : (store[field] || '');
}
