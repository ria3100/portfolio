import { Home, Blog } from '../pages'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/blog',
    component: Blog,
  },
]

export default routes
