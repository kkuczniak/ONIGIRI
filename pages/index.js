import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/Layout';
import Header from '../components/Header';
import db from '../utils.js/db';
import Product from '../models/Product';
import axios from 'axios';
import { Store } from '../utils.js/Store';

import section3 from '../public/images/section3.webp';

export default function Home(props) {
  const { products } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const addToCartHandler = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock <= 0) {
      window.alert('Przepraszamy, brak produktu na magazynie');
    }
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    router.push('/cart');
  };
  return (
    <>
      <Layout>
        <div>
          <Header />
          <section className='py-20 md:py-36'>
            <div className='mx-auto max-w-7xl'>
              <h2 className='text-4xl text-center font-semibold'>
                Wybierz nasze produkty, jeśli:
              </h2>
              <div className='flex flex-col md:flex-row mx-6'>
                <div className='md:w-1/3 items-center flex'>
                  <div className='md:px-8 px-2 flex flex-col'>
                    <Image
                      src='/icons/section1.svg'
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
                      Consectetur fugiat laborum, distinctio quod similique
                      impedit!
                    </p>
                  </div>
                </div>
                <div className='md:w-1/3 items-center flex'>
                  <div className='md:px-8 px-2 flex flex-col'>
                    <Image
                      src='/icons/section2.svg'
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
                      Consectetur fugiat laborum, distinctio quod similique
                      impedit!
                    </p>
                  </div>
                </div>
                <div className='md:w-1/3 items-center flex'>
                  <div className='md:px-8 px-2 flex flex-col'>
                    <Image
                      src='/icons/section3.svg'
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
                      Consectetur fugiat laborum, distinctio quod similique
                      impedit!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ul className='HomePage-Products flex lg:flex-row flex-col justify-center pt-8'>
            {products.slice(0, 3).map((product) => (
              <li key={product.name} className='py-0 px-3 lg:w-1/4 w-full'>
                <div className='pb-10 h-full'>
                  <Link href={`/product/${product.slug}`} passHref>
                    <div className='flex relative flex-col justify-between h-full cursor-pointer'>
                      <img src={product.image} alt='' />
                      <div className='description px-1'>
                        <h2 className='text-lg font-semibold'>
                          {product.name}
                        </h2>
                        <p className='text-gray-700'>{product.price} zł</p>
                        <p className='text-gray-700'>{product.description}</p>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className='bg-slate-700 text-white uppercase my-1 py-2 flex relative w-full justify-center'
                  >
                    Dodaj do koszyka
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <section className='my-28 bg-[#f8ffea]'>
            <div className='flex flex-col md:flex-row max-w-7xl w-full '>
              <div className='flex w-full md:w-1/2'>
                <Image src={section3} />
              </div>
              <div className='flex flex-col mt-28 px-5 w-full md:w-1/2 items-center '>
                <h2 className='text-4xl font-bold pb-5'>Lorem Ipsum Lorem</h2>
                <p className='text-2xl font-medium pb-5 px-10 text-center'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, maxime quisquam laboriosam tempora neque expedita
                  nulla suscipit vero exercitationem quaerat molestiae qui a
                  molestias odit!
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: { products: products.map(db.convertDocToObj) },
  };
}
