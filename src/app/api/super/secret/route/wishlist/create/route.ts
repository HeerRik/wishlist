import { NextResponse } from 'next/server';

import {
    INSERT_WISHLIST
} from '@/data/queries/wishlist/create';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const newWishlist = {
            name: searchParams.get('name'),
            identifier: searchParams.get('identifier')
        };

        if (newWishlist.name && newWishlist.identifier) {
            const result = await INSERT_WISHLIST(newWishlist);

            return NextResponse.json({ result }, { status: 200 });
        }

        return NextResponse.json({ 'error': 'invalid input' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}