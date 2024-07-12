import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://fakestoreapi.com/",
	}),
	endpoints: (build) => ({
		getProducts: build.query({
			query: () => "products",
		}),
	}),
});

export const {useGetProductsQuery} = productsAPI;
