// Sample data for the 万年历 UI kit (June 2026 / 农历乙巳年).
window.WNL_DATA = {
  monthLabel: "2026年 6月",
  lunarMonthLabel: "农历五月",
  weekHeads: ["日", "一", "二", "三", "四", "五", "六"],
  // grid: 6 weeks x 7. solar number, lunar label, flags.
  // otherMonth days from May/July.
  grid: [
    { s: 31, l: "初六", other: true }, { s: 1, l: "初七" }, { s: 2, l: "初八" }, { s: 3, l: "初九" }, { s: 4, l: "初十" }, { s: 5, l: "芒种", festival: true }, { s: 6, l: "十二", rest: true },
    { s: 7, l: "十三", rest: true }, { s: 8, l: "十四" }, { s: 9, l: "十五" }, { s: 10, l: "十六" }, { s: 11, l: "十七" }, { s: 12, l: "十八" }, { s: 13, l: "十九", rest: true },
    { s: 14, l: "二十", rest: true }, { s: 15, l: "廿一" }, { s: 16, l: "廿二" }, { s: 17, l: "廿三", today: true }, { s: 18, l: "廿四" }, { s: 19, l: "廿五" }, { s: 20, l: "廿六", rest: true },
    { s: 21, l: "夏至", festival: true, rest: true }, { s: 22, l: "廿八" }, { s: 23, l: "廿九" }, { s: 24, l: "六月" }, { s: 25, l: "初二" }, { s: 26, l: "初三" }, { s: 27, l: "初四", rest: true },
    { s: 28, l: "初五", rest: true }, { s: 29, l: "初六" }, { s: 30, l: "初七" }, { s: 1, l: "初八", other: true }, { s: 2, l: "初九", other: true }, { s: 3, l: "初十", other: true }, { s: 4, l: "十一", other: true, rest: true },
  ],
  // per-day detail keyed by solar number (June)
  details: {
    17: {
      weekday: "星期三",
      lunarMonth: "五月", lunarDay: "廿三", zodiac: "蛇",
      ganzhi: "乙巳年 壬午月 丁卯日",
      festival: null,
      term: null,
      good: ["祭祀", "祈福", "出行", "纳财", "开市"],
      avoid: ["动土", "破土", "安葬"],
      blessing: "愿你今日所求皆如愿，所行皆坦途。",
    },
    21: {
      weekday: "星期日",
      lunarMonth: "五月", lunarDay: "廿七", zodiac: "蛇",
      ganzhi: "乙巳年 壬午月 辛未日",
      festival: null,
      term: "夏至",
      good: ["祭祀", "祈福", "斋醮", "沐浴"],
      avoid: ["嫁娶", "动土", "出行"],
      blessing: "夏至已至，愿你心静如水，清凉一夏。",
    },
    5: {
      weekday: "星期五",
      lunarMonth: "五月", lunarDay: "十一", zodiac: "蛇",
      ganzhi: "乙巳年 壬午月 乙卯日",
      festival: null,
      term: "芒种",
      good: ["播种", "栽种", "出行", "祈福"],
      avoid: ["开仓", "安葬"],
      blessing: "芒种时节，愿你勤耕不辍，岁岁有收成。",
    },
  },
  blessings: [
    { cat: "日常", text: "愿你今日所求皆如愿，所行皆坦途。" },
    { cat: "日常", text: "晨起一杯茶，顺心又顺意。" },
    { cat: "节气", text: "夏至已至，愿你心静如水，清凉一夏。" },
    { cat: "祝福", text: "岁岁常欢愉，年年皆胜意。" },
  ],
  // festival / 节气 detail, keyed by name
  festivals: {
    "夏至": {
      kind: "节气",
      solar: "6月21日", weekday: "星期日",
      lunar: "农历五月廿七",
      index: "二十四节气 · 第 10 个",
      seal: "夏",
      summary: "夏至日，太阳直射北回归线，北半球白昼最长。自此入夏，暑气渐盛。",
      hou: [
        { name: "一候", text: "鹿角解" },
        { name: "二候", text: "蝉始鸣" },
        { name: "三候", text: "半夏生" },
      ],
      customs: ["祭神祀祖", "消夏避伏", "食夏至面"],
      foods: ["凉面", "夏至面", "麦粽"],
      blessing: "夏至已至，愿你心静如水，清凉一夏。",
    },
    "芒种": {
      kind: "节气",
      solar: "6月5日", weekday: "星期五",
      lunar: "农历五月十一",
      index: "二十四节气 · 第 9 个",
      seal: "芒",
      summary: "芒种时节，麦类等有芒作物成熟，亦是播种最忙的时候，故称“忙种”。",
      hou: [
        { name: "一候", text: "螳螂生" },
        { name: "二候", text: "鵙始鸣" },
        { name: "三候", text: "反舌无声" },
      ],
      customs: ["送花神", "安苗祈福", "煮青梅"],
      foods: ["青梅", "君踏菜", "新麦"],
      blessing: "芒种时节，愿你勤耕不辍，岁岁有收成。",
    },
  },

  // home-screen widget readouts
  widget: {
    solar: 17, weekday: "星期三", month: "6月",
    lunarDay: "廿三", lunarMonth: "五月", zodiac: "蛇",
    term: "夏至 · 第5天",
    blessing: "所求皆如愿，所行皆坦途。",
  },
};
