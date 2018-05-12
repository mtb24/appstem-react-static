import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import Document from './src/components/document/document'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  siteRoot: 'https://www.appstem.com',
  
  Document,
  
  getSiteData: () => ({
    title: 'Appstem',
    email: 'info@appstem',
    phone: '415.956.7400',
    addressSF: 'San Francisco',
    address1SF: '133 Kearny St.',
    address2SF: 'Suite 202',
    address3SF: 'San Francisco, CA 94105',
    addressPT: 'Portland',
    address1PT: '5911 NE 28th Ave',
    address2PT: 'Portland, OR 97211',
    copyright: '© 2018 APPSTEM MEDIA LLC. All Rights Reserved.',
  }),
  
  getRoutes: async () => {
    const { work, home, services, culture, contact } = await jdown('content')

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
        children: work.map(caseStudy => ({
          path: `/work/${caseStudy.slug}`,
          component: 'src/components/case-study/case-study',
          getData: () => ({
            caseStudy,
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
