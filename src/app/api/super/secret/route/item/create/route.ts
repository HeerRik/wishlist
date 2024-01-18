import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

import type { SQLWishlistItem } from '@/types/sql/wishlist'

import {
    INSERT_ITEM,
    ADD_TO_WISHLIST,
} from '@/data/queries/item/create'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const newItem: Omit<SQLWishlistItem, 'id' | 'isYoinked'> = {
            name: searchParams.get('name') || '',
            code: searchParams.get('code') || '',
            image: searchParams.get('image') || '',
            short_description: searchParams.get('short_description') || '',
            description: searchParams.get('description') || '',
        };

        if (newItem.name.length && newItem.code.length) {
            const result = await INSERT_ITEM(newItem);
            revalidatePath('/');

            return NextResponse.json({ result }, { status: 200 });
        }

        return NextResponse.json({ 'error': 'invalid input' }, { status: 422 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json() as Omit<SQLWishlistItem, 'id' | 'is_yoinked'> & { pass: string; }

        if (body.pass !== process.env.ADMIN_PASS) {
            return NextResponse.json({ error: true }, { status: 401 })
        }

        if (body.name.length && body.code.length) {
            const result = await INSERT_ITEM(body);
            if (result.rowCount === 1) {
                const addToWishlistResult = await ADD_TO_WISHLIST({
                    wishlistId: 1,
                    itemId: result.rows[0].id,
                });

                return NextResponse.json({ success: addToWishlistResult.rowCount === 1 }, { status: 200 });
            }

            return NextResponse.json({ error: true }, { status: 500 });
        }
        return NextResponse.json({ error: true }, { status: 422 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: true }, { status: 500 });
    }
}