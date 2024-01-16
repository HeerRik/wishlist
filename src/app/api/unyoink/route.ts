import { NextResponse } from 'next/server'

import { UNYOINK } from '@/data/queries/item/delete';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const unyoinkParams = {
            yoinker: body.get('yoinker') || '',
            itemId: body.get('item') || 0,
        }

        if (unyoinkParams.yoinker.length && unyoinkParams.itemId > 0) {
            const result = await UNYOINK(unyoinkParams);

            console.log(result);
            return NextResponse.json({ success: result.rowCount === 1 }, { status: 200 });
        }

        return NextResponse.json({ 'error': true }, { status: 422 });
    } catch (error) {
        return NextResponse.json({ 'error': true }, { status: 500 });
    }
}