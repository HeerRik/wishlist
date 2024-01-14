export interface WishlistItem {
    id: number;
    code: string;
    name: string;
    description?: string;
    shortDescription?: string;
    image: string;
    isYoinked: boolean;
}

export interface Wishlist {
    id: number;
    code: string;
    name: string;
    items?: WishlistItem[];
}