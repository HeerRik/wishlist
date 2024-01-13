import { NextResponse } from 'next/server';

import {
    INSERT_ITEM
} from '@/data/queries/item/create';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const newItem = {
            name: searchParams.get('name'),
            identifier: searchParams.get('identifier'),
            image: searchParams.get('image') || '',
            shortDescription: searchParams.get('short_description') || '',
            description: searchParams.get('description') || '',
        };

        if (newItem.name && newItem.identifier) {
            const result = await INSERT_ITEM(newItem);

            return NextResponse.json({ result }, { status: 200 });
        }

        return NextResponse.json({ 'error': 'invalid input' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}