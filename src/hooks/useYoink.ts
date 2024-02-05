import { useState } from 'react'
import { useAPI } from '@/hooks/useAPI'

export const useYoink = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { post } = useAPI();
    const yoinkItem = async ({
        itemId,
        yoinker
    }: {
        itemId: number;
        yoinker: string;
    }) => {
        setLoading(true);
        setSuccess(false);
        try {
            const result = await post({
                route: 'yoink',
                body: {
                    itemId: itemId,
                    yoinker: yoinker
                },
            });

            setLoading(false);
            setSuccess(!!result.success);
        } catch (e) {
            setLoading(false);
            setSuccess(false);
        }
    }

    const unyoinkItem = async ({
        itemId,
        yoinker
    }: {
        itemId: number;
        yoinker: string;
    }) => {
        const result = await post({
            route: 'unyoink',
            body: {
                itemId: itemId,
                yoinker: yoinker
            },
        });

        return !!result.success;
    }
    return {
        yoinkItem,
        unyoinkItem,
        loading,
        success
    };
};