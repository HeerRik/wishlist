import type { QueryResult } from '@vercel/postgres'
import { sql } from '@vercel/postgres'

export const UNYOINK = ({
    itemId,
    yoinker
}: {
    itemId: number;
    yoinker: string;
}): Promise<QueryResult> => sql`
    DELETE FROM 
        yoinks
    WHERE
        item_id = ${itemId}
        AND yoinker = ${yoinker}
`