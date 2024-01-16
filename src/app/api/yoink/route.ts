import { NextResponse } from 'next/server'

import {
    YOINK_ITEM
} from '@/data/queries/item/create'

export async function POST(request: Request) {
    try {
        const body = await request.json() as {
            itemId: number;
            yoinker: string;
        };

        if (body.yoinker.length && body.itemId > 0) {
            const result = await YOINK_ITEM(body);

            return NextResponse.json({ success: result.rowCount === 1 }, { status: 200 });
        }

        return NextResponse.json({ 'error': true }, { status: 422 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ 'error': true }, { status: 500 });
    }
}