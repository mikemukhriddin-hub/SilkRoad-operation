// SilkRoad Travel Operations Platform - Application Logic with UZ/EN/RU Language & Guides/Assistance Support

// Mock Services Data
const servicesData = [
    // --- TRANSPORT CLASS: A (Intercity Classical) ---
    {
        id: "trans-vip-sedan",
        category: "transport",
        subCategory: "sedan",
        routeCategory: "intercity",
        titleUz: "VIP Sedan Transfer (Toshkent ↔ Samarqand)",
        titleEn: "VIP Sedan Transfer (Tashkent ↔ Samarkand)",
        titleRu: "VIP Трансфер на седане (Ташкент ↔ Самарканд)",
        descriptionUz: "Professional haydovchi bilan premium toifadagi sedan (Chevrolet Malibu 2 yoki Tracker) orqali shinam va xavfsiz transport xizmati. Konditsioner va bepul salqin ichimliklar mavjud.",
        descriptionEn: "Comfortable and safe transport service in a premium sedan (Chevrolet Malibu 2 or Tracker) with a professional driver. Air conditioning and free cold drinks included.",
        descriptionRu: "Комфортабельный и безопасный трансфер на седане премиум-класса (Chevrolet Malibu 2 или Tracker) с профессиональным водителем. Кондиционер и прохладительные напитки включены.",
        price: 85,
        rating: 4.9,
        reviews: 124,
        region: "tashkent",
        priceCategory: "mid",
        image: "assets/minivan.png"
    },
    {
        id: "trans-group-minivan",
        category: "transport",
        subCategory: "minivan",
        routeCategory: "intercity",
        titleUz: "Mercedes Sprinter VIP Minivan (Buxoro ↔ Xiva)",
        titleEn: "Mercedes Sprinter VIP Minivan (Bukhara ↔ Khiva)",
        titleRu: "VIP Минивэн Mercedes Sprinter (Бухара ↔ Хива)",
        descriptionUz: "Guruhlar uchun moslashtirilgan, keng yukxona va yumshoq o'rindiqlarga ega bo'lgan zamonaviy minivan sayohati. Yo'lda tarixiy obidalarda to'xtab o'tish imkoniyati.",
        descriptionEn: "Modern minivan trip customized for groups with spacious luggage compartment and soft seats. Possibility to stop at historical monuments along the way.",
        descriptionRu: "Поездка на современном минивэне для групп, с просторным багажным отделением и мягкими сиденьями. Возможность остановки у исторических объектов в пути.",
        price: 180,
        rating: 5.0,
        reviews: 86,
        region: "bukhara",
        priceCategory: "premium",
        image: "assets/minivan.png"
    },
    {
        id: "trans-suv-bukhara-samarkand",
        category: "transport",
        subCategory: "suv",
        routeCategory: "intercity",
        titleUz: "SUV Captiva Qulay Transfer (Samarqand ↔ Buxoro)",
        titleEn: "SUV Captiva Comfortable Transfer (Samarkand ↔ Bukhara)",
        titleRu: "SUV Captiva Комфортный трансфер (Самарканд ↔ Бухара)",
        descriptionUz: "Chevrolet Captiva yo'ltanlamasi orqali ikki qadimiy shahar o'rtasida shinam sayohat. Konditsioner, yumshoq salon va professional haydovchi hamrohligi.",
        descriptionEn: "Comfortable trip between two ancient cities in a Chevrolet Captiva SUV. Climate control, soft leather seats, and professional chauffeur.",
        descriptionRu: "Комфортная поездка между двумя древними городами на внедорожнике Chevrolet Captiva. Климат-контроль, кожаный салон и профессиональный водитель.",
        price: 120,
        rating: 4.8,
        reviews: 42,
        region: "samarkand",
        priceCategory: "mid",
        image: "assets/minivan.png"
    },

    // --- TRANSPORT CLASS: B (Nature & Mountains) ---
    {
        id: "trans-suv-chimgan",
        category: "transport",
        subCategory: "suv",
        routeCategory: "nature",
        titleUz: "Chimyon & Amirsoy Tog'li Turi (Toshkent ↔ Amirsoy)",
        titleEn: "Chimgan & Amirsoy Mountain Day Trip (Tashkent ↔ Amirsoy)",
        titleRu: "Горная экскурсия в Чимган и Амирсой (Ташкент ↔ Амирсой)",
        descriptionUz: "Tog'li hududlarda sayohat qilish uchun mo'ljallangan 4x4 yo'ltanlamas mashinasida kunlik sayohat. Amirsoy dor yo'li va Chorvoq suv omboriga tashrif buyurish imkoniyati.",
        descriptionEn: "Full day trip in a 4x4 SUV designed for mountain road terrains. Includes optional visits to Amirsoy cable car and Charvak reservoir.",
        descriptionRu: "Дневная поездка на внедорожнике 4x4, предназначенном для горных дорог. Включает посещение канатной дороги Амирсой и Чарвакского водохранилища.",
        price: 95,
        rating: 4.9,
        reviews: 134,
        region: "tashkent",
        priceCategory: "mid",
        image: "assets/minivan.png"
    },

    // --- TRANSPORT CLASS: C (Extreme & Eco-tourism) ---
    {
        id: "trans-extreme-aral",
        category: "transport",
        subCategory: "suv",
        routeCategory: "eco",
        titleUz: "Orol Dengizi Off-Road Sayohati (Nukus ↔ Mo'ynoq)",
        titleEn: "Aral Sea Off-Road SUV Adventure (Nukus ↔ Moynak)",
        titleRu: "Внедорожное приключение на Аральское море (Нукус ↔ Муйнак)",
        descriptionUz: "Toyota Land Cruiser yo'ltanlamasida Orol dengizi bo'ylab, kemalar qabristoni va Ustyurt platosiga ekstrimal sayohat. Tajribali cho'l haydovchisi xizmati.",
        descriptionEn: "Extreme SUV trip to the Aral Sea, ship graveyard, and Ustyurt plateau in a robust Toyota Land Cruiser with an experienced desert pilot.",
        descriptionRu: "Экстремальная поездка на Аральское море, кладбище кораблей и плато Устюрт на внедорожнике Toyota Land Cruiser с опытным водителем.",
        price: 220,
        rating: 5.0,
        reviews: 58,
        region: "khiva",
        priceCategory: "premium",
        image: "assets/minivan.png"
    },

    // --- TRANSPORT CLASS: D (City Services) ---
    {
        id: "trans-city-chauffeur",
        category: "transport",
        subCategory: "sedan",
        routeCategory: "city",
        titleUz: "Toshkent shahrida shaxsiy haydovchi (8 soat)",
        titleEn: "Tashkent City Private Chauffeur (8 hours)",
        titleRu: "Личный водитель в Ташкенте (8 часов)",
        descriptionUz: "Toshkent shahri bo'ylab kun davomida Chevrolet Gentra yoki Cobalt avtomobilida shaxsiy biznes xizmatlari yoki sayohat uchun haydovchi xizmati. Yoqilg'i narxi ichida.",
        descriptionEn: "Personal chauffeur service for business or sightseeing in Tashkent in a clean Gentra or Cobalt. Fuel and unlimited city stops included.",
        descriptionRu: "Услуги личного водителя для бизнеса или прогулок по Ташкенту на чистом автомобиле Gentra или Cobalt. Топливо и стоянки включены в стоимость.",
        price: 60,
        rating: 4.7,
        reviews: 95,
        region: "tashkent",
        priceCategory: "mid",
        image: "assets/minivan.png"
    },

    // --- GUIDES (IN-PERSON & VIRTUAL) ---
    {
        id: "guide-samarkand-person",
        category: "guides",
        guideType: "in-person",
        titleUz: "Samarqand Tarixiy Obidalari Bo'yicha Gid (Jonli)",
        titleEn: "In-Person Historical Guide in Samarkand",
        titleRu: "Исторический гид по Самарканду (Очно)",
        descriptionUz: "Registon, Go'ri Amir va Shahi Zinda bo'ylab professional gid hamrohligi. Chuqur tarixiy ma'lumotlar va qiziqarli afsonalar bilan tanishasiz.",
        descriptionEn: "Professional guide accompaniment through Registan, Gur-e-Amir, and Shah-i-Zinda. Deep historical insights and fascinating legends.",
        descriptionRu: "Профессиональное сопровождение по Регистану, Гур-Эмиру и Шахи-Зинда. Глубокие исторические сведения и легенды.",
        price: 40,
        rating: 4.8,
        reviews: 215,
        region: "samarkand",
        spokenLanguages: ["UZ", "EN", "RU"],
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"
    },
    {
        id: "guide-bukhara-nigora",
        category: "guides",
        guideType: "in-person",
        titleUz: "Buxoro Madaniy-Me'moriy Ekskursiya Gidi (Nigora)",
        titleEn: "Bukhara Cultural Tour Guide (Nigora)",
        titleRu: "Гид по культуре и архитектуре Бухары (Нигора)",
        descriptionUz: "Labi Hovuz, Ark va minoralar bo'ylab qadimiy Buxoro sirlarini ochuvchi madaniy sayohat. Gastro-tavsiyalar va shinam yurish yo'nalishi.",
        descriptionEn: "Walk through Lyabi-Khauz, Ark Citadel, and ancient Bukhara dome markets. Cultural details, gastro tips, and cosy walking routes.",
        descriptionRu: "Прогулка по Ляби-Хаузу, крепости Арк и древним купольным рынкам Бухары. Культурные детали, гастро-советы и уютные пешие маршруты.",
        price: 45,
        rating: 4.9,
        reviews: 148,
        region: "bukhara",
        spokenLanguages: ["EN", "RU", "FR"],
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"
    },
    {
        id: "guide-tashkent-dilshod",
        category: "guides",
        guideType: "in-person",
        titleUz: "Toshkent Gastro & Chorsu Bozor Turi (Dilshod)",
        titleEn: "Tashkent Gastro & Chorsu Bazaar Guide (Dilshod)",
        titleRu: "Гастро-гид по Ташкенту и базару Чорсу (Дильшод)",
        descriptionUz: "Eski shahar, Chorsu bozori va milliy taomlar markazlari bo'ylab osh marosimi va qiziqarli ko'cha shashlikxonalari bo'yicha gastronomik sayohat.",
        descriptionEn: "Gastronomic tour around Old City, Chorsu Bazaar, and local food spots. Authentic plov experience and hidden shashlik venues.",
        descriptionRu: "Гастрономический тур по Старому городу, базару Чорсу и местным заведениям. Аутентичный плов и скрытые шашлычные.",
        price: 35,
        rating: 4.7,
        reviews: 92,
        region: "tashkent",
        spokenLanguages: ["UZ", "EN", "RU"],
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"
    },
    {
        id: "guide-khiva-malika",
        category: "guides",
        guideType: "in-person",
        titleUz: "Ichan-Qal'a Ertaklar Shahri Gidi (Malika)",
        titleEn: "Ichan-Kala Fairy Tale City Guide (Malika)",
        titleRu: "Гид по сказочному городу Ичан-Кала (Малика)",
        descriptionUz: "Xiva eski shahri, minoralar, saroylar va qadimiy madrasalar bo'ylab professional tarixiy sayohat. Xorazm milliy hunarmandchiligi bilan tanishtirish.",
        descriptionEn: "Historical tour inside the walls of Ichan-Kala, minarets, palaces, and ancient mosques. Introduction to Khorezm national crafts.",
        descriptionRu: "Исторический тур за стенами Ичан-Калы, минареты, дворцы и древние мечети. Знакомство с хорезмскими народными ремеслами.",
        price: 50,
        rating: 5.0,
        reviews: 73,
        region: "khiva",
        spokenLanguages: ["UZ", "EN", "RU", "FR"],
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"
    },
    {
        id: "guide-online-virtual",
        category: "guides",
        guideType: "virtual",
        titleUz: "Virtual Gid - 24/7 Online Masofaviy Ko'mak",
        titleEn: "Virtual Guide - 24/7 Remote Assistance",
        titleRu: "Виртуальный гид - 24/7 Онлайн поддержка",
        descriptionUz: "Telegram yoki WhatsApp orqali 24/7 lokal muammolarni hal qilish, narxlarni kelishish, tarjimonlik qilish va eng yaxshi lokal joylarni tavsiya etish xizmati.",
        descriptionEn: "24/7 remote support via Telegram or WhatsApp. Local problem solving, price negotiations, translation, and custom local travel recommendations.",
        descriptionRu: "Круглосуточная поддержка 24/7 через Telegram или WhatsApp. Решение локальных вопросов, помощь с ценами, перевод и рекомендации местных мест.",
        price: 15,
        rating: 4.9,
        reviews: 340,
        region: "tashkent",
        spokenLanguages: ["UZ", "EN", "RU"],
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
    },
    {
        id: "guide-virtual-bukhara-expert",
        category: "guides",
        guideType: "virtual",
        titleUz: "Virtual Buxoro Eksperti (Masofaviy ko'mak)",
        titleEn: "Virtual Bukhara Expert (Remote Assist)",
        titleRu: "Виртуальный эксперт по Бухаре (Онлайн)",
        descriptionUz: "Buxoro shahrida sayohat paytida onlayn narxlarni solishtirish, hunarmandlar rastasida muomala qilish va haqiqiy milliy ustaxonalarni masofadan topish bo'yicha ko'mak.",
        descriptionEn: "Online help during your Bukhara trip. Craft market translations, souvenir price negotiating, and remote search for authentic pottery workshops.",
        descriptionRu: "Онлайн помощь в Бухаре. Перевод на ремесленных рынках, торговля за сувениры и удаленный поиск аутентичных гончарных мастерских.",
        price: 12,
        rating: 4.8,
        reviews: 65,
        region: "bukhara",
        spokenLanguages: ["EN", "RU", "FR"],
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
    },

    // --- CRAFT / MASTERCLASSES ---
    {
        id: "craft-pottery-gijduvan",
        category: "crafts",
        titleUz: "G'ijduvon Sopol Idishlari Masterklassi",
        titleEn: "Gijduvan Ceramic Pottery Masterclass",
        titleRu: "Мастер-класс по гиждуванской керамике",
        descriptionUz: "6-avloddagi kulolchilik ustaxonasi ustasi Alisher aka rahbarligida sopol idish tayyorlashda bevosita ishtirok etish. Tayyorlagan buyumingizni esdalik sifatida o'zingiz bilan olib ketasiz.",
        descriptionEn: "Direct participation in clay shaping under 6th-generation pottery master Alisher. Keep your handmade creation as a unique souvenir.",
        descriptionRu: "Непосредственное участие в изготовлении глиняной посуды под руководством мастера в 6-м поколении Алишера. Готовое изделие вы заберете с собой на память.",
        price: 20,
        rating: 5.0,
        reviews: 145,
        region: "bukhara",
        priceCategory: "budget",
        image: "assets/pottery.png",
        durationMinutes: 90,
        maxCapacity: 12,
        timeSlots: ["10:00", "12:00", "14:00", "16:00"],
        coordinates: "40.1012, 64.3804"
    },
    {
        id: "craft-paper-konigil",
        category: "crafts",
        titleUz: "Samarqand Ipak Qog'ozi Tayyorlash Masterklassi (Konigil)",
        titleEn: "Samarkand Silk Paper Making Masterclass (Konigil)",
        titleRu: "Мастер-класс по самаркандской шелковой бумаге (Конигиль)",
        descriptionUz: "Konigil meros markazida qadimiy tut daraxtidan Samarqand ipak qog'ozini an'anaviy suv tegirmoni yordamida tayyorlash jarayonida bevosita qatnashish va sirlarini o'rganish.",
        descriptionEn: "Witness and participate in the traditional water-mill technique of making Samarkand silk paper from mulberry tree bark at Konigil Heritage Center.",
        descriptionRu: "Участие в традиционном процессе изготовления самаркандской шелковой бумаги из коры тутового дерева на водяной мельнице в ремесленном центре Конигиль.",
        price: 25,
        rating: 4.9,
        reviews: 98,
        region: "samarkand",
        priceCategory: "budget",
        image: "assets/pottery.png",
        durationMinutes: 120,
        maxCapacity: 15,
        timeSlots: ["09:00", "11:00", "14:00", "16:00"],
        coordinates: "39.6583, 66.9748"
    },

    // --- HOTELS ---
    {
        id: "hotel-heritage-bukhara",
        category: "hotels",
        subCategory: "boutique",
        titleUz: "Silk Road Heritage Boutique Hotel (Buxoro)",
        titleEn: "Silk Road Heritage Boutique Hotel (Bukhara)",
        titleRu: "Boutique отель Silk Road Heritage (Бухара)",
        descriptionUz: "Eski shahar markazidagi XIX asrga oid, ajoyib milliy uslubda bezatilgan shinam butik mehmonxona. An'anaviy hovli, milliy gilamlar va milliy nonushtani o'z ichiga oladi.",
        descriptionEn: "Cosy boutique hotel dating back to the 19th century in the heart of Bukhara Old City. Beautiful national designs, open courtyard, rugs, and traditional breakfast.",
        descriptionRu: "Уютный бутик-отель XIX века в самом сердце Старого города Бухары. Традиционный дизайн, внутренний дворик, ковры ручной работы и традиционный завтрак включены.",
        price: 90,
        rating: 4.9,
        reviews: 230,
        region: "bukhara",
        priceCategory: "mid",
        image: "assets/hotel.png",
        total_rooms: 6,
        coordinates: "39.7747, 64.4224"
    },
    {
        id: "hotel-yurt-aydarkul",
        category: "hotels",
        subCategory: "yurt",
        titleUz: "Aydarkul Cho'l Yurt Lageri - An'anaviy yashash",
        titleEn: "Aydarkul Desert Yurt Camp - Traditional Stay",
        titleRu: "Пустынный юртовый лагерь на озере Айдаркуль",
        descriptionUz: "Qizilqum sahrosida, Aydarkul bo'yida joylashgan haqiqiy ko'chmanchilar yurtasida yashash. Tunda olov atrofida milliy kuy tinglash, tuya minish xizmatlari qo'shilgan.",
        descriptionEn: "Stay in authentic nomad felt yurts situated in the Kyzylkum Desert near Aydarkul Lake. Includes evening campfire music and camel riding options.",
        descriptionRu: "Проживание в аутентичных войлочных юртах кочевников в пустыне Кызылкум рядом с озером Айдаркуль. Вечерние песни у костра и катание на верблюдах включены.",
        price: 65,
        rating: 4.8,
        reviews: 112,
        region: "samarkand",
        priceCategory: "mid",
        image: "assets/hotel.png",
        total_rooms: 10,
        coordinates: "40.1012, 64.3804"
    },
    {
        id: "hotel-modern-tashkent",
        category: "hotels",
        subCategory: "modern",
        titleUz: "Registan Plaza Modern Hotel (Samarqand)",
        titleEn: "Registan Plaza Modern Hotel (Samarkand)",
        titleRu: "Отель Registan Plaza Modern (Самарканд)",
        descriptionUz: "Samarqand markazida joylashgan klassik va zamonaviy uslubdagi premium mehmonxona. Katta basseyn, spa markazi va xalqaro konferents-zallarga ega.",
        descriptionEn: "Premium modern hotel with classical elements located in the center of Samarkand. Features swimming pool, wellness center, and international conference halls.",
        descriptionRu: "Современный отель премиум-класса в центре Самарканда. К услугам гостей бассейн, спа-центр и конференц-залы.",
        price: 120,
        rating: 4.7,
        reviews: 145,
        region: "samarkand",
        priceCategory: "mid",
        image: "assets/hotel.png",
        total_rooms: 45,
        coordinates: "39.6508, 66.9654"
    },
    {
        id: "hotel-hostel-samarkand",
        category: "hotels",
        subCategory: "hostel",
        titleUz: "Bukhara Old Town Hostel - Shinam va Arzon",
        titleEn: "Bukhara Old Town Hostel - Cosy & Budget",
        titleRu: "Хостел Bukhara Old Town - уютно и недорого",
        descriptionUz: "Buxoro eski shahar qismidagi arzon, shinam va yosh sayyohlar uchun mos hostel. Bepul Wi-Fi, umumiy oshxona va hovlida choyxo'rlik qilish imkoniyati.",
        descriptionEn: "Budget friendly and cozy hostel in Bukhara old city, perfect for backpackers. Features free Wi-Fi, shared kitchen, and courtyard tea sessions.",
        descriptionRu: "Бюджетный и уютный хостел в старой части Бухары. Бесплатный Wi-Fi, общая кухня и внутренний дворик для чаепития.",
        price: 18,
        rating: 4.6,
        reviews: 64,
        region: "bukhara",
        priceCategory: "budget",
        image: "assets/hotel.png",
        total_rooms: 3,
        coordinates: "39.7735, 64.4182"
    },

    // --- RESTAURANTS ---
    {
        id: "restaurant-plov-center",
        category: "restaurants",
        titleUz: "O'rta Osiyo Plov Markazi - Stol Band qilish",
        titleEn: "Central Asian Plov Center - Table Booking",
        titleRu: "Центр плова в Ташкенте - Бронирование стола",
        descriptionUz: "Toshkentdagi ulkan qozonlarda pishiriladigan afsonaviy To'y oshi va maxsus salatlar uchun oldindan VIP stol band qilish va navbatsiz xizmat ko'rsatish.",
        descriptionEn: "Pre-book a VIP table at Tashkent's legendary plov hub serving authentic wedding plov from massive copper cauldrons with skip-the-line service.",
        descriptionRu: "Предварительный заказ VIP-стола в легендарном центре плова в Ташкенте. Подача свадебного плова из гигантских медных котлов, обслуживание без очереди.",
        price: 15,
        rating: 4.9,
        reviews: 580,
        region: "tashkent",
        priceCategory: "budget",
        image: "assets/national_plov.png"
    },
    {
        id: "restaurant-labihovuz",
        category: "restaurants",
        titleUz: "Labi Hovuz Milliy Restorani - Kechki ovqat",
        titleEn: "Lyabi Khauz National Restaurant - Dinner Table",
        titleRu: "Национальный ресторан Ляби-Хауз - Ужин",
        descriptionUz: "Buxoroning qoq markazida joylashgan qadimiy hovuz bo'yida jonli milliy musiqa jo'rligida mazali shashliklar, so'msa va an'anaviy choy marosimidan bahramand bo'ling.",
        descriptionEn: "Enjoy delicious skewers of shashlik, samosa, and traditional tea ceremonies accompanied by live national music by the ancient pond in central Bukhara.",
        descriptionRu: "Насладитесь вкуснейшими шашлыками, самсой и чайной церемонией под живую национальную музыку у древнего пруда в самом центре Бухары.",
        price: 25,
        rating: 4.8,
        reviews: 310,
        region: "bukhara",
        priceCategory: "budget",
        image: "assets/national_plov.png"
    },
    // --- TICKETS / BUS & AIRPORT ---
    {
        id: "ticket-airport-shuttle",
        category: "tickets",
        subCategory: "shuttle",
        titleUz: "Airport Shuttle Bus (Aeroport Transfer)",
        titleEn: "Airport Shuttle Bus (Airport Transfer)",
        titleRu: "Шаттл-автобус до аэропорта (Трансфер)",
        descriptionUz: "Toshkent xalqaro aeroportidan shahardagi asosiy mehmonxonalargacha guruhli qulay mikroavtobus xizmati. 24/7 ishlaydi.",
        descriptionEn: "Comfortable group shuttle bus service from Tashkent International Airport to major city hotels. Running 24/7.",
        descriptionRu: "Удобный групповой шаттл-автобус от Ташкентского международного аэропорта до основных отелей города. Работает 24/7.",
        price: 10,
        rating: 4.8,
        reviews: 245,
        region: "tashkent",
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000"
    },
    {
        id: "ticket-intercity-bus",
        category: "tickets",
        subCategory: "bus",
        titleUz: "Intercity Turistik Avtobus (Comfort-class)",
        titleEn: "Intercity Touristic Bus (Comfort-class)",
        titleRu: "Междугородний туристический автобус (Комфорт)",
        descriptionUz: "Toshkent – Samarqand – Buxoro yo‘nalishida qatnaydigan zamonaviy Comfort-class avtobuslari. Konditsioner va USB zaryadlash moslamalari bilan jihozlangan.",
        descriptionEn: "Modern Comfort-class buses operating on Tashkent – Samarkand – Bukhara routes. Equipped with AC and USB charging ports.",
        descriptionRu: "Современные автобусы класса комфорт, курсирующие по маршруту Ташкент – Самарканд – Бухара. Оснащены кондиционером и USB-портами.",
        price: 15,
        rating: 4.7,
        reviews: 188,
        region: "samarkand",
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000"
    },
    {
        id: "ticket-group-charter",
        category: "tickets",
        subCategory: "charter",
        titleUz: "Guruhlar uchun Yutong/Isuzu Charter (Shaxsiy Buyurtma)",
        titleEn: "Yutong/Isuzu Charter for Groups (Private Booking)",
        titleRu: "Чартный автобус Yutong/Isuzu для групп (Частный заказ)",
        descriptionUz: "20-45 kishilik sayyohlar guruhini shinam va xavfsiz transportda tog‘li hududlarga (Zomin, Chorvoq, Amirsoy) olib borish va qaytarish xizmati.",
        descriptionEn: "Private charter service for groups of 20-45 travelers to mountain resorts (Zaamin, Charvak, Amirsoy). Comfortable and safe travel.",
        descriptionRu: "Частный чартерный сервис для групп из 20-45 туристов в горные курорты (Заамин, Чарвак, Амирсой). Комфортное и безопасное путешествие.",
        price: 120,
        rating: 4.9,
        reviews: 62,
        region: "tashkent",
        priceCategory: "mid",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000"
    },
    {
        id: "restaurant-plov-center",
        category: "restaurants",
        subCategory: "osh",
        pricingType: "fee",
        titleUz: "O'rta Osiyo Plov Markazi - Stol Band qilish",
        titleEn: "Central Asian Plov Center - Table Booking",
        titleRu: "Центр плова Средней Азии - Бронь стола",
        descriptionUz: "Besh qozon mashhur milliy osh markazida navbatsiz kirish va kafolatlangan stol. Haqiqiy toshkentcha osh va choy marosimi.",
        descriptionEn: "Skip the line at the famous Besh Qozon plov center with a guaranteed table. Authentic Tashkent plov and tea ceremony experience.",
        descriptionRu: "Вход без очереди в знаменитый центр плова Беш Козон с гарантированным столом. Настоящий ташкентский плов и чайная церемония.",
        price: 15,
        rating: 4.9,
        reviews: 580,
        region: "tashkent",
        priceCategory: "budget",
        image: "assets/national_plov.png",
        coordinates: "41.3409, 69.2867"
    },
    {
        id: "restaurant-registan-royal",
        category: "restaurants",
        subCategory: "premium",
        pricingType: "deposit",
        titleUz: "Registan Royal Palace - Fine Dining",
        titleEn: "Registan Royal Palace - Fine Dining",
        titleRu: "Регистан Роял Палас - Fine Dining",
        descriptionUz: "Samarqand Registon yaqinidagi premium milliy va Yevropa restorani. Jonli klassik va milliy musiqa, sharqona interyer va yuqori sifatli xizmat.",
        descriptionEn: "Premium national and European dining near Samarkand Registan. Live classical and national music, oriental interiors and top-tier service.",
        descriptionRu: "Премиальный национальный и европейский ресторан возле Регистана в Самарканде. Живая классическая и национальная музыка, восточный интерьер и сервис высшего класса.",
        price: 30,
        rating: 4.9,
        reviews: 320,
        region: "samarkand",
        priceCategory: "budget",
        image: "assets/registan_royal.png",
        coordinates: "39.6508, 66.9654"
    },
    {
        id: "restaurant-labi-hovuz",
        category: "restaurants",
        subCategory: "chayxana",
        pricingType: "deposit",
        titleUz: "Labi Hovuz Milliy Restorani - Kechki ovqat",
        titleEn: "Lyabi-Khauz National Chayxana - Dinner",
        titleRu: "Национальная Чайхана Ляби-Хауз - Ужин",
        descriptionUz: "Buxoroning tarixiy hovuz bo'yidagi qadimiy chinorlar ostida joylashgan choyxona. Milliy so'rilar (topchan) va ochiq osmon ostidagi shinam muhit.",
        descriptionEn: "Chayxana located under ancient chinors by Bukhara's historic pond. National topchans (sofa-beds) and cozy open-air atmosphere.",
        descriptionRu: "Чайхана под вековыми чинарами у исторического пруда Бухары. Национальные топчаны и уютная атмосфера под открытым небом.",
        price: 25,
        rating: 4.8,
        reviews: 420,
        region: "bukhara",
        priceCategory: "budget",
        image: "assets/labi_hovuz.png",
        coordinates: "39.7735, 64.4182"
    }
];

// Translation Database
const translations = {
    uz: {
        langBtn: "🌐 UZ",
        linkCatalog: "Xizmatlar",
        linkAbout: "Platforma Haqida",
        linkContact: "Aloqa",
        btnLogin: "Kirish",
        mainHeading: "Ipak Yo'li Sayyohlik Operatsiyalari Portali",
        mainSubtitle: "Transport, Gidlar, Restoranlar, Master-klasslar va Chiptalarni bir joyda rejalashtiring va oson ulashing",
        lblSearch: "Qidiruv",
        placeholderSearch: "Samarqand, Gid, Avtobus...",
        lblRegion: "Viloyat / Shahar",
        lblPrice: "Narx oralig'i",
        btnSearch: "Qidirish",
        resultsTitleAll: "Barcha Operatsiyalar & Xizmatlar",
        resultsCount: "ta xizmat topildi",
        resultsShowingAll: "Barcha takliflar ko'rsatilmoqda",
        noResults: "Hech qanday mos xizmat topilmadi. Qidiruv parametrlarini o'zgartirib ko'ring.",
        sidebarTitle: "Safar Muvofiqlashtiruvchisi",
        emptyItinerary: "Hozircha xizmatlar tanlanmagan. Ro'yxatdan xizmatlarni qo'shing.",
        summaryCount: "Xizmatlar soni:",
        summaryTotal: "Jami qiymat:",
        shareTitle: "Guruh bilan ulashish",
        modalTitle: "Xizmat Tafsilotlari",
        lblFormDate: "Sana va vaqt",
        lblFormQuantity: "Yo'lovchilar soni / Miqdor",
        lblFormNotes: "Qo'shimcha istaklar va ma'lumotlar",
        placeholderFormNotes: "Masalan: Maxsus xizmatlar, parhez, reys raqami...",
        lblFormContact: "Siz bilan bog'lanish uchun raqam (Telegram / WhatsApp / Telefon)",
        btnModalCancel: "Bekor qilish",
        btnModalConfirm: "Safar rejasiga qo'shish",
        badgeMasterclass: "Master-klass",
        priceLabel: "Narxi",
        btnBook: "Band qilish",
        optAllRegions: "Barcha hududlar",
        optTashkent: "Toshkent",
        optSamarkand: "Samarqand",
        optBukhara: "Buxoro",
        optKhiva: "Xiva",
        optPriceAll: "Barchasi",
        optPriceBudget: "Kichik (Up to $50)",
        optPriceMid: "O'rta ($50 - $150)",
        optPricePremium: "Premium ($150+)",
        itineraryItemGuests: "ta",
        itineraryItemContact: "Aloqa",
        itineraryItemNotes: "Istak",
        shareMessageTitle: "✨ SILKROAD OPERATIONS: SAFAR REJASI ✨",
        shareMessageTotal: "JAMI QIYMAT",
        shareMessageFooter: "Muvofiqlashtiruvchi Portal orqali yaratildi.",
        tabAll: "Barchasi",
        tabTransport: "Transport",
        tabGuides: "Gidlar (Live & Online)",
        tabCrafts: "Milliy Hunarmandchilik",
        tabTickets: "Avtobus & Aeroport",
        tabHotels: "Mehmonxonalar",
        tabRestaurants: "Restoranlar",
        badgeRestaurants: "RESTORANLAR",
        subCatOsh: "Osh markazlari",
        subCatPremium: "Premium (Fine Dining)",
        subCatChayxana: "Choyxona / Ochiq havoda",
        lblRestaurantDate: "Sana",
        lblMealSlot: "Vaqt turi",
        optMealSlotLunch: "Tushlik (Lunch / Plov time: 11:00 - 14:30)",
        optMealSlotDinner: "Kechki ovqat (Dinner time: 18:00 - 23:00)",
        lblRestaurantTime: "Kelish vaqti",
        lblRestaurantGuests: "Mehmonlar soni (1-20 kishi)",
        lblRestaurantTableType: "Stol joylashuvi",
        optTableIndoor: "Zal ichida (Indoor)",
        optTableOutdoor: "Ochiq havoda / Hovuz bo'yida",
        optTableVip: "VIP xona (VIP Room) (+$10)",
        lblReviewRestaurantMealSlot: "Vaqt turi va kelish vaqti:",
        lblReviewRestaurantTable: "Stol joylashuvi:",
        lblReviewRestaurantPricing: "Mantiq va depozit:",
        lblReviewRestaurantVipPremium: "VIP premium:",
        pricingTypeFee: "Fiksirlangan xizmat haqi (Booking Fee)",
        pricingTypeDeposit: "Depozit tizimi",
        pricingTypeFeeDesc: "Booking Fee — faqat navbatsiz kirish va stol band qilish (taomlar hisobiga kirmaydi)",
        pricingTypeDepositDesc: "Depozit — restoranda ovqatlanganda jami hisobdan chegiriladigan pul",
        
        // About Section & Login Modal Translations
        aboutTitle: "Platforma Haqida",
        aboutCard1Title: "Xavfsiz Xizmatlar",
        aboutCard1Desc: "Barcha transport vositalari va professional gidlar to'liq tekshiruvdan o'tkaziladi.",
        aboutCard2Title: "Tezkor Muvofiqlashtirish",
        aboutCard2Desc: "Buyurtma ma'lumotlarini bir zumda Telegram, WhatsApp yoki Email orqali ulashing.",
        aboutCard3Title: "Milliy Meros",
        aboutCard3Desc: "Amaliy hunarmandchilik master-klasslarida bevosita ishtirok eting va sirlarini o'rganing.",
        loginModalTitle: "Tizimga Kirish",
        lblLoginUsername: "Foydalanuvchi nomi / Email",
        lblLoginPassword: "Mahfiy Parol",
        btnLoginSubmit: "Kirish",
        btnLoginCancel: "Bekor qilish",

        // Transport Subcategories
        subCatAll: "Barchasi",
        subCatSedan: "Sedan / Biznes (1-3 kishi)",
        subCatMinivan: "Miniven / Mikroavtobus (4-15 kishi)",
        subCatSuv: "Yo'ltanlamas / Jip (4x4)",

        // Guides Format
        formatAll: "Barchasi",
        formatInPerson: "In-Person (Jonli hamrohlik)",
        formatVirtual: "Virtual (Masofaviy ko'mak)",

        // Wizard steps translations
        wizardStepNode1: "Vaqt",
        wizardStepNode2: "Yo'lovchi",
        wizardStepNode3: "Kontaktlar",
        wizardStepNode4: "Tasdiqlash",
        lblFormChildSeat: "Bolalar o'rindig'i kerakmi? (Bepul)",
        lblFormUsername: "Ismingiz va Telegram/WhatsApp username",
        lblReviewTitle: "Buyurtma tafsilotlarini tekshiring",
        lblReviewService: "Xizmat:",
        lblReviewDatetime: "Sana va vaqt:",
        lblReviewGuests: "Yo'lovchilar/Miqdor:",
        lblReviewChildSeat: "Bolalar o'rindig'i:",
        lblReviewContact: "Aloqa raqami:",
        lblReviewName: "Buyurtmachi ismi:",
        lblReviewPrice: "Jami qiymat:",
        btnWizardBack: "Orqaga",
        btnWizardNext: "Keyingisi",
        btnGeneratePdfReceipt: "📄 PDF Vaucher yuklab olish",
        alertReceiptGenerated: "PDF Vaucher yuklab olindi (MOCK voucher_SR.txt yuklandi)",
        msgYes: "Ha",
        msgNo: "Yo'q",
        msgNotSpecified: "Kiritilmagan",

        // Guide wizard specific
        lblFormStartChange: "Boshlanish sanasi",
        lblFormEndChange: "Tugash sanasi",
        lblFormGuideLang: "Muloqot tili",
        lblFormMessengerType: "Afzal ko'rilgan messenjer",
        lblReviewGuideLang: "Muloqot tili:",
        lblReviewMessenger: "Aloqa messenjeri:",

        // Craft wizard specific
        lblFormCraftDate: "Sana",
        lblFormCraftSlot: "Bo'sh seanslar",
        lblReviewCraftDuration: "Davomiyligi:",
        lblReviewCraftSlot: "Seans vaqti:",
        lblReviewCraftCoords: "Koordinatalar:",
        errMaxCapacity: "Maksimal sig'imdan oshib ketdi! Ushbu master-klassda ko'pi bilan {max} kishi qatnasha oladi.",

        // Empty state translations
        emptyStateTitle: "Hech qanday mos xizmat topilmadi",
        emptyStateDesc: "Qidiruv parametrlarini o'zgartirib ko'ring yoki filtrlarni tozalang.",
        btnEmptyReset: "Filtrlarni tozalash",
        btnEmptyViewAll: "Barcha xizmatlarni ko'rish",
        recommendedTitle: "Sizga yoqishi mumkin (Tavsiyalar)",

        // Hotel translations
        subCatBoutique: "Butik Mehmonxonalar",
        subCatYurt: "Yurt Lagerlari",
        subCatModern: "Zamonaviy Mehmonxonalar",
        subCatHostel: "Hostellar / Guest Houses",
        lblFormHotelCheckIn: "Check-in (Kirish sanasi)",
        lblFormHotelCheckOut: "Check-out (Chiqish sanasi)",
        lblSearchHotelDates: "Sana oralig'i (Kirish-Chiqish)",
        lblFormHotelRooms: "Xonalar soni",
        lblFormHotelAdults: "Kattalar soni",
        lblFormHotelChildren: "Bolalar soni",
        lblHotelAddonsTitle: "Qo'shimcha xizmatlar (Alohida to'lanadi):",
        lblHotelAddonCamel: "Tuya minish (Camel riding) - $15 / kishi",
        lblHotelAddonDinner: "Milliy dasturxon (National dinner) - $20 / kishi",
        lblHotelAddonMusic: "Jonli musiqa (Live music around campfire) - $10 / kishi",
        lblReviewHotelRooms: "Xonalar soni:",
        lblReviewHotelNights: "Tunlar soni:",
        lblReviewHotelAddons: "Qo'shimcha xizmatlar:",
        errNoRoomsAvailable: "Tanlangan sanalarda bo'sh xona yo'q!",
        errRoomsExceedCapacity: "Siz tanlagan sanalarda faqat {avail} ta bo'sh xona mavjud!",
        errCheckOutBeforeCheckIn: "Chiqish sanasi kirish sanasidan oldin bo'lishi mumkin emas!",
        lblFullyBooked: "Bo'sh joy yo'q"
    },
    en: {
        langBtn: "🌐 EN",
        linkCatalog: "Services",
        linkAbout: "About Platform",
        linkContact: "Contact",
        btnLogin: "Login",
        mainHeading: "SilkRoad Travel Operations Portal",
        mainSubtitle: "Plan and share transport, guides, restaurants, masterclasses, and tickets in one place",
        lblSearch: "Search",
        placeholderSearch: "Samarkand, Guide, Bus...",
        lblRegion: "Region / City",
        lblPrice: "Price Range",
        btnSearch: "Search",
        resultsTitleAll: "All Operations & Services",
        resultsCount: "services found",
        resultsShowingAll: "Showing all offers",
        noResults: "No matching services found. Try changing your search filters.",
        sidebarTitle: "Itinerary Coordinator",
        emptyItinerary: "No services selected yet. Add services from the catalog.",
        summaryCount: "Services count:",
        summaryTotal: "Total cost:",
        shareTitle: "Share with Group",
        modalTitle: "Service Details",
        lblFormDate: "Date and Time",
        lblFormQuantity: "Number of People / Quantity",
        lblFormNotes: "Additional requests and information",
        placeholderFormNotes: "e.g. Special requests, diet, flight number...",
        lblFormContact: "Contact number (Telegram / Phone)",
        btnModalCancel: "Cancel",
        btnModalConfirm: "Add to Itinerary",
        badgeMasterclass: "Masterclass",
        priceLabel: "Price",
        btnBook: "Book",
        optAllRegions: "All regions",
        optTashkent: "Tashkent",
        optSamarkand: "Samarkand",
        optBukhara: "Bukhara",
        optKhiva: "Khiva",
        optPriceAll: "All prices",
        optPriceBudget: "Budget (Up to $50)",
        optPriceMid: "Mid-range ($50 - $150)",
        optPricePremium: "Premium ($150+)",
        itineraryItemGuests: "guests",
        itineraryItemContact: "Contact",
        itineraryItemNotes: "Request",
        shareMessageTitle: "✨ SILKROAD OPERATIONS: ITINERARY PLAN ✨",
        shareMessageTotal: "TOTAL VALUE",
        shareMessageFooter: "Generated via the Travel Coordination Portal.",
        tabAll: "All",
        tabTransport: "Transport",
        tabGuides: "Guides (Live & Online)",
        tabCrafts: "National Crafts",
        tabTickets: "Bus & Airport",
        tabHotels: "Hotels",
        tabRestaurants: "Restaurants",
        badgeRestaurants: "RESTAURANTS",
        subCatOsh: "Plov Centers",
        subCatPremium: "Premium (Fine Dining)",
        subCatChayxana: "Chayxana / Open-air",
        lblRestaurantDate: "Date",
        lblMealSlot: "Meal Slot",
        optMealSlotLunch: "Lunch (Lunch / Plov time: 11:00 - 14:30)",
        optMealSlotDinner: "Dinner (Dinner time: 18:00 - 23:00)",
        lblRestaurantTime: "Arrival Time",
        lblRestaurantGuests: "Guests count (1-20 pax)",
        lblRestaurantTableType: "Table Location",
        optTableIndoor: "Indoor Hall",
        optTableOutdoor: "Open-air / Poolside",
        optTableVip: "VIP Room (+$10 premium)",
        lblReviewRestaurantMealSlot: "Slot & Arrival Time:",
        lblReviewRestaurantTable: "Table Location:",
        lblReviewRestaurantPricing: "Pricing logic:",
        lblReviewRestaurantVipPremium: "VIP premium:",
        pricingTypeFee: "Fixed Booking Fee",
        pricingTypeDeposit: "Deposit System",
        pricingTypeFeeDesc: "Booking Fee — only guarantees entry and table reservation (not deducted from bill)",
        pricingTypeDepositDesc: "Deposit — deposit paid online, deducted from the final restaurant bill",

        // About Section & Login Modal Translations
        aboutTitle: "About Platform",
        aboutCard1Title: "Safe Services",
        aboutCard1Desc: "All transport vehicles and professional guides are fully verified.",
        aboutCard2Title: "Quick Coordination",
        aboutCard2Desc: "Share booking details instantly via Telegram, WhatsApp, or Email.",
        aboutCard3Title: "National Heritage",
        aboutCard3Desc: "Directly participate in traditional craft masterclasses and learn their secrets.",
        loginModalTitle: "System Login",
        lblLoginUsername: "Username / Email",
        lblLoginPassword: "Secret Password",
        btnLoginSubmit: "Login",
        btnLoginCancel: "Cancel",

        // Transport Subcategories
        subCatAll: "All",
        subCatSedan: "Sedan / Business (1-3 pax)",
        subCatMinivan: "Minivan / Minibus (4-15 pax)",
        subCatSuv: "Off-Road / SUV (4x4)",

        // Guides Format
        formatAll: "All",
        formatInPerson: "In-Person (Live Guide)",
        formatVirtual: "Virtual (Online Assistant)",

        // Wizard steps translations
        wizardStepNode1: "Time",
        wizardStepNode2: "Passengers",
        wizardStepNode3: "Contacts",
        wizardStepNode4: "Review",
        lblFormChildSeat: "Child safety seat required? (Free)",
        lblFormUsername: "Your name and Telegram/WhatsApp username",
        lblReviewTitle: "Verify Booking Details",
        lblReviewService: "Service:",
        lblReviewDatetime: "Date & Time:",
        lblReviewGuests: "Passengers/Quantity:",
        lblReviewChildSeat: "Child safety seat:",
        lblReviewContact: "Contact number:",
        lblReviewName: "Customer name:",
        lblReviewPrice: "Total cost:",
        btnWizardBack: "Back",
        btnWizardNext: "Next",
        btnGeneratePdfReceipt: "📄 Download PDF Voucher",
        alertReceiptGenerated: "PDF Voucher downloaded (MOCK voucher_SR.txt saved)",
        msgYes: "Yes",
        msgNo: "No",
        msgNotSpecified: "Not specified",

        // Guide wizard specific
        lblFormStartChange: "Start Date",
        lblFormEndChange: "End Date",
        lblFormGuideLang: "Communication Language",
        lblFormMessengerType: "Preferred Messenger",
        lblReviewGuideLang: "Spoken Language:",
        lblReviewMessenger: "Contact Messenger:",

        // Craft wizard specific
        lblFormCraftDate: "Date",
        lblFormCraftSlot: "Available Sessions",
        lblReviewCraftDuration: "Duration:",
        lblReviewCraftSlot: "Session Time:",
        lblReviewCraftCoords: "Coordinates:",
        errMaxCapacity: "Max capacity exceeded! Maximum of {max} people can participate in this masterclass.",

        // Empty state translations
        emptyStateTitle: "No matching services found",
        emptyStateDesc: "Try changing your search parameters or reset filters.",
        btnEmptyReset: "Reset Filters",
        btnEmptyViewAll: "View All Services",
        recommendedTitle: "Recommended for You",

        // Hotel translations
        subCatBoutique: "Boutique Hotels",
        subCatYurt: "Yurt Camps",
        subCatModern: "Modern Hotels",
        subCatHostel: "Hostels / Guest Houses",
        lblFormHotelCheckIn: "Check-in Date",
        lblFormHotelCheckOut: "Check-out Date",
        lblSearchHotelDates: "Dates Range (Check-in/Out)",
        lblFormHotelRooms: "Rooms quantity",
        lblFormHotelAdults: "Adults count",
        lblFormHotelChildren: "Children count",
        lblHotelAddonsTitle: "Additional services (Paid separately):",
        lblHotelAddonCamel: "Camel riding - $15 / person",
        lblHotelAddonDinner: "National dinner - $20 / person",
        lblHotelAddonMusic: "Live music - $10 / person",
        lblReviewHotelRooms: "Rooms quantity:",
        lblReviewHotelNights: "Nights count:",
        lblReviewHotelAddons: "Additional services:",
        errNoRoomsAvailable: "No rooms available for the selected dates!",
        errRoomsExceedCapacity: "Only {avail} rooms available on the selected dates!",
        errCheckOutBeforeCheckIn: "Check-out date cannot be before check-in date!",
        lblFullyBooked: "Fully Booked"
    },
    ru: {
        langBtn: "🌐 RU",
        linkCatalog: "Услуги",
        linkAbout: "О платформе",
        linkContact: "Контакты",
        btnLogin: "Войти",
        mainHeading: "Портал туристических операций Шелкового пути",
        mainSubtitle: "Планируйте и координируйте транспорт, гидов, рестораны, мастер-классы и билеты в одном месте",
        lblSearch: "Поиск",
        placeholderSearch: "Самарканд, гид, автобус...",
        lblRegion: "Регион / Город",
        lblPrice: "Ценовой диапазон",
        btnSearch: "Искать",
        resultsTitleAll: "Все операции и услуги",
        resultsCount: "услуг найдено",
        resultsShowingAll: "Показываются все предложения",
        noResults: "Совпадений не найдено. Попробуйте изменить параметры поиска.",
        sidebarTitle: "Координатор поездки",
        emptyItinerary: "Услуги пока не выбраны. Добавьте услуги из каталога.",
        summaryCount: "Количество услуг:",
        summaryTotal: "Общая стоимость:",
        shareTitle: "Поделиться с группой",
        modalTitle: "Детали услуги",
        lblFormDate: "Дата и время",
        lblFormQuantity: "Количество людей / Кол-во",
        lblFormNotes: "Дополнительные пожелания и информация",
        placeholderFormNotes: "Например: особые услуги, диета, номер рейса...",
        lblFormContact: "Контактный номер (Telegram / Телефон)",
        btnModalCancel: "Отмена",
        btnModalConfirm: "Добавить в план поездки",
        badgeMasterclass: "Мастер-класс",
        priceLabel: "Цена",
        btnBook: "Забронировать",
        optAllRegions: "Все регионы",
        optTashkent: "Ташкент",
        optSamarkand: "Самарканд",
        optBukhara: "Бухара",
        optKhiva: "Хива",
        optPriceAll: "Все цены",
        optPriceBudget: "Бюджетный (До $50)",
        optPriceMid: "Средний ($50 - $150)",
        optPricePremium: "Премиум ($150+)",
        itineraryItemGuests: "чел.",
        itineraryItemContact: "Связь",
        itineraryItemNotes: "Пожелание",
        shareMessageTitle: "✨ SILKROAD OPERATIONS: ПЛАН ПОЕЗДКИ ✨",
        shareMessageTotal: "ОБЩАЯ СТОИМОСТЬ",
        shareMessageFooter: "Создано через Координационный портал путешествий.",
        tabAll: "Все",
        tabTransport: "Транспорт",
        tabGuides: "Гиды (Live & Online)",
        tabCrafts: "Народные ремесла",
        tabTickets: "Автобусы и Аэропорт",
        tabHotels: "Отели",
        tabRestaurants: "Рестораны",
        badgeRestaurants: "РЕСТОРАНЫ",
        subCatOsh: "Центры плова",
        subCatPremium: "Премиум (Fine Dining)",
        subCatChayxana: "Чайхана / На воздухе",
        lblRestaurantDate: "Дата",
        lblMealSlot: "Тип времени",
        optMealSlotLunch: "Обед (Время плова: 11:00 - 14:30)",
        optMealSlotDinner: "Ужин (Время ужина: 18:00 - 23:00)",
        lblRestaurantTime: "Время прибытия",
        lblRestaurantGuests: "Количество гостей (1-20 чел)",
        lblRestaurantTableType: "Расположение стола",
        optTableIndoor: "Внутри зала",
        optTableOutdoor: "На улице / У бассейна",
        optTableVip: "VIP комната (+$10 премиум)",
        lblReviewRestaurantMealSlot: "Время и тип:",
        lblReviewRestaurantTable: "Расположение стола:",
        lblReviewRestaurantPricing: "Тип оплаты:",
        lblReviewRestaurantVipPremium: "VIP премиум:",
        pricingTypeFee: "Фиксированная бронь",
        pricingTypeDeposit: "Депозитная система",
        pricingTypeFeeDesc: "Booking Fee — сбор только за бронь и вход без очереди (не входит в счет)",
        pricingTypeDepositDesc: "Депозит — предоплата, которая вычитается из итогового счета в ресторане",

        // About Section & Login Modal Translations
        aboutTitle: "О платформе",
        aboutCard1Title: "Безопасные услуги",
        aboutCard1Desc: "Все транспортные средства и профессиональные гиды проходят полную проверку.",
        aboutCard2Title: "Быстрая координация",
        aboutCard2Desc: "Мгновенно делитесь деталями бронирования через Telegram, WhatsApp или Email.",
        aboutCard3Title: "Национальное наследие",
        aboutCard3Desc: "Непосредственно участвуйте в традиционных ремесленных мастер-классах.",
        loginModalTitle: "Вход в систему",
        lblLoginUsername: "Имя пользователя / Email",
        lblLoginPassword: "Секретный пароль",
        btnLoginSubmit: "Войти",
        btnLoginCancel: "Отмена",

        // Transport Subcategories
        subCatAll: "Все",
        subCatSedan: "Седан / Бизнес (1-3 чел.)",
        subCatMinivan: "Минивэн / Микроавтобус (4-15 чел.)",
        subCatSuv: "Внедорожник / Джип (4x4)",

        // Guides Format
        formatAll: "Все",
        formatInPerson: "Очно (Живое сопровождение)",
        formatVirtual: "Онлайн (Виртуальный гид)",

        // Wizard steps translations
        wizardStepNode1: "Время",
        wizardStepNode2: "Пассажиры",
        wizardStepNode3: "Контакты",
        wizardStepNode4: "Подтверждение",
        lblFormChildSeat: "Нужно детское кресло? (Бесплатно)",
        lblFormUsername: "Ваше имя и Telegram/WhatsApp username",
        lblReviewTitle: "Проверьте детали заказа",
        lblReviewService: "Услуга:",
        lblReviewDatetime: "Дата и время:",
        lblReviewGuests: "Пассажиры/Количество:",
        lblReviewChildSeat: "Детское кресло:",
        lblReviewContact: "Контактный номер:",
        lblReviewName: "Имя заказчика:",
        lblReviewPrice: "Общая стоимость:",
        btnWizardBack: "Назад",
        btnWizardNext: "Далее",
        btnGeneratePdfReceipt: "📄 Скачать PDF ваучер",
        alertReceiptGenerated: "PDF Ваучер скачан (MOCK voucher_SR.txt сохранен)",
        msgYes: "Да",
        msgNo: "Нет",
        msgNotSpecified: "Не указано",

        // Guide wizard specific
        lblFormStartChange: "Дата начала",
        lblFormEndChange: "Дата окончания",
        lblFormGuideLang: "Язык общения",
        lblFormMessengerType: "Предпочтительный мессенджер",
        lblReviewGuideLang: "Язык общения:",
        lblReviewMessenger: "Мессенджер:",

        // Craft wizard specific
        lblFormCraftDate: "Дата",
        lblFormCraftSlot: "Доступные сеансы",
        lblReviewCraftDuration: "Длительность:",
        lblReviewCraftSlot: "Время сеанса:",
        lblReviewCraftCoords: "Координаты:",
        errMaxCapacity: "Превышена максимальная вместимость! В этом мастер-классе могут участвовать не более {max} человек.",

        // Empty state translations
        emptyStateTitle: "Совпадений не найдено",
        emptyStateDesc: "Попробуйте изменить параметры поиска или сбросить фильтры.",
        btnEmptyReset: "Сбросить фильтры",
        btnEmptyViewAll: "Показать все услуги",
        recommendedTitle: "Рекомендуем вам",

        // Hotel translations
        subCatBoutique: "Бутик-отели",
        subCatYurt: "Юртовые лагеря",
        subCatModern: "Современные отели",
        subCatHostel: "Хостелы / Гостевые дома",
        lblFormHotelCheckIn: "Дата заезда",
        lblFormHotelCheckOut: "Дата выезда",
        lblSearchHotelDates: "Даты (Заезд-Выезд)",
        lblFormHotelRooms: "Количество номеров",
        lblFormHotelAdults: "Количество взрослых",
        lblFormHotelChildren: "Количество детей",
        lblHotelAddonsTitle: "Дополнительные услуги (Оплачиваются отдельно):",
        lblHotelAddonCamel: "Катание на верблюдах - $15 / чел.",
        lblHotelAddonDinner: "Национальный ужин - $20 / чел.",
        lblHotelAddonMusic: "Живая музыка - $10 / чел.",
        lblReviewHotelRooms: "Количество номеров:",
        lblReviewHotelNights: "Количество ночей:",
        lblReviewHotelAddons: "Дополнительные услуги:",
        errNoRoomsAvailable: "Нет свободных номеров на выбранные даты!",
        errRoomsExceedCapacity: "На выбранные даты доступно только {avail} номеров!",
        errCheckOutBeforeCheckIn: "Дата выезда не может быть раньше даты заезда!",
        lblFullyBooked: "Нет мест"
    }
};

// App State
let currentLanguage = localStorage.getItem('silkroad_lang') || 'uz';
let itinerary = JSON.parse(localStorage.getItem('silkroad_itinerary')) || [];
let activeCategory = 'all';
let activeSubCategory = 'all'; // specifically for transport / guides sub-categories
let searchQuery = '';
let selectedRegion = 'all';
let selectedPrice = 'all';
let currentStep = 1;
let selectedServiceForBooking = null;

// Mock reservations list for hotels
const mockReservations = [
    {
        serviceId: "hotel-yurt-aydarkul",
        checkIn: "2026-09-15",
        checkOut: "2026-09-18",
        rooms: 10 // Aydarkul Camp will be fully booked on these dates
    },
    {
        serviceId: "hotel-heritage-bukhara",
        checkIn: "2026-09-10",
        checkOut: "2026-09-12",
        rooms: 4
    }
];

// Check room availability for a hotel during a date range
function getAvailableRooms(hotel, checkInStr, checkOutStr) {
    if (hotel.total_rooms === undefined) return 10;
    if (!checkInStr || !checkOutStr) return hotel.total_rooms;
    const checkIn = new Date(checkInStr);
    const checkOut = new Date(checkOutStr);
    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime()) || checkOut <= checkIn) {
        return hotel.total_rooms;
    }

    // Count rooms booked in mockReservations
    let bookedRooms = 0;
    mockReservations.forEach(res => {
        if (res.serviceId === hotel.id) {
            const resIn = new Date(res.checkIn);
            const resOut = new Date(res.checkOut);
            // Check for overlap: max(start1, start2) < min(end1, end2)
            const overlap = Math.max(checkIn, resIn) < Math.min(checkOut, resOut);
            if (overlap) {
                bookedRooms += res.rooms;
            }
        }
    });

    // Count rooms booked in current itinerary
    itinerary.forEach(item => {
        if (item.serviceId === hotel.id && item.date) {
            const dates = item.date.split('➔');
            if (dates.length === 2) {
                const itemIn = new Date(dates[0].trim());
                const itemOut = new Date(dates[1].trim());
                const overlap = Math.max(checkIn, itemIn) < Math.min(checkOut, itemOut);
                if (overlap) {
                    bookedRooms += item.quantity;
                }
            }
        }
    });

    const avail = hotel.total_rooms - bookedRooms;
    return avail < 0 ? 0 : avail;
}

// DOM Elements
const catalogGrid = document.getElementById('catalog-grid');
const categoryTabs = document.querySelectorAll('.category-tab');
const resultsTitle = document.getElementById('results-title');
const resultsCountText = document.getElementById('results-count-text');

const searchInput = document.getElementById('search-input');
const filterRegion = document.getElementById('filter-region');
const filterPrice = document.getElementById('filter-price');
const btnSearchTrigger = document.getElementById('btn-search-trigger');
const searchSuggestionsBox = document.getElementById('search-suggestions-box');
const subCategoriesFilterArea = document.getElementById('sub-categories-filter-area');

const itineraryItemsContainer = document.getElementById('itinerary-items-container');
const emptyItineraryPlaceholder = document.getElementById('empty-itinerary-placeholder');
const itineraryCount = document.getElementById('itinerary-count');
const summaryItemsCount = document.getElementById('summary-items-count');
const summaryTotalPrice = document.getElementById('summary-total-price');

// Share Buttons
const btnShareTelegram = document.getElementById('btn-share-telegram');
const btnShareWhatsApp = document.getElementById('btn-share-whatsapp');
const btnShareEmail = document.getElementById('btn-share-email');

// Language Selectors
const langBtns = document.querySelectorAll('.lang-btn');

// Booking Modal Elements
const bookingModal = document.getElementById('booking-modal');
const modalTitleText = document.getElementById('modal-title-text');
const btnModalClose = document.getElementById('btn-modal-close');
const btnModalCancel = document.getElementById('btn-modal-cancel');
const bookingForm = document.getElementById('booking-form');
const formItemId = document.getElementById('form-item-id');
const formDynamicDetails = document.getElementById('form-dynamic-details');

// Wizard controls
const btnWizardBack = document.getElementById('btn-wizard-back');
const btnWizardNext = document.getElementById('btn-wizard-next');
const btnModalConfirm = document.getElementById('btn-modal-confirm');

const formDate = document.getElementById('form-date');
const formQuantity = document.getElementById('form-quantity');
const formNotes = document.getElementById('form-notes');
const formContact = document.getElementById('form-contact');
const formUsername = document.getElementById('form-username');
const formChildSeat = document.getElementById('form-child-seat');

// Guides Wizard specific inputs
const formStartDate = document.getElementById('form-start-date');
const formEndDate = document.getElementById('form-end-date');
const formGuideLang = document.getElementById('form-guide-lang');
const formMessengerType = document.getElementById('form-messenger-type');

// Crafts Wizard specific inputs
const formCraftDate = document.getElementById('form-craft-date');
const formCraftSlot = document.getElementById('form-craft-slot');

// Restaurants Wizard specific inputs
const formRestaurantDate = document.getElementById('form-restaurant-date');
const formRestaurantMealSlot = document.getElementById('form-restaurant-meal-slot');
const formRestaurantTime = document.getElementById('form-restaurant-time');
const formRestaurantGuests = document.getElementById('form-restaurant-guests');
const formRestaurantTableType = document.getElementById('form-restaurant-table-type');

// PDF Mock Receipt button
const btnGeneratePdfReceipt = document.getElementById('btn-generate-pdf-receipt');

// Login Modal Elements
const loginModal = document.getElementById('login-modal');
const btnLogin = document.getElementById('btn-login');
const btnLoginClose = document.getElementById('btn-login-close');
const btnLoginCancel = document.getElementById('btn-login-cancel');
const loginForm = document.getElementById('login-form');

// Helper to update specific tab texts
function updateCategoryTabText(tabId, text) {
    const tab = document.getElementById(tabId);
    if (!tab) return;
    const svg = tab.querySelector('svg');
    tab.innerHTML = '';
    tab.appendChild(svg);
    tab.appendChild(document.createTextNode(' ' + text));
}

// Translate Page Static Content
function translateUI() {
    const dict = translations[currentLanguage];

    // Update active class in Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Header Links
    document.getElementById('link-catalog').innerText = dict.linkCatalog;
    document.getElementById('link-about').innerText = dict.linkAbout;
    document.getElementById('link-contact').innerText = dict.linkContact;
    document.getElementById('btn-login').innerText = dict.btnLogin;

    // Hero Section
    document.getElementById('main-heading').innerText = dict.mainHeading;
    document.getElementById('main-subtitle').innerText = dict.mainSubtitle;

    // Search Container Labels & Placeholders
    document.querySelector('label[for="search-input"]').innerText = dict.lblSearch;
    searchInput.placeholder = dict.placeholderSearch;
    document.querySelector('label[for="filter-region"]').innerText = dict.lblRegion;
    document.querySelector('label[for="filter-price"]').innerText = dict.lblPrice;
    btnSearchTrigger.innerText = dict.btnSearch;

    // Region Selector options
    document.querySelector('#filter-region option[value="all"]').text = dict.optAllRegions;
    document.querySelector('#filter-region option[value="tashkent"]').text = dict.optTashkent;
    document.querySelector('#filter-region option[value="samarkand"]').text = dict.optSamarkand;
    document.querySelector('#filter-region option[value="bukhara"]').text = dict.optBukhara;
    document.querySelector('#filter-region option[value="khiva"]').text = dict.optKhiva;

    // Price Selector options
    document.querySelector('#filter-price option[value="all"]').text = dict.optPriceAll;
    document.querySelector('#filter-price option[value="budget"]').text = dict.optPriceBudget;
    document.querySelector('#filter-price option[value="mid"]').text = dict.optPriceMid;
    document.querySelector('#filter-price option[value="premium"]').text = dict.optPricePremium;

    // Category Tabs Texts
    updateCategoryTabText('tab-cat-all', dict.tabAll);
    updateCategoryTabText('tab-cat-transport', dict.tabTransport);
    updateCategoryTabText('tab-cat-guides', dict.tabGuides);
    updateCategoryTabText('tab-cat-crafts', dict.tabCrafts);
    updateCategoryTabText('tab-cat-tickets', dict.tabTickets);
    updateCategoryTabText('tab-cat-hotels', dict.tabHotels);
    updateCategoryTabText('tab-cat-restaurants', dict.tabRestaurants);

    // About Section Texts
    document.getElementById('about-title').innerText = dict.aboutTitle;
    document.getElementById('about-card1-title').innerText = dict.aboutCard1Title;
    document.getElementById('about-card1-desc').innerText = dict.aboutCard1Desc;
    document.getElementById('about-card2-title').innerText = dict.aboutCard2Title;
    document.getElementById('about-card2-desc').innerText = dict.aboutCard2Desc;
    document.getElementById('about-card3-title').innerText = dict.aboutCard3Title;
    document.getElementById('about-card3-desc').innerText = dict.aboutCard3Desc;

    // Sidebar
    document.querySelector('.sidebar-title').childNodes[0].nodeValue = dict.sidebarTitle + ' ';
    emptyItineraryPlaceholder.innerText = dict.emptyItinerary;
    document.querySelector('.summary-row:nth-child(1) span:first-child').innerText = dict.summaryCount;
    document.querySelector('.summary-row.total span:first-child').innerText = dict.summaryTotal;
    document.querySelector('.share-title').innerText = dict.shareTitle;

    // Booking Wizard step indicators
    document.getElementById('wizard-step-node-1').innerText = "1";
    document.getElementById('wizard-step-node-2').innerText = "2";
    document.getElementById('wizard-step-node-3').innerText = "3";
    document.getElementById('wizard-step-node-4').innerText = "4";

    // Booking Modal Labels
    document.getElementById('lbl-form-date').innerText = dict.lblFormDate;
    document.getElementById('lbl-form-quantity').innerText = dict.lblFormQuantity;
    document.getElementById('lbl-form-notes').innerText = dict.lblFormNotes;
    formNotes.placeholder = dict.placeholderFormNotes;
    document.getElementById('lbl-form-contact').innerText = dict.lblFormContact;
    document.getElementById('btn-modal-cancel').innerText = dict.btnModalCancel;
    document.getElementById('btn-modal-confirm').innerText = dict.btnModalConfirm;
    document.getElementById('btn-wizard-back').innerText = dict.btnWizardBack;
    document.getElementById('btn-wizard-next').innerText = dict.btnWizardNext;

    document.getElementById('lbl-form-child-seat').innerText = dict.lblFormChildSeat;
    document.getElementById('lbl-form-username').innerText = dict.lblFormUsername;
    document.getElementById('btn-generate-pdf-receipt').innerText = dict.btnGeneratePdfReceipt;

    // Guide Specific wizard labels
    document.getElementById('lbl-form-start-date').innerText = dict.lblFormStartChange;
    document.getElementById('lbl-form-end-date').innerText = dict.lblFormEndChange;
    document.getElementById('lbl-form-guide-lang').innerText = dict.lblFormGuideLang;
    document.getElementById('lbl-form-messenger-type').innerText = dict.lblFormMessengerType;

    // Craft Specific wizard labels
    document.getElementById('lbl-form-craft-date').innerText = dict.lblFormCraftDate;
    document.getElementById('lbl-form-craft-slot').innerText = dict.lblFormCraftSlot;

    // Restaurant Specific wizard labels
    const lblFormRestaurantDate = document.getElementById('lbl-form-restaurant-date');
    if (lblFormRestaurantDate) lblFormRestaurantDate.innerText = dict.lblRestaurantDate;
    const lblFormRestaurantMealSlot = document.getElementById('lbl-form-restaurant-meal-slot');
    if (lblFormRestaurantMealSlot) lblFormRestaurantMealSlot.innerText = dict.lblMealSlot;
    const lblFormRestaurantTime = document.getElementById('lbl-form-restaurant-time');
    if (lblFormRestaurantTime) lblFormRestaurantTime.innerText = dict.lblRestaurantTime;
    const lblFormRestaurantGuests = document.getElementById('lbl-form-restaurant-guests');
    if (lblFormRestaurantGuests) lblFormRestaurantGuests.innerText = dict.lblRestaurantGuests;
    const lblFormRestaurantTableType = document.getElementById('lbl-form-restaurant-table-type');
    if (lblFormRestaurantTableType) lblFormRestaurantTableType.innerText = dict.lblRestaurantTableType;

    // Restaurant dropdown options translations
    const optMealSlotLunch = document.getElementById('opt-meal-slot-lunch');
    if (optMealSlotLunch) optMealSlotLunch.text = dict.optMealSlotLunch;
    const optMealSlotDinner = document.getElementById('opt-meal-slot-dinner');
    if (optMealSlotDinner) optMealSlotDinner.text = dict.optMealSlotDinner;
    const optTableIndoor = document.getElementById('opt-table-indoor');
    if (optTableIndoor) optTableIndoor.text = dict.optTableIndoor;
    const optTableOutdoor = document.getElementById('opt-table-outdoor');
    if (optTableOutdoor) optTableOutdoor.text = dict.optTableOutdoor;
    const optTableVip = document.getElementById('opt-table-vip');
    if (optTableVip) optTableVip.text = dict.optTableVip;

    // Wizard Review Table Labels
    document.getElementById('lbl-review-title').innerText = dict.lblReviewTitle;
    document.getElementById('lbl-review-service').innerText = dict.lblReviewService;
    document.getElementById('lbl-review-datetime').innerText = dict.lblReviewDatetime;
    document.getElementById('lbl-review-guests').innerText = dict.lblReviewGuests;
    document.getElementById('lbl-review-child-seat').innerText = dict.lblReviewChildSeat;
    document.getElementById('lbl-review-guide-lang').innerText = dict.lblReviewGuideLang;
    document.getElementById('lbl-review-messenger').innerText = dict.lblReviewMessenger;
    document.getElementById('lbl-review-craft-duration').innerText = dict.lblReviewCraftDuration;
    document.getElementById('lbl-review-craft-slot').innerText = dict.lblReviewCraftSlot;
    document.getElementById('lbl-review-craft-coords').innerText = dict.lblReviewCraftCoords;
    document.getElementById('lbl-review-contact').innerText = dict.lblReviewContact;
    document.getElementById('lbl-review-name').innerText = dict.lblReviewName;
    document.getElementById('lbl-review-price').innerText = dict.lblReviewPrice;

    // Restaurant Review labels
    const lblReviewRestaurantMealSlot = document.getElementById('lbl-review-restaurant-meal-slot');
    if (lblReviewRestaurantMealSlot) lblReviewRestaurantMealSlot.innerText = dict.lblReviewRestaurantMealSlot;
    const lblReviewRestaurantTable = document.getElementById('lbl-review-restaurant-table');
    if (lblReviewRestaurantTable) lblReviewRestaurantTable.innerText = dict.lblReviewRestaurantTable;
    const lblReviewRestaurantPricing = document.getElementById('lbl-review-restaurant-pricing');
    if (lblReviewRestaurantPricing) lblReviewRestaurantPricing.innerText = dict.lblReviewRestaurantPricing;
    const lblReviewRestaurantVipPremium = document.getElementById('lbl-review-restaurant-vip-premium');
    if (lblReviewRestaurantVipPremium) lblReviewRestaurantVipPremium.innerText = dict.lblReviewRestaurantVipPremium;

    // Login Modal
    document.getElementById('login-modal-title').innerText = dict.loginModalTitle;
    document.getElementById('lbl-login-username').innerText = dict.lblLoginUsername;
    document.getElementById('lbl-login-password').innerText = dict.lblLoginPassword;
    document.getElementById('btn-login-submit').innerText = dict.btnLoginSubmit;
    document.getElementById('btn-login-cancel').innerText = dict.btnLoginCancel;

    // Refresh Category Title
    if (activeCategory === 'all') {
        resultsTitle.innerText = dict.resultsTitleAll;
    } else {
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab) {
            resultsTitle.innerText = activeTab.textContent.trim();
        }
    }

    // Hotel Specific search labels
    const lblSearchHotelDates = document.getElementById('lbl-search-hotel-dates');
    if (lblSearchHotelDates) lblSearchHotelDates.innerText = dict.lblSearchHotelDates;

    // Hotel Specific wizard labels
    const lblFormHotelCheckin = document.getElementById('lbl-form-hotel-checkin');
    if (lblFormHotelCheckin) lblFormHotelCheckin.innerText = dict.lblFormHotelCheckIn;
    const lblFormHotelCheckout = document.getElementById('lbl-form-hotel-checkout');
    if (lblFormHotelCheckout) lblFormHotelCheckout.innerText = dict.lblFormHotelCheckOut;
    const lblFormHotelRooms = document.getElementById('lbl-form-hotel-rooms');
    if (lblFormHotelRooms) lblFormHotelRooms.innerText = dict.lblFormHotelRooms;
    const lblFormHotelAdults = document.getElementById('lbl-form-hotel-adults');
    if (lblFormHotelAdults) lblFormHotelAdults.innerText = dict.lblFormHotelAdults;
    const lblFormHotelChildren = document.getElementById('lbl-form-hotel-children');
    if (lblFormHotelChildren) lblFormHotelChildren.innerText = dict.lblFormHotelChildren;
    const lblHotelAddonsTitle = document.getElementById('lbl-hotel-addons-title');
    if (lblHotelAddonsTitle) lblHotelAddonsTitle.innerText = dict.lblHotelAddonsTitle;
    const lblHotelAddonCamel = document.getElementById('lbl-hotel-addon-camel');
    if (lblHotelAddonCamel) lblHotelAddonCamel.innerText = dict.lblHotelAddonCamel;
    const lblHotelAddonDinner = document.getElementById('lbl-hotel-addon-dinner');
    if (lblHotelAddonDinner) lblHotelAddonDinner.innerText = dict.lblHotelAddonDinner;
    const lblHotelAddonMusic = document.getElementById('lbl-hotel-addon-music');
    if (lblHotelAddonMusic) lblHotelAddonMusic.innerText = dict.lblHotelAddonMusic;

    // Review labels
    const lblReviewHotelRooms = document.getElementById('lbl-review-hotel-rooms');
    if (lblReviewHotelRooms) lblReviewHotelRooms.innerText = dict.lblReviewHotelRooms;
    const lblReviewHotelNights = document.getElementById('lbl-review-hotel-nights');
    if (lblReviewHotelNights) lblReviewHotelNights.innerText = dict.lblReviewHotelNights;
    const lblReviewHotelAddons = document.getElementById('lbl-review-hotel-addons');
    if (lblReviewHotelAddons) lblReviewHotelAddons.innerText = dict.lblReviewHotelAddons;

    // Refresh secondary sub-category buttons
    if (activeCategory === 'transport' || activeCategory === 'guides' || activeCategory === 'hotels' || activeCategory === 'restaurants') {
        renderSubCategories();
    }
}

// Render Sub-category Tabs (For Transport & Guides specifically)
function renderSubCategories() {
    const dict = translations[currentLanguage];
    subCategoriesFilterArea.innerHTML = '';

    let subCats = [];
    if (activeCategory === 'transport') {
        subCats = [
            { id: "all", label: dict.subCatAll },
            { id: "sedan", label: dict.subCatSedan },
            { id: "minivan", label: dict.subCatMinivan },
            { id: "suv", label: dict.subCatSuv }
        ];
    } else if (activeCategory === 'guides') {
        subCats = [
            { id: "all", label: dict.formatAll },
            { id: "in-person", label: dict.formatInPerson },
            { id: "virtual", label: dict.formatVirtual }
        ];
    } else if (activeCategory === 'hotels') {
        subCats = [
            { id: "all", label: dict.subCatAll },
            { id: "boutique", label: dict.subCatBoutique },
            { id: "yurt", label: dict.subCatYurt },
            { id: "modern", label: dict.subCatModern },
            { id: "hostel", label: dict.subCatHostel }
        ];
    }

    subCats.forEach(sc => {
        const btn = document.createElement('button');
        btn.className = `sub-category-tab ${activeSubCategory === sc.id ? 'active' : ''}`;
        btn.innerText = sc.label;
        btn.setAttribute('data-subcategory', sc.id);
        
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.sub-category-tab').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeSubCategory = e.target.getAttribute('data-subcategory');
            renderCatalog();
        });

        subCategoriesFilterArea.appendChild(btn);
    });

    subCategoriesFilterArea.style.display = 'flex';
}

// Log failed searches to localStorage for analytics
function logFailedSearch(query, region, price, category) {
    if (!query && region === 'all' && price === 'all') return; // don't log empty default searches
    let failedList = JSON.parse(localStorage.getItem('silkroad_failed_searches')) || [];
    failedList.push({
        query: query || "",
        region: region || "all",
        price: price || "all",
        category: category || "all",
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('silkroad_failed_searches', JSON.stringify(failedList));
    console.log("Logged failed search query:", query, region, price, category);
}

// Render Catalog Cards (with Priority Language-based sorting for Guides)
function renderCatalog() {
    const dict = translations[currentLanguage];

    // Hide or Show secondary sub-category tabs
    if (activeCategory === 'transport' || activeCategory === 'guides' || activeCategory === 'hotels' || activeCategory === 'restaurants') {
        if (subCategoriesFilterArea.innerHTML === '' || 
           (activeCategory === 'transport' && subCategoriesFilterArea.firstChild.getAttribute('data-subcategory') === 'in-person') ||
           (activeCategory === 'guides' && subCategoriesFilterArea.firstChild.getAttribute('data-subcategory') === 'sedan') ||
           (activeCategory === 'hotels' && !['all','boutique','yurt','modern','hostel'].includes(subCategoriesFilterArea.firstChild.getAttribute('data-subcategory'))) ||
           (activeCategory === 'restaurants' && !['all','osh','premium','chayxana'].includes(subCategoriesFilterArea.firstChild.getAttribute('data-subcategory')))) {
            renderSubCategories();
        } else {
            subCategoriesFilterArea.style.display = 'flex';
        }
    } else {
        subCategoriesFilterArea.style.display = 'none';
        activeSubCategory = 'all';
    }

    // Toggle Hotel Search dates visibility
    const searchHotelDatesGroup = document.getElementById('search-hotel-dates-group');
    if (searchHotelDatesGroup) {
        searchHotelDatesGroup.style.display = activeCategory === 'hotels' ? 'flex' : 'none';
    }

    // Show Skeletons first
    catalogGrid.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton-image"></div>
            <div class="skeleton-text skeleton-title"></div>
            <div class="skeleton-text skeleton-desc"></div>
            <div class="skeleton-text skeleton-price"></div>
            <div class="skeleton-text skeleton-btn"></div>
        `;
        catalogGrid.appendChild(skeleton);
    }

    // Set results text to loading
    resultsCountText.innerText = currentLanguage === 'uz' ? "Yuklanmoqda..." : (currentLanguage === 'en' ? "Loading..." : "Загрузка...");

    // Simulate API delay
    setTimeout(() => {
        // Filter services based on state
        let filtered = servicesData.filter(item => {
            const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
            
            // Secondary subcategory filtering for transport, guides & hotels
            let matchesSubCategory = true;
            if (activeCategory === 'transport') {
                matchesSubCategory = activeSubCategory === 'all' || item.subCategory === activeSubCategory;
            } else if (activeCategory === 'guides') {
                matchesSubCategory = activeSubCategory === 'all' || item.guideType === activeSubCategory;
            } else if (activeCategory === 'hotels') {
                matchesSubCategory = activeSubCategory === 'all' || item.subCategory === activeSubCategory;
            }

            // Dynamic fields based on current language
            let title = item.titleUz;
            let description = item.descriptionUz;
            if (currentLanguage === 'en') {
                title = item.titleEn;
                description = item.descriptionEn;
            } else if (currentLanguage === 'ru') {
                title = item.titleRu;
                description = item.descriptionRu;
            }

            // Route search matching
            const matchesSearch = searchQuery === '' || 
                title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.region.toLowerCase().includes(searchQuery.toLowerCase());
                
            const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion || 
                title.toLowerCase().includes(selectedRegion.toLowerCase());
            
            let matchesPrice = true;
            if (selectedPrice === 'budget') matchesPrice = item.price < 50;
            else if (selectedPrice === 'mid') matchesPrice = item.price >= 50 && item.price <= 150;
            else if (selectedPrice === 'premium') matchesPrice = item.price > 150;

            return matchesCategory && matchesSubCategory && matchesSearch && matchesRegion && matchesPrice;
        });

        // PRIORITY LANGUAGE-BASED SORTING FOR GUIDES
        if (activeCategory === 'guides') {
            const priorityLang = currentLanguage.toUpperCase(); // e.g. UZ, EN, RU
            filtered.sort((a, b) => {
                const aSpeaks = (a.spokenLanguages && a.spokenLanguages.includes(priorityLang)) ? 1 : 0;
                const bSpeaks = (b.spokenLanguages && b.spokenLanguages.includes(priorityLang)) ? 1 : 0;
                return bSpeaks - aSpeaks; // speaks language comes first
            });
        }

        // Update Result text
        resultsCountText.innerText = `${filtered.length} ${dict.resultsCount}`;
        
        // Clear catalog
        catalogGrid.innerHTML = '';

        if (filtered.length === 0) {
            // Log failed search
            logFailedSearch(searchQuery, selectedRegion, selectedPrice, activeCategory);

            catalogGrid.innerHTML = `
                <div class="empty-state-card" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); backdrop-filter: blur(10px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.25rem; box-shadow: var(--shadow-sm);">
                    <div class="empty-state-icon-wrapper" style="width: 80px; height: 80px; border-radius: 50%; background: var(--primary-cobalt-light); display: flex; align-items: center; justify-content: center; color: var(--accent-gold); margin-bottom: 0.5rem; animation: float 3s ease-in-out infinite;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin: 0;">${dict.emptyStateTitle}</h3>
                    <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 0.5rem auto; line-height: 1.5;">${dict.emptyStateDesc}</p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
                        <button class="btn btn-primary" id="btn-empty-reset" style="padding: 0.6rem 1.5rem;">${dict.btnEmptyReset}</button>
                        <button class="btn btn-outline" id="btn-empty-view-all" style="padding: 0.6rem 1.5rem; background: transparent; border: 1px solid var(--border-light); color: var(--text-main); border-radius: var(--radius-sm); cursor: pointer; font-weight: 600; transition: all 0.3s ease;">${dict.btnEmptyViewAll}</button>
                    </div>

                    <!-- Recommended Section -->
                    <div class="recommended-section" style="margin-top: 3.5rem; width: 100%; border-top: 1px solid var(--border-light); padding-top: 2.5rem;">
                        <h4 style="font-size: 1.2rem; font-weight: 700; color: var(--text-main); text-align: left; margin-bottom: 1.5rem; border-left: 4px solid var(--accent-gold); padding-left: 0.75rem;">${dict.recommendedTitle}</h4>
                        <div class="recommended-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; width: 100%;"></div>
                    </div>
                </div>
            `;

            // Bind Reset Filters
            document.getElementById('btn-empty-reset').addEventListener('click', () => {
                searchQuery = '';
                selectedRegion = 'all';
                selectedPrice = 'all';
                searchInput.value = '';
                filterRegion.value = 'all';
                filterPrice.value = 'all';
                activeSubCategory = 'all';
                renderCatalog();
            });

            // Bind View All
            document.getElementById('btn-empty-view-all').addEventListener('click', () => {
                activeCategory = 'all';
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                const allTab = document.getElementById('tab-cat-all');
                if (allTab) allTab.classList.add('active');
                
                searchQuery = '';
                selectedRegion = 'all';
                selectedPrice = 'all';
                searchInput.value = '';
                filterRegion.value = 'all';
                filterPrice.value = 'all';
                activeSubCategory = 'all';
                renderCatalog();
            });

            // Render Recommended Cards
            const recGrid = catalogGrid.querySelector('.recommended-grid');
            if (recGrid) {
                const topServices = servicesData
                    .filter(item => item.rating >= 4.8)
                    .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
                    .slice(0, 3);

                topServices.forEach(recItem => {
                    let recTitle = recItem.titleUz;
                    let recDesc = recItem.descriptionUz;
                    if (currentLanguage === 'en') {
                        recTitle = recItem.titleEn;
                        recDesc = recItem.descriptionEn;
                    } else if (currentLanguage === 'ru') {
                        recTitle = recItem.titleRu;
                        recDesc = recItem.descriptionRu;
                    }
                    const recRegionName = dict[`opt${recItem.region.charAt(0).toUpperCase() + recItem.region.slice(1)}`] || recItem.region;
                    
                    let recLangBadges = '';
                    if (recItem.category === 'guides' && recItem.spokenLanguages) {
                        recLangBadges = `<div class="card-languages">`;
                        recItem.spokenLanguages.forEach(l => {
                            const isActive = l.toLowerCase() === currentLanguage ? 'active' : '';
                            recLangBadges += `<span class="lang-badge ${isActive}">${l}</span>`;
                        });
                        recLangBadges += `</div>`;
                    }

                    const recCard = document.createElement('article');
                    recCard.className = `card category-${recItem.category}`;
                    recCard.style.textAlign = 'left'; // align text to left inside recommended cards
                    recCard.innerHTML = `
                        <div class="card-image-wrapper">
                            <img src="${recItem.image}" alt="${recTitle}" class="card-image" onerror="this.src='https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600'">
                            <span class="card-badge">${recItem.category === 'crafts' ? dict.badgeMasterclass : dict[`tab${recItem.category.charAt(0).toUpperCase() + recItem.category.slice(1)}`] || recItem.category}</span>
                        </div>
                        <div class="card-content">
                            <div class="card-category">${recRegionName.toUpperCase()} • RATING ★${recItem.rating} (${recItem.reviews})</div>
                            <h3 class="card-title">${recTitle}</h3>
                            ${recLangBadges}
                            <p class="card-description" style="margin-top: 0.5rem;">${recDesc}</p>
                            <div class="card-footer">
                                <div class="card-price">
                                    <span class="price-label">${dict.priceLabel}</span>
                                    <span class="price-amount">$${recItem.price}</span>
                                </div>
                                <button class="btn btn-primary btn-book" data-id="${recItem.id}" id="btn-book-rec-${recItem.id}">
                                    ${dict.btnBook}
                                </button>
                            </div>
                        </div>
                    `;
                    recGrid.appendChild(recCard);
                });

                // Bind click events for booking buttons inside recommended cards
                recGrid.querySelectorAll('.btn-book').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const id = e.target.getAttribute('data-id');
                        openBookingModal(id);
                    });
                });
            }
            return;
        }

        // Append Cards
        filtered.forEach(item => {
            let title = item.titleUz;
            let description = item.descriptionUz;
            if (currentLanguage === 'en') {
                title = item.titleEn;
                description = item.descriptionEn;
            } else if (currentLanguage === 'ru') {
                title = item.titleRu;
                description = item.descriptionRu;
            }
            
            // Map region translations
            const regionName = dict[`opt${item.region.charAt(0).toUpperCase() + item.region.slice(1)}`] || item.region;

            // Generate languages badge capsules for Guides
            let langBadgesHTML = '';
            if (item.category === 'guides' && item.spokenLanguages) {
                langBadgesHTML = `<div class="card-languages">`;
                item.spokenLanguages.forEach(l => {
                    const isActive = l.toLowerCase() === currentLanguage ? 'active' : '';
                    langBadgesHTML += `<span class="lang-badge ${isActive}">${l}</span>`;
                });
                langBadgesHTML += `</div>`;
            }

            // Room inventory check
            let isFullyBooked = false;
            let availRoomsText = '';
            const searchCheckIn = document.getElementById('search-hotel-checkin') ? document.getElementById('search-hotel-checkin').value : '';
            const searchCheckOut = document.getElementById('search-hotel-checkout') ? document.getElementById('search-hotel-checkout').value : '';
            if (item.category === 'hotels') {
                const avail = getAvailableRooms(item, searchCheckIn, searchCheckOut);
                isFullyBooked = (avail <= 0);
                if (searchCheckIn && searchCheckOut) {
                    availRoomsText = `<span style="font-size: 0.75rem; color: ${isFullyBooked ? 'var(--accent-terracotta)' : 'var(--accent-emerald)'}; font-weight: 600; display: block; margin-top: 0.25rem;">${currentLanguage === 'uz' ? `${avail} ta bo'sh xona` : (currentLanguage === 'en' ? `${avail} rooms available` : `${avail} своб. номеров`)}</span>`;
                }
            }

            const card = document.createElement('article');
            card.className = `card category-${item.category} ${isFullyBooked ? 'fully-booked' : ''}`;
            card.id = `card-${item.id}`;

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${item.image}" alt="${title}" class="card-image" onerror="this.src='https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600'">
                    <span class="card-badge">${item.category === 'crafts' ? dict.badgeMasterclass : dict[`tab${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`] || item.category}</span>
                    ${isFullyBooked ? `<span class="fully-booked-badge">${dict.lblFullyBooked}</span>` : ''}
                </div>
                <div class="card-content">
                    <div class="card-category">${regionName.toUpperCase()} • RATING ★${item.rating} (${item.reviews}) ${availRoomsText}</div>
                    <h3 class="card-title">${title}</h3>
                    ${langBadgesHTML}
                    <p class="card-description" style="margin-top: 0.5rem;">${description}</p>
                    <div class="card-footer">
                        <div class="card-price">
                            <span class="price-label">${dict.priceLabel}</span>
                            <span class="price-amount">$${item.price}</span>
                        </div>
                        <button class="btn btn-primary btn-book" data-id="${item.id}" id="btn-book-${item.id}" ${isFullyBooked ? 'disabled' : ''}>
                            ${dict.btnBook}
                        </button>
                    </div>
                </div>
            `;

            catalogGrid.appendChild(card);
        });

        // Bind Book Buttons
        document.querySelectorAll('.btn-book').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                openBookingModal(id);
            });
        });
    }, 600); // 600ms simulated network delay
}

// Open Booking Modal for service (Wizard Setup)
function openBookingModal(itemId) {
    const item = servicesData.find(s => s.id === itemId);
    if (!item) return;

    selectedServiceForBooking = item;

    const dict = translations[currentLanguage];
    let title = item.titleUz;
    let description = item.descriptionUz;
    if (currentLanguage === 'en') {
        title = item.titleEn;
        description = item.descriptionEn;
    } else if (currentLanguage === 'ru') {
        title = item.titleRu;
        description = item.descriptionRu;
    }

    formItemId.value = item.id;
    modalTitleText.innerText = title;
    
    // Set dynamic description info in modal
    formDynamicDetails.innerHTML = `
        <div style="background-color: var(--bg-main); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-gold);">
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">${description}</p>
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.9rem;">
                <span>${dict.priceLabel}:</span>
                <span style="color: var(--primary-cobalt);">$${item.price}</span>
            </div>
        </div>
    `;

    // Reset Form fields
    formDate.value = '';
    formStartDate.value = '';
    formEndDate.value = '';
    formCraftDate.value = '';
    formCraftSlot.innerHTML = '';
    formQuantity.value = '1';
    formQuantity.removeAttribute('max');
    formNotes.value = '';
    formUsername.value = '';
    formChildSeat.checked = false;

    // STEP 1 Form Layout Adjustments
    const singleDateDiv = document.getElementById('form-single-date-group');
    const rangeDateDiv = document.getElementById('form-date-range-group');
    const craftDateSlotsDiv = document.getElementById('form-craft-date-slots-group');
    const hotelDatesDiv = document.getElementById('form-hotel-dates-group');
    const hotelCheckIn = document.getElementById('form-hotel-checkin');
    const hotelCheckOut = document.getElementById('form-hotel-checkout');

    const searchCheckIn = document.getElementById('search-hotel-checkin') ? document.getElementById('search-hotel-checkin').value : '';
    const searchCheckOut = document.getElementById('search-hotel-checkout') ? document.getElementById('search-hotel-checkout').value : '';

    if (item.category === 'guides' && item.guideType === 'virtual') {
        singleDateDiv.style.display = 'none';
        rangeDateDiv.style.display = 'flex';
        craftDateSlotsDiv.style.display = 'none';
        hotelDatesDiv.style.display = 'none';
        formStartDate.setAttribute('required', 'required');
        formEndDate.setAttribute('required', 'required');
        formDate.removeAttribute('required');
        formCraftDate.removeAttribute('required');
        formCraftSlot.removeAttribute('required');
        hotelCheckIn.removeAttribute('required');
        hotelCheckOut.removeAttribute('required');
    } else if (item.category === 'crafts') {
        singleDateDiv.style.display = 'none';
        rangeDateDiv.style.display = 'none';
        craftDateSlotsDiv.style.display = 'flex';
        hotelDatesDiv.style.display = 'none';
        formCraftDate.setAttribute('required', 'required');
        formCraftSlot.setAttribute('required', 'required');
        formDate.removeAttribute('required');
        formStartDate.removeAttribute('required');
        formEndDate.removeAttribute('required');
        hotelCheckIn.removeAttribute('required');
        hotelCheckOut.removeAttribute('required');

        // Populate craft time slots
        formCraftSlot.innerHTML = '';
        if (item.timeSlots) {
            item.timeSlots.forEach(slot => {
                const opt = document.createElement('option');
                opt.value = slot;
                opt.text = slot;
                formCraftSlot.appendChild(opt);
            });
        }
    } else if (item.category === 'hotels') {
        singleDateDiv.style.display = 'none';
        rangeDateDiv.style.display = 'none';
        craftDateSlotsDiv.style.display = 'none';
        hotelDatesDiv.style.display = 'flex';
        
        hotelCheckIn.setAttribute('required', 'required');
        hotelCheckOut.setAttribute('required', 'required');
        formDate.removeAttribute('required');
        formStartDate.removeAttribute('required');
        formEndDate.removeAttribute('required');
        formCraftDate.removeAttribute('required');
        formCraftSlot.removeAttribute('required');

        hotelCheckIn.value = searchCheckIn || '';
        hotelCheckOut.value = searchCheckOut || '';
    } else {
        singleDateDiv.style.display = 'block';
        rangeDateDiv.style.display = 'none';
        craftDateSlotsDiv.style.display = 'none';
        hotelDatesDiv.style.display = 'none';
        formDate.setAttribute('required', 'required');
        formStartDate.removeAttribute('required');
        formEndDate.removeAttribute('required');
        formCraftDate.removeAttribute('required');
        formCraftSlot.removeAttribute('required');
        hotelCheckIn.removeAttribute('required');
        hotelCheckOut.removeAttribute('required');
    }

    // STEP 2 Form Layout Adjustments
    const quantityDiv = document.getElementById('form-quantity-group');
    const childSeatDiv = document.getElementById('form-child-seat-group');
    const guideLangDiv = document.getElementById('form-guide-lang-group');
    const hotelDetailsDiv = document.getElementById('form-hotel-details-group');
    const hotelRoomsInput = document.getElementById('form-hotel-rooms');
    const hotelAdultsInput = document.getElementById('form-hotel-adults');
    const hotelChildrenInput = document.getElementById('form-hotel-children');
    const addonCamel = document.getElementById('form-hotel-addon-camel');
    const addonDinner = document.getElementById('form-hotel-addon-dinner');
    const addonMusic = document.getElementById('form-hotel-addon-music');

    if (item.category === 'transport') {
        quantityDiv.style.display = 'block';
        childSeatDiv.style.display = 'block';
        guideLangDiv.style.display = 'none';
        if (hotelDetailsDiv) hotelDetailsDiv.style.display = 'none';
    } else if (item.category === 'guides') {
        quantityDiv.style.display = 'none';
        childSeatDiv.style.display = 'none';
        guideLangDiv.style.display = 'block';
        if (hotelDetailsDiv) hotelDetailsDiv.style.display = 'none';

        // Populate spoken languages only
        formGuideLang.innerHTML = '';
        if (item.spokenLanguages) {
            item.spokenLanguages.forEach(l => {
                const opt = document.createElement('option');
                opt.value = l.toLowerCase();
                opt.text = l;
                formGuideLang.appendChild(opt);
            });
        }
    } else if (item.category === 'crafts') {
        quantityDiv.style.display = 'block';
        childSeatDiv.style.display = 'none';
        guideLangDiv.style.display = 'none';
        if (hotelDetailsDiv) hotelDetailsDiv.style.display = 'none';
        // Set maximum capacity limit
        formQuantity.max = item.maxCapacity;
    } else if (item.category === 'hotels') {
        quantityDiv.style.display = 'none';
        childSeatDiv.style.display = 'none';
        guideLangDiv.style.display = 'none';
        hotelDetailsDiv.style.display = 'block';

        hotelRoomsInput.value = '1';
        hotelAdultsInput.value = '1';
        hotelChildrenInput.value = '0';
        
        addonCamel.checked = false;
        addonDinner.checked = false;
        addonMusic.checked = false;

        // Dynamic checkboxes display
        const camelLabel = addonCamel.closest('.checkbox-group');
        const musicLabel = addonMusic.closest('.checkbox-group');
        if (item.subCategory === 'yurt') {
            camelLabel.style.display = 'block';
            musicLabel.style.display = 'block';
        } else {
            camelLabel.style.display = 'none';
            musicLabel.style.display = 'none';
        }
    } else {
        quantityDiv.style.display = 'block';
        childSeatDiv.style.display = 'none';
        guideLangDiv.style.display = 'none';
        if (hotelDetailsDiv) hotelDetailsDiv.style.display = 'none';
    }

    // Reset Wizard steps
    currentStep = 1;
    updateWizardUI();

    // Open Modal
    bookingModal.classList.add('active');
}

// Update Step panels and indicators visibilities
function updateWizardUI() {
    // Hide all step panels
    document.querySelectorAll('.step-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Show active panel
    document.getElementById(`step-panel-${currentStep}`).classList.add('active');

    // Update progress tracker circles
    document.querySelectorAll('.wizard-step-node').forEach(node => {
        const stepNum = parseInt(node.getAttribute('data-step'));
        node.classList.remove('active', 'completed');
        if (stepNum === currentStep) {
            node.classList.add('active');
        } else if (stepNum < currentStep) {
            node.classList.add('completed');
        }
    });

    // Update buttons
    if (currentStep === 1) {
        btnWizardBack.style.display = 'none';
        btnWizardNext.style.display = 'block';
        btnModalConfirm.style.display = 'none';
    } else if (currentStep === 4) {
        btnWizardBack.style.display = 'block';
        btnWizardNext.style.display = 'none';
        btnModalConfirm.style.display = 'block';
    } else {
        btnWizardBack.style.display = 'block';
        btnWizardNext.style.display = 'block';
        btnModalConfirm.style.display = 'none';
    }
}

// Wizard Next Button Trigger
btnWizardNext.addEventListener('click', () => {
    if (!selectedServiceForBooking) return;
    const item = selectedServiceForBooking;

    // Validate current step input
    if (currentStep === 1) {
        if (item.category === 'guides' && item.guideType === 'virtual') {
            if (!formStartDate.value) {
                formStartDate.reportValidity();
                return;
            }
            if (!formEndDate.value) {
                formEndDate.reportValidity();
                return;
            }
            // Start must be before end date
            const startVal = new Date(formStartDate.value);
            const endVal = new Date(formEndDate.value);
            if (endVal < startVal) {
                formEndDate.setCustomValidity(currentLanguage === 'uz' ? "Tugash sanasi boshlanishidan oldin bo'lishi mumkin emas!" : "End date cannot be before start date!");
                formEndDate.reportValidity();
                return;
            } else {
                formEndDate.setCustomValidity("");
            }
        } else if (item.category === 'crafts') {
            if (!formCraftDate.value) {
                formCraftDate.reportValidity();
                return;
            }
            if (!formCraftSlot.value) {
                formCraftSlot.reportValidity();
                return;
            }
        } else if (item.category === 'hotels') {
            const checkIn = document.getElementById('form-hotel-checkin');
            const checkOut = document.getElementById('form-hotel-checkout');
            if (!checkIn.value) {
                checkIn.reportValidity();
                return;
            }
            if (!checkOut.value) {
                checkOut.reportValidity();
                return;
            }
            const inDate = new Date(checkIn.value);
            const outDate = new Date(checkOut.value);
            if (outDate <= inDate) {
                checkOut.setCustomValidity(translations[currentLanguage].errCheckOutBeforeCheckIn);
                checkOut.reportValidity();
                return;
            } else {
                checkOut.setCustomValidity("");
            }

            // Check availability
            const avail = getAvailableRooms(item, checkIn.value, checkOut.value);
            if (avail <= 0) {
                checkOut.setCustomValidity(translations[currentLanguage].errNoRoomsAvailable);
                checkOut.reportValidity();
                return;
            } else {
                checkOut.setCustomValidity("");
            }
        } else {
            if (!formDate.value) {
                formDate.reportValidity();
                return;
            }
        }
    } else if (currentStep === 2) {
        if (item.category === 'hotels') {
            const hotelRoomsInput = document.getElementById('form-hotel-rooms');
            const hotelAdultsInput = document.getElementById('form-hotel-adults');
            const hotelChildrenInput = document.getElementById('form-hotel-children');
            const checkInVal = document.getElementById('form-hotel-checkin').value;
            const checkOutVal = document.getElementById('form-hotel-checkout').value;

            const rooms = parseInt(hotelRoomsInput.value);
            const adults = parseInt(hotelAdultsInput.value);
            const children = parseInt(hotelChildrenInput.value);

            if (isNaN(rooms) || rooms < 1) {
                hotelRoomsInput.reportValidity();
                return;
            }
            if (isNaN(adults) || adults < 1) {
                hotelAdultsInput.reportValidity();
                return;
            }
            if (isNaN(children) || children < 0) {
                hotelChildrenInput.reportValidity();
                return;
            }

            const avail = getAvailableRooms(item, checkInVal, checkOutVal);
            if (rooms > avail) {
                const msg = translations[currentLanguage].errRoomsExceedCapacity.replace('{avail}', avail);
                hotelRoomsInput.setCustomValidity(msg);
                hotelRoomsInput.reportValidity();
                return;
            } else {
                hotelRoomsInput.setCustomValidity("");
            }
        } else if (item.category !== 'guides') {
            if (!formQuantity.value || parseInt(formQuantity.value) < 1) {
                formQuantity.reportValidity();
                return;
            }
            // Capacity validation for crafts
            if (item.category === 'crafts') {
                const qty = parseInt(formQuantity.value);
                if (qty > item.maxCapacity) {
                    const msg = translations[currentLanguage].errMaxCapacity.replace('{max}', item.maxCapacity);
                    formQuantity.setCustomValidity(msg);
                    formQuantity.reportValidity();
                    return;
                } else {
                    formQuantity.setCustomValidity("");
                }
            }
        }
    } else if (currentStep === 3) {
        if (!formContact.value) {
            formContact.reportValidity();
            return;
        }
        if (!formUsername.value.trim()) {
            formUsername.reportValidity();
            return;
        }
        
        // Populate Step 4 review data
        populateReviewSummary();
    }

    // Go to next step
    currentStep++;
    updateWizardUI();
});

// Wizard Back Button Trigger
btnWizardBack.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
    }
});

// Populate Review Summary Table
function populateReviewSummary() {
    const dict = translations[currentLanguage];
    if (!selectedServiceForBooking) return;

    const item = selectedServiceForBooking;
    const title = currentLanguage === 'uz' ? item.titleUz : (currentLanguage === 'en' ? item.titleEn : item.titleRu);
    
    // Service Title
    document.getElementById('review-service-title').innerText = title;

    // Date / Date Range
    let dateStr = '';
    let diffDays = 1;
    if (item.category === 'guides' && item.guideType === 'virtual') {
        const start = new Date(formStartDate.value);
        const end = new Date(formEndDate.value);
        const diffTime = Math.abs(end - start);
        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // inclusive
        
        const startStr = start.toLocaleDateString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US');
        const endStr = end.toLocaleDateString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US');
        dateStr = `${startStr} ➔ ${endStr} (${diffDays} ${currentLanguage === 'uz' ? 'kun' : (currentLanguage === 'en' ? 'days' : 'дней')})`;
    } else if (item.category === 'crafts') {
        const cDate = new Date(formCraftDate.value);
        const craftDateStr = isNaN(cDate.getTime()) ? formCraftDate.value : cDate.toLocaleDateString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US');
        dateStr = `${craftDateStr} (${formCraftSlot.value})`;
    } else if (item.category === 'hotels') {
        const checkInVal = document.getElementById('form-hotel-checkin').value;
        const checkOutVal = document.getElementById('form-hotel-checkout').value;
        const start = new Date(checkInVal);
        const end = new Date(checkOutVal);
        const diffTime = Math.abs(end - start);
        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // nights
        
        const startStr = start.toLocaleDateString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US');
        const endStr = end.toLocaleDateString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US');
        dateStr = `${startStr} ➔ ${endStr} (${diffDays} ${currentLanguage === 'uz' ? 'tun' : (currentLanguage === 'en' ? 'nights' : 'ночей')})`;
    } else {
        const dateObj = new Date(formDate.value);
        dateStr = isNaN(dateObj.getTime())
            ? formDate.value
            : dateObj.toLocaleDateString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US') + ' ' + dateObj.toLocaleTimeString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US', {hour: '2-digit', minute:'2-digit'});
    }
    document.getElementById('review-datetime-val').innerText = dateStr;

    // Guests / Quantity
    if (item.category === 'guides') {
        // guides rate is per day/booking, not guests multiplied
        document.getElementById('review-guests-val').innerText = currentLanguage === 'uz' ? "1 ta guruh" : (currentLanguage === 'en' ? "1 group booking" : "1 групповая бронь");
    } else if (item.category === 'hotels') {
        const rooms = parseInt(document.getElementById('form-hotel-rooms').value) || 1;
        const adults = parseInt(document.getElementById('form-hotel-adults').value) || 1;
        const children = parseInt(document.getElementById('form-hotel-children').value) || 0;
        const guestsText = currentLanguage === 'uz' 
            ? `${rooms} xona, ${adults} kattalar, ${children} bolalar`
            : (currentLanguage === 'en'
                ? `${rooms} room(s), ${adults} adult(s), ${children} child(ren)`
                : `${rooms} ном., ${adults} взр., ${children} дет.`);
        document.getElementById('review-guests-val').innerText = guestsText;
    } else {
        document.getElementById('review-guests-val').innerText = `${formQuantity.value} ${dict.itineraryItemGuests}`;
    }

    // Child seat (Transport only)
    const childSeatRow = document.getElementById('review-child-seat-row');
    if (item.category === 'transport') {
        childSeatRow.style.display = 'table-row';
        document.getElementById('review-child-seat-val').innerText = formChildSeat.checked ? dict.msgYes : dict.msgNo;
    } else {
        childSeatRow.style.display = 'none';
    }

    // Guide language (Guides only)
    const guideLangRow = document.getElementById('review-guide-lang-row');
    if (item.category === 'guides') {
        guideLangRow.style.display = 'table-row';
        document.getElementById('review-guide-lang-val').innerText = formGuideLang.value.toUpperCase();
    } else {
        guideLangRow.style.display = 'none';
    }

    // Craft Details (Crafts only)
    const craftDurationRow = document.getElementById('review-craft-duration-row');
    const craftSlotRow = document.getElementById('review-craft-slot-row');
    const craftCoordsRow = document.getElementById('review-craft-coords-row');
    if (item.category === 'crafts') {
        craftDurationRow.style.display = 'table-row';
        craftSlotRow.style.display = 'table-row';
        craftCoordsRow.style.display = 'table-row';
        document.getElementById('review-craft-duration-val').innerText = `${item.durationMinutes} ${currentLanguage === 'uz' ? 'daqiqa' : (currentLanguage === 'en' ? 'minutes' : 'минут')}`;
        document.getElementById('review-craft-slot-val').innerText = formCraftSlot.value;
        document.getElementById('review-craft-coords-val').innerHTML = `<a href="https://maps.google.com/?q=${item.coordinates}" target="_blank" style="color: var(--primary-cobalt); text-decoration: underline;">${item.coordinates}</a>`;
    } else {
        craftDurationRow.style.display = 'none';
        craftSlotRow.style.display = 'none';
        craftCoordsRow.style.display = 'none';
    }

    // Hotel Specific Review Rows
    const hotelRoomsRow = document.getElementById('review-hotel-rooms-row');
    const hotelNightsRow = document.getElementById('review-hotel-nights-row');
    const hotelAddonsRow = document.getElementById('review-hotel-addons-row');

    if (item.category === 'hotels') {
        const rooms = parseInt(document.getElementById('form-hotel-rooms').value) || 1;
        const adults = parseInt(document.getElementById('form-hotel-adults').value) || 1;
        const children = parseInt(document.getElementById('form-hotel-children').value) || 0;
        
        hotelRoomsRow.style.display = 'table-row';
        hotelNightsRow.style.display = 'table-row';
        hotelAddonsRow.style.display = 'table-row';

        document.getElementById('review-hotel-rooms-val').innerText = rooms;
        document.getElementById('review-hotel-nights-val').innerText = diffDays; // diffDays represents nights here

        // Process Add-ons
        let addonsList = [];
        let addonsCost = 0;
        const totalGuests = adults + children;

        if (document.getElementById('form-hotel-addon-camel').checked) {
            addonsList.push(currentLanguage === 'uz' ? "Tuya minish" : (currentLanguage === 'en' ? "Camel riding" : "Катание на верблюдах"));
            addonsCost += 15 * totalGuests;
        }
        if (document.getElementById('form-hotel-addon-dinner').checked) {
            addonsList.push(currentLanguage === 'uz' ? "Milliy dasturxon" : (currentLanguage === 'en' ? "National dinner" : "Национальный ужин"));
            addonsCost += 20 * totalGuests;
        }
        if (document.getElementById('form-hotel-addon-music').checked) {
            addonsList.push(currentLanguage === 'uz' ? "Jonli musiqa" : (currentLanguage === 'en' ? "Live music" : "Живая музыка"));
            addonsCost += 10 * totalGuests;
        }

        const addonsText = addonsList.length > 0 
            ? `${addonsList.join(', ')} (+$${addonsCost})` 
            : (currentLanguage === 'uz' ? "Yo'q" : (currentLanguage === 'en' ? "None" : "Нет"));
        document.getElementById('review-hotel-addons-val').innerText = addonsText;
    } else {
        hotelRoomsRow.style.display = 'none';
        hotelNightsRow.style.display = 'none';
        hotelAddonsRow.style.display = 'none';
    }

    // Messenger & Name
    const messengerRow = document.getElementById('review-messenger-row');
    messengerRow.style.display = 'table-row';
    document.getElementById('review-messenger-val').innerText = formMessengerType.value.toUpperCase();
    
    document.getElementById('review-contact-val').innerText = formContact.value;
    document.getElementById('review-name-val').innerText = formUsername.value.trim();

    // Price calculation
    let total = item.price;
    if (item.category === 'guides' && item.guideType === 'virtual') {
        total = item.price * diffDays;
    } else if (item.category === 'hotels') {
        const rooms = parseInt(document.getElementById('form-hotel-rooms').value) || 1;
        const adults = parseInt(document.getElementById('form-hotel-adults').value) || 1;
        const children = parseInt(document.getElementById('form-hotel-children').value) || 0;
        const totalGuests = adults + children;
        let addonsCost = 0;
        if (document.getElementById('form-hotel-addon-camel').checked) addonsCost += 15 * totalGuests;
        if (document.getElementById('form-hotel-addon-dinner').checked) addonsCost += 20 * totalGuests;
        if (document.getElementById('form-hotel-addon-music').checked) addonsCost += 10 * totalGuests;
        total = (item.price * rooms * diffDays) + addonsCost;
    } else if (item.category !== 'transport' && item.category !== 'guides') {
        total = item.price * parseInt(formQuantity.value);
    }
    document.getElementById('review-price-val').innerText = `$${total.toFixed(2)}`;
}

// Generate PDF / Text Tour Voucher
btnGeneratePdfReceipt.addEventListener('click', () => {
    if (!selectedServiceForBooking) return;
    const item = selectedServiceForBooking;
    const dict = translations[currentLanguage];

    const title = currentLanguage === 'uz' ? item.titleUz : (currentLanguage === 'en' ? item.titleEn : item.titleRu);
    const contact = formContact.value;
    const name = formUsername.value.trim();
    const messenger = formMessengerType.value.toUpperCase();

    let dateStr = '';
    let total = item.price;
    if (item.category === 'guides' && item.guideType === 'virtual') {
        const start = new Date(formStartDate.value);
        const end = new Date(formEndDate.value);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        total = item.price * diffDays;
        dateStr = `${formStartDate.value} to ${formEndDate.value} (${diffDays} days)`;
    } else if (item.category === 'crafts') {
        total = item.price * parseInt(formQuantity.value);
        dateStr = `${formCraftDate.value} (${formCraftSlot.value})`;
    } else if (item.category === 'hotels') {
        const checkInVal = document.getElementById('form-hotel-checkin').value;
        const checkOutVal = document.getElementById('form-hotel-checkout').value;
        const start = new Date(checkInVal);
        const end = new Date(checkOutVal);
        const diffTime = Math.abs(end - start);
        const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        dateStr = `${checkInVal} ➔ ${checkOutVal} (${nights} nights)`;

        const rooms = parseInt(document.getElementById('form-hotel-rooms').value) || 1;
        const adults = parseInt(document.getElementById('form-hotel-adults').value) || 1;
        const children = parseInt(document.getElementById('form-hotel-children').value) || 0;
        const totalGuests = adults + children;

        let addonsCost = 0;
        if (document.getElementById('form-hotel-addon-camel').checked) addonsCost += 15 * totalGuests;
        if (document.getElementById('form-hotel-addon-dinner').checked) addonsCost += 20 * totalGuests;
        if (document.getElementById('form-hotel-addon-music').checked) addonsCost += 10 * totalGuests;

        total = (item.price * rooms * nights) + addonsCost;
    } else {
        dateStr = formDate.value;
        if (item.category !== 'transport' && item.category !== 'guides') {
            total = item.price * parseInt(formQuantity.value);
        }
    }

    const isHotel = item.category === 'hotels';
    const isGuide = item.category === 'guides';
    const isCraft = item.category === 'crafts';
    const filename = (isGuide || isCraft || isHotel) ? `voucher_SR-${Date.now().toString().slice(-4)}.txt` : `receipt_SR-${Date.now().toString().slice(-4)}.txt`;
    
    let docHeader = "SILKROAD SERVICE RECEIPT";
    if (isGuide) docHeader = "SILKROAD TOURIST VOUCHER";
    else if (isCraft) docHeader = "SILKROAD CRAFT WORKSHOP VOUCHER";
    else if (isHotel) docHeader = "SILKROAD ACCOMMODATION VOUCHER";

    let detailsStr = '';
    if (isGuide) {
        detailsStr = `
Guide Type:    ${item.guideType.toUpperCase()}
Language:      ${formGuideLang.value.toUpperCase()}
Messenger:     ${messenger} (${name})
Date/Period:   ${dateStr}
        `;
    } else if (isCraft) {
        detailsStr = `
Duration:      ${item.durationMinutes} minutes
Time Slot:     ${formCraftSlot.value}
Quantity:      ${formQuantity.value} pax
Coordinates:   ${item.coordinates}
Location URL:  https://maps.google.com/?q=${item.coordinates}
Messenger:     ${messenger} (${name})
Date:          ${formCraftDate.value}
        `;
    } else if (isHotel) {
        const checkInVal = document.getElementById('form-hotel-checkin').value;
        const checkOutVal = document.getElementById('form-hotel-checkout').value;
        const rooms = parseInt(document.getElementById('form-hotel-rooms').value) || 1;
        const adults = parseInt(document.getElementById('form-hotel-adults').value) || 1;
        const children = parseInt(document.getElementById('form-hotel-children').value) || 0;
        const totalGuests = adults + children;

        let addonsList = [];
        if (document.getElementById('form-hotel-addon-camel').checked) addonsList.push("Camel Riding (+$15/person)");
        if (document.getElementById('form-hotel-addon-dinner').checked) addonsList.push("National Dinner (+$20/person)");
        if (document.getElementById('form-hotel-addon-music').checked) addonsList.push("Campfire Music (+$10/person)");
        const addonsStr = addonsList.length > 0 ? addonsList.join(', ') : "None";

        detailsStr = `
Check-In:      ${checkInVal}
Check-Out:     ${checkOutVal}
Nights:        ${dateStr.split('(')[1].split(')')[0]}
Rooms booked:  ${rooms} room(s)
Guests:        ${adults} Adult(s), ${children} Child(ren) (Total: ${totalGuests})
Add-ons:       ${addonsStr}
Coordinates:   ${item.coordinates || 'N/A'}
Google Maps:   https://maps.google.com/?q=${item.coordinates || ''}
Messenger:     ${messenger} (${name})
        `;
    } else {
        detailsStr = `
Quantity:      ${formQuantity.value}
Child Seat:    ${formChildSeat.checked ? dict.msgYes : dict.msgNo}
Messenger:     ${messenger} (${name})
Date & Time:   ${dateStr}
        `;
    }

    let qrSimulation = '';
    if (isGuide || isCraft || isHotel) {
        qrSimulation = `
----------------------------------------
[ QR CODE SIMULATION - SCAN FOR ENTRY ]
   +-------------------------------+
   |  ##      ##  ##  ######  ##   |
   |  ##  ##  ##      ##  ##  ##   |
   |  ######  ######  ######  #### |
   |  ##  ##  ##  ##  ##  ##  ##   |
   +-------------------------------+
       Booking ID: #SR-${Date.now().toString().slice(-6)}
`;
    }

    const docContent = `
========================================
       ${docHeader}
========================================
Booking ID:    #SR-${Date.now().toString().slice(-6)}
Service:       ${title}
Location:      ${item.region.toUpperCase()}
----------------------------------------
${detailsStr.trim()}
Contact phone: ${contact}
----------------------------------------
TOTAL PRICE:   $${total.toFixed(2)}
${qrSimulation}
========================================
Thank you for booking with SilkRoad Operations!
Automatic notification sent to guide/operator/artisan.
Welcome to Uzbekistan!
    `;

    // Trigger file download
    const blob = new Blob([docContent], {type: "text/plain;charset=utf-8"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert((isGuide || isCraft || isHotel) ? "PDF Vaucher yuklab olindi (MOCK voucher.txt)" : dict.alertReceiptGenerated);
});

// Close Modal
function closeModal() {
    bookingModal.classList.remove('active');
}

// Send Booking Data to Live n8n Webhook
async function sendBookingToN8n(bookingItem, item) {
    const webhookUrl = 'https://loyiha1-n8n.p3ddj3.easypanel.host/webhook-test/silkroad-booking';
    
    // 1. Construct dynamic category-specific details
    let details = {};
    if (item.category === 'transport') {
        const qtyVal = document.getElementById('form-quantity') ? parseInt(document.getElementById('form-quantity').value) || 1 : 1;
        const childSeatEl = document.getElementById('form-child-seat');
        const childSeatVal = childSeatEl ? childSeatEl.checked : false;
        details = {
            quantity: qtyVal,
            childSeat: childSeatVal,
            region: item.region,
            vehicleType: item.vehicleType
        };
    } else if (item.category === 'guides') {
        const guideLangEl = document.getElementById('form-guide-lang');
        const guideLangVal = guideLangEl ? guideLangEl.value : '';
        details = {
            guideType: item.guideType,
            spokenLanguage: guideLangVal,
            region: item.region
        };
    } else if (item.category === 'crafts') {
        const qtyVal = document.getElementById('form-quantity') ? parseInt(document.getElementById('form-quantity').value) || 1 : 1;
        const craftDateEl = document.getElementById('form-craft-date');
        const craftSlotEl = document.getElementById('form-craft-slot');
        details = {
            quantity: qtyVal,
            workshopDate: craftDateEl ? craftDateEl.value : '',
            timeSlot: craftSlotEl ? craftSlotEl.value : '',
            durationMinutes: item.durationMinutes,
            coordinates: item.coordinates,
            region: item.region
        };
    } else if (item.category === 'hotels') {
        const checkInEl = document.getElementById('form-hotel-checkin');
        const checkOutEl = document.getElementById('form-hotel-checkout');
        const roomsEl = document.getElementById('form-hotel-rooms');
        const adultsEl = document.getElementById('form-hotel-adults');
        const childrenEl = document.getElementById('form-hotel-children');
        
        const checkInVal = checkInEl ? checkInEl.value : '';
        const checkOutVal = checkOutEl ? checkOutEl.value : '';
        const rooms = roomsEl ? parseInt(roomsEl.value) || 1 : 1;
        const adults = adultsEl ? parseInt(adultsEl.value) || 1 : 1;
        const children = childrenEl ? parseInt(childrenEl.value) || 0 : 0;
        
        let addonsList = [];
        const camelEl = document.getElementById('form-hotel-addon-camel');
        const dinnerEl = document.getElementById('form-hotel-addon-dinner');
        const musicEl = document.getElementById('form-hotel-addon-music');
        if (camelEl && camelEl.checked) addonsList.push("Camel Riding");
        if (dinnerEl && dinnerEl.checked) addonsList.push("National Dinner");
        if (musicEl && musicEl.checked) addonsList.push("Campfire Music");

        const start = new Date(checkInVal);
        const end = new Date(checkOutVal);
        const diffTime = Math.abs(end - start);
        const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

        details = {
            checkIn: checkInVal,
            checkOut: checkOutVal,
            nights: nights,
            rooms: rooms,
            adults: adults,
            children: children,
            totalGuests: adults + children,
            addons: addonsList,
            coordinates: item.coordinates,
            region: item.region
        };
    } else if (item.category === 'restaurants') {
        const guestsEl = document.getElementById('form-restaurant-guests');
        const resDateEl = document.getElementById('form-restaurant-date');
        const resTimeEl = document.getElementById('form-restaurant-time');
        const tableLocEl = document.getElementById('form-restaurant-table-type');
        
        const guests = guestsEl ? parseInt(guestsEl.value) || 1 : 1;
        const resDateVal = resDateEl ? resDateEl.value : '';
        const resTimeVal = resTimeEl ? resTimeEl.value : '';
        const tableLocVal = tableLocEl ? tableLocEl.value : '';
        
        details = {
            guests: guests,
            reservationDate: resDateVal,
            reservationTime: resTimeVal,
            tableType: tableLocVal,
            pricingType: item.pricingType,
            coordinates: item.coordinates,
            region: item.region
        };
    }

    const usernameEl = document.getElementById('form-username');
    const contactEl = document.getElementById('form-contact');
    const messengerEl = document.getElementById('form-messenger-type');

    // 2. Prepare JSON payload
    const payload = {
        bookingId: bookingItem.bookingId,
        serviceId: bookingItem.serviceId,
        category: item.category,
        title: bookingItem.title,
        basePrice: bookingItem.basePrice,
        quantity: bookingItem.quantity,
        totalPrice: bookingItem.totalItemPrice,
        date: bookingItem.date,
        notes: bookingItem.notes,
        customerName: usernameEl ? usernameEl.value.trim() : '',
        contactPhone: contactEl ? contactEl.value : '',
        messengerChannel: messengerEl ? messengerEl.value.toUpperCase() : '',
        language: currentLanguage,
        timestamp: new Date().toISOString(),
        details: details
    };

    // 3. Generate user-facing notification alert
    let webhookMsg = '';
    const name = payload.customerName;
    const phone = payload.contactPhone;
    const title = payload.title;

    if (item.category === 'hotels') {
        webhookMsg = `🔔 [n8n Webhook Sent] Yangi mehmonxona broni: ${title}, ${details.nights} kecha, ${details.totalGuests} kishi. Mijoz: ${name} (${phone})`;
    } else if (item.category === 'restaurants') {
        const restShortName = title.split(' - ')[0];
        let tableLocText = details.tableType === 'indoor' ? 'Zal ichida' : (details.tableType === 'outdoor' ? "Ochiq havoda / Hovuz bo'yida" : 'VIP xona');
        webhookMsg = `🔔 [n8n Webhook Sent] Yangi restoran broni: ${restShortName}, ${details.reservationDate} ${details.reservationTime} ga, ${details.guests} kishi, ${tableLocText}. Mijoz: ${name} (${phone})`;
    } else if (item.category === 'transport') {
        webhookMsg = `🔔 [n8n Webhook Sent] Yangi transport broni: ${title}, ${payload.quantity} ta mashina. Mijoz: ${name} (${phone})`;
    } else if (item.category === 'guides') {
        webhookMsg = `🔔 [n8n Webhook Sent] Yangi gid broni: ${title}, Tili: ${details.spokenLanguage.toUpperCase()}, Sanasi: ${payload.date}. Mijoz: ${name} (${phone})`;
    } else if (item.category === 'crafts') {
        webhookMsg = `🔔 [n8n Webhook Sent] Yangi master-klass broni: ${title}, Soni: ${payload.quantity} kishi, ${payload.date}. Mijoz: ${name} (${phone})`;
    } else {
        webhookMsg = `🔔 [n8n Webhook Sent] Yangi bron: ${title}. Mijoz: ${name} (${phone})`;
    }

    console.log(webhookMsg, payload);
    alert(webhookMsg);

    // 4. Send asynchronous HTTP POST request
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            console.log("Booking successfully sent to n8n webhook!", response.status);
        } else {
            console.error("Failed to send booking to n8n. Status:", response.status);
        }
    } catch (err) {
        console.error("Error sending booking to n8n webhook:", err);
    }
}

// Add Item to Itinerary Form Handler
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!selectedServiceForBooking) return;
    const item = selectedServiceForBooking;

    const title = currentLanguage === 'uz' ? item.titleUz : (currentLanguage === 'en' ? item.titleEn : item.titleRu);
    const qty = parseInt(formQuantity.value);
    
    let dateVal = '';
    let total = item.price;
    let customNotes = formNotes.value;
    let guests = 1;

    if (item.category === 'guides' && item.guideType === 'virtual') {
        const start = new Date(formStartDate.value);
        const end = new Date(formEndDate.value);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        total = item.price * diffDays;
        dateVal = `${formStartDate.value} ➔ ${formEndDate.value}`;
    } else if (item.category === 'crafts') {
        total = item.price * qty;
        dateVal = `${formCraftDate.value} (${formCraftSlot.value})`;
    } else if (item.category === 'hotels') {
        const checkInVal = document.getElementById('form-hotel-checkin').value;
        const checkOutVal = document.getElementById('form-hotel-checkout').value;
        const rooms = parseInt(document.getElementById('form-hotel-rooms').value) || 1;
        const adults = parseInt(document.getElementById('form-hotel-adults').value) || 1;
        const children = parseInt(document.getElementById('form-hotel-children').value) || 0;

        const start = new Date(checkInVal);
        const end = new Date(checkOutVal);
        const diffTime = Math.abs(end - start);
        const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        dateVal = `${checkInVal} ➔ ${checkOutVal}`;

        let addonsList = [];
        let addonsCost = 0;
        const totalGuests = adults + children;

        if (document.getElementById('form-hotel-addon-camel').checked) {
            addonsList.push("Camel Riding");
            addonsCost += 15 * totalGuests;
        }
        if (document.getElementById('form-hotel-addon-dinner').checked) {
            addonsList.push("National Dinner");
            addonsCost += 20 * totalGuests;
        }
        if (document.getElementById('form-hotel-addon-music').checked) {
            addonsList.push("Campfire Music");
            addonsCost += 10 * totalGuests;
        }

        total = (item.price * rooms * nights) + addonsCost;
        
        customNotes += ` [Rooms: ${rooms}] [Guests: ${adults}A+${children}C]`;
        if (addonsList.length > 0) {
            customNotes += ` [Add-ons: ${addonsList.join(', ')}]`;
        }
    } else if (item.category === 'restaurants') {
        guests = parseInt(formRestaurantGuests.value) || 1;
        const isVip = formRestaurantTableType.value === 'vip';
        const vipPremium = isVip ? 10 : 0;
        if (item.pricingType === 'fee') {
            total = item.price + vipPremium;
        } else {
            total = (item.price * guests) + vipPremium;
        }
        dateVal = `${formRestaurantDate.value} (${formRestaurantTime.value})`;

        const tableLocVal = formRestaurantTableType.value;
        let tableLocText = tableLocVal === 'indoor' ? 'Zal ichida' : (tableLocVal === 'outdoor' ? "Ochiq havoda / Hovuz bo'yida" : 'VIP xona');
        const pricingDesc = item.pricingType === 'fee' ? 'Booking Fee' : 'Deposit';

        customNotes += ` [Time: ${formRestaurantTime.value}] [Guests: ${guests}] [Table: ${tableLocText}] [Type: ${pricingDesc}]`;
    } else {
        dateVal = formDate.value;
        if (item.category !== 'transport' && item.category !== 'guides') {
            total = item.price * qty;
        }
    }

    const bookingItem = {
        bookingId: Date.now().toString(), // unique key in itinerary
        serviceId: item.id,
        title: title,
        basePrice: item.price,
        quantity: item.category === 'guides' ? 1 : (item.category === 'hotels' ? parseInt(document.getElementById('form-hotel-rooms').value) : (item.category === 'restaurants' ? guests : qty)),
        totalItemPrice: total,
        date: dateVal,
        notes: customNotes.trim(),
        contact: `${formContact.value} (Messenger: ${formMessengerType.value.toUpperCase()}: ${formUsername.value.trim()})`
    };

    itinerary.push(bookingItem);
    saveItinerary();
    renderItinerary();
    closeModal();
    sendBookingToN8n(bookingItem, item);
});

// Remove Item from Itinerary
function removeItineraryItem(bookingId) {
    itinerary = itinerary.filter(item => item.bookingId !== bookingId);
    saveItinerary();
    renderItinerary();
}

// Save Itinerary to LocalStorage
function saveItinerary() {
    localStorage.setItem('silkroad_itinerary', JSON.stringify(itinerary));
}

// Render Itinerary Sidebar
function renderItinerary() {
    const dict = translations[currentLanguage];
    itineraryCount.innerText = itinerary.length;
    summaryItemsCount.innerText = `${itinerary.length} ${dict.itineraryItemGuests}`;

    // Clear Container
    itineraryItemsContainer.innerHTML = '';

    if (itinerary.length === 0) {
        emptyItineraryPlaceholder.style.display = 'block';
        itineraryItemsContainer.appendChild(emptyItineraryPlaceholder);
        summaryTotalPrice.innerText = '$0.00';
        return;
    }

    emptyItineraryPlaceholder.style.display = 'none';

    let total = 0;

    itinerary.forEach(item => {
        total += item.totalItemPrice;

        const dateObj = new Date(item.date);
        let localeCode = 'uz-UZ';
        if (currentLanguage === 'en') localeCode = 'en-US';
        else if (currentLanguage === 'ru') localeCode = 'ru-RU';

        const formattedDate = isNaN(dateObj.getTime()) 
            ? item.date 
            : dateObj.toLocaleDateString(localeCode) + ' ' + dateObj.toLocaleTimeString(localeCode, {hour: '2-digit', minute:'2-digit'});

        const div = document.createElement('div');
        div.className = 'itinerary-item';
        div.id = `itinerary-item-${item.bookingId}`;

        div.innerHTML = `
            <button class="itinerary-item-remove" data-id="${item.bookingId}" id="btn-remove-${item.bookingId}">&times;</button>
            <div class="itinerary-item-title">${item.title}</div>
            <div class="itinerary-item-meta">
                <span>📅 ${formattedDate}</span>
                <span>👥 ${item.quantity} ${dict.itineraryItemGuests}</span>
                <span>📞 ${dict.itineraryItemContact}: ${item.contact}</span>
            </div>
            ${item.notes ? `<div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">${dict.itineraryItemNotes}: ${item.notes}</div>` : ''}
            <div class="itinerary-item-price">$${item.totalItemPrice.toFixed(2)}</div>
        `;

        itineraryItemsContainer.appendChild(div);
    });

    summaryTotalPrice.innerText = `$${total.toFixed(2)}`;

    // Bind Remove Event
    document.querySelectorAll('.itinerary-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookingId = e.target.getAttribute('data-id');
            removeItineraryItem(bookingId);
        });
    });
}

// Generate Share Message
function generateShareText() {
    const dict = translations[currentLanguage];
    if (itinerary.length === 0) {
        if (currentLanguage === 'uz') return "SilkRoad: Hali hech narsa rejalashtirilmagan.";
        if (currentLanguage === 'ru') return "SilkRoad: План поездки пока пуст.";
        return "SilkRoad: Nothing planned yet.";
    }

    let msg = `${dict.shareMessageTitle}\n`;
    msg += `---------------------------------\n`;
    
    let total = 0;
    itinerary.forEach((item, index) => {
        total += item.totalItemPrice;
        const dateObj = new Date(item.date);
        let localeCode = 'uz-UZ';
        if (currentLanguage === 'en') localeCode = 'en-US';
        else if (currentLanguage === 'ru') localeCode = 'ru-RU';
        const formattedDate = isNaN(dateObj.getTime()) ? item.date : dateObj.toLocaleString(localeCode);

        msg += `${index + 1}. ${item.title}\n`;
        msg += `   📅 ${dict.lblFormDate}: ${formattedDate}\n`;
        msg += `   👥 ${dict.lblFormQuantity.split('/')[0].trim()}: ${item.quantity}\n`;
        msg += `   📞 ${dict.itineraryItemContact}: ${item.contact}\n`;
        if (item.notes) {
            msg += `   📝 ${dict.itineraryItemNotes}: ${item.notes}\n`;
        }
        msg += `   💰 ${dict.priceLabel}: $${item.totalItemPrice.toFixed(2)}\n\n`;
    });

    msg += `---------------------------------\n`;
    msg += `${dict.shareMessageTotal}: $${total.toFixed(2)}\n`;
    msg += `${dict.shareMessageFooter}`;
    return msg;
}

// Sharing Event Handlers
btnShareTelegram.addEventListener('click', () => {
    const text = encodeURIComponent(generateShareText());
    const telegramUrl = `https://t.me/share/url?url=https://silkroad-ops.uz&text=${text}`;
    window.open(telegramUrl, '_blank');
});

btnShareWhatsApp.addEventListener('click', () => {
    const text = encodeURIComponent(generateShareText());
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappUrl, '_blank');
});

btnShareEmail.addEventListener('click', () => {
    let subjectText = "SilkRoad: Safar rejalashtirish tafsilotlari";
    if (currentLanguage === 'en') subjectText = "SilkRoad: Itinerary Details";
    else if (currentLanguage === 'ru') subjectText = "SilkRoad: Детали поездки";

    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(generateShareText());
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
});

// Category Click Handling
categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Handle nested clicks inside tab (like on svg or span)
        const targetTab = e.target.closest('.category-tab');
        if (!targetTab) return;

        categoryTabs.forEach(t => t.classList.remove('active'));
        targetTab.classList.add('active');

        activeCategory = targetTab.getAttribute('data-category');
        activeSubCategory = 'all'; // reset transport / guide subcategory
        
        // Update Title dynamically based on active category
        const catName = targetTab.textContent.trim();
        resultsTitle.innerText = activeCategory === 'all' 
            ? translations[currentLanguage].resultsTitleAll 
            : catName;

        renderCatalog();
    });
});

// Search Trigger
btnSearchTrigger.addEventListener('click', () => {
    searchQuery = searchInput.value;
    selectedRegion = filterRegion.value;
    selectedPrice = filterPrice.value;
    renderCatalog();
});

// Allow search triggering on Enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchQuery = searchInput.value;
        selectedRegion = filterRegion.value;
        selectedPrice = filterPrice.value;
        renderCatalog();
    }
});

// Language Switch Event Listeners (UZ / EN / RU)
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentLanguage = e.target.getAttribute('data-lang');
        localStorage.setItem('silkroad_lang', currentLanguage);
        
        // Refresh page texts
        translateUI();
        renderCatalog();
        renderItinerary();
    });
});

// Close Modals Helper
function closeAllModals() {
    bookingModal.classList.remove('active');
    loginModal.classList.remove('active');
}

// Booking Modal Close Buttons
btnModalClose.addEventListener('click', () => bookingModal.classList.remove('active'));
btnModalCancel.addEventListener('click', () => bookingModal.classList.remove('active'));

// Login Modal Buttons & Form
btnLogin.addEventListener('click', () => loginModal.classList.add('active'));
btnLoginClose.addEventListener('click', () => loginModal.classList.remove('active'));
btnLoginCancel.addEventListener('click', () => loginModal.classList.remove('active'));

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const alertMsg = currentLanguage === 'uz' 
        ? "Tizimga muvaffaqiyatli kirdingiz!" 
        : (currentLanguage === 'en' ? "Successfully logged in!" : "Вы успешно вошли в систему!");
    alert(alertMsg);
    loginModal.classList.remove('active');
});

// Click outside modal to close
window.addEventListener('click', (e) => {
    if (e.target === bookingModal || e.target === loginModal) {
        closeAllModals();
    }
});

// Search Autocomplete Suggestion Logic
searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    
    // Hide suggestions if search is short
    if (val.length < 3) {
        searchSuggestionsBox.classList.remove('active');
        searchSuggestionsBox.innerHTML = '';
        return;
    }

    // Filter services based on title or region
    const matches = servicesData.filter(item => {
        let title = item.titleUz;
        if (currentLanguage === 'en') title = item.titleEn;
        else if (currentLanguage === 'ru') title = item.titleRu;
        return title.toLowerCase().includes(val) || item.region.toLowerCase().includes(val);
    });

    if (matches.length === 0) {
        searchSuggestionsBox.classList.remove('active');
        searchSuggestionsBox.innerHTML = '';
        return;
    }

    // Populate suggestions
    searchSuggestionsBox.innerHTML = '';
    matches.slice(0, 5).forEach(item => {
        let title = item.titleUz;
        if (currentLanguage === 'en') title = item.titleEn;
        else if (currentLanguage === 'ru') title = item.titleRu;

        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.innerText = title;
        
        div.addEventListener('click', () => {
            searchInput.value = title;
            searchQuery = title;
            searchSuggestionsBox.classList.remove('active');
            searchSuggestionsBox.innerHTML = '';
            // Trigger search directly
            renderCatalog();
        });
        
        searchSuggestionsBox.appendChild(div);
    });

    searchSuggestionsBox.classList.add('active');
});

// Close suggestions dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestionsBox.contains(e.target)) {
        searchSuggestionsBox.classList.remove('active');
    }
});

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    translateUI();
    renderCatalog();
    renderItinerary();
});
