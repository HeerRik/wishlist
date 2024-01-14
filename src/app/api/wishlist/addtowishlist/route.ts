import { NextResponse } from 'next/server';

import {
    ADD_TO_WISHLIST
} from '@/data/queries/item/create';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const newWishlistItem = {
            wishlistId: (searchParams.get('wishlist') || 0) as number,
            itemId: (searchParams.get('item') || 0) as number,
        };

        if (newWishlistItem.wishlistId > 0 && newWishlistItem.itemId > 0) {
            const result = await ADD_TO_WISHLIST(newWishlistItem);

            return NextResponse.json({ result }, { status: 200 });
        }

        return NextResponse.json({ 'error': 'invalid input' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}