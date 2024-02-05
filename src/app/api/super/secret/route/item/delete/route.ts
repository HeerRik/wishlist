import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import type { WishlistItem } from '@/types/wishlist';

import {
    DELETE_ITEM,
} from '@/data/queries/item/delete'

export type DeleteItemInput = {
    itemId: WishlistItem['id'];
    pass: string;
}

export async function POST(request: Request) {
    try {
        const body = await request.json() as DeleteItemInput;

        if (body.pass !== process.env.ADMIN_PASS) {
            return NextResponse.json({ error: true }, { status: 401 })
        }

        if (body.itemId > 0) {
            const { itemId } = body;

            const res = await DELETE_ITEM({ itemId });

            if (res.some(resPart => resPart.rowCount >= 1)) {
                revalidatePath('/');

                return NextResponse.json({ success: true }, { status: 200 });
            }

            return NextResponse.json({ error: true }, { status: 500 });
        }
        return NextResponse.json({ error: true }, { status: 422 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: true }, { status: 500 });
    }
}