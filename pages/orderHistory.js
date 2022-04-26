import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer } from 'react';
import Layout from '../components/Layout';
import { getError } from '../utils.js/error';
import { Store } from '../utils.js/Store';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

function OrderHistory() {
  const { state } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: {},
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/history`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);
  return (
    <Layout title='Historia zamówień'>
      <section className='cart items-center flex justify-center flex-col pt-5'>
        <div className='cartContainer w-96 lg:w-[30%] text-xl'>
          <div className='cartHeader border-b border-solid border-gray-900'>
            <h1 className=' pb-2 text-2xl font-semibold '>
              Historia twoich zakupów
            </h1>
          </div>

          {loading ? (
            <div className='emptyCart'>
              <div className='flex justify-center pt-7'>
                <div className='relative'>
                  <div
                    className='w-12 h-12 rounded-full absolute
                            border-4 border-solid border-gray-200'
                  ></div>

                  <div
                    className='w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-[#8A9B68] border-t-transparent'
                  ></div>
                </div>
              </div>
            </div>
          ) : error ? (
            <h2>error</h2>
          ) : (
            <div className='fullCart'>
              <div className='cartItemsTable '>
                <h3 className='pb-2 text-xl font-semibold tracking-tighter'></h3>
                <div className='tableRow flex flex-row py-2  font-semibold border-b border-gray-400 border-solid'>
                  <div className='tableCell px-1 flex items-center w-1/4 justify-center'>
                    <h4>Zamówiono</h4>
                  </div>
                  <div className='tableCell px-1 flex items-center w-1/4 justify-center'>
                    <h4>Płatność</h4>
                  </div>
                  <div className='tableCell px-1 flex items-center w-1/4 justify-center'>
                    <h4>Cena</h4>
                  </div>
                  <div className='tableCell px-1 flex items-center w-1/4 justify-center'>
                    <h4>Info</h4>
                  </div>
                </div>
                {orders.map((order) => (
                  <div
                    className='tableRow flex flex-row py-2  border-b border-gray-400 border-solid bg-[#ffe6a11c]'
                    key={order._id}
                  >
                    <div className='tableCell px-1 flex items-center w-1/4 justify-center'>
                      <p>{order.createdAt.split('T')[0]} </p>
                    </div>
                    <div className='tableCell px-1 flex items-center w-1/4 justify-center'>
                      <p>
                        {order.isPaid
                          ? ` ${order.paidAt.split('T')[0]}`
                          : 'do zapłaty'}
                      </p>
                    </div>
                    <div className='tableCell px-1 flex items-center w-1/4 justify-center'>
                      <p>{order.totalPrice} zł.</p>
                    </div>
                    <Link href={`/order/${order._id}`} passHref>
                      <button className='bg-orange-50 border border-gray-600 tableCell px-1 flex items-center w-1/4 cursor-pointe justify-center'>
                        Szczegóły
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(OrderHistory), { ssr: false });
