export interface WishlistItem {
    name: string;
    identifier: string;
    description?: string;
    shortDescription?: string;
    image?: string;
    isYoinked: boolean;
}

export interface Wishlist {
    name: string;
    identifier: string;
    items: WishlistItem[];
}