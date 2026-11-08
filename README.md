# TopClean Gebäudeservice

German-first Next.js website with `/de` and `/en`, interactive service and property selectors, process and example gallery, quote builder, translated articles, and a validated inquiry API.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000/de. Run `npm run lint`, `npm run typecheck`, and `npm run build` for checks.

## Inquiry handling

Without `INQUIRY_WEBHOOK_URL` and `INQUIRY_WEBHOOK_SECRET`, submissions are validated but not sent. The interface states this explicitly. To enable delivery, set both variables in `.env.local` to an approved HTTPS endpoint that accepts JSON and Bearer authorization. The endpoint must handle storage/email and privacy policy requirements. The included rate limiter is process-local and must be replaced with a durable store before a scaled production launch.

## Images and publication

The hero uses the user-supplied cleaner photo in `public/images/topclean-hero-cleaner.png` plus a transparent cutout layer in `public/images/topclean-hero-cleaner-cutout.png` for the wordmark overlap; remaining CSS illustrative scenes preserve the specified image aspect ratios without implying actual projects or staff. Replace them with approved, optimized local photos and `next/image` components before publication. `public/images/topclean-logo-transparent.png` is the transparent logo cutout used in header and footer; the original supplied reference remains in `public/images/topclean-reference.png`. See [CONTENT_TODO.md](CONTENT_TODO.md) for all factual and legal gates. Indexing is disabled until these are resolved.
