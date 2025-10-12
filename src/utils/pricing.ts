// Dynamic Pricing System
export const pricingData = {
    "1 BR (all types)": {
        low: 30,    // Jan–Apr, Oct–Dec
        shoulder: 35, // May, Sep
        high: 40,   // Jun
        peak: 60    // Jul–Aug
    },
    "2 BR (all types)": {
        low: 30,    // Jan–Apr, Oct–Dec
        shoulder: 45, // May, Sep
        high: 45,   // Jun
        peak: 60    // Jul–Aug
    },
    "3 BR top floor": {
        low: 40,    // Jan–Apr, Oct–Dec
        shoulder: 50, // May, Sep
        high: 50,   // Jun
        peak: 80    // Jul–Aug
    },
    "Studio": {
        low: 25,    // Jan–Apr, Oct–Dec
        shoulder: 30, // May, Sep
        high: 30,   // Jun
        peak: 40    // Jul–Aug
    }
};

// Get current season based on month
export function getCurrentSeason(): string {
    const month = new Date().getMonth() + 1; // 1-12

    if (month >= 7 && month <= 8) {
        return 'peak';     // Jul–Aug
    } else if (month === 6) {
        return 'high';     // Jun
    } else if (month === 5 || month === 9) {
        return 'shoulder'; // May, Sep
    } else {
        return 'low';      // Jan–Apr, Oct–Dec
    }
}

// Get season based on specific date
export function getSeasonFromDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // 1-12

    if (month >= 7 && month <= 8) {
        return 'peak';     // Jul–Aug
    } else if (month === 6) {
        return 'high';     // Jun
    } else if (month === 5 || month === 9) {
        return 'shoulder'; // May, Sep
    } else {
        return 'low';      // Jan–Apr, Oct–Dec
    }
}

// Get price for room type and season
export function getRoomPrice(roomType: string, season: string | null = null): number {
    if (!season) {
        season = getCurrentSeason();
    }

    const roomCategory = getRoomCategory(roomType);
    return pricingData[roomCategory as keyof typeof pricingData][season as keyof typeof pricingData["1 BR (all types)"]];
}

// Map room types to pricing categories
export function getRoomCategory(roomType: string): string {
    if (roomType.includes('1 Bedroom') || roomType.includes('1 BR')) {
        return "1 BR (all types)";
    } else if (roomType.includes('2 Bedroom') || roomType.includes('2 BR')) {
        return "2 BR (all types)";
    } else if (roomType.includes('3 Bed') || roomType.includes('3 BR')) {
        return "3 BR top floor";
    } else if (roomType.includes('Studio')) {
        return "Studio";
    }
    return "1 BR (all types)"; // Default fallback
}
