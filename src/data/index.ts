
export const CATEGORIES = [
  'alfred',
  'webapp',
  'userscript',
  'chrome-extension',
  'npm',
  'mini-program',
  'others'
] as const

export type ICategory = typeof CATEGORIES[number]

export const TAGS = [
  'unmaintained',
] as const

export type ITag = typeof TAGS[number]

export interface IWork {
  title: string
  description: string
  /** cover image for work */
  image: string
  /** home page */
  link: string
  /** github source link */
  github: string
  /** category */
  cate: ICategory,
  /** tags */
  tags?: ITag[]
}

export const WORKS: IWork[] = [
  {
    title: 'Union Search',
    description: 'a tinny(less than 50kb) web app makes the best search engine available for every one.',
    image: '',
    link: 'https://search.evecalm.com/',
    github: 'https://github.com/oe/search',
    cate: 'webapp',
  },
  {
    title: 'DownGit',
    description: 'directly download or create download link to any GitHub accessible directory or file',
    image: '',
    link: 'https://downgit.evecalm.com/#/home',
    github: 'https://github.com/oe/downgit',
    cate: 'webapp',
  },
  {
    title: 'Bookmark Separator',
    description: 'A tinny webapp that .',
    image: '',
    link: 'https://app.evecalm.com/bookmark/',
    github: 'https://github.com/oe/bookmark',
    cate: 'webapp',
  },
  {
    title: 'KeyCode & CharCode',
    description: 'get keyboard\'s key code & character\'s unicode',
    image: '',
    link: 'https://app.evecalm.com/keycode/',
    github: 'https://github.com/oe/keycode',
    cate: 'webapp',
  },
  {
    title: 'Neuhelper',
    description: '为东软员工而写的谷歌浏览器扩展.',
    image: '',
    link: 'https://app.evecalm.com/neuhelper/',
    github: 'https://github.com/oe/neuhelper',
    cate: 'chrome-extension',
    tags: ['unmaintained'],
  },
  {
    title: 'My Webrequest',
    description: 'Control your network connection in Chrome',
    image: '',
    link: 'https://app.evecalm.com/MyWebrequest/',
    github: 'https://github.com/oe/MyWebrequest',
    cate: 'chrome-extension',
    tags: ['unmaintained'],
  },
  {
    title: 'Frontend Guideline',
    description: '前端开发指导规范',
    image: '',
    link: 'https://app.evecalm.com/frontend-guideline/',
    github: 'https://github.com/oe/frontend-guideline',
    cate: 'others',
  },
  {
    title: 'Web Extension Boilerplate',
    description: 'web extension boilerplate base on Parcel, supports all technologies you familiar with. Manifest v3 ready!',
    image: '',
    link: 'https://github.com/oe/web-extension-boilerplate',
    github: 'https://github.com/oe/web-extension-boilerplate',
    cate: 'others',
  },
  {
    title: 'Webpack Userscript Template',
    description: 'create your own userscript with modern technology powered by webpack',
    image: '',
    link: 'https://github.com/oe/webpack-userscript-template',
    github: 'https://github.com/oe/webpack-userscript-template',
    cate: 'others',
  },
  {
    title: 'SourceTree Custom Actions',
    description: 'useful sourcetree custom actions bash scripts',
    image: '',
    link: 'https://github.com/oe/sourcetree-custom-actions',
    github: 'https://github.com/oe/sourcetree-custom-actions',
    cate: 'others',
  },
  {
    title: 'duplex-message',
    description: 'A tinny(~3kb) utility that can simplify cross window(iframes, workers, same origin windows) and electron main / renderer process communications(please use npm package `simple-electron-ipc`)',
    image: '',
    link: 'https://www.npmjs.com/package/duplex-message',
    github: 'https://github.com/oe/duplex-message',
    cate: 'npm',
  },
  {
    title: 'lerna-ci',
    description: 'The essential toolkit for monorepo managed by lerna/yarn/pnpm/turbo/etc',
    image: '',
    link: 'https://www.npmjs.com/package/lerna-ci',
    github: 'https://github.com/oe/lerna-ci',
    cate: 'npm',
  },
  {
    title: 'truncate-html',
    description: 'Truncate html string(even contains emoji chars) and keep tags in safe. You can custom ellipsis sign, ignore unwanted elements and truncate html by words.',
    image: '',
    link: 'https://www.npmjs.com/package/truncate-html',
    github: 'https://github.com/oe/truncate-html',
    cate: 'npm',
  },
  {
    title: 'composie',
    description: 'compose middleware with router and run it like a charm',
    image: '',
    link: 'https://www.npmjs.com/package/composie',
    github: 'https://github.com/oe/composie',
    cate: 'npm',
  },
  {
    title: 'async-task-schedule',
    description: 'schedule async tasks, remove redundant with cache support',
    image: '',
    link: 'https://www.npmjs.com/package/async-task-schedule',
    github: 'https://github.com/oe/async-task-schedule',
    cate: 'npm',
  },
  {
    title: '关爱选择困难症',
    description: '微信小程序 关爱选择困难症, 解决选择困难问题',
    image: '',
    link: 'https://raw.githubusercontent.com/oe/allodoxaphobia/master/miniapp.jpg',
    github: 'https://github.com/oe/allodoxaphobia',
    cate: 'mini-program',
    tags: ['unmaintained'],
  },
  {
    title: 'Download Github Sub-folder',
    description: 'a userscript that can let you download github repo or directory via one-click',
    image: '',
    link: 'https://openuserjs.org/scripts/oe/Download_github_repo_online',
    github: 'https://github.com/oe/download-git-userscript',
    cate: 'userscript',
  },
  {
    title: 'Clean Qzone',
    description: '移除QQ空间广告, make your Qzone center clean and clear',
    image: '',
    link: 'https://openuserjs.org/scripts/oe/Download_github_repo_online',
    github: 'https://github.com/oe/clean-qzone',
    cate: 'userscript',
    tags: ['unmaintained'],
  },
  {
    title: 'SourceTree',
    description: 'Search bookmarks in SourceTree and open with code editor / sourcetree / finder via Alfred.',
    image: 'https://alfred.app/workflows/saiya/sourcetree/icon.png',
    link: 'https://alfred.app/workflows/saiya/sourcetree/',
    github: 'https://github.com/oe/sourcetree-alfred-workflow',
    cate: 'alfred',
  },
  {
    title: 'QRCode',
    description: 'generate qrcode in alfred workflow',
    image: '',
    link: 'https://github.com/oe/qrcode-alfred-workflow/raw/main/QRCode.alfredworkflow',
    github: 'https://github.com/oe/qrcode-alfred-workflow',
    cate: 'alfred',
  },
  {
    title: 'App Language Switcher',
    description: 'Open apps in non-default languages',
    image: 'https://alfred.app/workflows/saiya/app-language-switcher/icon.png',
    link: 'https://alfred.app/workflows/saiya/app-language-switcher/',
    github: 'https://alfred.app/workflows/saiya/app-language-switcher/',
    cate: 'alfred',
  },
]
