import { useAPI } from '@/app/hooks/useAPI'

export const useYoink = () => {
    const { post } = useAPI();
    const yoinkItem = async ({
        itemId,
        yoinker
    }: {
        itemId: number;
        yoinker: string;
    }) => {
        const result = await post({
            route: 'yoink',
            body: {
                itemId,
                yoinker
            },
        });

        return !!result.success;
    }
    return {
        yoinkItem
    };
};