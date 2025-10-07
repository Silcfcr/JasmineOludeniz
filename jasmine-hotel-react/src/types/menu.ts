export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description?: string;
}

export interface Subcategory {
    title: string;
    items: MenuItem[];
}

export interface Category {
    title: string;
    subtitle?: string;
    note?: string;
    items?: MenuItem[];
    subcategories?: Subcategory[];
    addOns?: MenuItem[];
}

export interface TabData {
    title: string;
    icon: string;
    categories: Category[];
}

export interface MenuData {
    [key: string]: TabData;
}
