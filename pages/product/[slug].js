import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/Layout';
import data from '../../utils.js/data';
import Product from '../../models/Product';
import db from '../../utils.js/db';

export default function ProductScreen(props) {
  const { product } = props;

  if (!product) {
    return <div>Nie znaleziono produktu</div>;
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className='detailsContainer '>
        <section className='firstDetails h-screen flex flex-col lg:flex-row mb-12 lg:mb-3'>
          <div className='leftDetails'>
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
            />
          </div>
          <div className='rightDetails flex flex-col lg:p-20 p-5  lg:w-1/2 '>
            <div className='detailsDescription flex flex-col  items-start '>
              <h1 className='tracking-wide lg:text-4xl text-2xl pb-4 font-bold'>
                {product.name}
              </h1>
              <p>{product.category}</p>
              <p>{product.brand}</p>
              <div className='detailsDescriptionText flex w-full lg:w-4/5 pt-5 text-xl'>
                <p className='tracking-wide'>{product.descriptionDetails}</p>
              </div>
            </div>
            <div className='detailsPrice py-5'>
              <h2 className='tracking-wide lg:text-4xl text-2xl'>
                {product.price} zł
              </h2>
              <div className='detailsButtons flex flex-row pt-5'>
                <div className='counter flex flex-row w-24 mb-4 mr-4 justify-around items-center h-12 border border-solid'>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <div className='addToBasketDetails flex mb-4'>
                  <button className='w-56 bg-neutral-800 text-white uppercase'>
                    Dodaj do Koszyka - cena
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* packing section below */}
        <section className='aboutDetails flex lg:flex-row flex-col items-center bg-[#f1f4f0] mt-12 lg:mt-1'>
          <video autoPlay loop className='h-'>
            <source src='/videos/packing.mp4' type='video/mp4' />
          </video>
          <div className='textPacking lg:pl-[5%]'>
            <div className='textAreaPacking flex flex-col items-center pt-5'>
              <h1 className='text-2xl lg:text-4xl font-bold tracking-wider leading-3'>
                Prezent dla Ciebie
              </h1>
              <p className='lg:text-xl text-lg max-w-[90%] pt-5 tracking-wide'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                deleniti laborum voluptates, commodi minima dolor quia odit
                eligendi? Beatae, ipsam.
              </p>
            </div>
          </div>
        </section>
        <section className='faq mt-20 min-h-[40vh] bg-[#303b31] items-center flex flex-col text-white lg:px-96 px-5'>
          <h1 className='tracking-wide lg:text-4xl text-2xl py-5 font-bold'>
            Nadal masz pytania? Przejrzyj nasz FAQ!
          </h1>
          <ul className='pb-5'>
            <li className='border-b border-solid border-white p-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam possimus error ad facere qui aliquam.
            </li>
            <li className='border-b border-solid border-white p-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              cumque nam odio consectetur deleniti! Nemo harum minus dolorum a
              sunt?
            </li>
            <li className='border-b border-solid border-white p-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              doloribus sint fugiat repudiandae vitae modi placeat explicabo
              aliquid officiis, aspernatur vero! Facilis reprehenderit at
              aliquam?
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: { product: db.convertDocToObj(product) },
  };
}
