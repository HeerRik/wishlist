import { NextResponse } from 'next/server'

import {
    ADD_TO_WISHLIST
} from '@/data/queries/item/create'

export async function POST(request: Request) {
    try {
        const body = await request.json() as {
            itemId: number;
            wishlistId: number;
        };

        if (body.wishlistId > 0 && body.itemId > 0) {
            const result = await ADD_TO_WISHLIST(body);

            return NextResponse.json({ success: result.rowCount === 1 }, { status: 200 });
        }

        return NextResponse.json({ 'error': 'invalid input' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}