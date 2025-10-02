// Menu Data - Complete Restaurant Menu
const menuData = {
    "breakfast": {
        title: "BREAKFAST",
        subtitle: "Served 9 am - 1 pm Daily",
        items: [
            {
                name: "Traditional Village Breakfast",
                price: 350,
                description: "Olives, Cheese, Jam, Honey, Dried Apricots, Salami, Tomato, Cucumber, Cheese Roll, Fried or Scrambled Egg, Fresh Turkish Bread"
            },
            {
                name: "Turkish Breakfast Plate",
                price: 300,
                description: "Olives, Cheese, Jam, Honey, Salami, Tomato, Cucumber, Cheese Roll, Fried or Scrambled Egg, Fresh Turkish Bread"
            },
            {
                name: "Full English Breakfast",
                price: 320,
                description: "Back Bacon, English Sausage, Mushrooms, Tomato, Toasted Bread, Egg (Fried or Scrambled), Baked Beans"
            },
            {
                name: "Hangover Breakfast",
                price: 400,
                description: "2 Back Bacon, 2 English Sausage, Mushrooms, Tomato, Toasted Bread, 2 Eggs (Fried or Scrambled), Baked Beans & Chips"
            },
            {
                name: "Menmen (v)",
                price: 250,
                description: "Egg, Tomato, Peppers, Onions & Fresh Turkish Bread"
            },
            { name: "Egg & Chips (v) (Fried)", price: 200 },
            { name: "Egg & Chips (v) (Scrambled)", price: 200 },
            { name: "Egg on Toast (v) (Fried)", price: 180 },
            { name: "Egg on Toast (v) (Scrambled)", price: 180 }
        ]
    },
    "omelettes": {
        title: "OMELETTES",
        items: [
            { name: "Cheese Omelette (v)", price: 250 },
            { name: "Mushroom Omelette (v)", price: 250 },
            { name: "Mixed Omelette (Tomato, Salami, Cheese)", price: 250 }
        ]
    },
    "breakfastAddOns": {
        title: "BREAKFAST ADD ONS",
        items: [
            { name: "Egg", price: 60 },
            { name: "Cheese", price: 60 },
            { name: "Butter", price: 60 },
            { name: "Bacon", price: 100 },
            { name: "English Sausage", price: 100 },
            { name: "Baked Beans", price: 60 },
            { name: "Tomato", price: 25 }
        ]
    },
    "toast": {
        title: "TOAST",
        items: [
            { name: "Butter (v)", price: 110 },
            { name: "Butter & Jam (v)", price: 120 },
            { name: "Beans (v)", price: 150 },
            { name: "Cheese (v)", price: 160 }
        ]
    },
    "pancakes": {
        title: "PANCAKES",
        items: [
            { name: "Sugar & Lemon", price: 250 },
            { name: "Chocolate", price: 250 },
            { name: "Honey & Lemon", price: 250 },
            { name: "Cheese", price: 250 }
        ]
    },
    "drinks": {
        title: "DRINKS (Breakfast Section)",
        items: [
            { name: "Tea", price: 50 },
            { name: "Coffee", price: 100 },
            { name: "Latte", price: 120 },
            { name: "Iced Latte", price: 180 },
            { name: "Fresh Orange Juice", price: 150 },
            { name: "Strawberry Milkshake", price: 180 },
            { name: "Banana Milkshake", price: 180 },
            { name: "Chocolate Milkshake", price: 180 },
            { name: "Vanilla Milkshake", price: 180 }
        ]
    },
    "beverages": {
        title: "BEVERAGES",
        subcategories: {
            "softDrinks": {
                title: "SOFT DRINKS",
                items: [
                    { name: "Coke", price: 100 },
                    { name: "Coke Zero", price: 100 },
                    { name: "Diet Coke", price: 100 },
                    { name: "Fanta", price: 100 },
                    { name: "Sprite", price: 100 },
                    { name: "Cherry Juice", price: 100 },
                    { name: "Peach Juice", price: 100 },
                    { name: "Apple Juice", price: 100 },
                    { name: "Iced Tea (Peach)", price: 100 },
                    { name: "Iced Tea (Lemon)", price: 100 },
                    { name: "Fresh Orange Juice", price: 150 },
                    { name: "Strawberry Milkshake", price: 180 },
                    { name: "Banana Milkshake", price: 180 },
                    { name: "Chocolate Milkshake", price: 180 },
                    { name: "Vanilla Milkshake", price: 180 },
                    { name: "Soda Water", price: 60 },
                    { name: "Small Water", price: 40 }
                ]
            },
            "teaCoffee": {
                title: "TEA & COFFEE",
                items: [
                    { name: "Çay (Turkish Tea)", price: 50 },
                    { name: "English Tea", price: 60 },
                    { name: "White Coffee", price: 100 },
                    { name: "Black Coffee", price: 100 },
                    { name: "Turkish Coffee", price: 100 },
                    { name: "Latte", price: 120 },
                    { name: "Iced Latte", price: 180 },
                    { name: "Iced Coffee", price: 180 }
                ]
            },
            "beer": {
                title: "BEER",
                items: [
                    { name: "Efes", price: 130 },
                    { name: "Efes Malt", price: 130 }
                ]
            },
            "wine": {
                title: "WINE",
                items: [
                    { name: "Glass of House White", price: 100 },
                    { name: "Glass of House Red", price: 100 }
                ]
            },
            "spirits": {
                title: "SPIRITS",
                items: [
                    { name: "Local Gin (And Mixer)", price: 230 },
                    { name: "Local Vodka (And Mixer)", price: 230 },
                    { name: "Imported Gin (And Mixer)", price: 280 },
                    { name: "Imported Vodka (And Mixer)", price: 280 },
                    { name: "Whiskey (And Mixer)", price: 250 }
                ]
            }
        }
    },
    "chicken": {
        title: "CHICKEN",
        items: [
            {
                name: "Honey & Mustard Chicken",
                price: 450,
                description: "Chicken Breast in a creamy Honey & Mustard Sauce with Mushrooms"
            },
            {
                name: "Mushroom Chicken",
                price: 450,
                description: "Chicken Breast in a Mushroom Creamy Sauce with Red and Green Peppers"
            },
            {
                name: "Chicken Curry",
                price: 450,
                description: "Chicken Breast, Pepper, Garlic, Mushroom in a Creamy Sauce"
            },
            {
                name: "Chicken Schnitzel",
                price: 450,
                description: "Chicken Breast in Breadcrumbs"
            },
            {
                name: "Grilled Chicken Kebab",
                price: 450,
                description: "Marinated Pieces of Chicken Breast, Grilled Tomato & Peppers served with Tortilla Wraps"
            },
            {
                name: "Grilled Chicken Breast",
                price: 450,
                description: "Chicken Breast"
            },
            {
                name: "Chicken Casserole",
                price: 450,
                description: "Chicken Breast, Tomato, Onion, Pepper, Garlic, Mushroom & Cheese"
            }
        ]
    },
    "meat": {
        title: "MEAT",
        items: [
            {
                name: "Steak (8 oz Fillet)",
                price: 780
            },
            {
                name: "Mushroom Steak (8 oz Fillet with Creamy Mushroom Sauce)",
                price: 780
            },
            {
                name: "Beef Kebab",
                price: 780,
                description: "Marinated Pieces of Beef, Grilled Tomato & Peppers served with Tortilla Wraps"
            },
            {
                name: "Grilled Meatballs (3 Pan Fried Meatballs, Served with Grilled Tomato & Peppers)",
                price: 600
            },
            {
                name: "Mixed Kebab (Lamb Chop, Grilled Chicken Breast, Grilled Meatballs, Beef Kebab, Grilled Tomato & Peppers served with Turkish Wraps)",
                price: 1300
            },
            {
                name: "Lamb Chop (Grilled Lamb Chop, served with Grilled Tomato & Peppers)",
                price: 800
            }
        ]
    },
    "traditionalTurkish": {
        title: "TRADITIONAL TURKISH MEAL",
        items: [
            {
                name: "Steak Casserole (Steak, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)",
                price: 700
            },
            {
                name: "Kofte Casserole (Meatball, Tomato, Onion, Peppers, Garlic, Mushroom & Cheese)",
                price: 600
            },
            {
                name: "Moussaka (Aubergine, Peppers, Tomato Sauce, Minced Beef & Cheese)",
                price: 600
            }
        ],
        note: "All Chicken & Meat Dishes are served with a choice of: Chips OR Mashed Potato OR Rice AND Salad",
        extras: [
            { name: "Egg", price: 60 },
            { name: "Bacon", price: 100 },
            { name: "English Sausage", price: 100 },
            { name: "Baked Beans", price: 60 },
            { name: "Tomato", price: 25 }
        ]
    },
    "kids": {
        title: "KIDS",
        items: [
            { name: "Mini Burger & Chips", price: 250 },
            { name: "Margarita Pizza (v)", price: 250 },
            { name: "Homemade Chicken Nuggets & Chips", price: 300 },
            { name: "Pasta Bolognaise", price: 250 },
            { name: "Sausage, Chips & Beans", price: 250 }
        ]
    },
    "desserts": {
        title: "DESSERTS",
        items: [
            { name: "Cheesecake (Lemon or Raspberry)", price: 180 },
            { name: "Ice Cream", price: 180 },
            { name: "Tiramisu", price: 180 },
            { name: "Traditional Turkish Kunefe", price: 180 },
            { name: "Pancake", price: 250 }
        ]
    },
    "starters": {
        title: "STARTERS",
        items: [
            { name: "Hunter Rolls", price: 190 },
            { name: "Cheese Rolls (v) (A Turkish Tradition)", price: 150 },
            { name: "Garlic Mushrooms (Cheese with Garlic)", price: 250 },
            { name: "Grilled Halloumi (v) (Served with Tomatoes)", price: 250 },
            { name: "Crispy Chicken Strips (Crispy Chicken Breast served with a Sweet Chilli Sauce)", price: 300 }
        ]
    },
    "burgers": {
        title: "BURGERS",
        items: [
            { name: "Classic Burger (6 oz Beef Pattie, Lettuce, Tomato & Onion)", price: 350 },
            { name: "Classic Cheese Burger (6 oz Beef Pattie, Cheese, Lettuce, Tomato & Onion)", price: 380 },
            { name: "Jasmine Burger (6 oz Beef Pattie, Cheese, Bacon, Lettuce, Tomato & Onion)", price: 500 },
            { name: "Double Cheese Burger (Two 6 oz Beef Patties, Cheese, Lettuce, Tomato & Onion)", price: 500 },
            { name: "Crispy Chicken Burger (Deep Fried Chicken Breast, Lettuce, Tomato & Onion)", price: 350 }
        ],
        note: "All Burgers served with Chips",
        addOns: [
            { name: "Extra Bacon", price: 100 },
            { name: "Extra Cheese", price: 60 },
            { name: "Extra 6 oz Beef Pattie", price: 200 }
        ]
    },
    "pizza": {
        title: "PIZZA",
        items: [
            { name: "Vegetarian (v) (Tomato Sauce, Onions, Green & Red Peppers, Mushrooms & Cheese)", price: 350 },
            { name: "Margarita (v) (Tomato Sauce & Cheese)", price: 350 },
            { name: "Beacon (Beacon, Tomato Sauce & Cheese)", price: 400 },
            { name: "Beef (Tomato Sauce, Minced Beef, Onions, Green & Red Peppers, Mushrooms & Cheese)", price: 400 },
            { name: "Chicken (Tomato Sauce, Chicken, Onions, Green & Red Peppers, Mushrooms & Cheese)", price: 350 }
        ]
    },
    "pasta": {
        title: "PASTA",
        items: [
            { name: "Chicken (Chicken, Creamy Mushroom Sauce, Parmesan Cheese)", price: 350 },
            { name: "Mushroom (Creamy Mushroom Sauce, Garlic & Parmesan Cheese)", price: 350 },
            { name: "Carbonara (Creamy Sauce, Bacon & Parmesan Cheese)", price: 400 },
            { name: "Bolognaise (Minced Beef, Tomato Sauce, Basil & Parmesan Cheese)", price: 400 }
        ],
        addOns: [
            { name: "Add Chicken to Pasta", price: 100 },
            { name: "Add Beef to Pasta", price: 170 }
        ]
    },
    "wraps": {
        title: "WRAPS, TOASTIES, SANDWICHES, SALADS",
        subcategories: {
            "wraps": {
                title: "WRAPS",
                note: "All Wraps, Sandwiches and Toasties include Chips",
                items: [
                    { name: "Chicken Wrap", price: 300 },
                    { name: "Beef Wrap", price: 400 },
                    { name: "Tuna Mayonnaise Wrap", price: 300 },
                    { name: "Cheese Wrap (v)", price: 250 },
                    { name: "Vegetable Wrap (v)", price: 250 },
                    { name: "Halloumi Wrap (v)", price: 300 }
                ]
            },
            "toasties": {
                title: "TOASTIES",
                items: [
                    { name: "Cheese Toastie (v)", price: 300 },
                    { name: "Cheese & Tomato Toastie (v)", price: 300 },
                    { name: "Cheese & Onion Toastie (v)", price: 300 },
                    { name: "Cheese & Salami Toastie", price: 300 }
                ]
            },
            "sandwiches": {
                title: "SANDWICHES",
                items: [
                    { name: "Tuna Mayonnaise Sandwich", price: 300 },
                    { name: "Bacon Sandwich", price: 400 },
                    { name: "Jasmine Sandwich", price: 300 }
                ]
            },
            "salads": {
                title: "SALADS",
                items: [
                    { name: "Chicken Salad", price: 300 },
                    { name: "Tuna Salad", price: 300 },
                    { name: "Shepherd Salad (v)", price: 230 },
                    { name: "Halloumi Salad (v)", price: 300 },
                    { name: "Greek Salad (v)", price: 300 }
                ]
            }
        },
        note: "Airport Takeaways Available",
        extras: [
            { name: "Chips", price: 120 },
            { name: "Salad", price: 40 },
            { name: "Cucumber", price: 20 },
            { name: "Tomato", price: 20 },
            { name: "Onion", price: 20 }
        ]
    }
};

// Function to generate menu HTML from data
function generateMenuHTML() {
    // Define tab groups to match the menu structure
    const tabGroups = {
        'breakfast': {
            title: 'Breakfast',
            icon: 'fas fa-sun',
            categories: ['breakfast', 'omelettes', 'breakfastAddOns', 'toast', 'pancakes', 'drinks']
        },
        'mains': {
            title: 'Main Courses',
            icon: 'fas fa-utensils',
            categories: ['starters', 'burgers', 'pizza', 'pasta', 'chicken', 'meat', 'traditionalTurkish']
        },
        'light': {
            title: 'Light Meals',
            icon: 'fas fa-leaf',
            categories: ['wraps']
        },
        'beverages': {
            title: 'Beverages',
            icon: 'fas fa-cocktail',
            categories: ['beverages']
        },
        'kids': {
            title: 'Kids & Desserts',
            icon: 'fas fa-child',
            categories: ['kids', 'desserts']
        }
    };

    let tabsHTML = '';
    let contentHTML = '';

    // Generate tabs
    Object.keys(tabGroups).forEach((tabKey, index) => {
        const tab = tabGroups[tabKey];
        const isActive = index === 0 ? 'active' : '';

        tabsHTML += `<div class="menu-tab ${isActive}" onclick="switchMenuTab('${tabKey}')">`;
        tabsHTML += `<i class="${tab.icon}"></i> ${tab.title}`;
        tabsHTML += `</div>`;

        // Generate content for this tab
        contentHTML += `<div class="menu-tab-content ${isActive}" id="tab-${tabKey}">`;
        contentHTML += `<div class="menu-categories">`;

        tab.categories.forEach(categoryKey => {
            const category = menuData[categoryKey];
            if (!category) return;

            contentHTML += `<div class="menu-category">`;
            contentHTML += `<h4><i class="fas fa-utensils"></i> ${category.title}</h4>`;

            if (category.subtitle) {
                contentHTML += `<p class="category-subtitle">${category.subtitle}</p>`;
            }

            // Main items
            if (category.items) {
                contentHTML += `<div class="selectable-menu-items">`;
                category.items.forEach(item => {
                    contentHTML += `<div class="selectable-menu-item" data-name="${item.name}" data-price="${item.price}">`;
                    contentHTML += `<div class="item-info">`;
                    contentHTML += `<span class="item-name">${item.name}</span>`;
                    if (item.description) {
                        contentHTML += `<span class="item-description">${item.description}</span>`;
                    }
                    contentHTML += `<span class="item-price">₺${item.price}</span>`;
                    contentHTML += `</div>`;
                    contentHTML += `<div class="item-controls">`;
                    contentHTML += `<button class="quantity-btn minus" onclick="updateQuantity(this, -1)">-</button>`;
                    contentHTML += `<span class="quantity">0</span>`;
                    contentHTML += `<button class="quantity-btn plus" onclick="updateQuantity(this, 1)">+</button>`;
                    contentHTML += `</div>`;
                    contentHTML += `</div>`;
                });
                contentHTML += `</div>`;
            }


            // Notes and extras
            if (category.note) {
                contentHTML += `<p class="category-note">${category.note}</p>`;
            }

            if (category.extras) {
                contentHTML += `<div class="extras">`;
                contentHTML += `<h5>Extras:</h5>`;
                contentHTML += `<div class="selectable-menu-items">`;
                category.extras.forEach(extra => {
                    contentHTML += `<div class="selectable-menu-item" data-name="${extra.name}" data-price="${extra.price}">`;
                    contentHTML += `<div class="item-info">`;
                    contentHTML += `<span class="item-name">${extra.name}</span>`;
                    contentHTML += `<span class="item-price">₺${extra.price}</span>`;
                    contentHTML += `</div>`;
                    contentHTML += `<div class="item-controls">`;
                    contentHTML += `<button class="quantity-btn minus" onclick="updateQuantity(this, -1)">-</button>`;
                    contentHTML += `<span class="quantity">0</span>`;
                    contentHTML += `<button class="quantity-btn plus" onclick="updateQuantity(this, 1)">+</button>`;
                    contentHTML += `</div>`;
                    contentHTML += `</div>`;
                });
                contentHTML += `</div>`;
                contentHTML += `</div>`;
            }

            if (category.addOns) {
                contentHTML += `<div class="add-ons">`;
                contentHTML += `<h5>Add Ons:</h5>`;
                contentHTML += `<div class="selectable-menu-items">`;
                category.addOns.forEach(addOn => {
                    contentHTML += `<div class="selectable-menu-item" data-name="${addOn.name}" data-price="${addOn.price}">`;
                    contentHTML += `<div class="item-info">`;
                    contentHTML += `<span class="item-name">${addOn.name}</span>`;
                    contentHTML += `<span class="item-price">₺${addOn.price}</span>`;
                    contentHTML += `</div>`;
                    contentHTML += `<div class="item-controls">`;
                    contentHTML += `<button class="quantity-btn minus" onclick="updateQuantity(this, -1)">-</button>`;
                    contentHTML += `<span class="quantity">0</span>`;
                    contentHTML += `<button class="quantity-btn plus" onclick="updateQuantity(this, 1)">+</button>`;
                    contentHTML += `</div>`;
                    contentHTML += `</div>`;
                });
                contentHTML += `</div>`;
                contentHTML += `</div>`;
            }

            contentHTML += `</div>`;
        });

        contentHTML += `</div>`;
        contentHTML += `</div>`;
    });

    return { tabs: tabsHTML, content: contentHTML };
}
