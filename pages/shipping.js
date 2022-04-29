import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Stepper from '../components/Stepper';
import { useContext, useEffect } from 'react';
import { Store } from '../utils.js/Store';
import Cookies from 'js-cookie';

export default function Shipping() {
  const formSchema = Yup.object().shape({
    fullName: Yup.string().required('Password is required'),
    address: Yup.string().required('Password is required'),
    city: Yup.string().required('Password is required'),
    postalCode: Yup.string().required('Password is required'),
  });

  const {
    handleSubmit,
    register,

    setValue,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping');
    }
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
  }, []);

  const submitHandler = ({ fullName, address, city, postalCode }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode },
    });
    Cookies.set(
      'shippingAddress',
      JSON.stringify({ fullName, address, city, postalCode })
    );
    router.push('/payment');
  };

  return (
    <Layout title='Shipping'>
      <Stepper shippingDone={true} shippingActive={true} />
      <section className='login flex justify-center h-screen'>
        <div className='formContainer w-full max-w-md lg:mt-10 mt-8 flex flex-col items-center  '>
          <h1 className='text-5xl font-semibold pb-2'>Dane Dostawy</h1>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className='w-full flex flex-col justify-start pl-8 pt-5 mb-4'
          >
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='fullName'
              >
                Imię
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='text'
                placeholder='Imię'
                {...register('fullName')}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='Address'
              >
                Ulica
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='text'
                placeholder='Ulica'
                {...register('address')}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='username'
              >
                Miasto
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='text'
                placeholder='Miasto'
                {...register('city')}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='username'
              >
                Kod Pocztowy
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='text'
                placeholder='Kod Pocztowy'
                {...register('postalCode')}
              />
            </div>
            <button
              type='submit'
              className='h-10 w-[90%] mt-4 bg-slate-400 rounded-sm uppercase font-semibold'
            >
              Kontynuuj
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
