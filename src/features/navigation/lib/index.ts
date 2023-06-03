import analytics from 'assets/sidebar/analytics.png'
import base from 'assets/sidebar/base.png'
import customers from 'assets/sidebar/city.png'
import file from 'assets/sidebar/file.png'
import workers from 'assets/sidebar/people.png'
import settings from 'assets/sidebar/settings.png'

import { NavItem } from './types'

export const navItems: NavItem[] = [
  {
    imgOptions: {
      height: '26px',
      img: base,
      width: '22px',
    },
    title: 'База знаний',
    to: '/knowledge-base',
  },
  {
    imgOptions: {
      height: '24px',
      img: file,
      width: '18px',
    },
    title: 'Заявки',
    to: '/orders',
  },
  {
    imgOptions: {
      height: '17px',
      img: workers,
      width: '25px',
    },
    title: 'Сотрудники',
    to: '/workers',
  },
  {
    imgOptions: {
      height: '26px',
      img: customers,
      width: '25px',
    },
    title: 'Клиенты',
    to: '/customers',
  },
  {
    imgOptions: {
      height: '24px',
      img: analytics,
      width: '26px',
    },
    title: 'Активы',
    to: '/assets',
  },
  {
    imgOptions: {
      height: '24px',
      img: settings,
      width: '25px',
    },
    title: 'Настройки',
    to: '/settings',
  },
]
