import * as React from 'react';

import Card from '@/components/Card';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-dark text-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center px-12 py-12 text-center'>
            <div className='w-full'>
              <h1 className='text-left py-6'>Myself</h1>
              <div className='flex flex-row gap-5 items-center justify-around'>
                <Card title='Me'>
                  <div className='text-center text-2xl'>Boyn</div>
                  <NextImage
                    useSkeleton
                    className='w-32 md:w-40'
                    src='/favicon/mfers.webp'
                    width='180'
                    height='180'
                    alt='Icon'
                  />
                </Card>
                <Card title='Bio'>
                  <p>Wake up, Samurai. 😎We've got code to write.</p>
                  <p>Programmer with Loves</p>
                  <p>Mfers as Decentralized Faith</p>
                </Card>
              </div>
            </div>
            <footer className='absolute bottom-2 text-gray-300'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/BoynChan'>
                Boynn
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
