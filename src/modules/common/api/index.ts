import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from '@reduxjs/toolkit/dist/query/react';


const baseApiUrl =  process.env.SERVER_URL


const baseQuery = fetchBaseQuery({
    baseUrl: baseApiUrl,
    credentials: 'include',
    prepareHeaders: (headers) => {
        return headers;
    },
});

export const ownBaseRtkQueryApi = createApi({
    baseQuery,
    endpoints: () => ({}),
});