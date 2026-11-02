<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Sales page copy, prices and checkout links live in `src/components/sales/content.ts`; sections read from it so offer changes touch one file.
- Product mockups are CDN WebP assets in several widths, rendered via `src/components/sales/Mockups.tsx` with srcset/lazy loading (only the hero loads eagerly, for load speed); remaining illustrations are CSS in `Visuals.tsx`.
- Carousels use the CSS `animate-marquee` utility with two identical tracks (no JS carousel library) to stay lightweight and always moving.
