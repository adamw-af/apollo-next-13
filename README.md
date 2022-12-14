Apollo Client Cache Rehydration in Next.js
Next.js app code for this blog post: https://medium.com/@ahsan-ali-mansoor/apollo-client-cache-rehydration-in-next-js-d1d7c693699e

This repo demonstrates how to:

Fetch data on the server using server-side rendering (SSR), static site generation (SSG) or incremental static regeneration (ISR) and populate Apollo Client's cache
Send that cache data to the client
Use it to "rehydrate", or initialize, Apollo Client's cache in the browser
This way, you get the benefits of SSR/SSG/ISR (a fully rendered HTML document on the initial page load, great SEO, etc.), and still have the data in Apollo Client's cache. This prevents your app from making unnecessary client-side network requests for data you already have.
