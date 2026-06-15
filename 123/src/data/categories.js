export const categoryMeta = {
  common: {
    label: '常用字体',
    title: '常用字体',
    route: '/common',
    tabs: [
      { label: '全部', value: 'all', route: '/common' },
      { label: '中文', value: 'chinese', route: '/common?type=chinese' },
      { label: '英文', value: 'english', route: '/common?type=english' },
      { label: '数字', value: 'number', route: '/common?type=number' },
    ],
  },
  chinese: {
    label: '中文字体',
    title: '中文字体',
    route: '/chinese',
    tabs: [
      { label: '全部', value: 'all', route: '/chinese' },
      { label: '黑体', value: 'heiti', route: '/chinese/heiti' },
      { label: '宋体', value: 'songti', route: '/chinese/songti' },
      { label: '手写体', value: 'handwriting', route: '/chinese/handwriting' },
      { label: '毛笔/书法', value: 'calligraphy', route: '/chinese/calligraphy' },
      { label: '可爱体', value: 'cute', route: '/chinese/cute' },
      { label: '圆体', value: 'round', route: '/chinese/round' },
      { label: '标题体', value: 'title', route: '/chinese/title' },
    ],
  },
  english: {
    label: '英文字体',
    title: '英文字体',
    route: '/english',
    tabs: [
      { label: '全部', value: 'all', route: '/english' },
      { label: 'UI', value: 'ui', route: '/english/ui' },
      { label: '无衬线', value: 'sans-serif', route: '/english/sans-serif' },
      { label: '衬线', value: 'serif', route: '/english/serif' },
      { label: '圆角', value: 'rounded', route: '/english/rounded' },
      { label: '等宽', value: 'mono', route: '/english/mono' },
      { label: '标题', value: 'display', route: '/english/display' },
    ],
  },
  number: {
    label: '数字字体',
    title: '数字字体',
    route: '/number',
    tabs: [],
  },
  multilingual: {
    label: '多语言',
    title: '多语言字体',
    route: '/multilingual',
    tabs: [
      { label: '全部', value: 'all', route: '/multilingual' },
      { label: '繁中', value: 'traditional', route: '/multilingual/traditional' },
      { label: '日文', value: 'japanese', route: '/multilingual/japanese' },
      { label: '韩文', value: 'korean', route: '/multilingual/korean' },
      { label: '越南文', value: 'vietnamese', route: '/multilingual/vietnamese' },
      { label: '印尼语', value: 'indonesian', route: '/multilingual/indonesian' },
      { label: '阿拉伯文', value: 'arabic', route: '/multilingual/arabic' },
    ],
  },
}

export const navItems = [
  { label: '常用', route: '/common', match: ['/common', '/'] },
  { label: '中文字体', route: '/chinese', match: ['/chinese'] },
  { label: '英文字体', route: '/english', match: ['/english'] },
  { label: '数字字体', route: '/number', match: ['/number'] },
  { label: '多语言', route: '/multilingual', match: ['/multilingual'] },
]
