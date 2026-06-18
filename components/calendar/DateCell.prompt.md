One day in the month grid — solar number (serif) over a lunar/festival label.

```jsx
<DateCell solar={17} lunar="廿三" today />
<DateCell solar={1} lunar="端午" festival rest selected />
<DateCell solar={30} lunar="廿九" otherMonth />
```

States: `today` · `selected` · `rest` (weekend/holiday) · `festival` · `otherMonth`. Lay out 7 across in a grid with `gap`.
