import { MenuData } from '../types/menu';

export const menuData: MenuData = {
    'breakfast': {
        title: 'Breakfast',
        icon: 'fas fa-sun',
        categories: [
            {
                title: 'BREAKFAST PLATES',
                subtitle: 'Served 9 am - 1 pm Daily',
                items: [
                    { id: 'village-breakfast', name: 'Traditional Village Breakfast', price: 350, description: 'Olives, Cheese, Jam, Honey, Dried Apricots, Salami, Tomato, Cucumber, Cheese Roll, Fried or Scrambled Egg, Fresh Turkish Bread' },
                    { id: 'turkish-breakfast', name: 'Turkish Breakfast Plate', price: 300, description: 'Olives, Cheese, Jam, Honey, Salami, Tomato, Cucumber, Cheese Roll, Fried or Scrambled Egg, Fresh Turkish Bread' },
                    { id: 'english-breakfast', name: 'Full English Breakfast', price: 320, description: 'Back Bacon, English Sausage, Mushrooms, Tomato, Toasted Bread, Egg (Fried or Scrambled), Baked Beans' },
                    { id: 'hangover-breakfast', name: 'Hangover Breakfast', price: 400, description: '2 Back Bacon, 2 English Sausage, Mushrooms, Tomato, Toasted Bread, 2 Eggs (Fried or Scrambled), Baked Beans & Chips' }
                ]
            },
            {
                title: 'EGGS & OMELETTES',
                items: [
                    { id: 'menemen', name: 'Menemen (v)', price: 250, description: 'Egg, Tomato, Peppers, Onions & Fresh Turkish Bread' },
                    { id: 'egg-chips-fried', name: 'Egg & Chips (v) (Fried)', price: 200 },
                    { id: 'egg-chips-scrambled', name: 'Egg & Chips (v) (Scrambled)', price: 200 },
                    { id: 'egg-toast-fried', name: 'Egg on Toast (v) (Fried)', price: 180 },
                    { id: 'egg-toast-scrambled', name: 'Egg on Toast (v) (Scrambled)', price: 180 },
                    { id: 'cheese-omelette', name: 'Cheese Omelette (v)', price: 250 },
                    { id: 'mushroom-omelette', name: 'Mushroom Omelette (v)', price: 250 },
                    { id: 'mixed-omelette', name: 'Mixed Omelette (Tomato, Salami, Cheese)', price: 250 }
                ]
            },
            {
                title: 'TOAST & PANCAKES',
                items: [
                    { id: 'butter-toast', name: 'Butter (v)', price: 110 },
                    { id: 'butter-jam-toast', name: 'Butter & Jam (v)', price: 120 },
                    { id: 'beans-toast', name: 'Beans (v)', price: 150 },
                    { id: 'cheese-toast', name: 'Cheese (v)', price: 160 },
                    { id: 'sugar-lemon-pancake', name: 'Sugar & Lemon Pancake', price: 250 },
                    { id: 'chocolate-pancake', name: 'Chocolate Pancake', price: 250 },
                    { id: 'honey-lemon-pancake', name: 'Honey & Lemon Pancake', price: 250 },
                    { id: 'cheese-pancake', name: 'Cheese Pancake', price: 250 }
                ]
            },
            {
                title: 'BREAKFAST DRINKS',
                items: [
                    { id: 'tea', name: 'Tea', price: 50 },
                    { id: 'coffee', name: 'Coffee', price: 100 },
                    { id: 'latte', name: 'Latte', price: 120 },
                    { id: 'iced-latte', name: 'Iced Latte', price: 180 },
                    { id: 'orange-juice', name: 'Fresh Orange Juice', price: 150 },
                    { id: 'strawberry-milkshake', name: 'Strawberry Milkshake', price: 180 },
                    { id: 'banana-milkshake', name: 'Banana Milkshake', price: 180 },
                    { id: 'chocolate-milkshake', name: 'Chocolate Milkshake', price: 180 },
                    { id: 'vanilla-milkshake', name: 'Vanilla Milkshake', price: 180 }
                ]
            },
            {
                title: 'BREAKFAST ADD ONS',
                items: [
                    { id: 'add-egg', name: 'Extra Egg', price: 60 },
                    { id: 'add-cheese', name: 'Extra Cheese', price: 60 },
                    { id: 'add-butter', name: 'Extra Butter', price: 60 },
                    { id: 'add-bacon', name: 'Extra Bacon', price: 100 },
                    { id: 'add-sausage', name: 'Extra English Sausage', price: 100 },
                    { id: 'add-beans', name: 'Extra Baked Beans', price: 60 },
                    { id: 'add-tomato', name: 'Extra Tomato', price: 25 }
                ]
            }
        ]
    },
    'starters': {
        title: 'Starters & Salads',
        icon: 'fas fa-leaf',
        categories: [
            {
                title: 'STARTERS',
                items: [
                    { id: 'hunter-rolls', name: 'Hunter Rolls', price: 190 },
                    { id: 'cheese-rolls', name: 'Cheese Rolls (v) (A Turkish Tradition)', price: 150 },
                    { id: 'garlic-mushrooms', name: 'Garlic Mushrooms (Cheese with Garlic)', price: 250 },
                    { id: 'grilled-halloumi', name: 'Grilled Halloumi (v) (Served with Tomatoes)', price: 250 },
                    { id: 'chicken-strips', name: 'Crispy Chicken Strips (Crispy Chicken Breast served with a Sweet Chilli Sauce)', price: 300 }
                ]
            },
            {
                title: 'SALADS',
                items: [
                    { id: 'chicken-salad', name: 'Chicken Salad', price: 300 },
                    { id: 'tuna-salad', name: 'Tuna Salad', price: 300 },
                    { id: 'shepherd-salad', name: 'Shepherd Salad (v)', price: 230 },
                    { id: 'halloumi-salad', name: 'Halloumi Salad (v)', price: 300 },
                    { id: 'greek-salad', name: 'Greek Salad (v)', price: 300 }
                ]
            }
        ]
    },
    'mains': {
        title: 'Main Courses',
        icon: 'fas fa-utensils',
        categories: [
            {
                title: 'BURGERS',
                note: 'All Burgers served with Chips',
                items: [
                    { id: 'classic-burger', name: 'Classic Burger (6 oz Beef Pattie, Lettuce, Tomato & Onion)', price: 350 },
                    { id: 'cheese-burger', name: 'Classic Cheese Burger (6 oz Beef Pattie, Cheese, Lettuce, Tomato & Onion)', price: 380 },
                    { id: 'jasmine-burger', name: 'Jasmine Burger (6 oz Beef Pattie, Cheese, Bacon, Lettuce, Tomato & Onion)', price: 500 },
                    { id: 'double-cheese-burger', name: 'Double Cheese Burger (Two 6 oz Beef Patties, Cheese, Lettuce, Tomato & Onion)', price: 500 },
                    { id: 'chicken-burger', name: 'Crispy Chicken Burger (Deep Fried Chicken Breast, Lettuce, Tomato & Onion)', price: 350 }
                ],
                addOns: [
                    { id: 'extra-bacon', name: 'Extra Bacon', price: 100 },
                    { id: 'extra-cheese', name: 'Extra Cheese', price: 60 },
                    { id: 'extra-pattie', name: 'Extra 6 oz Beef Pattie', price: 200 }
                ]
            },
            {
                title: 'PIZZA',
                items: [
                    { id: 'vegetarian-pizza', name: 'Vegetarian (v) (Tomato Sauce, Onions, Green & Red Peppers, Mushrooms & Cheese)', price: 350 },
                    { id: 'margarita-pizza', name: 'Margarita (v) (Tomato Sauce & Cheese)', price: 350 },
                    { id: 'bacon-pizza', name: 'Bacon Pizza (Bacon, Tomato Sauce & Cheese)', price: 400 },
                    { id: 'beef-pizza', name: 'Beef Pizza (Tomato Sauce, Minced Beef, Onions, Green & Red Peppers, Mushrooms & Cheese)', price: 400 },
                    { id: 'chicken-pizza', name: 'Chicken Pizza (Tomato Sauce, Chicken, Onions, Green & Red Peppers, Mushrooms & Cheese)', price: 350 }
                ]
            },
            {
                title: 'PASTA',
                items: [
                    { id: 'chicken-pasta', name: 'Chicken Pasta (Chicken, Creamy Mushroom Sauce, Parmesan Cheese)', price: 350 },
                    { id: 'mushroom-pasta', name: 'Mushroom Pasta (Creamy Mushroom Sauce, Garlic & Parmesan Cheese)', price: 350 },
                    { id: 'carbonara', name: 'Carbonara (Creamy Sauce, Bacon & Parmesan Cheese)', price: 400 },
                    { id: 'bolognaise', name: 'Bolognaise (Minced Beef, Tomato Sauce, Basil & Parmesan Cheese)', price: 400 }
                ],
                addOns: [
                    { id: 'add-chicken-pasta', name: 'Add Chicken to Pasta', price: 100 },
                    { id: 'add-beef-pasta', name: 'Add Beef to Pasta', price: 170 }
                ]
            },
            {
                title: 'CHICKEN DISHES',
                note: 'All Chicken & Meat Dishes are served with a choice of: Chips OR Mashed Potato OR Rice AND Salad',
                items: [
                    { id: 'honey-mustard-chicken', name: 'Honey & Mustard Chicken', price: 450, description: 'Chicken Breast in a creamy Honey & Mustard Sauce with Mushrooms' },
                    { id: 'mushroom-chicken', name: 'Mushroom Chicken', price: 450, description: 'Chicken Breast in a Mushroom Creamy Sauce with Red and Green Peppers' },
                    { id: 'chicken-curry', name: 'Chicken Curry', price: 450, description: 'Chicken Breast, Pepper, Garlic, Mushroom in a Creamy Sauce' },
                    { id: 'chicken-schnitzel', name: 'Chicken Schnitzel', price: 450, description: 'Chicken Breast in Breadcrumbs' },
                    { id: 'grilled-chicken-kebab', name: 'Grilled Chicken Kebab', price: 450, description: 'Marinated Pieces of Chicken Breast, Grilled Tomato & Peppers served with Tortilla Wraps' },
                    { id: 'grilled-chicken-breast', name: 'Grilled Chicken Breast', price: 450, description: 'Chicken Breast' },
                    { id: 'chicken-casserole', name: 'Chicken Casserole', price: 450, description: 'Chicken Breast, Tomato, Onion, Pepper, Garlic, Mushroom & Cheese' }
                ]
            },
            {
                title: 'MEAT DISHES',
                items: [
                    { id: 'steak', name: 'Steak (8 oz Fillet)', price: 780 },
                    { id: 'mushroom-steak', name: 'Mushroom Steak (8 oz Fillet with Creamy Mushroom Sauce)', price: 780 },
                    { id: 'beef-kebab', name: 'Beef Kebab', price: 780, description: 'Marinated Pieces of Beef, Grilled Tomato & Peppers served with Tortilla Wraps' },
                    { id: 'grilled-meatballs', name: 'Grilled Meatballs (3 Pan Fried Meatballs, Served with Grilled Tomato & Peppers)', price: 600 },
                    { id: 'mixed-kebab', name: 'Mixed Kebab (Lamb Chop, Grilled Chicken Breast, Grilled Meatballs, Beef Kebab, Grilled Tomato & Peppers served with Turkish Wraps)', price: 1300 },
                    { id: 'lamb-chop', name: 'Lamb Chop (Grilled Lamb Chop, served with Grilled Tomato & Peppers)', price: 800 }
                ]
            },
            {
                title: 'TRADITIONAL TURKISH MEALS',
                items: [
                    { id: 'steak-casserole', name: 'Steak Casserole (Steak, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)', price: 700 },
                    { id: 'kofte-casserole', name: 'Kofte Casserole (Meatball, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)', price: 600 },
                    { id: 'moussaka', name: 'Moussaka (Aubergine, Peppers, Tomato Sauce, Minced Beef & Cheese)', price: 600 }
                ]
            }
        ]
    },
    'light': {
        title: 'Light Meals',
        icon: 'fas fa-sandwich',
        categories: [
            {
                title: 'WRAPS',
                note: 'All Wraps, Sandwiches and Toasties include Chips',
                items: [
                    { id: 'chicken-wrap', name: 'Chicken Wrap', price: 300 },
                    { id: 'beef-wrap', name: 'Beef Wrap', price: 400 },
                    { id: 'tuna-wrap', name: 'Tuna Mayonnaise Wrap', price: 300 },
                    { id: 'cheese-wrap', name: 'Cheese Wrap (v)', price: 250 },
                    { id: 'vegetable-wrap', name: 'Vegetable Wrap (v)', price: 250 },
                    { id: 'halloumi-wrap', name: 'Halloumi Wrap (v)', price: 300 }
                ]
            },
            {
                title: 'TOASTIES',
                items: [
                    { id: 'cheese-toastie', name: 'Cheese Toastie (v)', price: 300 },
                    { id: 'cheese-tomato-toastie', name: 'Cheese & Tomato Toastie (v)', price: 300 },
                    { id: 'cheese-onion-toastie', name: 'Cheese & Onion Toastie (v)', price: 300 },
                    { id: 'cheese-salami-toastie', name: 'Cheese & Salami Toastie', price: 300 }
                ]
            },
            {
                title: 'SANDWICHES',
                items: [
                    { id: 'tuna-sandwich', name: 'Tuna Mayonnaise Sandwich', price: 300 },
                    { id: 'bacon-sandwich', name: 'Bacon Sandwich', price: 400 },
                    { id: 'jasmine-sandwich', name: 'Jasmine Sandwich', price: 300 }
                ]
            }
        ]
    },
    'beverages': {
        title: 'Beverages',
        icon: 'fas fa-cocktail',
        categories: [
            {
                title: 'SOFT DRINKS',
                items: [
                    { id: 'coke', name: 'Coke', price: 100 },
                    { id: 'coke-zero', name: 'Coke Zero', price: 100 },
                    { id: 'diet-coke', name: 'Diet Coke', price: 100 },
                    { id: 'fanta', name: 'Fanta', price: 100 },
                    { id: 'sprite', name: 'Sprite', price: 100 },
                    { id: 'cherry-juice', name: 'Cherry Juice', price: 100 },
                    { id: 'peach-juice', name: 'Peach Juice', price: 100 },
                    { id: 'apple-juice', name: 'Apple Juice', price: 100 },
                    { id: 'iced-tea-peach', name: 'Iced Tea (Peach)', price: 100 },
                    { id: 'iced-tea-lemon', name: 'Iced Tea (Lemon)', price: 100 },
                    { id: 'fresh-orange-juice', name: 'Fresh Orange Juice', price: 150 },
                    { id: 'strawberry-milkshake-bev', name: 'Strawberry Milkshake', price: 180 },
                    { id: 'banana-milkshake-bev', name: 'Banana Milkshake', price: 180 },
                    { id: 'chocolate-milkshake-bev', name: 'Chocolate Milkshake', price: 180 },
                    { id: 'vanilla-milkshake-bev', name: 'Vanilla Milkshake', price: 180 },
                    { id: 'soda-water', name: 'Soda Water', price: 60 },
                    { id: 'small-water', name: 'Small Water', price: 40 }
                ]
            },
            {
                title: 'TEA & COFFEE',
                items: [
                    { id: 'turkish-tea', name: 'Çay (Turkish Tea)', price: 50 },
                    { id: 'english-tea', name: 'English Tea', price: 60 },
                    { id: 'white-coffee', name: 'White Coffee', price: 100 },
                    { id: 'black-coffee', name: 'Black Coffee', price: 100 },
                    { id: 'turkish-coffee', name: 'Turkish Coffee', price: 100 },
                    { id: 'latte-bev', name: 'Latte', price: 120 },
                    { id: 'iced-latte-bev', name: 'Iced Latte', price: 180 },
                    { id: 'iced-coffee', name: 'Iced Coffee', price: 180 }
                ]
            },
            {
                title: 'ALCOHOLIC DRINKS',
                items: [
                    { id: 'efes', name: 'Efes Beer', price: 130 },
                    { id: 'efes-malt', name: 'Efes Malt', price: 130 },
                    { id: 'house-white', name: 'Glass of House White Wine', price: 100 },
                    { id: 'house-red', name: 'Glass of House Red Wine', price: 100 },
                    { id: 'local-gin', name: 'Local Gin (And Mixer)', price: 230 },
                    { id: 'local-vodka', name: 'Local Vodka (And Mixer)', price: 230 },
                    { id: 'imported-gin', name: 'Imported Gin (And Mixer)', price: 280 },
                    { id: 'imported-vodka', name: 'Imported Vodka (And Mixer)', price: 280 },
                    { id: 'whiskey', name: 'Whiskey (And Mixer)', price: 250 }
                ]
            }
        ]
    },
    'kids': {
        title: 'Kids & Desserts',
        icon: 'fas fa-child',
        categories: [
            {
                title: 'KIDS MENU',
                items: [
                    { id: 'mini-burger', name: 'Mini Burger & Chips', price: 250 },
                    { id: 'margarita-pizza-kids', name: 'Margarita Pizza (v)', price: 250 },
                    { id: 'chicken-nuggets', name: 'Homemade Chicken Nuggets & Chips', price: 300 },
                    { id: 'pasta-bolognaise', name: 'Pasta Bolognaise', price: 250 },
                    { id: 'sausage-chips-beans', name: 'Sausage, Chips & Beans', price: 250 }
                ]
            },
            {
                title: 'DESSERTS',
                items: [
                    { id: 'cheesecake', name: 'Cheesecake (Lemon or Raspberry)', price: 180 },
                    { id: 'ice-cream', name: 'Ice Cream', price: 180 },
                    { id: 'tiramisu', name: 'Tiramisu', price: 180 },
                    { id: 'kunefe', name: 'Traditional Turkish Kunefe', price: 180 },
                    { id: 'pancake-dessert', name: 'Pancake', price: 250 }
                ]
            }
        ]
    }
};