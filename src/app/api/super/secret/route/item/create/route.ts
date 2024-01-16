import { NextResponse } from 'next/server'
import { WishlistItem } from '@/types/wishlist'

import {
    INSERT_ITEM,
} from '@/data/queries/item/create'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const newItem: Omit<WishlistItem, 'id' | 'isYoinked'> = {
            name: searchParams.get('name') || '',
            code: searchParams.get('code') || '',
            image: searchParams.get('image') || '',
            shortDescription: searchParams.get('short_description') || '',
            description: searchParams.get('description') || '',
        };

        if (newItem.name.length && newItem.code.length) {
            const result = await INSERT_ITEM(newItem);

            return NextResponse.json({ result }, { status: 200 });
        }

        return NextResponse.json({ 'error': 'invalid input' }, { status: 422 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json() as Omit<WishlistItem, 'id' | 'isYoinked'>
        if (body.name.length && body.code.length) {
            const result = await INSERT_ITEM(body);

            return NextResponse.json({ success: result.rowCount === 1 }, { status: 200 });

        }
        return NextResponse.json({ error: true }, { status: 422 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: true }, { status: 500 });
    }
}