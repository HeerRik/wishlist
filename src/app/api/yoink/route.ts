import { NextResponse } from 'next/server';

import {
    ADD_TO_WISHLIST
} from '@/data/queries/item/create';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log(body);


        const { searchParams } = new URL(request.url);
        const newWishlistItem = {
            wishlistId: searchParams.get('wishlist'),
            itemId: searchParams.get('item'),
        };

        if (newWishlistItem.wishlistId && newWishlistItem.itemId) {
            const result = await ADD_TO_WISHLIST(newWishlistItem);

            return NextResponse.json({ result }, { status: 200 });
        }

        return NextResponse.json({ 'error': 'invalid input' }, { status: 422 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}