// Need to use the React-specific entry point to import createApi , this means that when  we want to use the createApi function we need to import it from the @reduxjs/toolkit/query/react package

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api/`,
    }),
    endpoints: (builder) => ({
        getproductByName: builder.query({
            query: (name) => `${name}`,
        }),

    }),
});

export const { useGetproductByNameQuery } = productApi;