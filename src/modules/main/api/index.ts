import {ownBaseRtkQueryApi} from "@/modules/common/api";

const apiWithTags = ownBaseRtkQueryApi.enhanceEndpoints(
    {
        addTagTypes:[]
    });

export const test = apiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getHello: build.query<any, void>({
            query: () => ({
                url: `/`,
                method: 'Get',
            }),
        }),
    })
});

export const {useGetHelloQuery} = test