import Link from 'next/link';
import Layout from '../components/Layout';
import data from '../utils.js/data';

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <h1>Hello Product</h1>
          <ul className='HomePage-Products flex justify-center'>
            {data.products.slice(0, 3).map((product) => (
              <li key={product.name} className='py-0 px-3 w-1/4'>
                <div className='pb-10 h-full'>
                  <Link href={`/product/${product.slug}`}>
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
                  <button className='bg-slate-700 text-white uppercase my-1 py-2 flex relative w-full justify-center'>
                    Dodaj do koszyka
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
