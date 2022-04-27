import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Stepper from '../components/Stepper';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../utils.js/Store';
import Layout from '../components/Layout';
import { getError } from '../utils.js/error';
import Cookies from 'js-cookie';

function PlaceOrder() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems, shippingAddress, paymentMethod },
  } = state;
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  const totalPrice = round2(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  );

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
    if (cartItems.length === 0) {
      router.push('/cart');
    }
  }, []);

  const [loading, setLoading] = useState(false);
  // TODO ADD LOADING CIRCLE and error https://github.com/fkhadra/react-toastify
  const placeOrderHandler = async () => {
    try {
      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: cartItems,
          shippingAddress,
          paymentMethod,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'CART_CLEAR' });
      Cookies.remove('cartItems');
      router.push(`/order/${data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout title='Podsumowanie'>
      <Stepper
        shippingActive={false}
        shippingDone={true}
        paymentActive={false}
        paymentDone={true}
        checkDone={true}
        checkActive={true}
      />
      <section className='cart items-center flex justify-center flex-col pt-5'>
        <div className='cartContainer w-96 lg:w-[30%] text-xl'>
          <div className='cartHeader border-b border-solid border-gray-900'>
            <h1 className=' pb-2 text-2xl font-semibold '>Podsumowanie</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className='emptyCart'>
              <h2>Twój koszyk jest pusty</h2>
            </div>
          ) : (
            <div className='fullCart'>
              <div className='cartItemsTable '>
                <h3 className='pb-2 text-xl font-semibold tracking-tighter'>
                  Produkty
                </h3>
                {cartItems.map((item) => (
                  <div
                    className='tableRow flex flex-row py-2 justify-between border-b border-gray-400 border-solid'
                    key={item._id}
                  >
                    <div className='tableCell flex items-center'>
                      <Link href={`/product/${item.slug}`} passHref>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                        ></Image>
                      </Link>
                    </div>
                    <div className='tableCell px-1 flex items-center'>
                      <Link href={`/product/${item.slug}`} passHref>
                        <p>{item.name}</p>
                      </Link>
                    </div>
                    <div className='tableCell px-1 flex items-center'>
                      <p>{item.quantity} szt.</p>
                    </div>
                    <div className='tableCell px-1 flex items-center'>
                      <p>{item.price} zł</p>
                    </div>
                    <div className='tableCell px-1 flex items-center'></div>
                  </div>
                ))}
              </div>
              <div className='cartItemsTable border-b border-gray-400 border-solid'>
                <h3 className='pb-2 text-xl font-semibold tracking-tighter'>
                  Adres dostawy
                </h3>
                <p>{shippingAddress.fullName}</p>
                <p>{shippingAddress.address}</p>
                <div className='flex flex-row pb-2'>
                  <p>{shippingAddress.postalCode} </p>
                  <p>{shippingAddress.city}</p>
                </div>
              </div>
              <div className='cartItemsTable border-b border-gray-400 border-solid'>
                <h3 className='pb-2 text-xl font-semibold tracking-tighter'>
                  Sposób płatności
                </h3>

                <div className='flex flex-row pb-2'>
                  <p>
                    {!paymentMethod
                      ? 'Nie wybrano sposobu płatności'
                      : paymentMethod}{' '}
                  </p>
                </div>
              </div>
              <div className='summaryCart pt-5'>
                <h2 className='font-semibold'>
                  Kwota do zapłaty (
                  {cartItems.reduce((a, c) => a + c.quantity, 0)} produkty) :{' '}
                  {totalPrice} zł
                </h2>
                <button
                  onClick={placeOrderHandler}
                  className='w-56 py-1 flex justify-center bg-neutral-800 text-white uppercase'
                >
                  Kup i zapłać
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
