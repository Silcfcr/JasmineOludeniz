import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
    language: 'en' | 'ru' | 'tr';
    setLanguage: (lang: 'en' | 'ru' | 'tr') => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<'en' | 'ru' | 'tr'>('en');

    const translations = {
        // Navigation
        'nav.home': { en: 'Home', ru: 'Главная', tr: 'Ana Sayfa' },
        'nav.restaurant': { en: 'Restaurant', ru: 'Ресторан', tr: 'Restoran' },
        'nav.hotel': { en: 'Hotel', ru: 'Отель', tr: 'Otel' },
        'nav.rooms': { en: 'Rooms', ru: 'Номера', tr: 'Odalar' },
        'nav.car-rental': { en: 'Car Rental', ru: 'Аренда авто', tr: 'Araç Kiralama' },
        'nav.customers': { en: 'Reviews', ru: 'Отзывы', tr: 'Yorumlar' },
        'nav.dogs': { en: 'Our Dogs', ru: 'Наши собаки', tr: 'Köpeklerimiz' },
        'nav.contact': { en: 'Contact', ru: 'Контакты', tr: 'İletişim' },

        // Hero Section
        'hero.welcome': { en: 'Welcome to Jasmine', ru: 'Добро пожаловать в Жасмин', tr: 'Jasmine\'e Hoş Geldiniz' },
        'hero.subtitle': { en: 'Restaurant & Bar • Hotel', ru: 'Ресторан и бар • Отель', tr: 'Restoran & Bar • Otel' },
        'hero.description': { en: 'Experience comfortable family accommodation and delicious home-style dining in the heart of Oludeniz, Turkey.', ru: 'Насладитесь комфортным семейным размещением и вкусной домашней кухней в сердце Олюдениза, Турция.', tr: 'Ölüdeniz\'in kalbinde, Türkiye\'de rahat aile konaklaması ve lezzetli ev yemeklerinin tadını çıkarın.' },
        'hero.explore-restaurant': { en: 'Explore Restaurant', ru: 'Изучить ресторан', tr: 'Restoranı Keşfet' },
        'hero.view-rooms': { en: 'View Rooms', ru: 'Посмотреть номера', tr: 'Odaları Görüntüle' },

        // Restaurant Section
        'restaurant.title': { en: 'Our Restaurant & Bar', ru: 'Наш ресторан и бар', tr: 'Restoranımız ve Barımız' },
        'restaurant.subtitle': { en: 'Traditional Turkish cuisine with a modern twist', ru: 'Традиционная турецкая кухня с современным подходом', tr: 'Modern dokunuşla geleneksel Türk mutfağı' },
        'restaurant.family-dining': { en: 'Family Dining Experience', ru: 'Семейный обеденный опыт', tr: 'Aile Yemek Deneyimi' },
        'restaurant.description': { en: 'Enjoy authentic Turkish dishes prepared with fresh, local ingredients in our welcoming atmosphere.', ru: 'Насладитесь аутентичными турецкими блюдами, приготовленными из свежих местных ингредиентов в нашей гостеприимной атмосфере.', tr: 'Misafirperver atmosferimizde taze, yerel malzemelerle hazırlanan otantik Türk yemeklerinin tadını çıkarın.' },
        'restaurant.features.traditional': { en: 'Traditional Turkish Cuisine', ru: 'Традиционная турецкая кухня', tr: 'Geleneksel Türk Mutfağı' },
        'restaurant.features.drinks': { en: 'Full Bar & Cocktails', ru: 'Полный бар и коктейли', tr: 'Tam Bar ve Kokteyller' },
        'restaurant.features.poolside': { en: 'Poolside Dining', ru: 'Обед у бассейна', tr: 'Havuz Kenarında Yemek' },
        'restaurant.features.kid-friendly': { en: 'Kid-Friendly Menu', ru: 'Детское меню', tr: 'Çocuk Dostu Menü' },
        'restaurant.features.pickup': { en: 'Free Pickup for Clients', ru: 'Бесплатный трансфер для клиентов', tr: 'Müşteriler İçin Ücretsiz Transfer' },

        // Quiz Night
        'quiz.title': { en: 'Quiz Night', ru: 'Викторина', tr: 'Quiz Gecesi' },
        'quiz.subtitle': { en: 'Every Thursday', ru: 'Каждый четверг', tr: 'Her Perşembe' },
        'quiz.description': { en: 'Join us for a fun quiz night every Thursday! Test your knowledge, meet new people, and enjoy great food and drinks.', ru: 'Присоединяйтесь к нам на веселую викторину каждый четверг! Проверьте свои знания, познакомьтесь с новыми людьми и насладитесь отличной едой и напитками.', tr: 'Her Perşembe eğlenceli quiz gecemize katılın! Bilginizi test edin, yeni insanlarla tanışın ve harika yemek ve içeceklerin tadını çıkarın.' },

        // Hotel Section
        'hotel.title': { en: 'Our Hotel', ru: 'Наш отель', tr: 'Otelimiz' },
        'hotel.subtitle': { en: 'Comfortable family accommodation', ru: 'Комфортное семейное размещение', tr: 'Rahat aile konaklaması' },
        'hotel.family-accommodation': { en: 'Family Accommodation', ru: 'Семейное размещение', tr: 'Aile Konaklaması' },
        'hotel.description': { en: 'Stay in our comfortable apartments and rooms, perfect for families visiting Oludeniz.', ru: 'Остановитесь в наших удобных апартаментах и номерах, идеально подходящих для семей, посещающих Олюдениз.', tr: 'Ölüdeniz\'i ziyaret eden aileler için mükemmel olan rahat dairelerimizde ve odalarımızda konaklayın.' },
        'hotel.features.wifi': { en: 'Free WiFi', ru: 'Бесплатный WiFi', tr: 'Ücretsiz WiFi' },
        'hotel.features.pool': { en: 'Swimming Pool', ru: 'Бассейн', tr: 'Yüzme Havuzu' },
        'hotel.features.parking': { en: 'Free Parking', ru: 'Бесплатная парковка', tr: 'Ücretsiz Otopark' },
        'hotel.features.family-service': { en: 'Family Service', ru: 'Семейное обслуживание', tr: 'Aile Hizmeti' },
        'hotel.features.kid-friendly': { en: 'Kid-Friendly', ru: 'Подходит для детей', tr: 'Çocuk Dostu' },

        // Special Offer Section
        'special.title': { en: 'Special Departure Day Offer', ru: 'Специальное предложение в день отъезда', tr: 'Özel Ayrılış Günü Teklifi' },
        'special.subtitle': { en: 'Make the most of your last day', ru: 'Максимально используйте свой последний день', tr: 'Son gününüzden en iyi şekilde yararlanın' },
        'special.description': { en: 'Enjoy our facilities for free on your departure day - perfect for those late flights!', ru: 'Наслаждайтесь нашими удобствами бесплатно в день отъезда - идеально для поздних рейсов!', tr: 'Ayrılış gününüzde tesislerimizden ücretsiz yararlanın - geç uçuşlar için mükemmel!' },
        'special.feature1.title': { en: 'Free Luggage Storage', ru: 'Бесплатное хранение багажа', tr: 'Ücretsiz Bagaj Depolama' },
        'special.feature1.desc': { en: 'Store your luggage safely while you enjoy your day', ru: 'Безопасно храните багаж, пока наслаждаетесь днем', tr: 'Gününüzün tadını çıkarırken bagajınızı güvenle saklayın' },
        'special.feature2.title': { en: 'Free Shower Facilities', ru: 'Бесплатные душевые', tr: 'Ücretsiz Duş Tesisleri' },
        'special.feature2.desc': { en: 'Fresh up before your journey home', ru: 'Освежитесь перед дорогой домой', tr: 'Eve dönüş yolculuğunuzdan önce tazelenin' },
        'special.feature3.title': { en: 'Free Pool Access', ru: 'Бесплатный доступ к бассейну', tr: 'Ücretsiz Havuz Erişimi' },
        'special.feature3.desc': { en: 'Relax by our beautiful pool', ru: 'Расслабьтесь у нашего красивого бассейна', tr: 'Güzel havuzumuzun yanında dinlenin' },
        'special.feature4.title': { en: 'Free Sunbeds', ru: 'Бесплатные шезлонги', tr: 'Ücretsiz Şezlonglar' },
        'special.feature4.desc': { en: 'Comfortable lounging in the sun', ru: 'Удобное пребывание на солнце', tr: 'Güneşte rahat dinlenme' },
        'special.feature5.title': { en: 'Free Hotel Pickup', ru: 'Бесплатный трансфер из отеля', tr: 'Ücretsiz Otel Transferi' },
        'special.feature5.desc': { en: 'We\'ll pick you up from your hotel', ru: 'Мы заберем вас из вашего отеля', tr: 'Sizi otelinizden alacağız' },
        'special.feature6.title': { en: 'Free Restaurant Access', ru: 'Бесплатный доступ в ресторан', tr: 'Ücretsiz Restoran Erişimi' },
        'special.feature6.desc': { en: 'Enjoy our restaurant facilities', ru: 'Наслаждайтесь удобствами нашего ресторана', tr: 'Restoran tesislerimizin tadını çıkarın' },
        'special.terms': { en: 'Terms: Must order food and drinks at the restaurant.', ru: 'Условия: Должны заказать еду и напитки в ресторане.', tr: 'Şartlar: Restoranda yemek ve içecek sipariş etmelisiniz.' },
        'special.book-now': { en: 'Book This Service', ru: 'Забронировать услугу', tr: 'Bu Hizmeti Rezerve Et' },
        'special.not-today': { en: 'Not Today', ru: 'Не сегодня', tr: 'Bugün Değil' },

        // Menu Tabs
        'menu.breakfast.title': { en: 'Breakfast', ru: 'Завтрак', tr: 'Kahvaltı' },
        'menu.starters.title': { en: 'Starters', ru: 'Закуски', tr: 'Başlangıçlar' },
        'menu.mains.title': { en: 'Main Courses', ru: 'Основные блюда', tr: 'Ana Yemekler' },
        'menu.light.title': { en: 'Light Meals', ru: 'Легкие блюда', tr: 'Hafif Yemekler' },
        'menu.beverages.title': { en: 'Beverages', ru: 'Напитки', tr: 'İçecekler' },
        'menu.kids.title': { en: 'Kids & Desserts', ru: 'Детское меню и десерты', tr: 'Çocuk Menüsü ve Tatlılar' },

        // Menu Categories - Breakfast
        'menu.breakfast.breakfast-plates.title': { en: 'BREAKFAST PLATES', ru: 'ЗАВТРАКИ', tr: 'KAHVALTI TABAKLARI' },
        'menu.breakfast.breakfast-plates.subtitle': { en: 'Served 9 am - 1 pm Daily', ru: 'Подается с 9:00 до 13:00 ежедневно', tr: 'Her gün 09:00 - 13:00 arası servis edilir' },
        'menu.breakfast.eggs-omelettes.title': { en: 'EGGS & OMELETTES', ru: 'ЯЙЦА И ОМЛЕТЫ', tr: 'YUMURTA VE OMELETLER' },
        'menu.breakfast.toast-pancakes.title': { en: 'TOAST & PANCAKES', ru: 'ТОСТЫ И БЛИНЫ', tr: 'TOST VE PANKEKLER' },
        'menu.breakfast.breakfast-drinks.title': { en: 'BREAKFAST DRINKS', ru: 'НАПИТКИ К ЗАВТРАКУ', tr: 'KAHVALTI İÇECEKLERİ' },
        'menu.breakfast.breakfast-add-ons.title': { en: 'BREAKFAST ADD ONS', ru: 'ДОПОЛНЕНИЯ К ЗАВТРАКУ', tr: 'KAHVALTI EKSTRA' },

        // Menu Categories - Starters
        'menu.starters.starters.title': { en: 'STARTERS', ru: 'ЗАКУСКИ', tr: 'BAŞLANGIÇLAR' },
        'menu.starters.salads.title': { en: 'SALADS', ru: 'САЛАТЫ', tr: 'SALATALAR' },

        // Menu Categories - Mains
        'menu.mains.burgers.title': { en: 'BURGERS', ru: 'БУРГЕРЫ', tr: 'BURGERLER' },
        'menu.mains.pizza.title': { en: 'PIZZA', ru: 'ПИЦЦА', tr: 'PİZZA' },
        'menu.mains.pasta.title': { en: 'PASTA', ru: 'ПАСТА', tr: 'MAKARNA' },
        'menu.mains.chicken-dishes.title': { en: 'CHICKEN DISHES', ru: 'КУРИНЫЕ БЛЮДА', tr: 'TAVUK YEMEKLERİ' },
        'menu.mains.meat-dishes.title': { en: 'MEAT DISHES', ru: 'МЯСНЫЕ БЛЮДА', tr: 'ET YEMEKLERİ' },
        'menu.mains.traditional-turkish-meals.title': { en: 'TRADITIONAL TURKISH MEALS', ru: 'ТРАДИЦИОННЫЕ ТУРЕЦКИЕ БЛЮДА', tr: 'GELENEKSEL TÜRK YEMEKLERİ' },

        // Menu Categories - Light Meals
        'menu.light.wraps.title': { en: 'WRAPS', ru: 'ШАУРМА', tr: 'DÜRÜMLER' },
        'menu.light.toasties.title': { en: 'TOASTIES', ru: 'ТОСТЫ', tr: 'TOSTLAR' },
        'menu.light.sandwiches.title': { en: 'SANDWICHES', ru: 'СЭНДВИЧИ', tr: 'SANDVİÇLER' },

        // Menu Categories - Beverages
        'menu.beverages.soft-drinks.title': { en: 'SOFT DRINKS', ru: 'БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ', tr: 'ALKOLSÜZ İÇECEKLER' },
        'menu.beverages.tea-coffee.title': { en: 'TEA & COFFEE', ru: 'ЧАЙ И КОФЕ', tr: 'ÇAY VE KAHVE' },
        'menu.beverages.alcoholic-drinks.title': { en: 'ALCOHOLIC DRINKS', ru: 'АЛКОГОЛЬНЫЕ НАПИТКИ', tr: 'ALKOLLÜ İÇECEKLER' },

        // Menu Categories - Kids
        'menu.kids.kids-menu.title': { en: 'KIDS MENU', ru: 'ДЕТСКОЕ МЕНЮ', tr: 'ÇOCUK MENÜSÜ' },
        'menu.kids.desserts.title': { en: 'DESSERTS', ru: 'ДЕСЕРТЫ', tr: 'TATLILAR' },

        // Menu Items - Breakfast
        'menu.village-breakfast.name': { en: 'Traditional Village Breakfast', ru: 'Традиционный деревенский завтрак', tr: 'Geleneksel Köy Kahvaltısı' },
        'menu.turkish-breakfast.name': { en: 'Turkish Breakfast Plate', ru: 'Турецкая тарелка для завтрака', tr: 'Türk Kahvaltı Tabak' },
        'menu.english-breakfast.name': { en: 'Full English Breakfast', ru: 'Полный английский завтрак', tr: 'Tam İngiliz Kahvaltısı' },
        'menu.hangover-breakfast.name': { en: 'Hangover Breakfast', ru: 'Завтрак от похмелья', tr: 'Akşamdan Kalma Kahvaltısı' },

        'menu.menemen.name': { en: 'Menemen (v)', ru: 'Менемен (в)', tr: 'Menemen (v)' },
        'menu.egg-chips-fried.name': { en: 'Egg & Chips (v) (Fried)', ru: 'Яйцо и картофель фри (в) (жареное)', tr: 'Yumurta ve Patates (v) (Kızarmış)' },
        'menu.egg-chips-scrambled.name': { en: 'Egg & Chips (v) (Scrambled)', ru: 'Яйцо и картофель фри (в) (болтунья)', tr: 'Yumurta ve Patates (v) (Çırpılmış)' },
        'menu.egg-toast-fried.name': { en: 'Egg on Toast (v) (Fried)', ru: 'Яйцо на тосте (в) (жареное)', tr: 'Tost Üzerinde Yumurta (v) (Kızarmış)' },
        'menu.egg-toast-scrambled.name': { en: 'Egg on Toast (v) (Scrambled)', ru: 'Яйцо на тосте (в) (болтунья)', tr: 'Tost Üzerinde Yumurta (v) (Çırpılmış)' },
        'menu.cheese-omelette.name': { en: 'Cheese Omelette (v)', ru: 'Сырный омлет (в)', tr: 'Peynirli Omlet (v)' },
        'menu.mushroom-omelette.name': { en: 'Mushroom Omelette (v)', ru: 'Грибной омлет (в)', tr: 'Mantarlı Omlet (v)' },
        'menu.mixed-omelette.name': { en: 'Mixed Omelette (Tomato, Salami, Cheese)', ru: 'Смешанный омлет (помидор, салями, сыр)', tr: 'Karışık Omlet (Domates, Salam, Peynir)' },

        'menu.butter-toast.name': { en: 'Butter (v)', ru: 'Масло (в)', tr: 'Tereyağı (v)' },
        'menu.butter-jam-toast.name': { en: 'Butter & Jam (v)', ru: 'Масло и варенье (в)', tr: 'Tereyağı ve Reçel (v)' },
        'menu.beans-toast.name': { en: 'Beans (v)', ru: 'Фасоль (в)', tr: 'Fasulye (v)' },
        'menu.cheese-toast.name': { en: 'Cheese (v)', ru: 'Сыр (в)', tr: 'Peynir (v)' },
        'menu.sugar-lemon-pancake.name': { en: 'Sugar & Lemon Pancake', ru: 'Блин с сахаром и лимоном', tr: 'Şeker ve Limonlu Pankek' },
        'menu.chocolate-pancake.name': { en: 'Chocolate Pancake', ru: 'Шоколадный блин', tr: 'Çikolatalı Pankek' },
        'menu.honey-lemon-pancake.name': { en: 'Honey & Lemon Pancake', ru: 'Блин с медом и лимоном', tr: 'Bal ve Limonlu Pankek' },
        'menu.cheese-pancake.name': { en: 'Cheese Pancake', ru: 'Сырный блин', tr: 'Peynirli Pankek' },

        // Breakfast Add Ons
        'menu.add-egg.name': { en: 'Extra Egg', ru: 'Дополнительное яйцо', tr: 'Ekstra Yumurta' },
        'menu.add-cheese.name': { en: 'Extra Cheese', ru: 'Дополнительный сыр', tr: 'Ekstra Peynir' },
        'menu.add-butter.name': { en: 'Extra Butter', ru: 'Дополнительное масло', tr: 'Ekstra Tereyağı' },
        'menu.add-bacon.name': { en: 'Extra Bacon', ru: 'Дополнительный бекон', tr: 'Ekstra Pastırma' },
        'menu.add-sausage.name': { en: 'Extra English Sausage', ru: 'Дополнительная английская колбаса', tr: 'Ekstra İngiliz Sosisi' },
        'menu.add-beans.name': { en: 'Extra Baked Beans', ru: 'Дополнительная запеченная фасоль', tr: 'Ekstra Fırın Fasulyesi' },
        'menu.add-tomato.name': { en: 'Extra Tomato', ru: 'Дополнительный помидор', tr: 'Ekstra Domates' },

        // Breakfast Drinks
        'menu.tea.name': { en: 'Tea', ru: 'Чай', tr: 'Çay' },
        'menu.coffee.name': { en: 'Coffee', ru: 'Кофе', tr: 'Kahve' },
        'menu.latte.name': { en: 'Latte', ru: 'Латте', tr: 'Latte' },
        'menu.iced-latte.name': { en: 'Iced Latte', ru: 'Ледяной латте', tr: 'Buzlu Latte' },
        'menu.cappuccino.name': { en: 'Cappuccino', ru: 'Капучино', tr: 'Cappuccino' },
        'menu.americano.name': { en: 'Americano', ru: 'Американо', tr: 'Americano' },
        'menu.espresso.name': { en: 'Espresso', ru: 'Эспрессо', tr: 'Espresso' },
        'menu.iced-coffee.name': { en: 'Iced Coffee', ru: 'Ледяной кофе', tr: 'Buzlu Kahve' },
        'menu.hot-chocolate.name': { en: 'Hot Chocolate', ru: 'Горячий шоколад', tr: 'Sıcak Çikolata' },
        'menu.orange-juice.name': { en: 'Orange Juice', ru: 'Апельсиновый сок', tr: 'Portakal Suyu' },
        'menu.apple-juice.name': { en: 'Apple Juice', ru: 'Яблочный сок', tr: 'Elma Suyu' },
        'menu.pomegranate-juice.name': { en: 'Pomegranate Juice', ru: 'Гранатовый сок', tr: 'Nar Suyu' },
        'menu.fresh-milk.name': { en: 'Fresh Milk', ru: 'Свежее молоко', tr: 'Taze Süt' },
        'menu.ayran.name': { en: 'Ayran', ru: 'Айран', tr: 'Ayran' },
        'menu.strawberry-milkshake.name': { en: 'Strawberry Milkshake', ru: 'Клубничный молочный коктейль', tr: 'Çilekli Milkshake' },
        'menu.banana-milkshake.name': { en: 'Banana Milkshake', ru: 'Банановый молочный коктейль', tr: 'Muzlu Milkshake' },
        'menu.chocolate-milkshake.name': { en: 'Chocolate Milkshake', ru: 'Шоколадный молочный коктейль', tr: 'Çikolatalı Milkshake' },
        'menu.vanilla-milkshake.name': { en: 'Vanilla Milkshake', ru: 'Ванильный молочный коктейль', tr: 'Vanilla Milkshake' },

        // Lunch Items
        'menu.greek-salad.name': { en: 'Greek Salad (v)', ru: 'Греческий салат (в)', tr: 'Yunan Salatası (v)' },
        'menu.mixed-salad.name': { en: 'Mixed Salad (v)', ru: 'Смешанный салат (в)', tr: 'Karışık Salata (v)' },
        'menu.chicken-salad.name': { en: 'Chicken Salad', ru: 'Салат с курицей', tr: 'Tavuk Salatası' },

        'menu.lentil-soup.name': { en: 'Lentil Soup (v)', ru: 'Суп из чечевицы (в)', tr: 'Lentil Soup (v)' },
        'menu.chicken-soup.name': { en: 'Chicken Soup', ru: 'Куриный суп', tr: 'Tavuk Çorbası' },
        'menu.tomato-soup.name': { en: 'Tomato Soup (v)', ru: 'Томатный суп (в)', tr: 'Tomato Soup (v)' },

        'menu.chicken-sandwich.name': { en: 'Chicken Sandwich', ru: 'Сэндвич с курицей', tr: 'Tavuk Sandviçi' },
        'menu.cheese-sandwich.name': { en: 'Cheese Sandwich (v)', ru: 'Сэндвич с сыром (в)', tr: 'Peynirli Sandviç (v)' },
        'menu.tuna-sandwich.name': { en: 'Tuna Sandwich', ru: 'Сэндвич с тунцом', tr: 'Ton Balıklı Sandviç' },
        'menu.bacon-sandwich.name': { en: 'Bacon Sandwich', ru: 'Сэндвич с беконом', tr: 'Pastırmalı Sandviç' },
        'menu.jasmine-sandwich.name': { en: 'Jasmine Sandwich', ru: 'Сэндвич Жасмин', tr: 'Jasmine Sandviçi' },

        'menu.spaghetti-bolognese.name': { en: 'Spaghetti Bolognese', ru: 'Спагетти Болоньезе', tr: 'Spagetti Bolonez' },
        'menu.spaghetti-carbonara.name': { en: 'Spaghetti Carbonara', ru: 'Спагетти Карбонара', tr: 'Spagetti Carbonara' },
        'menu.penne-arrabiata.name': { en: 'Penne Arrabiata (v)', ru: 'Пенне Аррабиата (в)', tr: 'Penne Arrabiata (v)' },

        'menu.grilled-chicken.name': { en: 'Grilled Chicken', ru: 'Жареная курица', tr: 'Izgara Tavuk' },
        'menu.beef-steak.name': { en: 'Beef Steak', ru: 'Говяжий стейк', tr: 'Dana Biftek' },
        'menu.fish-of-day.name': { en: 'Fish of the Day', ru: 'Рыба дня', tr: 'Günün Balığı' },

        // Dinner Items
        'menu.hummus.name': { en: 'Hummus (v)', ru: 'Хумус (в)', tr: 'Hummus (v)' },
        'menu.baba-ganoush.name': { en: 'Baba Ganoush (v)', ru: 'Баба Гануш (в)', tr: 'Baba Ganoush (v)' },
        'menu.tzatziki.name': { en: 'Tzatziki (v)', ru: 'Цацики (в)', tr: 'Tzatziki (v)' },

        'menu.adana-kebab.name': { en: 'Adana Kebab', ru: 'Адана Кебаб', tr: 'Adana Kebap' },
        'menu.urfa-kebab.name': { en: 'Urfa Kebab', ru: 'Урфа Кебаб', tr: 'Urfa Kebap' },
        'menu.chicken-shish.name': { en: 'Chicken Shish', ru: 'Куриный Шиш', tr: 'Tavuk Şiş' },
        'menu.lamb-shish.name': { en: 'Lamb Shish', ru: 'Бараний Шиш', tr: 'Kuzu Şiş' },

        'menu.grilled-sea-bass.name': { en: 'Grilled Sea Bass', ru: 'Жареный морской окунь', tr: 'Izgara Levrek' },
        'menu.grilled-salmon.name': { en: 'Grilled Salmon', ru: 'Жареный лосось', tr: 'Izgara Som Balığı' },
        'menu.fried-calamari.name': { en: 'Fried Calamari', ru: 'Жареные кальмары', tr: 'Kızarmış Kalamar' },

        // Additional Menu Items
        'menu.hunter-rolls.name': { en: 'Hunter Rolls', ru: 'Рулеты охотника', tr: 'Avçı Sarması' },
        'menu.cheese-rolls.name': { en: 'Cheese Rolls (v) (A Turkish Tradition)', ru: 'Сырные рулеты (в) (Турецкая традиция)', tr: 'Peynirli Sarma (v) (Türk Geleneği)' },
        'menu.garlic-mushrooms.name': { en: 'Garlic Mushrooms (Cheese with Garlic)', ru: 'Грибы с чесноком (Сыр с чесноком)', tr: 'Sarımsaklı Mantar (Sarımsaklı Peynir)' },
        'menu.grilled-halloumi.name': { en: 'Grilled Halloumi (v) (Served with Tomatoes)', ru: 'Жареный халуми (в) (Подается с помидорами)', tr: 'Izgara Hellim (v) (Domates ile Servis)' },
        'menu.chicken-strips.name': { en: 'Crispy Chicken Strips (Crispy Chicken Breast served with a Sweet Chilli Sauce)', ru: 'Хрустящие куриные полоски (Хрустящая куриная грудка с острым соусом чили)', tr: 'Krispi Tavuk Şeritleri (Krispi Tavuk Göğsü Tatlı Chili Sos ile)' },

        'menu.tuna-salad.name': { en: 'Tuna Salad', ru: 'Салат с тунцом', tr: 'Ton Balıklı Salata' },
        'menu.shepherd-salad.name': { en: 'Shepherd Salad (v)', ru: 'Салат пастуха (в)', tr: 'Çoban Salatası (v)' },
        'menu.halloumi-salad.name': { en: 'Halloumi Salad (v)', ru: 'Салат с халуми (в)', tr: 'Hellim Salatası (v)' },

        // Burgers
        'menu.classic-burger.name': { en: 'Classic Burger (6 oz Beef Pattie, Lettuce, Tomato & Onion)', ru: 'Классический бургер (170г говяжья котлета, салат, помидор и лук)', tr: 'Klasik Burger (170g Dana Köfte, Marul, Domates ve Soğan)' },
        'menu.cheese-burger.name': { en: 'Classic Cheese Burger (6 oz Beef Pattie, Cheese, Lettuce, Tomato & Onion)', ru: 'Классический чизбургер (170г говяжья котлета, сыр, салат, помидор и лук)', tr: 'Klasik Peynirli Burger (170g Dana Köfte, Peynir, Marul, Domates ve Soğan)' },
        'menu.jasmine-burger.name': { en: 'Jasmine Burger (6 oz Beef Pattie, Cheese, Bacon, Lettuce, Tomato & Onion)', ru: 'Бургер Жасмин (170г говяжья котлета, сыр, бекон, салат, помидор и лук)', tr: 'Jasmine Burger (170g Dana Köfte, Peynir, Pastırma, Marul, Domates ve Soğan)' },
        'menu.double-cheese-burger.name': { en: 'Double Cheese Burger (Two 6 oz Beef Patties, Cheese, Lettuce, Tomato & Onion)', ru: 'Двойной чизбургер (Две 170г говяжьи котлеты, сыр, салат, помидор и лук)', tr: 'Çift Peynirli Burger (İki 170g Dana Köfte, Peynir, Marul, Domates ve Soğan)' },
        'menu.chicken-burger.name': { en: 'Crispy Chicken Burger (Deep Fried Chicken Breast, Lettuce, Tomato & Onion)', ru: 'Хрустящий куриный бургер (Жареная куриная грудка, салат, помидор и лук)', tr: 'Krispi Tavuk Burger (Derin Kızarmış Tavuk Göğsü, Marul, Domates ve Soğan)' },

        // Burger Add Ons
        'menu.extra-bacon.name': { en: 'Extra Bacon', ru: 'Дополнительный бекон', tr: 'Ekstra Pastırma' },
        'menu.extra-cheese.name': { en: 'Extra Cheese', ru: 'Дополнительный сыр', tr: 'Ekstra Peynir' },
        'menu.extra-pattie.name': { en: 'Extra 6 oz Beef Pattie', ru: 'Дополнительная 170г говяжья котлета', tr: 'Ekstra 170g Dana Köfte' },

        // Pizza
        'menu.vegetarian-pizza.name': { en: 'Vegetarian (v) (Tomato Sauce, Onions, Green & Red Peppers, Mushrooms & Cheese)', ru: 'Вегетарианская (в) (Томатный соус, лук, зеленый и красный перец, грибы и сыр)', tr: 'Vejetaryen (v) (Domates Sosu, Soğan, Yeşil ve Kırmızı Biber, Mantar ve Peynir)' },
        'menu.margarita-pizza.name': { en: 'Margarita (v) (Tomato Sauce & Cheese)', ru: 'Маргарита (в) (Томатный соус и сыр)', tr: 'Margarita (v) (Domates Sosu ve Peynir)' },
        'menu.bacon-pizza.name': { en: 'Bacon Pizza (Bacon, Tomato Sauce & Cheese)', ru: 'Пицца с беконом (Бекон, томатный соус и сыр)', tr: 'Pastırma Pizzası (Pastırma, Domates Sosu ve Peynir)' },
        'menu.beef-pizza.name': { en: 'Beef Pizza (Tomato Sauce, Minced Beef, Onions, Green & Red Peppers, Mushrooms & Cheese)', ru: 'Пицца с говядиной (Томатный соус, фарш, лук, зеленый и красный перец, грибы и сыр)', tr: 'Dana Eti Pizzası (Domates Sosu, Kıyma, Soğan, Yeşil ve Kırmızı Biber, Mantar ve Peynir)' },
        'menu.chicken-pizza.name': { en: 'Chicken Pizza (Tomato Sauce, Chicken, Onions, Green & Red Peppers, Mushrooms & Cheese)', ru: 'Пицца с курицей (Томатный соус, курица, лук, зеленый и красный перец, грибы и сыр)', tr: 'Tavuk Pizzası (Domates Sosu, Tavuk, Soğan, Yeşil ve Kırmızı Biber, Mantar ve Peynir)' },

        // Pasta
        'menu.chicken-pasta.name': { en: 'Chicken Pasta (Chicken, Creamy Mushroom Sauce, Parmesan Cheese)', ru: 'Паста с курицей (Курица, сливочный грибной соус, сыр пармезан)', tr: 'Tavuklu Makarna (Tavuk, Kremalı Mantar Sosu, Parmesan Peyniri)' },
        'menu.mushroom-pasta.name': { en: 'Mushroom Pasta (Creamy Mushroom Sauce, Garlic & Parmesan Cheese)', ru: 'Паста с грибами (Сливочный грибной соус, чеснок и сыр пармезан)', tr: 'Mantarlı Makarna (Kremalı Mantar Sosu, Sarımsak ve Parmesan Peyniri)' },
        'menu.carbonara.name': { en: 'Carbonara (Creamy Sauce, Bacon & Parmesan Cheese)', ru: 'Карбонара (Сливочный соус, бекон и сыр пармезан)', tr: 'Carbonara (Kremalı Sos, Pastırma ve Parmesan Peyniri)' },
        'menu.bolognaise.name': { en: 'Bolognaise (Minced Beef, Tomato Sauce, Basil & Parmesan Cheese)', ru: 'Болоньезе (Фарш, томатный соус, базилик и сыр пармезан)', tr: 'Bolognaise (Kıyma, Domates Sosu, Fesleğen ve Parmesan Peyniri)' },

        // Pasta Add Ons
        'menu.add-chicken-pasta.name': { en: 'Add Chicken to Pasta', ru: 'Добавить курицу к пасте', tr: 'Makarnaya Tavuk Ekle' },
        'menu.add-beef-pasta.name': { en: 'Add Beef to Pasta', ru: 'Добавить говядину к пасте', tr: 'Makarnaya Dana Eti Ekle' },

        // Chicken Dishes
        'menu.honey-mustard-chicken.name': { en: 'Honey & Mustard Chicken', ru: 'Курица с медом и горчицей', tr: 'Ballı Hardallı Tavuk' },
        'menu.mushroom-chicken.name': { en: 'Mushroom Chicken', ru: 'Курица с грибами', tr: 'Mantarlı Tavuk' },
        'menu.chicken-curry.name': { en: 'Chicken Curry', ru: 'Куриное карри', tr: 'Tavuk Körili' },
        'menu.chicken-schnitzel.name': { en: 'Chicken Schnitzel', ru: 'Куриный шницель', tr: 'Chicken Schnitzel' },
        'menu.grilled-chicken-kebab.name': { en: 'Grilled Chicken Kebab', ru: 'Жареный куриный кебаб', tr: 'Izgara Tavuk Kebap' },
        'menu.grilled-chicken-breast.name': { en: 'Grilled Chicken Breast', ru: 'Жареная куриная грудка', tr: 'Grilled Chicken Breast' },
        'menu.chicken-casserole.name': { en: 'Chicken Casserole', ru: 'Куриная запеканка', tr: 'Chicken Casserole' },

        // Meat Dishes
        'menu.steak.name': { en: 'Steak (8 oz Fillet)', ru: 'Стейк (230г филе)', tr: 'Steak (8 oz Fillet)' },
        'menu.mushroom-steak.name': { en: 'Mushroom Steak (8 oz Fillet with Creamy Mushroom Sauce)', ru: 'Стейк с грибами (230г филе со сливочным грибным соусом)', tr: 'Mushroom Steak (8 oz Fillet with Creamy Mushroom Sauce)' },
        'menu.beef-kebab.name': { en: 'Beef Kebab', ru: 'Говяжий кебаб', tr: 'Dana Eti Kebap' },
        'menu.grilled-meatballs.name': { en: 'Grilled Meatballs (3 Pan Fried Meatballs, Served with Grilled Tomato & Peppers)', ru: 'Жареные фрикадельки (3 жареные фрикадельки, подаются с жареными помидорами и перцем)', tr: 'Izgara Köfte (3 Tavada Kızarmış Köfte, Izgara Domates ve Biber ile Servis)' },
        'menu.mixed-kebab.name': { en: 'Mixed Kebab (Lamb Chop, Grilled Chicken Breast, Grilled Meatballs, Beef Kebab, Grilled Tomato & Peppers served with Turkish Wraps)', ru: 'Смешанный кебаб (Баранья отбивная, жареная куриная грудка, жареные фрикадельки, говяжий кебаб, жареные помидоры и перец с турецкими лепешками)', tr: 'Karışık Kebap (Kuzu Pirzola, Izgara Tavuk Göğsü, Izgara Köfte, Dana Eti Kebap, Izgara Domates ve Biber Türk Dürümü ile)' },
        'menu.lamb-chop.name': { en: 'Lamb Chop (Grilled Lamb Chop, served with Grilled Tomato & Peppers)', ru: 'Баранья отбивная (Жареная баранья отбивная, подается с жареными помидорами и перцем)', tr: 'Lamb Chop (Grilled Lamb Chop, served with Grilled Tomato & Peppers)' },

        // Traditional Turkish Meals
        'menu.steak-casserole.name': { en: 'Steak Casserole (Steak, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)', ru: 'Запеканка из стейка (стейк, помидор, лук, перец, чеснок, грибы и сыр)', tr: 'Biftek Güveç (Biftek, Domates, Soğan, Biber, Sarımsak, Mantar ve Peynir)' },
        'menu.kofte-casserole.name': { en: 'Kofte Casserole (Meatball, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)', ru: 'Запеканка из кефте (фрикадельки, помидор, лук, перец, чеснок, грибы и сыр)', tr: 'Köfte Güveç (Köfte, Domates, Soğan, Biber, Sarımsak, Mantar ve Peynir)' },
        'menu.moussaka.name': { en: 'Moussaka (Aubergine, Peppers, Tomato Sauce, Minced Beef & Cheese)', ru: 'Мусака (баклажан, перец, томатный соус, фарш и сыр)', tr: 'Moussaka (Aubergine, Peppers, Tomato Sauce, Minced Beef & Cheese)' },

        // Wraps
        'menu.chicken-wrap.name': { en: 'Chicken Wrap', ru: 'Куриная шаурма', tr: 'Tavuk Dürümü' },
        'menu.beef-wrap.name': { en: 'Beef Wrap', ru: 'Говяжья шаурма', tr: 'Dana Eti Dürümü' },
        'menu.tuna-wrap.name': { en: 'Tuna Mayonnaise Wrap', ru: 'Шаурма с тунцом и майонезом', tr: 'Ton Balıklı Mayonezli Dürüm' },
        'menu.cheese-wrap.name': { en: 'Cheese Wrap (v)', ru: 'Сырная шаурма (в)', tr: 'Peynirli Dürüm (v)' },
        'menu.vegetable-wrap.name': { en: 'Vegetable Wrap (v)', ru: 'Овощная шаурма (в)', tr: 'Sebzeli Dürüm (v)' },
        'menu.halloumi-wrap.name': { en: 'Halloumi Wrap (v)', ru: 'Шаурма с халуми (в)', tr: 'Hellim Dürümü (v)' },

        // Soft Drinks
        'menu.coke.name': { en: 'Coke', ru: 'Кока-Кола', tr: 'Kola' },
        'menu.coke-zero.name': { en: 'Coke Zero', ru: 'Кока-Кола Зеро', tr: 'Kola Zero' },
        'menu.diet-coke.name': { en: 'Diet Coke', ru: 'Кока-Кола Лайт', tr: 'Diyet Kola' },
        'menu.fanta.name': { en: 'Fanta', ru: 'Фанта', tr: 'Fanta' },
        'menu.sprite.name': { en: 'Sprite', ru: 'Спрайт', tr: 'Sprite' },
        'menu.cherry-juice.name': { en: 'Cherry Juice', ru: 'Вишневый сок', tr: 'Vişne Suyu' },
        'menu.peach-juice.name': { en: 'Peach Juice', ru: 'Персиковый сок', tr: 'Şeftali Suyu' },
        'menu.iced-tea-peach.name': { en: 'Iced Tea (Peach)', ru: 'Холодный чай (персик)', tr: 'Buzlu Çay (Şeftali)' },
        'menu.iced-tea-lemon.name': { en: 'Iced Tea (Lemon)', ru: 'Холодный чай (лимон)', tr: 'Buzlu Çay (Limon)' },
        'menu.fresh-orange-juice.name': { en: 'Fresh Orange Juice', ru: 'Свежий апельсиновый сок', tr: 'Taze Portakal Suyu' },
        'menu.strawberry-milkshake-bev.name': { en: 'Strawberry Milkshake', ru: 'Клубничный молочный коктейль', tr: 'Çilekli Milkshake' },
        'menu.banana-milkshake-bev.name': { en: 'Banana Milkshake', ru: 'Банановый молочный коктейль', tr: 'Muzlu Milkshake' },
        'menu.chocolate-milkshake-bev.name': { en: 'Chocolate Milkshake', ru: 'Шоколадный молочный коктейль', tr: 'Çikolatalı Milkshake' },
        'menu.vanilla-milkshake-bev.name': { en: 'Vanilla Milkshake', ru: 'Ванильный молочный коктейль', tr: 'Vanilyalı Milkshake' },
        'menu.soda-water.name': { en: 'Soda Water', ru: 'Содовая вода', tr: 'Soda' },
        'menu.small-water.name': { en: 'Small Water', ru: 'Маленькая вода', tr: 'Küçük Su' },

        // Tea & Coffee
        'menu.turkish-tea.name': { en: 'Çay (Turkish Tea)', ru: 'Чай (Турецкий чай)', tr: 'Çay (Türk Çayı)' },
        'menu.english-tea.name': { en: 'English Tea', ru: 'Английский чай', tr: 'İngiliz Çayı' },
        'menu.white-coffee.name': { en: 'White Coffee', ru: 'Белый кофе', tr: 'Sütlü Kahve' },
        'menu.black-coffee.name': { en: 'Black Coffee', ru: 'Черный кофе', tr: 'Sade Kahve' },
        'menu.turkish-coffee.name': { en: 'Turkish Coffee', ru: 'Турецкий кофе', tr: 'Türk Kahvesi' },
        'menu.latte-bev.name': { en: 'Latte', ru: 'Латте', tr: 'Latte' },
        'menu.iced-latte-bev.name': { en: 'Iced Latte', ru: 'Холодный латте', tr: 'Buzlu Latte' },

        // Alcoholic Drinks
        'menu.efes.name': { en: 'Efes Beer', ru: 'Пиво Эфес', tr: 'Efes Bira' },
        'menu.efes-malt.name': { en: 'Efes Malt', ru: 'Эфес Мальт', tr: 'Efes Malt' },
        'menu.house-white.name': { en: 'Glass of House White Wine', ru: 'Бокал домашнего белого вина', tr: 'Kadeh Beyaz Şarap' },
        'menu.house-red.name': { en: 'Glass of House Red Wine', ru: 'Бокал домашнего красного вина', tr: 'Kadeh Kırmızı Şarap' },
        'menu.local-gin.name': { en: 'Local Gin (And Mixer)', ru: 'Местный джин (с миксером)', tr: 'Yerli Cin (ve Karıştırıcı)' },
        'menu.local-vodka.name': { en: 'Local Vodka (And Mixer)', ru: 'Местная водка (с миксером)', tr: 'Yerli Votka (ve Karıştırıcı)' },
        'menu.imported-gin.name': { en: 'Imported Gin (And Mixer)', ru: 'Импортный джин (с миксером)', tr: 'İthal Cin (ve Karıştırıcı)' },
        'menu.imported-vodka.name': { en: 'Imported Vodka (And Mixer)', ru: 'Импортная водка (с миксером)', tr: 'İthal Votka (ve Karıştırıcı)' },
        'menu.whiskey.name': { en: 'Whiskey (And Mixer)', ru: 'Виски (с миксером)', tr: 'Viski (ve Karıştırıcı)' },

        // Kids Menu
        'menu.mini-burger.name': { en: 'Mini Burger & Chips', ru: 'Мини-бургер и картофель фри', tr: 'Mini Burger ve Patates' },
        'menu.margarita-pizza-kids.name': { en: 'Margarita Pizza (v)', ru: 'Пицца Маргарита (в)', tr: 'Margarita Pizzası (v)' },
        'menu.chicken-nuggets.name': { en: 'Homemade Chicken Nuggets & Chips', ru: 'Домашние куриные наггетсы и картофель фри', tr: 'Ev Yapımı Tavuk Nugget ve Patates' },
        'menu.pasta-bolognaise.name': { en: 'Pasta Bolognaise', ru: 'Паста Болоньезе', tr: 'Bolonez Makarna' },
        'menu.sausage-chips-beans.name': { en: 'Sausage, Chips & Beans', ru: 'Колбаса, картофель фри и фасоль', tr: 'Sosis, Patates ve Fasulye' },

        // Desserts
        'menu.cheesecake.name': { en: 'Cheesecake (Lemon or Raspberry)', ru: 'Чизкейк (лимонный или малиновый)', tr: 'Cheesecake (Limon veya Ahududu)' },
        'menu.ice-cream.name': { en: 'Ice Cream', ru: 'Мороженое', tr: 'Dondurma' },
        'menu.tiramisu.name': { en: 'Tiramisu', ru: 'Тирамису', tr: 'Tiramisu' },
        'menu.kunefe.name': { en: 'Traditional Turkish Kunefe', ru: 'Традиционная турецкая кюнефе', tr: 'Geleneksel Türk Künefesi' },
        'menu.pancake-dessert.name': { en: 'Pancake', ru: 'Блин', tr: 'Pankek' },

        // Rooms Section
        'rooms.title': { en: 'Our Rooms & Apartments', ru: 'Наши номера и апартаменты', tr: 'Odalarımız ve Dairelerimiz' },
        'rooms.subtitle': { en: 'Comfortable accommodation for every family', ru: 'Комфортное размещение для каждой семьи', tr: 'Her aile için rahat konaklama' },
        'rooms.select-dates': { en: 'Select Your Dates', ru: 'Выберите даты', tr: 'Tarihlerinizi Seçin' },
        'rooms.checkin': { en: 'Check-in Date', ru: 'Дата заезда', tr: 'Giriş Tarihi' },
        'rooms.checkout': { en: 'Check-out Date', ru: 'Дата выезда', tr: 'Çıkış Tarihi' },
        'rooms.guests': { en: 'Number of Guests', ru: 'Количество гостей', tr: 'Misafir Sayısı' },
        'rooms.contact-whatsapp': { en: 'Contact via WhatsApp', ru: 'Связаться через WhatsApp', tr: 'WhatsApp ile İletişim' },
        'rooms.date-requirement': { en: 'Please select your check-in and check-out dates to view seasonal prices.', ru: 'Пожалуйста, выберите даты заезда и выезда, чтобы увидеть сезонные цены.', tr: 'Mevsimsel fiyatları görmek için lütfen giriş ve çıkış tarihlerinizi seçin.' },
        'rooms.per-night': { en: 'per night', ru: 'за ночь', tr: 'gecelik' },

        // Room Data
        'rooms.room1.title': { en: '1 Bedroom Apartment - 103', ru: '1-комнатная квартира - 103', tr: '1 Yatak Odalı Daire - 103' },
        'rooms.room1.description': { en: 'Comfortable apartment with modern amenities, perfect for couples or small families.', ru: 'Удобная квартира с современными удобствами, идеально подходит для пар или небольших семей.', tr: 'Modern konforlarla rahat daire, çiftler veya küçük aileler için mükemmel.' },
        'rooms.room2.title': { en: '1 Bedroom Apartment - 201', ru: '1-комнатная квартира - 201', tr: '1 Yatak Odalı Daire - 201' },
        'rooms.room2.description': { en: 'Ground floor apartment with easy access and pool views.', ru: 'Квартира на первом этаже с легким доступом и видом на бассейн.', tr: 'Kolay erişim ve havuz manzarası olan zemin kat dairesi.' },
        'rooms.room3.title': { en: '2 Bedroom Apartment - 202', ru: '2-комнатная квартира - 202', tr: '2 Yatak Odalı Daire - 202' },
        'rooms.room3.description': { en: 'Spacious two-bedroom apartment perfect for families.', ru: 'Просторная двухкомнатная квартира, идеально подходящая для семей.', tr: 'Aileler için mükemmel geniş iki yatak odalı daire.' },
        'rooms.room4.title': { en: '2 Bedroom Apartment - 203', ru: '2-комнатная квартира - 203', tr: '2 Yatak Odalı Daire - 203' },
        'rooms.room4.description': { en: 'Comfortable two-bedroom apartment with modern amenities.', ru: 'Удобная двухкомнатная квартира с современными удобствами.', tr: 'Modern konforlarla rahat iki yatak odalı daire.' },
        'rooms.room5.title': { en: '3 Bedroom Apartment - 401', ru: '3-комнатная квартира - 401', tr: '3 Yatak Odalı Daire - 401' },
        'rooms.room5.description': { en: 'Large three-bedroom apartment with stunning views.', ru: 'Большая трехкомнатная квартира с потрясающими видами.', tr: 'Muhteşem manzaralı büyük üç yatak odalı daire.' },
        'rooms.room6.title': { en: '1 Bedroom Apartment - 301', ru: '1-комнатная квартира - 301', tr: '1 Yatak Odalı Daire - 301' },
        'rooms.room6.description': { en: 'First floor apartment with pools views and family-friendly layout.', ru: 'Квартира на первом этаже с видом на бассейн и семейной планировкой.', tr: 'Havuz manzaralı ve aile dostu düzenli birinci kat dairesi.' },
        'rooms.room7.title': { en: 'Studio Room - 102', ru: 'Студия - 102', tr: 'Stüdyo Oda - 102' },
        'rooms.room7.description': { en: 'Modern studio room with double bed, ideal for short stays.', ru: 'Современная студия с двуспальной кроватью, идеально подходит для коротких пребываний.', tr: 'Çift kişilik yataklı modern stüdyo oda, kısa konaklamalar için ideal.' },
        'rooms.room8.title': { en: 'Studio Room - 101', ru: 'Студия - 101', tr: 'Stüdyo Oda - 101' },
        'rooms.room8.description': { en: 'Modern studio room with double bed, ideal for short stays.', ru: 'Современная студия с двуспальной кроватью, идеально подходит для коротких пребываний.', tr: 'Çift kişilik yataklı modern stüdyo oda, kısa konaklamalar için ideal.' },

        // Room Features
        'rooms.features.double-bed': { en: '1 Double Bed', ru: '1 двуспальная кровать', tr: '1 Çift Kişilik Yatak' },
        'rooms.features.private-bathroom': { en: 'Private Bathroom', ru: 'Собственная ванная комната', tr: 'Özel Banyo' },
        'rooms.features.kitchenette': { en: 'Kitchenette', ru: 'Мини-кухня', tr: 'Mini Mutfak' },
        'rooms.features.free-wifi': { en: 'Free WiFi', ru: 'Бесплатный WiFi', tr: 'Ücretsiz WiFi' },
        'rooms.features.air-conditioning': { en: 'Air Conditioning', ru: 'Кондиционер', tr: 'Klima' },
        'rooms.features.pool-view': { en: 'Pool View', ru: 'Вид на бассейн', tr: 'Havuz Manzarası' },
        'rooms.features.garden-view': { en: 'Garden View', ru: 'Вид на сад', tr: 'Bahçe Manzarası' },
        'rooms.features.terrace': { en: 'Private Terrace', ru: 'Собственная терраса', tr: 'Özel Teras' },
        'rooms.features.parking': { en: 'Free Parking', ru: 'Бесплатная парковка', tr: 'Ücretsiz Otopark' },
        'rooms.features.tv': { en: 'TV', ru: 'Телевизор', tr: 'TV' },
        'rooms.features.sofa-beds': { en: 'Sofa Beds', ru: 'Диван-кровати', tr: 'Kanepe Yataklar' },
        'rooms.features.double-single-beds': { en: '1 Double & 1 Single Bed', ru: '1 двуспальная и 1 односпальная кровать', tr: '1 Çift Kişilik & 1 Tek Kişilik Yatak' },
        'rooms.features.double-three-single-beds': { en: '1 Double & 3 Single Beds', ru: '1 двуспальная и 3 односпальные кровати', tr: '1 Çift Kişilik & 3 Tek Kişilik Yatak' },
        'rooms.features.double-single-bed': { en: '1 Double & 1 Single Bed', ru: '1 двуспальная и 1 односпальная кровать', tr: '1 Çift Kişilik & 1 Tek Kişilik Yatak' },
        'rooms.features.wet-bathroom': { en: 'Wet Bathroom', ru: 'Влажная ванная комната', tr: 'Wet Bathroom' },
        'rooms.features.balcony-views': { en: 'Balcony with Views', ru: 'Балкон с видом', tr: 'Balcony with Views' },
        'rooms.features.garden-views': { en: 'Garden Views', ru: 'Вид на сад', tr: 'Garden Views' },

        // Car Rental Section
        'car-rental.title': { en: 'Car Rental', ru: 'Аренда автомобилей', tr: 'Araç Kiralama' },
        'car-rental.subtitle': { en: 'Explore Oludeniz at your own pace', ru: 'Исследуйте Олюдениз в своем темпе', tr: 'Ölüdeniz\'i kendi hızınızda keşfedin' },
        'car-rental.description': { en: 'Rent a car from us and discover the beautiful surroundings of Oludeniz and Fethiye.', ru: 'Арендуйте автомобиль у нас и откройте для себя красивые окрестности Олюдениза и Фетхие.', tr: 'Bizden araç kiralayın ve Ölüdeniz ile Fethiye\'nin güzel çevresini keşfedin.' },
        'car-rental.features.reliable': { en: 'Reliable Vehicles', ru: 'Надежные автомобили', tr: 'Güvenilir Araçlar' },
        'car-rental.features.insurance': { en: 'Full Insurance', ru: 'Полная страховка', tr: 'Tam Sigorta' },
        'car-rental.features.delivery': { en: 'Hotel Delivery', ru: 'Доставка в отель', tr: 'Otel Teslimatı' },
        'car-rental.features.support': { en: '24/7 Support', ru: 'Поддержка 24/7', tr: '7/24 Destek' },
        'car-rental.contact': { en: 'Contact for Car Rental', ru: 'Связаться по аренде авто', tr: 'Araç Kiralama İçin İletişim' },

        // Car Rental Section (Alternative keys used by CarRentalSection)
        'car.title': { en: 'Car Rental', ru: 'Аренда автомобилей', tr: 'Araç Kiralama' },
        'car.subtitle': { en: 'Explore Oludeniz at your own pace', ru: 'Исследуйте Олюдениз в своем темпе', tr: 'Ölüdeniz\'i kendi hızınızda keşfedin' },
        'car.request-title': { en: 'Request Car Rental', ru: 'Запрос на аренду автомобиля', tr: 'Araç Kiralama Talebi' },
        'car.booking-note': { en: 'Please select your rental dates and we will contact you with availability and pricing.', ru: 'Пожалуйста, выберите даты аренды, и мы свяжемся с вами по поводу наличия и цен.', tr: 'Lütfen kiralama tarihlerinizi seçin, müsaitlik ve fiyat bilgisi için sizinle iletişime geçeceğiz.' },
        'car.start-date': { en: 'Start Date', ru: 'Дата начала', tr: 'Başlangıç Tarihi' },
        'car.end-date': { en: 'End Date', ru: 'Дата окончания', tr: 'Bitiş Tarihi' },
        'car.contact-whatsapp': { en: 'Contact via WhatsApp', ru: 'Связаться через WhatsApp', tr: 'WhatsApp ile İletişim' },

        // Dogs Section
        'dogs.title': { en: 'Our Dogs', ru: 'Наши собаки', tr: 'Köpeklerimiz' },
        'dogs.subtitle': { en: 'Give a forever home to one of our strays', ru: 'Подарите дом одному из наших бездомных', tr: 'Sokak köpeklerimizden birine sonsuz bir yuva verin' },
        'dogs.description': { en: 'We have several friendly dogs looking for loving homes. Contact us to learn more about adoption.', ru: 'У нас есть несколько дружелюбных собак, ищущих любящие дома. Свяжитесь с нами, чтобы узнать больше об усыновлении.', tr: 'Sevgi dolu yuvalar arayan birkaç dost canlısı köpeğimiz var. Sahiplenme hakkında daha fazla bilgi için bizimle iletişime geçin.' },
        'dogs.age': { en: '3 years old', ru: '3 года', tr: '3 yaşında' },
        'dogs.lucas.description': { en: 'Loves food except tomatoes, if you want company while you\'re eating Lucas is your guy', ru: 'Любит еду, кроме помидоров, если вы хотите компанию во время еды, Лукас - ваш парень', tr: 'Domatesler hariç yemeği sever, yemek yerken arkadaş istiyorsanız Lucas sizin adamınız' },
        'dogs.bobby.description': { en: 'If you\'re looking for a dance partner full of energy, Bobby is your guy', ru: 'Если вы ищете танцевального партнера, полного энергии, Бобби - ваш парень', tr: 'Enerji dolu bir dans partneri arıyorsanız, Bobby sizin adamınız' },
        'dogs.charlie.description': { en: 'Charlie is the cool kid, quiet and easy company for you', ru: 'Чарли - крутой парень, тихий и легкая компания для вас', tr: 'Charlie havalı çocuk, sakin ve kolay arkadaşlık eder' },
        'dogs.alex.description': { en: 'Alex has the most innocent gaze and will make you forget your troubles', ru: 'У Алекса самый невинный взгляд, который заставит вас забыть о ваших проблемах', tr: 'Alex en masum bakışa sahip ve sizi dertlerinizi unutturacak' },
        'dogs.rex.description': { en: 'Rex loves sleeping on the couch, make sure he is allowed', ru: 'Рекс любит спать на диване, убедитесь, что ему это разрешено', tr: 'Rex kanepede uyumayı sever, izin verildiğinden emin olun' },
        'dogs.contact-adoption': { en: 'Contact Us About Adoption', ru: 'Связаться с нами об усыновлении', tr: 'Sahiplenme Hakkında Bizimle İletişime Geçin' },
        'dogs.support-gofundme': { en: 'Support on GoFundMe', ru: 'Поддержать на GoFundMe', tr: 'GoFundMe\'de Destekle' },

        // Happy Clients Section
        'clients.title': { en: 'What Our Guests Say', ru: 'Что говорят наши гости', tr: 'Misafirlerimiz Ne Diyor' },
        'clients.subtitle': { en: 'Real reviews from real guests', ru: 'Настоящие отзывы от настоящих гостей', tr: 'Gerçek misafirlerden gerçek yorumlar' },
        'clients.gallery': { en: 'Photo Gallery', ru: 'Фотогалерея', tr: 'Fotoğraf Galerisi' },
        'clients.testimonials': { en: 'Guest Reviews', ru: 'Отзывы гостей', tr: 'Misafir Yorumları' },
        'clients.review1': { en: 'A little gem of a place excellent food and fantastic hosts and the dogs made it all the more special,see you again', ru: 'Маленькая жемчужина с отличной едой и фантастическими хозяевами, а собаки сделали все еще более особенным, увидимся снова', tr: 'Küçük bir mücevher, mükemmel yemek ve harika ev sahipleri, köpekler her şeyi daha da özel kıldı, tekrar görüşürüz' },
        'clients.review1.author': { en: 'Sarah M.', ru: 'Сара М.', tr: 'Sarah M.' },
        'clients.review1.location': { en: 'London, UK', ru: 'Лондон, Великобритания', tr: 'London, UK' },
        'clients.review2': { en: 'What a lovely English breakfast and hospitality Big day down at the beach today! What better way to start than a hangover breakfast at Jasmine Restaurant & Bar. All cooked fresh and washed down with a coffee. Good stuff!', ru: 'Какой прекрасный английский завтрак и гостеприимство! Большой день на пляже сегодня! Какой лучший способ начать, чем завтрак от похмелья в ресторане и баре Жасмин. Все приготовлено свежим и запито кофе. Хорошие вещи!', tr: 'Ne güzel bir İngiliz kahvaltısı ve misafirperverlik! Bugün plajda büyük gün! Jasmine Restaurant & Bar\'da akşamdan kalma kahvaltısından daha iyi bir başlangıç ne olabilir? Hepsi taze pişirilmiş ve kahve ile yıkanmış. Harika!' },
        'clients.review2.author': { en: 'John D.', ru: 'Джон Д.', tr: 'John D.' },
        'clients.review2.location': { en: 'Manchester, UK', ru: 'Манчестер, Великобритания', tr: 'Manchester, UK' },
        'clients.read-reviews': { en: 'Read More Reviews', ru: 'Читать больше отзывов', tr: 'Daha Fazla Yorum Oku' },

        // Footer
        'footer.title': { en: 'Jasmine Restaurant & Bar', ru: 'Ресторан и бар Жасмин', tr: 'Jasmine Restaurant & Bar' },
        'footer.description': { en: 'Your home away from home in Oludeniz, Turkey. Experience authentic Turkish hospitality and cuisine.', ru: 'Ваш дом вдали от дома в Олюденизе, Турция. Познакомьтесь с аутентичным турецким гостеприимством и кухней.', tr: 'Your home away from home in Oludeniz, Turkey. Experience authentic Turkish hospitality and cuisine.' },
        'footer.find-us': { en: 'Find Us', ru: 'Найти нас', tr: 'Find Us' },
        'footer.pickup-message': { en: 'Can\'t find us? Call us and we\'ll come get you!', ru: 'Не можете нас найти? Позвоните нам, и мы приедем за вами!', tr: 'Bizi bulamıyor musunuz? Bizi arayın, sizi almaya gelelim!' },
        'footer.map-alt': { en: 'Jasmine Restaurant & Bar Location Map', ru: 'Карта расположения ресторана и бара Жасмин', tr: 'Jasmine Restaurant & Bar Location Map' },
        'footer.contact-whatsapp': { en: 'Contact via WhatsApp', ru: 'Связаться через WhatsApp', tr: 'Contact via WhatsApp' },
        'footer.whatsapp-message': { en: 'Hello! I would like to know more about Jasmine Restaurant & Bar. Could you provide me with more information?', ru: 'Привет! Я хотел бы узнать больше о ресторане и баре Жасмин. Не могли бы вы предоставить мне дополнительную информацию?', tr: 'Hello! I would like to know more about Jasmine Restaurant & Bar. Could you provide me with more information?' },
        'footer.social.facebook': { en: 'Follow us on Facebook', ru: 'Подписывайтесь на нас в Facebook', tr: 'Follow us on Facebook' },
        'footer.social.instagram': { en: 'Follow us on Instagram', ru: 'Подписывайтесь на нас в Instagram', tr: 'Follow us on Instagram' },
        'footer.social.tiktok': { en: 'Follow us on TikTok', ru: 'Подписывайтесь на нас в TikTok', tr: 'Follow us on TikTok' },
        'footer.copyright': { en: '© 2024 Jasmine Restaurant & Bar. All rights reserved.', ru: '© 2024 Ресторан и бар Жасмин. Все права защищены.', tr: '© 2024 Jasmine Restaurant & Bar. All rights reserved.' },

        // Common
        'common.address': { en: 'Ölüdeniz, Babadag Cd. No:14, 48300 Fethiye/Muğla', ru: 'Ölüdeniz, Babadag Cd. No:14, 48300 Fethiye/Muğla', tr: 'Ölüdeniz, Babadag Cd. No:14, 48300 Fethiye/Muğla' },
        'common.phone': { en: '+90 553 728 3045', ru: '+90 553 728 3045', tr: '+90 553 728 3045' },
        'common.email': { en: 'jasminerestaurantbar@gmail.com', ru: 'jasminerestaurantbar@gmail.com', tr: 'jasminerestaurantbar@gmail.com' },
        'common.select-dates-first': { en: 'Please select your dates and number of guests first', ru: 'Пожалуйста, сначала выберите даты и количество гостей', tr: 'Please select your dates and number of guests first' },
        'common.view-menu': { en: 'View Menu', ru: 'Посмотреть меню', tr: 'Menüyü Görüntüle' },
        'common.hide-menu': { en: 'Hide Menu', ru: 'Скрыть меню', tr: 'Menüyü Gizle' },

        // Menu Toggle
        'menu.title': { en: 'Take Away Menu, Order here', ru: 'Меню на вынос, заказать здесь', tr: 'Paket Servis Menüsü, Buradan Sipariş Verin' },
        'menu.description': { en: 'Browse our menu and place your order via WhatsApp', ru: 'Просмотрите наше меню и сделайте заказ через WhatsApp', tr: 'Menümüzü inceleyin ve WhatsApp üzerinden sipariş verin' },
        'menu.your-order': { en: 'Your Order', ru: 'Ваш заказ', tr: 'Your Order' },
        'menu.clear-cart': { en: 'Clear Cart', ru: 'Очистить корзину', tr: 'Clear Cart' },
        'menu.send-order': { en: 'Send Order via WhatsApp', ru: 'Отправить заказ через WhatsApp', tr: 'Send Order via WhatsApp' },
        'menu.add-to-cart': { en: 'Add to Cart', ru: 'Добавить в корзину', tr: 'Add to Cart' },
        'menu.add-ons-title': { en: 'Add Ons:', ru: 'Дополнения:' }
    };

    const t = (key: string): string => {
        const translation = translations[key as keyof typeof translations];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return (translation as any)[language];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};