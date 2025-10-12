// WhatsApp contact information
export const WHATSAPP_PHONE_NUMBER = '901234567890';

// Helper function to create WhatsApp URL
export const createWhatsAppUrl = (message: string): string => {
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};
