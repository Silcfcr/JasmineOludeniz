import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
    language: 'en' | 'ru';
    setLanguage: (lang: 'en' | 'ru') => void;
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
    const [language, setLanguage] = useState<'en' | 'ru'>('en');

    const translations = {
        // Navigation
        'nav.home': { en: 'Home', ru: 'Главная' },
        'nav.restaurant': { en: 'Restaurant', ru: 'Ресторан' },
        'nav.hotel': { en: 'Hotel', ru: 'Отель' },
        'nav.rooms': { en: 'Rooms', ru: 'Номера' },
        'nav.car-rental': { en: 'Car Rental', ru: 'Аренда авто' },
        'nav.customers': { en: 'Reviews', ru: 'Отзывы' },
        'nav.dogs': { en: 'Our Dogs', ru: 'Наши собаки' },
        'nav.contact': { en: 'Contact', ru: 'Контакты' },

        // Hero Section
        'hero.welcome': { en: 'Welcome to Jasmine', ru: 'Добро пожаловать в Жасмин' },
        'hero.subtitle': { en: 'Restaurant & Bar • Hotel', ru: 'Ресторан и бар • Отель' },
        'hero.description': { en: 'Experience comfortable family accommodation and delicious home-style dining in the heart of Oludeniz, Turkey.', ru: 'Насладитесь комфортным семейным размещением и вкусной домашней кухней в сердце Олюдениза, Турция.' },
        'hero.explore-restaurant': { en: 'Explore Restaurant', ru: 'Изучить ресторан' },
        'hero.view-rooms': { en: 'View Rooms', ru: 'Посмотреть номера' },

        // Restaurant Section
        'restaurant.title': { en: 'Our Restaurant & Bar', ru: 'Наш ресторан и бар' },
        'restaurant.subtitle': { en: 'Traditional Turkish cuisine with a modern twist', ru: 'Традиционная турецкая кухня с современным подходом' },
        'restaurant.family-dining': { en: 'Family Dining Experience', ru: 'Семейный обеденный опыт' },
        'restaurant.description': { en: 'Enjoy authentic Turkish dishes prepared with fresh, local ingredients in our welcoming atmosphere.', ru: 'Насладитесь аутентичными турецкими блюдами, приготовленными из свежих местных ингредиентов в нашей гостеприимной атмосфере.' },
        'restaurant.features.traditional': { en: 'Traditional Turkish Cuisine', ru: 'Традиционная турецкая кухня' },
        'restaurant.features.drinks': { en: 'Full Bar & Cocktails', ru: 'Полный бар и коктейли' },
        'restaurant.features.poolside': { en: 'Poolside Dining', ru: 'Обед у бассейна' },
        'restaurant.features.kid-friendly': { en: 'Kid-Friendly Menu', ru: 'Детское меню' },

        // Hotel Section
        'hotel.title': { en: 'Our Hotel', ru: 'Наш отель' },
        'hotel.subtitle': { en: 'Comfortable family accommodation', ru: 'Комфортное семейное размещение' },
        'hotel.family-accommodation': { en: 'Family Accommodation', ru: 'Семейное размещение' },
        'hotel.description': { en: 'Stay in our comfortable apartments and rooms, perfect for families visiting Oludeniz.', ru: 'Остановитесь в наших удобных апартаментах и номерах, идеально подходящих для семей, посещающих Олюдениз.' },
        'hotel.features.wifi': { en: 'Free WiFi', ru: 'Бесплатный WiFi' },
        'hotel.features.pool': { en: 'Swimming Pool', ru: 'Бассейн' },
        'hotel.features.parking': { en: 'Free Parking', ru: 'Бесплатная парковка' },
        'hotel.features.family-service': { en: 'Family Service', ru: 'Семейное обслуживание' },
        'hotel.features.kid-friendly': { en: 'Kid-Friendly', ru: 'Подходит для детей' },

        // Special Offer Section
        'special.title': { en: 'Special Departure Day Offer', ru: 'Специальное предложение в день отъезда' },
        'special.subtitle': { en: 'Make the most of your last day', ru: 'Максимально используйте свой последний день' },
        'special.description': { en: 'Enjoy our facilities for free on your departure day - perfect for those late flights!', ru: 'Наслаждайтесь нашими удобствами бесплатно в день отъезда - идеально для поздних рейсов!' },
        'special.feature1.title': { en: 'Free Luggage Storage', ru: 'Бесплатное хранение багажа' },
        'special.feature1.desc': { en: 'Store your luggage safely while you enjoy your day', ru: 'Безопасно храните багаж, пока наслаждаетесь днем' },
        'special.feature2.title': { en: 'Free Shower Facilities', ru: 'Бесплатные душевые' },
        'special.feature2.desc': { en: 'Fresh up before your journey home', ru: 'Освежитесь перед дорогой домой' },
        'special.feature3.title': { en: 'Free Pool Access', ru: 'Бесплатный доступ к бассейну' },
        'special.feature3.desc': { en: 'Relax by our beautiful pool', ru: 'Расслабьтесь у нашего красивого бассейна' },
        'special.feature4.title': { en: 'Free Sunbeds', ru: 'Бесплатные шезлонги' },
        'special.feature4.desc': { en: 'Comfortable lounging in the sun', ru: 'Удобное пребывание на солнце' },
        'special.feature5.title': { en: 'Free Hotel Pickup', ru: 'Бесплатный трансфер из отеля' },
        'special.feature5.desc': { en: 'We\'ll pick you up from your hotel', ru: 'Мы заберем вас из вашего отеля' },
        'special.feature6.title': { en: 'Free Restaurant Access', ru: 'Бесплатный доступ в ресторан' },
        'special.feature6.desc': { en: 'Enjoy our restaurant facilities', ru: 'Наслаждайтесь удобствами нашего ресторана' },
        'special.terms': { en: 'Terms: Must have stayed with us for at least 2 nights. Valid for departure day only.', ru: 'Условия: Должны были остановиться у нас минимум на 2 ночи. Действительно только в день отъезда.' },
        'special.book-now': { en: 'Book This Service', ru: 'Забронировать услугу' },
        'special.not-today': { en: 'Not Today', ru: 'Не сегодня' },

        // Menu Tabs
        'menu.breakfast.title': { en: 'Breakfast', ru: 'Завтрак' },
        'menu.starters.title': { en: 'Starters', ru: 'Закуски' },
        'menu.mains.title': { en: 'Main Courses', ru: 'Основные блюда' },
        'menu.light.title': { en: 'Light Meals', ru: 'Легкие блюда' },
        'menu.beverages.title': { en: 'Beverages', ru: 'Напитки' },
        'menu.kids.title': { en: 'Kids & Desserts', ru: 'Детское меню и десерты' },

        // Menu Categories - Breakfast
        'menu.breakfast.breakfast-plates.title': { en: 'BREAKFAST PLATES', ru: 'ЗАВТРАКИ' },
        'menu.breakfast.breakfast-plates.subtitle': { en: 'Served 9 am - 1 pm Daily', ru: 'Подается с 9:00 до 13:00 ежедневно' },
        'menu.breakfast.eggs-omelettes.title': { en: 'EGGS & OMELETTES', ru: 'ЯЙЦА И ОМЛЕТЫ' },
        'menu.breakfast.toast-pancakes.title': { en: 'TOAST & PANCAKES', ru: 'ТОСТЫ И БЛИНЫ' },
        'menu.breakfast.breakfast-drinks.title': { en: 'BREAKFAST DRINKS', ru: 'НАПИТКИ К ЗАВТРАКУ' },
        'menu.breakfast.breakfast-add-ons.title': { en: 'BREAKFAST ADD ONS', ru: 'ДОПОЛНЕНИЯ К ЗАВТРАКУ' },

        // Menu Categories - Starters
        'menu.starters.starters.title': { en: 'STARTERS', ru: 'ЗАКУСКИ' },
        'menu.starters.salads.title': { en: 'SALADS', ru: 'САЛАТЫ' },

        // Menu Categories - Mains
        'menu.mains.burgers.title': { en: 'BURGERS', ru: 'БУРГЕРЫ' },
        'menu.mains.pizza.title': { en: 'PIZZA', ru: 'ПИЦЦА' },
        'menu.mains.pasta.title': { en: 'PASTA', ru: 'ПАСТА' },
        'menu.mains.chicken-dishes.title': { en: 'CHICKEN DISHES', ru: 'КУРИНЫЕ БЛЮДА' },
        'menu.mains.meat-dishes.title': { en: 'MEAT DISHES', ru: 'МЯСНЫЕ БЛЮДА' },
        'menu.mains.traditional-turkish-meals.title': { en: 'TRADITIONAL TURKISH MEALS', ru: 'ТРАДИЦИОННЫЕ ТУРЕЦКИЕ БЛЮДА' },

        // Menu Categories - Light Meals
        'menu.light.wraps.title': { en: 'WRAPS', ru: 'ШАУРМА' },
        'menu.light.toasties.title': { en: 'TOASTIES', ru: 'ТОСТЫ' },
        'menu.light.sandwiches.title': { en: 'SANDWICHES', ru: 'СЭНДВИЧИ' },

        // Menu Categories - Beverages
        'menu.beverages.soft-drinks.title': { en: 'SOFT DRINKS', ru: 'БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ' },
        'menu.beverages.tea-coffee.title': { en: 'TEA & COFFEE', ru: 'ЧАЙ И КОФЕ' },
        'menu.beverages.alcoholic-drinks.title': { en: 'ALCOHOLIC DRINKS', ru: 'АЛКОГОЛЬНЫЕ НАПИТКИ' },

        // Menu Categories - Kids
        'menu.kids.kids-menu.title': { en: 'KIDS MENU', ru: 'ДЕТСКОЕ МЕНЮ' },
        'menu.kids.desserts.title': { en: 'DESSERTS', ru: 'ДЕСЕРТЫ' },

        // Menu Items - Breakfast
        'menu.village-breakfast.name': { en: 'Traditional Village Breakfast', ru: 'Традиционный деревенский завтрак' },
        'menu.turkish-breakfast.name': { en: 'Turkish Breakfast Plate', ru: 'Турецкая тарелка для завтрака' },
        'menu.english-breakfast.name': { en: 'Full English Breakfast', ru: 'Полный английский завтрак' },
        'menu.hangover-breakfast.name': { en: 'Hangover Breakfast', ru: 'Завтрак от похмелья' },

        'menu.menemen.name': { en: 'Menemen (v)', ru: 'Менемен (в)' },
        'menu.egg-chips-fried.name': { en: 'Egg & Chips (v) (Fried)', ru: 'Яйцо и картофель фри (в) (жареное)' },
        'menu.egg-chips-scrambled.name': { en: 'Egg & Chips (v) (Scrambled)', ru: 'Яйцо и картофель фри (в) (болтунья)' },
        'menu.egg-toast-fried.name': { en: 'Egg on Toast (v) (Fried)', ru: 'Яйцо на тосте (в) (жареное)' },
        'menu.egg-toast-scrambled.name': { en: 'Egg on Toast (v) (Scrambled)', ru: 'Яйцо на тосте (в) (болтунья)' },
        'menu.cheese-omelette.name': { en: 'Cheese Omelette (v)', ru: 'Сырный омлет (в)' },
        'menu.mushroom-omelette.name': { en: 'Mushroom Omelette (v)', ru: 'Грибной омлет (в)' },
        'menu.mixed-omelette.name': { en: 'Mixed Omelette (Tomato, Salami, Cheese)', ru: 'Смешанный омлет (помидор, салями, сыр)' },

        'menu.butter-toast.name': { en: 'Butter (v)', ru: 'Масло (в)' },
        'menu.butter-jam-toast.name': { en: 'Butter & Jam (v)', ru: 'Масло и варенье (в)' },
        'menu.beans-toast.name': { en: 'Beans (v)', ru: 'Фасоль (в)' },
        'menu.cheese-toast.name': { en: 'Cheese (v)', ru: 'Сыр (в)' },
        'menu.sugar-lemon-pancake.name': { en: 'Sugar & Lemon Pancake', ru: 'Блин с сахаром и лимоном' },
        'menu.chocolate-pancake.name': { en: 'Chocolate Pancake', ru: 'Шоколадный блин' },
        'menu.honey-lemon-pancake.name': { en: 'Honey & Lemon Pancake', ru: 'Блин с медом и лимоном' },
        'menu.cheese-pancake.name': { en: 'Cheese Pancake', ru: 'Сырный блин' },

        // Breakfast Add Ons
        'menu.add-egg.name': { en: 'Extra Egg', ru: 'Дополнительное яйцо' },
        'menu.add-cheese.name': { en: 'Extra Cheese', ru: 'Дополнительный сыр' },
        'menu.add-butter.name': { en: 'Extra Butter', ru: 'Дополнительное масло' },
        'menu.add-bacon.name': { en: 'Extra Bacon', ru: 'Дополнительный бекон' },
        'menu.add-sausage.name': { en: 'Extra English Sausage', ru: 'Дополнительная английская колбаса' },
        'menu.add-beans.name': { en: 'Extra Baked Beans', ru: 'Дополнительная запеченная фасоль' },
        'menu.add-tomato.name': { en: 'Extra Tomato', ru: 'Дополнительный помидор' },

        // Breakfast Drinks
        'menu.tea.name': { en: 'Tea', ru: 'Чай' },
        'menu.coffee.name': { en: 'Coffee', ru: 'Кофе' },
        'menu.latte.name': { en: 'Latte', ru: 'Латте' },
        'menu.iced-latte.name': { en: 'Iced Latte', ru: 'Ледяной латте' },
        'menu.cappuccino.name': { en: 'Cappuccino', ru: 'Капучино' },
        'menu.americano.name': { en: 'Americano', ru: 'Американо' },
        'menu.espresso.name': { en: 'Espresso', ru: 'Эспрессо' },
        'menu.iced-coffee.name': { en: 'Iced Coffee', ru: 'Ледяной кофе' },
        'menu.hot-chocolate.name': { en: 'Hot Chocolate', ru: 'Горячий шоколад' },
        'menu.orange-juice.name': { en: 'Orange Juice', ru: 'Апельсиновый сок' },
        'menu.apple-juice.name': { en: 'Apple Juice', ru: 'Яблочный сок' },
        'menu.pomegranate-juice.name': { en: 'Pomegranate Juice', ru: 'Гранатовый сок' },
        'menu.fresh-milk.name': { en: 'Fresh Milk', ru: 'Свежее молоко' },
        'menu.ayran.name': { en: 'Ayran', ru: 'Айран' },
        'menu.strawberry-milkshake.name': { en: 'Strawberry Milkshake', ru: 'Клубничный молочный коктейль' },
        'menu.banana-milkshake.name': { en: 'Banana Milkshake', ru: 'Банановый молочный коктейль' },
        'menu.chocolate-milkshake.name': { en: 'Chocolate Milkshake', ru: 'Шоколадный молочный коктейль' },
        'menu.vanilla-milkshake.name': { en: 'Vanilla Milkshake', ru: 'Ванильный молочный коктейль' },

        // Lunch Items
        'menu.greek-salad.name': { en: 'Greek Salad (v)', ru: 'Греческий салат (в)' },
        'menu.mixed-salad.name': { en: 'Mixed Salad (v)', ru: 'Смешанный салат (в)' },
        'menu.chicken-salad.name': { en: 'Chicken Salad', ru: 'Салат с курицей' },

        'menu.lentil-soup.name': { en: 'Lentil Soup (v)', ru: 'Суп из чечевицы (в)' },
        'menu.chicken-soup.name': { en: 'Chicken Soup', ru: 'Куриный суп' },
        'menu.tomato-soup.name': { en: 'Tomato Soup (v)', ru: 'Томатный суп (в)' },

        'menu.chicken-sandwich.name': { en: 'Chicken Sandwich', ru: 'Сэндвич с курицей' },
        'menu.cheese-sandwich.name': { en: 'Cheese Sandwich (v)', ru: 'Сэндвич с сыром (в)' },
        'menu.tuna-sandwich.name': { en: 'Tuna Sandwich', ru: 'Сэндвич с тунцом' },
        'menu.bacon-sandwich.name': { en: 'Bacon Sandwich', ru: 'Сэндвич с беконом' },
        'menu.jasmine-sandwich.name': { en: 'Jasmine Sandwich', ru: 'Сэндвич Жасмин' },

        'menu.spaghetti-bolognese.name': { en: 'Spaghetti Bolognese', ru: 'Спагетти Болоньезе' },
        'menu.spaghetti-carbonara.name': { en: 'Spaghetti Carbonara', ru: 'Спагетти Карбонара' },
        'menu.penne-arrabiata.name': { en: 'Penne Arrabiata (v)', ru: 'Пенне Аррабиата (в)' },

        'menu.grilled-chicken.name': { en: 'Grilled Chicken', ru: 'Жареная курица' },
        'menu.beef-steak.name': { en: 'Beef Steak', ru: 'Говяжий стейк' },
        'menu.fish-of-day.name': { en: 'Fish of the Day', ru: 'Рыба дня' },

        // Dinner Items
        'menu.hummus.name': { en: 'Hummus (v)', ru: 'Хумус (в)' },
        'menu.baba-ganoush.name': { en: 'Baba Ganoush (v)', ru: 'Баба Гануш (в)' },
        'menu.tzatziki.name': { en: 'Tzatziki (v)', ru: 'Цацики (в)' },

        'menu.adana-kebab.name': { en: 'Adana Kebab', ru: 'Адана Кебаб' },
        'menu.urfa-kebab.name': { en: 'Urfa Kebab', ru: 'Урфа Кебаб' },
        'menu.chicken-shish.name': { en: 'Chicken Shish', ru: 'Куриный Шиш' },
        'menu.lamb-shish.name': { en: 'Lamb Shish', ru: 'Бараний Шиш' },

        'menu.grilled-sea-bass.name': { en: 'Grilled Sea Bass', ru: 'Жареный морской окунь' },
        'menu.grilled-salmon.name': { en: 'Grilled Salmon', ru: 'Жареный лосось' },
        'menu.fried-calamari.name': { en: 'Fried Calamari', ru: 'Жареные кальмары' },

        // Additional Menu Items
        'menu.hunter-rolls.name': { en: 'Hunter Rolls', ru: 'Рулеты охотника' },
        'menu.cheese-rolls.name': { en: 'Cheese Rolls (v) (A Turkish Tradition)', ru: 'Сырные рулеты (в) (Турецкая традиция)' },
        'menu.garlic-mushrooms.name': { en: 'Garlic Mushrooms (Cheese with Garlic)', ru: 'Грибы с чесноком (Сыр с чесноком)' },
        'menu.grilled-halloumi.name': { en: 'Grilled Halloumi (v) (Served with Tomatoes)', ru: 'Жареный халуми (в) (Подается с помидорами)' },
        'menu.chicken-strips.name': { en: 'Crispy Chicken Strips (Crispy Chicken Breast served with a Sweet Chilli Sauce)', ru: 'Хрустящие куриные полоски (Хрустящая куриная грудка с острым соусом чили)' },

        'menu.tuna-salad.name': { en: 'Tuna Salad', ru: 'Салат с тунцом' },
        'menu.shepherd-salad.name': { en: 'Shepherd Salad (v)', ru: 'Салат пастуха (в)' },
        'menu.halloumi-salad.name': { en: 'Halloumi Salad (v)', ru: 'Салат с халуми (в)' },

        // Burgers
        'menu.classic-burger.name': { en: 'Classic Burger (6 oz Beef Pattie, Lettuce, Tomato & Onion)', ru: 'Классический бургер (170г говяжья котлета, салат, помидор и лук)' },
        'menu.cheese-burger.name': { en: 'Classic Cheese Burger (6 oz Beef Pattie, Cheese, Lettuce, Tomato & Onion)', ru: 'Классический чизбургер (170г говяжья котлета, сыр, салат, помидор и лук)' },
        'menu.jasmine-burger.name': { en: 'Jasmine Burger (6 oz Beef Pattie, Cheese, Bacon, Lettuce, Tomato & Onion)', ru: 'Бургер Жасмин (170г говяжья котлета, сыр, бекон, салат, помидор и лук)' },
        'menu.double-cheese-burger.name': { en: 'Double Cheese Burger (Two 6 oz Beef Patties, Cheese, Lettuce, Tomato & Onion)', ru: 'Двойной чизбургер (Две 170г говяжьи котлеты, сыр, салат, помидор и лук)' },
        'menu.chicken-burger.name': { en: 'Crispy Chicken Burger (Deep Fried Chicken Breast, Lettuce, Tomato & Onion)', ru: 'Хрустящий куриный бургер (Жареная куриная грудка, салат, помидор и лук)' },

        // Burger Add Ons
        'menu.extra-bacon.name': { en: 'Extra Bacon', ru: 'Дополнительный бекон' },
        'menu.extra-cheese.name': { en: 'Extra Cheese', ru: 'Дополнительный сыр' },
        'menu.extra-pattie.name': { en: 'Extra 6 oz Beef Pattie', ru: 'Дополнительная 170г говяжья котлета' },

        // Pizza
        'menu.vegetarian-pizza.name': { en: 'Vegetarian (v) (Tomato Sauce, Onions, Green & Red Peppers, Mushrooms & Cheese)', ru: 'Вегетарианская (в) (Томатный соус, лук, зеленый и красный перец, грибы и сыр)' },
        'menu.margarita-pizza.name': { en: 'Margarita (v) (Tomato Sauce & Cheese)', ru: 'Маргарита (в) (Томатный соус и сыр)' },
        'menu.bacon-pizza.name': { en: 'Bacon Pizza (Bacon, Tomato Sauce & Cheese)', ru: 'Пицца с беконом (Бекон, томатный соус и сыр)' },
        'menu.beef-pizza.name': { en: 'Beef Pizza (Tomato Sauce, Minced Beef, Onions, Green & Red Peppers, Mushrooms & Cheese)', ru: 'Пицца с говядиной (Томатный соус, фарш, лук, зеленый и красный перец, грибы и сыр)' },
        'menu.chicken-pizza.name': { en: 'Chicken Pizza (Tomato Sauce, Chicken, Onions, Green & Red Peppers, Mushrooms & Cheese)', ru: 'Пицца с курицей (Томатный соус, курица, лук, зеленый и красный перец, грибы и сыр)' },

        // Pasta
        'menu.chicken-pasta.name': { en: 'Chicken Pasta (Chicken, Creamy Mushroom Sauce, Parmesan Cheese)', ru: 'Паста с курицей (Курица, сливочный грибной соус, сыр пармезан)' },
        'menu.mushroom-pasta.name': { en: 'Mushroom Pasta (Creamy Mushroom Sauce, Garlic & Parmesan Cheese)', ru: 'Паста с грибами (Сливочный грибной соус, чеснок и сыр пармезан)' },
        'menu.carbonara.name': { en: 'Carbonara (Creamy Sauce, Bacon & Parmesan Cheese)', ru: 'Карбонара (Сливочный соус, бекон и сыр пармезан)' },
        'menu.bolognaise.name': { en: 'Bolognaise (Minced Beef, Tomato Sauce, Basil & Parmesan Cheese)', ru: 'Болоньезе (Фарш, томатный соус, базилик и сыр пармезан)' },

        // Pasta Add Ons
        'menu.add-chicken-pasta.name': { en: 'Add Chicken to Pasta', ru: 'Добавить курицу к пасте' },
        'menu.add-beef-pasta.name': { en: 'Add Beef to Pasta', ru: 'Добавить говядину к пасте' },

        // Chicken Dishes
        'menu.honey-mustard-chicken.name': { en: 'Honey & Mustard Chicken', ru: 'Курица с медом и горчицей' },
        'menu.mushroom-chicken.name': { en: 'Mushroom Chicken', ru: 'Курица с грибами' },
        'menu.chicken-curry.name': { en: 'Chicken Curry', ru: 'Куриное карри' },
        'menu.chicken-schnitzel.name': { en: 'Chicken Schnitzel', ru: 'Куриный шницель' },
        'menu.grilled-chicken-kebab.name': { en: 'Grilled Chicken Kebab', ru: 'Жареный куриный кебаб' },
        'menu.grilled-chicken-breast.name': { en: 'Grilled Chicken Breast', ru: 'Жареная куриная грудка' },
        'menu.chicken-casserole.name': { en: 'Chicken Casserole', ru: 'Куриная запеканка' },

        // Meat Dishes
        'menu.steak.name': { en: 'Steak (8 oz Fillet)', ru: 'Стейк (230г филе)' },
        'menu.mushroom-steak.name': { en: 'Mushroom Steak (8 oz Fillet with Creamy Mushroom Sauce)', ru: 'Стейк с грибами (230г филе со сливочным грибным соусом)' },
        'menu.beef-kebab.name': { en: 'Beef Kebab', ru: 'Говяжий кебаб' },
        'menu.grilled-meatballs.name': { en: 'Grilled Meatballs (3 Pan Fried Meatballs, Served with Grilled Tomato & Peppers)', ru: 'Жареные фрикадельки (3 жареные фрикадельки, подаются с жареными помидорами и перцем)' },
        'menu.mixed-kebab.name': { en: 'Mixed Kebab (Lamb Chop, Grilled Chicken Breast, Grilled Meatballs, Beef Kebab, Grilled Tomato & Peppers served with Turkish Wraps)', ru: 'Смешанный кебаб (Баранья отбивная, жареная куриная грудка, жареные фрикадельки, говяжий кебаб, жареные помидоры и перец с турецкими лепешками)' },
        'menu.lamb-chop.name': { en: 'Lamb Chop (Grilled Lamb Chop, served with Grilled Tomato & Peppers)', ru: 'Баранья отбивная (Жареная баранья отбивная, подается с жареными помидорами и перцем)' },

        // Traditional Turkish Meals
        'menu.steak-casserole.name': { en: 'Steak Casserole (Steak, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)', ru: 'Запеканка из стейка (стейк, помидор, лук, перец, чеснок, грибы и сыр)' },
        'menu.kofte-casserole.name': { en: 'Kofte Casserole (Meatball, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)', ru: 'Запеканка из кефте (фрикадельки, помидор, лук, перец, чеснок, грибы и сыр)' },
        'menu.moussaka.name': { en: 'Moussaka (Aubergine, Peppers, Tomato Sauce, Minced Beef & Cheese)', ru: 'Мусака (баклажан, перец, томатный соус, фарш и сыр)' },

        // Wraps
        'menu.chicken-wrap.name': { en: 'Chicken Wrap', ru: 'Куриная шаурма' },
        'menu.beef-wrap.name': { en: 'Beef Wrap', ru: 'Говяжья шаурма' },
        'menu.tuna-wrap.name': { en: 'Tuna Mayonnaise Wrap', ru: 'Шаурма с тунцом и майонезом' },
        'menu.cheese-wrap.name': { en: 'Cheese Wrap (v)', ru: 'Сырная шаурма (в)' },
        'menu.vegetable-wrap.name': { en: 'Vegetable Wrap (v)', ru: 'Овощная шаурма (в)' },
        'menu.halloumi-wrap.name': { en: 'Halloumi Wrap (v)', ru: 'Шаурма с халуми (в)' },

        // Soft Drinks
        'menu.coke.name': { en: 'Coke', ru: 'Кока-Кола' },
        'menu.coke-zero.name': { en: 'Coke Zero', ru: 'Кока-Кола Зеро' },
        'menu.diet-coke.name': { en: 'Diet Coke', ru: 'Кока-Кола Лайт' },
        'menu.fanta.name': { en: 'Fanta', ru: 'Фанта' },
        'menu.sprite.name': { en: 'Sprite', ru: 'Спрайт' },
        'menu.cherry-juice.name': { en: 'Cherry Juice', ru: 'Вишневый сок' },
        'menu.peach-juice.name': { en: 'Peach Juice', ru: 'Персиковый сок' },
        'menu.iced-tea-peach.name': { en: 'Iced Tea (Peach)', ru: 'Холодный чай (персик)' },
        'menu.iced-tea-lemon.name': { en: 'Iced Tea (Lemon)', ru: 'Холодный чай (лимон)' },
        'menu.fresh-orange-juice.name': { en: 'Fresh Orange Juice', ru: 'Свежий апельсиновый сок' },
        'menu.strawberry-milkshake-bev.name': { en: 'Strawberry Milkshake', ru: 'Клубничный молочный коктейль' },
        'menu.banana-milkshake-bev.name': { en: 'Banana Milkshake', ru: 'Банановый молочный коктейль' },
        'menu.chocolate-milkshake-bev.name': { en: 'Chocolate Milkshake', ru: 'Шоколадный молочный коктейль' },
        'menu.vanilla-milkshake-bev.name': { en: 'Vanilla Milkshake', ru: 'Ванильный молочный коктейль' },
        'menu.soda-water.name': { en: 'Soda Water', ru: 'Содовая вода' },
        'menu.small-water.name': { en: 'Small Water', ru: 'Маленькая вода' },

        // Tea & Coffee
        'menu.turkish-tea.name': { en: 'Çay (Turkish Tea)', ru: 'Чай (Турецкий чай)' },
        'menu.english-tea.name': { en: 'English Tea', ru: 'Английский чай' },
        'menu.white-coffee.name': { en: 'White Coffee', ru: 'Белый кофе' },
        'menu.black-coffee.name': { en: 'Black Coffee', ru: 'Черный кофе' },
        'menu.turkish-coffee.name': { en: 'Turkish Coffee', ru: 'Турецкий кофе' },
        'menu.latte-bev.name': { en: 'Latte', ru: 'Латте' },
        'menu.iced-latte-bev.name': { en: 'Iced Latte', ru: 'Холодный латте' },

        // Alcoholic Drinks
        'menu.efes.name': { en: 'Efes Beer', ru: 'Пиво Эфес' },
        'menu.efes-malt.name': { en: 'Efes Malt', ru: 'Эфес Мальт' },
        'menu.house-white.name': { en: 'Glass of House White Wine', ru: 'Бокал домашнего белого вина' },
        'menu.house-red.name': { en: 'Glass of House Red Wine', ru: 'Бокал домашнего красного вина' },
        'menu.local-gin.name': { en: 'Local Gin (And Mixer)', ru: 'Местный джин (с миксером)' },
        'menu.local-vodka.name': { en: 'Local Vodka (And Mixer)', ru: 'Местная водка (с миксером)' },
        'menu.imported-gin.name': { en: 'Imported Gin (And Mixer)', ru: 'Импортный джин (с миксером)' },
        'menu.imported-vodka.name': { en: 'Imported Vodka (And Mixer)', ru: 'Импортная водка (с миксером)' },
        'menu.whiskey.name': { en: 'Whiskey (And Mixer)', ru: 'Виски (с миксером)' },

        // Kids Menu
        'menu.mini-burger.name': { en: 'Mini Burger & Chips', ru: 'Мини-бургер и картофель фри' },
        'menu.margarita-pizza-kids.name': { en: 'Margarita Pizza (v)', ru: 'Пицца Маргарита (в)' },
        'menu.chicken-nuggets.name': { en: 'Homemade Chicken Nuggets & Chips', ru: 'Домашние куриные наггетсы и картофель фри' },
        'menu.pasta-bolognaise.name': { en: 'Pasta Bolognaise', ru: 'Паста Болоньезе' },
        'menu.sausage-chips-beans.name': { en: 'Sausage, Chips & Beans', ru: 'Колбаса, картофель фри и фасоль' },

        // Desserts
        'menu.cheesecake.name': { en: 'Cheesecake (Lemon or Raspberry)', ru: 'Чизкейк (лимонный или малиновый)' },
        'menu.ice-cream.name': { en: 'Ice Cream', ru: 'Мороженое' },
        'menu.tiramisu.name': { en: 'Tiramisu', ru: 'Тирамису' },
        'menu.kunefe.name': { en: 'Traditional Turkish Kunefe', ru: 'Традиционная турецкая кюнефе' },
        'menu.pancake-dessert.name': { en: 'Pancake', ru: 'Блин' },

        // Rooms Section
        'rooms.title': { en: 'Our Rooms & Apartments', ru: 'Наши номера и апартаменты' },
        'rooms.subtitle': { en: 'Comfortable accommodation for every family', ru: 'Комфортное размещение для каждой семьи' },
        'rooms.select-dates': { en: 'Select Your Dates', ru: 'Выберите даты' },
        'rooms.checkin': { en: 'Check-in Date', ru: 'Дата заезда' },
        'rooms.checkout': { en: 'Check-out Date', ru: 'Дата выезда' },
        'rooms.guests': { en: 'Number of Guests', ru: 'Количество гостей' },
        'rooms.contact-whatsapp': { en: 'Contact via WhatsApp', ru: 'Связаться через WhatsApp' },
        'rooms.per-night': { en: 'per night', ru: 'за ночь' },

        // Room Data
        'rooms.room1.title': { en: '1 Bedroom Apartment - 103', ru: '1-комнатная квартира - 103' },
        'rooms.room1.description': { en: 'Comfortable apartment with modern amenities, perfect for couples or small families.', ru: 'Удобная квартира с современными удобствами, идеально подходит для пар или небольших семей.' },
        'rooms.room2.title': { en: '1 Bedroom Apartment - 201', ru: '1-комнатная квартира - 201' },
        'rooms.room2.description': { en: 'Ground floor apartment with easy access and pool views.', ru: 'Квартира на первом этаже с легким доступом и видом на бассейн.' },
        'rooms.room3.title': { en: '2 Bedroom Apartment - 202', ru: '2-комнатная квартира - 202' },
        'rooms.room3.description': { en: 'Spacious two-bedroom apartment perfect for families.', ru: 'Просторная двухкомнатная квартира, идеально подходящая для семей.' },
        'rooms.room4.title': { en: '2 Bedroom Apartment - 203', ru: '2-комнатная квартира - 203' },
        'rooms.room4.description': { en: 'Comfortable two-bedroom apartment with modern amenities.', ru: 'Удобная двухкомнатная квартира с современными удобствами.' },
        'rooms.room5.title': { en: '3 Bedroom Apartment - 301', ru: '3-комнатная квартира - 301' },
        'rooms.room5.description': { en: 'Large three-bedroom apartment with stunning views.', ru: 'Большая трехкомнатная квартира с потрясающими видами.' },
        'rooms.room6.title': { en: '1 Bedroom Apartment - 301', ru: '1-комнатная квартира - 301' },
        'rooms.room6.description': { en: 'First floor apartment with pools views and family-friendly layout.', ru: 'Квартира на первом этаже с видом на бассейн и семейной планировкой.' },
        'rooms.room7.title': { en: 'Studio Room - 102', ru: 'Студия - 102' },
        'rooms.room7.description': { en: 'Modern studio room with double bed, ideal for short stays.', ru: 'Современная студия с двуспальной кроватью, идеально подходит для коротких пребываний.' },
        'rooms.room8.title': { en: 'Studio Room - 101', ru: 'Студия - 101' },
        'rooms.room8.description': { en: 'Modern studio room with double bed, ideal for short stays.', ru: 'Современная студия с двуспальной кроватью, идеально подходит для коротких пребываний.' },

        // Room Features
        'rooms.features.double-bed': { en: '1 Double Bed', ru: '1 двуспальная кровать' },
        'rooms.features.private-bathroom': { en: 'Private Bathroom', ru: 'Собственная ванная комната' },
        'rooms.features.kitchenette': { en: 'Kitchenette', ru: 'Мини-кухня' },
        'rooms.features.free-wifi': { en: 'Free WiFi', ru: 'Бесплатный WiFi' },
        'rooms.features.air-conditioning': { en: 'Air Conditioning', ru: 'Кондиционер' },
        'rooms.features.pool-view': { en: 'Pool View', ru: 'Вид на бассейн' },
        'rooms.features.garden-view': { en: 'Garden View', ru: 'Вид на сад' },
        'rooms.features.terrace': { en: 'Private Terrace', ru: 'Собственная терраса' },
        'rooms.features.parking': { en: 'Free Parking', ru: 'Бесплатная парковка' },
        'rooms.features.tv': { en: 'TV', ru: 'Телевизор' },
        'rooms.features.sofa-beds': { en: 'Sofa Beds', ru: 'Диван-кровати' },
        'rooms.features.double-single-beds': { en: '1 Double & 1 Single Bed', ru: '1 двуспальная и 1 односпальная кровать' },
        'rooms.features.double-three-single-beds': { en: '1 Double & 3 Single Beds', ru: '1 двуспальная и 3 односпальные кровати' },
        'rooms.features.double-single-bed': { en: '1 Double & 1 Single Bed', ru: '1 двуспальная и 1 односпальная кровать' },
        'rooms.features.wet-bathroom': { en: 'Wet Bathroom', ru: 'Влажная ванная комната' },
        'rooms.features.balcony-views': { en: 'Balcony with Views', ru: 'Балкон с видом' },
        'rooms.features.garden-views': { en: 'Garden Views', ru: 'Вид на сад' },

        // Car Rental Section
        'car-rental.title': { en: 'Car Rental', ru: 'Аренда автомобилей' },
        'car-rental.subtitle': { en: 'Explore Oludeniz at your own pace', ru: 'Исследуйте Олюдениз в своем темпе' },
        'car-rental.description': { en: 'Rent a car from us and discover the beautiful surroundings of Oludeniz and Fethiye.', ru: 'Арендуйте автомобиль у нас и откройте для себя красивые окрестности Олюдениза и Фетхие.' },
        'car-rental.features.reliable': { en: 'Reliable Vehicles', ru: 'Надежные автомобили' },
        'car-rental.features.insurance': { en: 'Full Insurance', ru: 'Полная страховка' },
        'car-rental.features.delivery': { en: 'Hotel Delivery', ru: 'Доставка в отель' },
        'car-rental.features.support': { en: '24/7 Support', ru: 'Поддержка 24/7' },
        'car-rental.contact': { en: 'Contact for Car Rental', ru: 'Связаться по аренде авто' },

        // Car Rental Section (Alternative keys used by CarRentalSection)
        'car.title': { en: 'Car Rental', ru: 'Аренда автомобилей' },
        'car.subtitle': { en: 'Explore Oludeniz at your own pace', ru: 'Исследуйте Олюдениз в своем темпе' },
        'car.request-title': { en: 'Request Car Rental', ru: 'Запрос на аренду автомобиля' },
        'car.booking-note': { en: 'Please select your rental dates and we will contact you with availability and pricing.', ru: 'Пожалуйста, выберите даты аренды, и мы свяжемся с вами по поводу наличия и цен.' },
        'car.start-date': { en: 'Start Date', ru: 'Дата начала' },
        'car.end-date': { en: 'End Date', ru: 'Дата окончания' },
        'car.contact-whatsapp': { en: 'Contact via WhatsApp', ru: 'Связаться через WhatsApp' },

        // Dogs Section
        'dogs.title': { en: 'Our Dogs', ru: 'Наши собаки' },
        'dogs.subtitle': { en: 'Give a forever home to one of our strays', ru: 'Подарите дом одному из наших бездомных' },
        'dogs.description': { en: 'We have several friendly dogs looking for loving homes. Contact us to learn more about adoption.', ru: 'У нас есть несколько дружелюбных собак, ищущих любящие дома. Свяжитесь с нами, чтобы узнать больше об усыновлении.' },
        'dogs.age': { en: '3 years old', ru: '3 года' },
        'dogs.lucas.description': { en: 'Friendly and playful, loves children', ru: 'Дружелюбный и игривый, любит детей' },
        'dogs.bobby.description': { en: 'Calm and gentle, perfect for families', ru: 'Спокойный и нежный, идеален для семей' },
        'dogs.charlie.description': { en: 'Energetic and loyal companion', ru: 'Энергичный и верный компаньон' },
        'dogs.alex.description': { en: 'Sweet and affectionate, great with kids', ru: 'Сладкий и ласковый, отлично ладит с детьми' },
        'dogs.rex.description': { en: 'Protective and loving, perfect guard dog', ru: 'Защитный и любящий, идеальная сторожевая собака' },
        'dogs.contact-adoption': { en: 'Contact Us About Adoption', ru: 'Связаться с нами об усыновлении' },
        'dogs.support-gofundme': { en: 'Support on GoFundMe', ru: 'Поддержать на GoFundMe' },

        // Happy Clients Section
        'clients.title': { en: 'What Our Guests Say', ru: 'Что говорят наши гости' },
        'clients.subtitle': { en: 'Real reviews from real guests', ru: 'Настоящие отзывы от настоящих гостей' },
        'clients.gallery': { en: 'Photo Gallery', ru: 'Фотогалерея' },
        'clients.testimonials': { en: 'Guest Reviews', ru: 'Отзывы гостей' },
        'clients.review1': { en: 'A little gem of a place excellent food and fantastic hosts and the dogs made it all the more special,see you again', ru: 'Маленькая жемчужина с отличной едой и фантастическими хозяевами, а собаки сделали все еще более особенным, увидимся снова' },
        'clients.review1.author': { en: 'Sarah M.', ru: 'Сара М.' },
        'clients.review1.location': { en: 'London, UK', ru: 'Лондон, Великобритания' },
        'clients.review2': { en: 'What a lovely English breakfast and hospitality Big day down at the beach today! What better way to start than a hangover breakfast at Jasmine Restaurant & Bar. All cooked fresh and washed down with a coffee. Good stuff!', ru: 'Какой прекрасный английский завтрак и гостеприимство! Большой день на пляже сегодня! Какой лучший способ начать, чем завтрак от похмелья в ресторане и баре Жасмин. Все приготовлено свежим и запито кофе. Хорошие вещи!' },
        'clients.review2.author': { en: 'John D.', ru: 'Джон Д.' },
        'clients.review2.location': { en: 'Manchester, UK', ru: 'Манчестер, Великобритания' },
        'clients.read-reviews': { en: 'Read More Reviews', ru: 'Читать больше отзывов' },

        // Footer
        'footer.title': { en: 'Jasmine Restaurant & Bar', ru: 'Ресторан и бар Жасмин' },
        'footer.description': { en: 'Your home away from home in Oludeniz, Turkey. Experience authentic Turkish hospitality and cuisine.', ru: 'Ваш дом вдали от дома в Олюденизе, Турция. Познакомьтесь с аутентичным турецким гостеприимством и кухней.' },
        'footer.find-us': { en: 'Find Us', ru: 'Найти нас' },
        'footer.map-alt': { en: 'Jasmine Restaurant & Bar Location Map', ru: 'Карта расположения ресторана и бара Жасмин' },
        'footer.contact-whatsapp': { en: 'Contact via WhatsApp', ru: 'Связаться через WhatsApp' },
        'footer.whatsapp-message': { en: 'Hello! I would like to know more about Jasmine Restaurant & Bar. Could you provide me with more information?', ru: 'Привет! Я хотел бы узнать больше о ресторане и баре Жасмин. Не могли бы вы предоставить мне дополнительную информацию?' },
        'footer.social.facebook': { en: 'Follow us on Facebook', ru: 'Подписывайтесь на нас в Facebook' },
        'footer.social.instagram': { en: 'Follow us on Instagram', ru: 'Подписывайтесь на нас в Instagram' },
        'footer.social.tiktok': { en: 'Follow us on TikTok', ru: 'Подписывайтесь на нас в TikTok' },
        'footer.copyright': { en: '© 2024 Jasmine Restaurant & Bar. All rights reserved.', ru: '© 2024 Ресторан и бар Жасмин. Все права защищены.' },

        // Common
        'common.address': { en: 'Ölüdeniz, Mendos Cd. No:14, 48300 Fethiye/Muğla', ru: 'Олюдениз, Мендос Кд. №14, 48300 Фетхие/Мугла' },
        'common.phone': { en: '+90 553 728 3045', ru: '+90 553 728 3045' },
        'common.email': { en: 'jasminerestaurantbar@gmail.com', ru: 'jasminerestaurantbar@gmail.com' },
        'common.select-dates-first': { en: 'Please select your dates and number of guests first', ru: 'Пожалуйста, сначала выберите даты и количество гостей' },
        'common.view-menu': { en: 'View Menu', ru: 'Посмотреть меню' },
        'common.hide-menu': { en: 'Hide Menu', ru: 'Скрыть меню' },

        // Menu Toggle
        'menu.title': { en: 'Take Away Menu, Order here', ru: 'Меню на вынос, заказать здесь' },
        'menu.description': { en: 'Browse our menu and place your order via WhatsApp', ru: 'Просмотрите наше меню и сделайте заказ через WhatsApp' },
        'menu.your-order': { en: 'Your Order', ru: 'Ваш заказ' },
        'menu.clear-cart': { en: 'Clear Cart', ru: 'Очистить корзину' },
        'menu.send-order': { en: 'Send Order via WhatsApp', ru: 'Отправить заказ через WhatsApp' },
        'menu.add-to-cart': { en: 'Add to Cart', ru: 'Добавить в корзину' },
        'menu.add-ons-title': { en: 'Add Ons:', ru: 'Дополнения:' }
    };

    const t = (key: string): string => {
        const translation = translations[key as keyof typeof translations];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translation[language];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};