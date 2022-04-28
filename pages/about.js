import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import section3 from '../public/images/section3.webp';

export default function About() {
  return (
    <Layout>
      <header className='min-h-[630px] relative pt-24 px-0 pb-20 mb-6 lg:text-left md:text-left text-center'>
        <video
          loop
          muted
          playsinline
          autoPlay
          className='absolute object-cover top-0 left-0 m-0 p-0 w-full h-full'
        >
          <source src='/videos/perfume.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-[#0000007a] bg-no-repeat'></div>
        <div className='relative max-w-[1264px] lg:m-20'>
          <div className='flex text-white flex-col lg:w-2/5 md:w-3/4 m-3'>
            <h1 className='text-5xl tracking-wide  leading-tight'>
              ONI GIRI - tu odkryjesz swój komfort
            </h1>
            <h3 className='text-xl pt-5 tracking-wide leading-snug md:w-3/4 '>
              Witaj w miejscu, gdzie miłość do natury i najwyższa jakość
              produktów przeplatają się z troską o ciało i stawianiem czoła
              tabu.
            </h3>
          </div>
        </div>
      </header>
      <section className='py-20 md:py-36'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='text-4xl text-center font-semibold'>
            Wybierz nasze produkty, jeśli:
          </h2>
          <div className='flex flex-col md:flex-row mx-6'>
            <div className='md:w-1/3 items-center flex'>
              <div className='md:px-8 px-2 flex flex-col'>
                <Image
                  src='/icons/section4.svg'
                  alt='svg'
                  width={136}
                  height={136}
                  className='mx-auto'
                />
                <h3 className='text-center md:px-7 px-4 text-2xl font-bold'>
                  Lorem ipsum dolor i lorem
                </h3>
                <p className='text-center md:px-10 px-5 text-lg pt-4 leading-5 font-semibold'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur fugiat laborum, distinctio quod similique impedit!
                </p>
              </div>
            </div>
            <div className='md:w-1/3 items-center flex'>
              <div className='md:px-8 px-2 flex flex-col'>
                <Image
                  src='/icons/section5.svg'
                  alt='svg'
                  width={136}
                  height={136}
                  className='mx-auto'
                />
                <h3 className='text-center md:px-7 px-4 text-2xl font-bold'>
                  Lorem ipsum dolor i lorem
                </h3>
                <p className='text-center md:px-10 px-5 text-lg pt-4 leading-5 font-semibold'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur fugiat laborum, distinctio quod similique impedit!
                </p>
              </div>
            </div>
            <div className='md:w-1/3 items-center flex'>
              <div className='md:px-8 px-2 flex flex-col'>
                <Image
                  src='/icons/section6.svg'
                  alt='svg'
                  width={136}
                  height={136}
                  className='mx-auto'
                />
                <h3 className='text-center md:px-7 px-4 text-2xl font-bold'>
                  Lorem ipsum dolor i lorem
                </h3>
                <p className='text-center md:px-10 px-5 text-lg pt-4 leading-5 font-semibold'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur fugiat laborum, distinctio quod similique impedit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className='w-full text-center py-12 mb-5 tracking-wider text-4xl font-semibold'>
          Od tego się zaczęło
        </h2>
        <div className='flex flex-col md:flex-row w-full items-center'>
          <div className='image w-full md:w-2/3'>
            <Image src={section3} />
          </div>
          <div className='text-left w-full md:w-1/3 px-5 md:px-14 '>
            <h3 className='w-full items-center text-3xl font-semibold mb-8'>
              Lorem Lorem - ONI GIRI
            </h3>
            <p className='tracking-wide leading-8 lg:text-2xl text-xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              facilis expedita quibusdam labore dignissimos aliquid unde,
              distinctio voluptas dolor minima error eos? Ab, voluptate
              exercitationem.
            </p>
            <p className='tracking-wide leading-8 lg:text-2xl text-xl mt-5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              facilis expedita quibusdam labore dignissimos aliquid unde,
              distinctio voluptas dolor minima error eos? Ab, voluptate
              exercitationem.
            </p>
          </div>
        </div>
      </section>
      <section className='faq mt-20 min-h-[40vh] bg-[#303b31] items-center flex flex-col text-white lg:py-10 lg:px-96 px-5'>
        <h1 className='tracking-wide lg:text-4xl text-2xl py-5 font-bold'>
          Nadal masz pytania? Przejrzyj nasz FAQ!
        </h1>
        <ul className='pb-5'>
          <li className='border-b border-solid border-white p-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            possimus error ad facere qui aliquam.
          </li>
          <li className='border-b border-solid border-white p-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            cumque nam odio consectetur deleniti! Nemo harum minus dolorum a
            sunt?
          </li>
          <li className='border-b border-solid border-white p-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            doloribus sint fugiat repudiandae vitae modi placeat explicabo
            aliquid officiis, aspernatur vero! Facilis reprehenderit at aliquam?
          </li>
        </ul>
      </section>
    </Layout>
  );
}
