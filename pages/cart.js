import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../utils.js/Store';
import Layout from '../components/Layout';

export default function CartScreen() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  console.log(cartItems);
  return (
    <Layout title='Podsumowanie'>
      <section className='cart items-center flex justify-center flex-col pt-5'>
        <div className='cartContainer w-96 lg:w-[30%] text-xl'>
          <div className='cartHeader border-b border-solid border-gray-900'>
            <h1 className='text-2xl font-semibold '>Podsumowanie</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className='emptyCart'>
              <h2>Twój koszyk jest pusty</h2>
            </div>
          ) : (
            <div className='fullCart'>
              <div className='cartItemsTable '>
                {cartItems.map((item) => (
                  <div
                    className='tableRow flex flex-row py-2 justify-between border-b border-gray-400 border-solid'
                    key={item._id}
                  >
                    <div className='tableCell flex items-center'>
                      <Link href={`/product/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                        ></Image>
                      </Link>
                    </div>
                    <div className='tableCell px-1 flex items-center'>
                      <Link href={`/product/${item.slug}`}>
                        <p>{item.name}</p>
                      </Link>
                    </div>
                    <div className='tableCell px-1 flex items-center'>
                      <p>{item.quantity} szt.</p>
                    </div>
                    <div className='tableCell px-1 flex items-center'>
                      <p>{item.price} zł</p>
                    </div>
                    <div className='tableCell px-1 flex items-center'>
                      <button>usuń</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='summaryCart pt-5'>
                <h2>
                  Podsumowanie ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                  produkty) :{' '}
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)} zł
                </h2>
                <button className='w-56 pt-2 bg-neutral-800 text-white uppercase'>
                  Przejdź do kasy
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
