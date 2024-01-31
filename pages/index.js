import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I am Jello. You can call me Jel in short and I am an aspiring software developer.</p>
        <p>My expectations to TwistResources is that it is a company that will aide my learning and career growth.
          I am expecting to learn a lot not only in the aspect of coding but with the whole process of the software development.
        </p>
        <p>My impression so far for TwistResources is that it have a very nice environment full of nice people. 
          As for the learning path scheduled for the upcoming days, it piqued my interest and I am very excited to have the lessons.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}