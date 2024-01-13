export interface SQLWishlistItem {
    readonly id: number;
    readonly name: string;
    readonly code: string;
    readonly description?: string;
    readonly short_description?: string;
    readonly image?: string;
    readonly is_yoinked?: boolean | null | undefined;
}

export interface SQLWishlist {
    readonly id: number;
    readonly code: string;
    readonly name: string;
    readonly items?: SQLWishlistItem[];
}