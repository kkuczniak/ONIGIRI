import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='sticky bottom-0 -z-10 w-full left-0 bg-black text-white font-serif'>
      <div className='mx-auto relative px-8 flex flex-col md:flex-row max-w-7xl'>
        <div className='flex flex-col py-14 pr-7 border-r border-white text-center'>
          <ul>
            <Image src='/leafIcon.png' alt='me' width='50' height='50' />
            <h3 className='text-4xl mb-5'>ONI GIRI</h3>
            <li className='pl-4 leading-3 tracking-wide text-xl mb-4'>
              <span>Lorem Ips</span>
            </li>
            <li className='pl-4 leading-3 tracking-wide text-xl mb-4'>
              <span>Lorem Ips</span>
            </li>
            <li className='pl-4 leading-3 tracking-wide text-xl mb-4'>
              <span>Lorem Ips</span>
            </li>
            <li className='pl-4 leading-3 tracking-wide text-xl mb-4'>
              <span>Lorem Ips</span>
            </li>
          </ul>
          <div className='icons flex flex-row mt-6  justify-center'>
            <img
              src='/icons/icons8-facebook-50.svg'
              alt='Facebookme'
              width='50'
              height='50'
            />
            <img
              src='/icons/icons8-instagram-50.svg'
              alt='instagram'
              width='50'
              height='50'
            />
            <img
              src='/icons/icons8-tiktok-50.svg'
              alt='tiktok'
              width='50'
              height='50'
            />
            <img
              src='/icons/icons8-twitter-50.svg'
              alt='tweeter'
              width='50'
              height='50'
            />
          </div>
        </div>
      </div>
      <div className='fixed w-full lg:bottom-24 text-center'>
        <div className='flex lg:flex-row flex-col justify-center'>
          <div className='pr-16'>
            <h4 className='text-xl mb-5'>LOREM IPSUM</h4>
            <ul>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-xl mb-5'>LOREM IPSUM</h4>
            <ul>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
              <li className='pb-5 leading-3 tracking-wide text-xl mb-4'>
                <span>Lorem Ips</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' bottom-0 fixed w-full text-center'>
        <span>Copyright © 2022 ONI GIRI</span>
      </div>
    </footer>
  );
}
