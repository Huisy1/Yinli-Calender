Primary tappable action for 万年历 — 中国红 fill by default, with lower-emphasis and gold celebratory variants.

```jsx
<Button variant="primary" size="md" onClick={save}>保存</Button>
<Button variant="secondary">分享</Button>
<Button variant="ghost" size="sm">取消</Button>
<Button variant="gold" iconLeft={<span>福</span>}>领取祝福</Button>
```

- `variant`: `primary` (default) · `secondary` (paper + red border) · `ghost` · `gold`
- `size`: `sm` · `md` · `lg`; `block` stretches full width
- Touch press = scale 0.97. Pass `iconLeft` / `iconRight` for Lucide glyphs.
