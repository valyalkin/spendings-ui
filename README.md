## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

# Installing and running the app

Install project packages
```bash
pnpm i
```

Start development server
```bash
pnpm dev
```

# Key takeaways

* Each folder is a route, inside there could be also folders
* In each page there can be page.tsx - Actual page
* layout.tsx - Layout of this page
* By default - server rendering, can enable client rendering by using 'use client'
* Use Link for not reuploading context on click
* Streaming can be used to prevent slow dat request form blocking the page - each component can be considered a chunk. Use Suspense technique for this (or loading.tsx on the page level)



