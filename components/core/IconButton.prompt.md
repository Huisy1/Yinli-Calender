Round icon-only control for toolbars and the brand bar (bell, share, settings, chevrons).

```jsx
<IconButton label="分享" variant="soft"><Share2 size={18} /></IconButton>
<IconButton label="上个月" variant="ghost"><ChevronLeft size={20} /></IconButton>
```

- `variant`: `ghost` (default) · `soft` · `brand` · `outline`
- `size`: `sm` 32 · `md` 40 · `lg` 48. Always pass `label` for accessibility.
