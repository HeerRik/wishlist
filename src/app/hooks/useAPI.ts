export const useAPI = () => {
    const get = async ({
        route,
        requestParams = {}
    }: {
        route: string;
        requestParams?: RequestInit;
    }) => {
        try {
            const req = await fetch(
                `/api/${route}`,
                {
                    method: 'GET',
                    ...requestParams
                }
            );

            if (req.ok) return req.json();

            return {error: 'Oeps'}

        } catch (e) {
            console.log(e);
            return {error: 'Oeps'}
        }
    }
    const post = async ({
        route,
        body = {},
        requestParams = {}
    }: {
        route: string;
        body?: any;
        requestParams?: RequestInit;
    }) => {
        try {
            const req = await fetch(
                `/api/${route}`,
                {
                    method: 'POST',
                    body: body,
                    ...requestParams
                }
            );

            if (req.ok) return req.json();

            return {error: 'Oeps'}

        } catch (e) {
            console.log(e);
            return {error: 'Oeps'}
        }
    }
    return {
        get,
        post
    }
}