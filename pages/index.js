import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../libs/posts'

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>

      <section className={ utilStyles.headingMd }>
        <p>Hello, I'm <strong>Humandetail</strong>.</p>
        <p>
          (This is a sample website - you'll be building a site like this on { ' ' }
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={ utilStyles.list }>
          {
            allPostsData.map(({ id, date, title }) => (
              <li
                key={ id }
                class={ utilStyles.listItem }>
                <Link href={ `/posts/${id}` }>
                  <a>{ title }</a>
                </Link>
                <br />
                <small className={ utilStyles.lightText }>
                  <Date dateString={ date }></Date>
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}
