// SilkRoad Travel Operations Platform - Application Logic with Bilingual (UZ/EN) Support

// Mock Services Data
const servicesData = [
    {
        id: "trans-vip-sedan",
        category: "transport",
        titleUz: "VIP Sedan Transfer (Toshkent - Samarqand)",
        titleEn: "VIP Sedan Transfer (Tashkent - Samarkand)",
        descriptionUz: "Professional haydovchi bilan premium toifadagi sedan (Chevrolet Malibu 2 yoki Tracker) orqali shinam va xavfsiz transport xizmati. Konditsioner va bepul salqin ichimliklar mavjud.",
        descriptionEn: "Comfortable and safe transport service in a premium sedan (Chevrolet Malibu 2 or Tracker) with a professional driver. Air conditioning and free cold drinks included.",
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
        titleUz: "Mercedes Sprinter VIP Minivan (Buxoro - Xiva)",
        titleEn: "Mercedes Sprinter VIP Minivan (Bukhara - Khiva)",
        descriptionUz: "Guruhlar uchun moslashtirilgan, keng yukxona va yumshoq o'rindiqlarga ega bo'lgan zamonaviy minivan sayohati. Yo'lda tarixiy obidalarda to'xtab o'tish imkoniyati.",
        descriptionEn: "Modern minivan trip customized for groups with spacious luggage compartment and soft seats. Possibility to stop at historical monuments along the way.",
        price: 180,
        rating: 5.0,
        reviews: 86,
        region: "bukhara",
        priceCategory: "premium",
        image: "assets/minivan.png"
    },
    {
        id: "guide-samarkand-person",
        category: "guides",
        titleUz: "Samarqand Tarixiy Obidalari Bo'yicha Gid (In-person)",
        titleEn: "In-Person Historical Guide in Samarkand",
        descriptionUz: "Registon, Go'ri Amir va Shahi Zinda bo'ylab professional gid hamrohligi. O'zbek, ingliz va rus tillarida chuqur tarixiy ma'lumotlar va qiziqarli afsonalar bilan tanishasiz.",
        descriptionEn: "Professional guide accompaniment through Registan, Gur-e-Amir, and Shah-i-Zinda. Deep historical insights and fascinating legends in Uzbek, English, and Russian.",
        price: 40,
        rating: 4.8,
        reviews: 215,
        region: "samarkand",
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"
    },
    {
        id: "guide-online-virtual",
        category: "guides",
        titleUz: "Virtual Gid - Online Hamrohlik xizmati",
        titleEn: "Virtual Guide - Online Assistance Service",
        descriptionUz: "Uzbekistan bo'ylab sayohat davomida Telegram yoki WhatsApp orqali 24/7 video va audio aloqada bo'ladigan gid. Transport rejalashtirish, tarjimalar va mahalliy maslahatlar beradi.",
        descriptionEn: "24/7 guide available via video and audio connection on Telegram or WhatsApp during your trip in Uzbekistan. Assists with transport, translations, and local tips.",
        price: 15,
        rating: 4.7,
        reviews: 340,
        region: "tashkent",
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
    },
    {
        id: "craft-pottery-gijduvan",
        category: "crafts",
        titleUz: "G'ijduvon Sopol Idishlari Masterklassi",
        titleEn: "Gijduvan Ceramic Pottery Masterclass",
        descriptionUz: "6-avloddagi kulolchilik ustaxonasi ustasi Alisher aka rahbarligida sopol idish tayyorlashda bevosita ishtirok etish. Tayyorlagan buyumingizni esdalik sifatida o'zingiz bilan olib ketasiz.",
        descriptionEn: "Direct participation in clay shaping under 6th-generation pottery master Alisher. Keep your handmade creation as a unique souvenir.",
        price: 20,
        rating: 5.0,
        reviews: 145,
        region: "bukhara",
        priceCategory: "budget",
        image: "assets/pottery.png"
    },
    {
        id: "craft-paper-konigil",
        category: "crafts",
        titleUz: "Samarqand Ipak Qog'ozi Tayyorlash Masterklassi (Konigil)",
        titleEn: "Samarkand Silk Paper Making Masterclass (Konigil)",
        descriptionUz: "Konigil meros markazida qadimiy tut daraxtidan Samarqand ipak qog'ozini an'anaviy suv tegirmoni yordamida tayyorlash jarayonida bevosita qatnashish va sirlarini o'rganish.",
        descriptionEn: "Witness and participate in the traditional water-mill technique of making Samarkand silk paper from mulberry tree bark at Konigil Heritage Center.",
        price: 25,
        rating: 4.9,
        reviews: 98,
        region: "samarkand",
        priceCategory: "budget",
        image: "assets/pottery.png"
    },
    {
        id: "ticket-express-bus",
        category: "tickets",
        titleUz: "Comfort Express Avtobus Chiptasi (Toshkent - Samarqand)",
        titleEn: "Comfort Express Bus Ticket (Tashkent - Samarkand)",
        descriptionUz: "Afrosiyob poezdiga chipta topilmaganda eng yaxshi muqobil. Zamonaviy iqlim nazoratiga ega, multimedia tizimi bilan jihozlangan tezyurar avtobus yo'nalishi. Kundalik qatnovlar.",
        descriptionEn: "Best alternative when train tickets are sold out. Fast highway bus route equipped with modern climate control and multimedia screens. Daily schedule.",
        price: 12,
        rating: 4.5,
        reviews: 412,
        region: "tashkent",
        priceCategory: "budget",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000"
    },
    {
        id: "ticket-airport-transfer",
        category: "tickets",
        titleUz: "Toshkent Aeroport VIP Transferi & Lounge",
        titleEn: "Tashkent Airport VIP Transfer & Fast Track",
        descriptionUz: "Aeroportda kutib olish, maxsus VIP yo'lak orqali tezkor pasport tekshiruvi (Fast Track) va yuklarni tashish xizmati bilan mehmonxonagacha kuzatib qo'yish.",
        descriptionEn: "Airport meet-and-greet, expedited VIP passport lane (Fast Track), baggage assistance, and private transfer directly to your hotel.",
        price: 45,
        rating: 4.9,
        reviews: 167,
        region: "tashkent",
        priceCategory: "budget",
        image: "assets/minivan.png"
    },
    {
        id: "hotel-heritage-bukhara",
        category: "hotels",
        titleUz: "Silk Road Heritage Boutique Hotel (Buxoro)",
        titleEn: "Silk Road Heritage Boutique Hotel (Bukhara)",
        descriptionUz: "Eski shahar markazidagi XIX asrga oid, ajoyib milliy uslubda bezatilgan shinam butik mehmonxona. An'anaviy hovli, milliy gilamlar va milliy nonushtani o'z ichiga oladi.",
        descriptionEn: "Cosy boutique hotel dating back to the 19th century in the heart of Bukhara Old City. Beautiful national designs, open courtyard, rugs, and traditional breakfast.",
        price: 90,
        rating: 4.9,
        reviews: 230,
        region: "bukhara",
        priceCategory: "mid",
        image: "assets/hotel.png"
    },
    {
        id: "hotel-yurt-aydarkul",
        category: "hotels",
        titleUz: "Aydarkul Cho'l Yurt Lageri - An'anaviy yashash",
        titleEn: "Aydarkul Desert Yurt Camp - Traditional Stay",
        descriptionUz: "Qizilqum sahrosida, Aydarkul bo'yida joylashgan haqiqiy ko'chmanchilar yurtasida yashash. Tunda olov atrofida milliy kuy tinglash, tuya minish xizmatlari qo'shilgan.",
        descriptionEn: "Stay in authentic nomad felt yurts situated in the Kyzylkum Desert near Aydarkul Lake. Includes evening campfire music and camel riding options.",
        price: 65,
        rating: 4.8,
        reviews: 112,
        region: "samarkand",
        priceCategory: "mid",
        image: "assets/hotel.png"
    },
    {
        id: "restaurant-plov-center",
        category: "restaurants",
        titleUz: "O'rta Osiyo Plov Markazi - Stol Band qilish",
        titleEn: "Central Asian Plov Center - Table Booking",
        descriptionUz: "Toshkentdagi ulkan qozonlarda pishiriladigan afsonaviy To'y oshi va maxsus salatlar uchun oldindan VIP stol band qilish va navbatsiz xizmat ko'rsatish.",
        descriptionEn: "Pre-book a VIP table at Tashkent's legendary plov hub serving authentic wedding plov from massive copper cauldrons with skip-the-line service.",
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
        descriptionUz: "Buxoroning qoq markazida joylashgan qadimiy hovuz bo'yida jonli milliy musiqa jo'rligida mazali shashliklar, so'msa va an'anaviy choy marosimidan bahramand bo'ling.",
        descriptionEn: "Enjoy delicious skewers of shashlik, samosa, and traditional tea ceremonies accompanied by live national music by the ancient pond in central Bukhara.",
        price: 25,
        rating: 4.8,
        reviews: 310,
        region: "bukhara",
        priceCategory: "budget",
        image: "assets/national_plov.png"
    }
];

// Translation Database
const translations = {
    uz: {
        langBtn: "UZ | EN",
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
        lblFormQuantity: "Odamlar soni / Miqdor",
        lblFormNotes: "Qo'shimcha istaklar va ma'lumotlar",
        placeholderFormNotes: "Masalan: Maxsus xizmatlar, parhez, reys raqami...",
        lblFormContact: "Siz bilan bog'lanish uchun raqam (Telegram / Telefon)",
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
        tabRestaurants: "Restoranlar"
    },
    en: {
        langBtn: "EN | UZ",
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
        tabRestaurants: "Restaurants"
    }
};

// App State
let currentLanguage = localStorage.getItem('silkroad_lang') || 'uz';
let itinerary = JSON.parse(localStorage.getItem('silkroad_itinerary')) || [];
let activeCategory = 'all';
let searchQuery = '';
let selectedRegion = 'all';
let selectedPrice = 'all';

// DOM Elements
const catalogGrid = document.getElementById('catalog-grid');
const categoryTabs = document.querySelectorAll('.category-tab');
const resultsTitle = document.getElementById('results-title');
const resultsCountText = document.getElementById('results-count-text');

const searchInput = document.getElementById('search-input');
const filterRegion = document.getElementById('filter-region');
const filterPrice = document.getElementById('filter-price');
const btnSearchTrigger = document.getElementById('btn-search-trigger');

const itineraryItemsContainer = document.getElementById('itinerary-items-container');
const emptyItineraryPlaceholder = document.getElementById('empty-itinerary-placeholder');
const itineraryCount = document.getElementById('itinerary-count');
const summaryItemsCount = document.getElementById('summary-items-count');
const summaryTotalPrice = document.getElementById('summary-total-price');

// Share Buttons
const btnShareTelegram = document.getElementById('btn-share-telegram');
const btnShareWhatsApp = document.getElementById('btn-share-whatsapp');
const btnShareEmail = document.getElementById('btn-share-email');

// Language Selector
const btnLangSelector = document.getElementById('btn-lang-selector');

// Modal Elements
const bookingModal = document.getElementById('booking-modal');
const modalTitleText = document.getElementById('modal-title-text');
const btnModalClose = document.getElementById('btn-modal-close');
const btnModalCancel = document.getElementById('btn-modal-cancel');
const bookingForm = document.getElementById('booking-form');
const formItemId = document.getElementById('form-item-id');
const formDynamicDetails = document.getElementById('form-dynamic-details');
const formDate = document.getElementById('form-date');
const formQuantity = document.getElementById('form-quantity');
const formNotes = document.getElementById('form-notes');
const formContact = document.getElementById('form-contact');

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

    // Language Button
    btnLangSelector.innerText = dict.langBtn;

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

    // Sidebar
    document.querySelector('.sidebar-title').childNodes[0].nodeValue = dict.sidebarTitle + ' ';
    emptyItineraryPlaceholder.innerText = dict.emptyItinerary;
    document.querySelector('.summary-row:nth-child(1) span:first-child').innerText = dict.summaryCount;
    document.querySelector('.summary-row.total span:first-child').innerText = dict.summaryTotal;
    document.querySelector('.share-title').innerText = dict.shareTitle;

    // Modal
    document.getElementById('lbl-form-date').innerText = dict.lblFormDate;
    document.getElementById('lbl-form-quantity').innerText = dict.lblFormQuantity;
    document.getElementById('lbl-form-notes').innerText = dict.lblFormNotes;
    formNotes.placeholder = dict.placeholderFormNotes;
    document.getElementById('lbl-form-contact').innerText = dict.lblFormContact;
    document.getElementById('btn-modal-cancel').innerText = dict.btnModalCancel;
    document.getElementById('btn-modal-confirm').innerText = dict.btnModalConfirm;

    // Refresh Category Title
    if (activeCategory === 'all') {
        resultsTitle.innerText = dict.resultsTitleAll;
    } else {
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab) {
            resultsTitle.innerText = activeTab.textContent.trim();
        }
    }
}

// Render Catalog Cards
function renderCatalog() {
    const dict = translations[currentLanguage];

    // Filter services based on state
    const filtered = servicesData.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        
        const title = currentLanguage === 'uz' ? item.titleUz : item.titleEn;
        const description = currentLanguage === 'uz' ? item.descriptionUz : item.descriptionEn;

        const matchesSearch = searchQuery === '' || 
            title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            description.toLowerCase().includes(searchQuery.toLowerCase());
            
        const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
        
        let matchesPrice = true;
        if (selectedPrice === 'budget') matchesPrice = item.price < 50;
        else if (selectedPrice === 'mid') matchesPrice = item.price >= 50 && item.price <= 150;
        else if (selectedPrice === 'premium') matchesPrice = item.price > 150;

        return matchesCategory && matchesSearch && matchesRegion && matchesPrice;
    });

    // Update Result text
    resultsCountText.innerText = `${filtered.length} ${dict.resultsCount}`;
    
    // Clear catalog
    catalogGrid.innerHTML = '';

    if (filtered.length === 0) {
        catalogGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted); font-style: italic;">
                ${dict.noResults}
            </div>
        `;
        return;
    }

    // Append Cards
    filtered.forEach(item => {
        const card = document.createElement('article');
        card.className = `card category-${item.category}`;
        card.id = `card-${item.id}`;

        const title = currentLanguage === 'uz' ? item.titleUz : item.titleEn;
        const description = currentLanguage === 'uz' ? item.descriptionUz : item.descriptionEn;
        
        // Map region translations
        const regionName = dict[`opt${item.region.charAt(0).toUpperCase() + item.region.slice(1)}`] || item.region;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${item.image}" alt="${title}" class="card-image" onerror="this.src='https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600'">
                <span class="card-badge">${item.category === 'crafts' ? dict.badgeMasterclass : dict[`tab${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`] || item.category}</span>
            </div>
            <div class="card-content">
                <div class="card-category">${regionName.toUpperCase()} • RATING ★${item.rating} (${item.reviews})</div>
                <h3 class="card-title">${title}</h3>
                <p class="card-description">${description}</p>
                <div class="card-footer">
                    <div class="card-price">
                        <span class="price-label">${dict.priceLabel}</span>
                        <span class="price-amount">$${item.price}</span>
                    </div>
                    <button class="btn btn-primary btn-book" data-id="${item.id}" id="btn-book-${item.id}">
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
}

// Open Booking Modal for service
function openBookingModal(itemId) {
    const item = servicesData.find(s => s.id === itemId);
    if (!item) return;

    const dict = translations[currentLanguage];
    const title = currentLanguage === 'uz' ? item.titleUz : item.titleEn;
    const description = currentLanguage === 'uz' ? item.descriptionUz : item.descriptionEn;

    formItemId.value = item.id;
    modalTitleText.innerText = title;
    
    // Set dynamic description info in modal
    formDynamicDetails.innerHTML = `
        <div style="background-color: var(--bg-main); padding: 1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-gold);">
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.5rem;">${description}</p>
            <div style="display: flex; justify-content: space-between; font-weight: 700;">
                <span>${dict.priceLabel}:</span>
                <span style="color: var(--primary-cobalt);">$${item.price}</span>
            </div>
        </div>
    `;

    // Reset Form
    formDate.value = '';
    formQuantity.value = '1';
    formNotes.value = '';
    
    // Open Modal
    bookingModal.classList.add('active');
}

// Close Modal
function closeModal() {
    bookingModal.classList.remove('active');
}

// Add Item to Itinerary Form Handler
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = formItemId.value;
    const item = servicesData.find(s => s.id === id);
    if (!item) return;

    const title = currentLanguage === 'uz' ? item.titleUz : item.titleEn;

    const bookingItem = {
        bookingId: Date.now().toString(), // unique key in itinerary
        serviceId: item.id,
        title: title,
        basePrice: item.price,
        quantity: parseInt(formQuantity.value),
        totalItemPrice: item.price * parseInt(formQuantity.value),
        date: formDate.value,
        notes: formNotes.value,
        contact: formContact.value
    };

    itinerary.push(bookingItem);
    saveItinerary();
    renderItinerary();
    closeModal();
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
        const formattedDate = isNaN(dateObj.getTime()) 
            ? item.date 
            : dateObj.toLocaleDateString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US') + ' ' + dateObj.toLocaleTimeString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US', {hour: '2-digit', minute:'2-digit'});

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
        return currentLanguage === 'uz' ? "SilkRoad: Hali hech narsa rejalashtirilmagan." : "SilkRoad: Nothing planned yet.";
    }

    let msg = `${dict.shareMessageTitle}\n`;
    msg += `---------------------------------\n`;
    
    let total = 0;
    itinerary.forEach((item, index) => {
        total += item.totalItemPrice;
        const dateObj = new Date(item.date);
        const formattedDate = isNaN(dateObj.getTime()) ? item.date : dateObj.toLocaleString(currentLanguage === 'uz' ? 'uz-UZ' : 'en-US');

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
    const subject = encodeURIComponent(currentLanguage === 'uz' ? "SilkRoad: Safar rejalashtirish tafsilotlari" : "SilkRoad: Itinerary Details");
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

// Language Switch Event Listener
btnLangSelector.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'uz' ? 'en' : 'uz';
    localStorage.setItem('silkroad_lang', currentLanguage);
    
    // Refresh page texts
    translateUI();
    renderCatalog();
    renderItinerary();
});

// Close Modal Bindings
btnModalClose.addEventListener('click', closeModal);
btnModalCancel.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeModal();
    }
});

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    translateUI();
    renderCatalog();
    renderItinerary();
});
