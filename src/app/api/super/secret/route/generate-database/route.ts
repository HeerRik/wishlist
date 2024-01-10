import { NextResponse } from 'next/server';

import {
    CREATE_TABLE_YOINKS,
    CREATE_TABLE_ITEMS,
    CREATE_TABLE_WISHLISTS,
    CREATE_TABLE_WISHLIST_ITEMS,
} from '@/data/queries/generateDatabase';

export async function GET(request: Request) {
    try {
        const result = await Promise.all([
            CREATE_TABLE_WISHLISTS(),
            CREATE_TABLE_ITEMS(),
            CREATE_TABLE_YOINKS(),
            CREATE_TABLE_WISHLIST_ITEMS(),
        ]);
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}