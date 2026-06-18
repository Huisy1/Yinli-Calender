A 黄历 宜/忌 row — a colored seal character (宜 jade, 忌 rust) beside its activity list.

```jsx
<AlmanacItem kind="good" items={["祭祀","出行","嫁娶","开市"]} />
<AlmanacItem kind="avoid" items={["动土","安葬"]} />
```

Empty `items` renders 诸事不宜. Stack the two rows inside a `Card`.
