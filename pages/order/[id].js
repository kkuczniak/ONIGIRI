import { useContext, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../../utils.js/Store';
import Layout from '../../components/Layout';
import { getError } from '../../utils.js/error';
import Cookies from 'js-cookie';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
  }
}

function Order({ params }) {
  const orderId = params.id;
  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });
  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login');
    }
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: getError(err) });
      }
    };
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order]);

  return (
    <Layout title='Status zamówie'>
      <section className='cart items-center flex justify-center flex-col pt-5'>
        <div className='cartContainer w-96 lg:w-[30%] text-xl'>
          <div className='cartHeader border-b border-solid border-gray-900'>
            <h1 className=' pb-2 text-2xl font-semibold '>Status zamówienia</h1>
          </div>

          {loading ? (
            <div className='emptyCart'>
              <h2>Ładowanie</h2>
            </div>
          ) : error ? (
            <h2>error</h2>
          ) : (
            <div className='fullCart'>
              <div className='cartItemsTable '>
                <h3 className='pb-2 text-xl font-semibold tracking-tighter'>
                  Produkty
                </h3>
                {orderItems.map((item) => (
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
                  Status zamówienia
                </h3>
                <div className='flex flex-row pb-2'>
                  <p>Status dostawy: </p>
                  <p>
                    {isDelivered
                      ? `dostarczono dnia ${deliveredAt}`
                      : 'dostawa w toku'}
                  </p>
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
              <div className='cartItemsTable border-b border-gray-400 border-solid'>
                <h3 className='pb-2 text-xl font-semibold tracking-tighter'>
                  Status płatności
                </h3>
                <div className='flex flex-row pb-2'>
                  <p>płatność: </p>
                  <p>{isPaid ? `zapłacono ${paidAt}` : 'nie zapłacono'}</p>
                </div>
              </div>
              <div className='summaryCart pt-5'>
                <h2 className='font-semibold'>
                  Kwota do zapłaty (
                  {orderItems.reduce((a, c) => a + c.quantity, 0)} produkty) :{' '}
                  {totalPrice} zł
                </h2>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  return { props: { params } };
}
export default dynamic(() => Promise.resolve(Order), { ssr: false });
