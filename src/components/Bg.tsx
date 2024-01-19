import { type ICategory } from '@/data'

import alfred from './icons/alfred.png'
import npm from './icons/npm.png'
import webapp from './icons/webapp.png'
import others from './icons/others.png'
import userscript from './icons/userscript.png'
import miniProgram from './icons/mini-program.png'
import chromeExtension from './icons/chrome-extension.svg'

import './bg.scss'

const imageMap: Partial<Record<ICategory, any>> = {
  alfred, npm, userscript, webapp, others,
  'chrome-extension': chromeExtension,
  'mini-program': miniProgram
}

export interface IBgProps {
  cate: ICategory;
  image: string
}

export function Bg(props: IBgProps) {
  const image = props.image || imageMap[props.cate]?.src
  if (!image) {
    return null
  }

  return (<img src={image} alt={props.cate} className='card-bg' />)
}