import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
//import Document from './src/components/document/document'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  /* bundleAnalyzer: true, // use with 'yarn build' */
  siteRoot: 'https://appstem.com',

  //Document,

  getSiteData: () => ({
    title: 'Appstem',
    email: 'hello@appstem',
    phone: '415.956.7400',
    addressSF: 'San Francisco',
    address1SF: '133 Kearny St.',
    address2SF: 'Suite 202',
    address3SF: 'San Francisco, CA 94108',
    addressPT: 'Portland',
    address1PT: '5911 NE 28th Ave',
    address2PT: 'Portland, OR 97211',
  }),

  getRoutes: async () => {
    const {
      work,
      jobs,
      home,
      contact,
      about,
      services,
      careers
    } = await jdown('content')

    const caseStudiesForHomePage = work.filter( (homeCaseStudy, i) => homeCaseStudy.slug === 'hubbub' || homeCaseStudy.slug === 'jetsuite-x' || homeCaseStudy.slug === 'tesla-motors' )
    const caseStudiesForNav = work.map( (navCaseStudy, i) => ({ index: i, title: navCaseStudy.title, slug: navCaseStudy.slug }))
    
    return [
      {
        path: '/',
        component: 'src/components/home/home',
        getData: () => ({
          home,
          caseStudiesForHomePage,
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
        path: '/about',
        component: 'src/components/about/about',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/work',
        component: 'src/components/work/work',
        getData: () => ({
          work,
        }),
      },
      {
        path: '/contact',
        component: 'src/components/contact/contact',
        getData: () => ({
          contact,
        }),
      },
      {
        path: '/careers',
        component: 'src/components/careers/careers',
        getData: () => ({
          careers,
          jobs,
        }),
      },
      ...work.map(caseStudy => ({
        path: `/portfolio/${ caseStudy.slug }`,
        component: 'src/components/case-study/case-study',
        getData: () => ({ caseStudy, caseStudiesForNav })
      })),
      {
        path: '/blog',
        component: 'src/components/blog/blog',
      },
      {
        is404: true,
        component: 'src/components/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}