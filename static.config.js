import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import Document from './src/components/document/document'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  
  Document,
  
  getSiteData: () => ({
    title: 'Appstem',
  }),
  
  getRoutes: async () => {
    const { work, home, services, culture, contact } = await jdown('content')
    console.log(work);
    return [
      {
        path: '/',
        component: 'src/components/home/home',
        getData: () => ({
          ...home,
        }),
      },
      {
        path: '/services',
        component: 'src/components/services/services',
        getData: () => ({
          services,
        }),
      },
      {
        path: '/culture',
        component: 'src/components/culture/culture',
        getData: () => ({
          culture,
        }),
      },
      {
        path: '/work',
        component: 'src/components/work/work',
        getData: () => ({
          work,
        }),
        children: work.map(spotlight => ({
          path: `/work/${spotlight.slug}`,
          component: 'src/components/spotlight/spotlight',
          getData: () => ({
            spotlight,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/components/contact/contact',
        getData: () => ({
          contact,
        }),
      },
      {
        is404: true,
        component: 'src/components/404',
      },
    ]
  },
}
