import { useContext, useEffect, useState } from 'react';
import Stepper from '../components/Stepper';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import { Store } from '../utils.js/Store';
import { useRouter } from 'next/router';

export default function Payment() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping');
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '');
    }
  }, []);

  console.log(paymentMethod);
  //TO DO  error message
  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      console.error('Wybierz metodę płatności');
    } else {
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
      Cookies.set('paymentMethod', paymentMethod);
      router.push('/placeorder');
    }
  };

  return (
    <Layout title='Payment'>
      <Stepper
        shippingActive={false}
        shippingDone={true}
        paymentActive={true}
        paymentDone={true}
        checkDone={false}
        checkActive={false}
      />
      <section className=' flex justify-center h-screen'>
        <div className='formContainer w-full max-w-md lg:mt-10 mt-8 flex flex-col items-center  '>
          <h1 className='text-5xl font-semibold pb-2'>Metoda płatności</h1>
          <form
            onSubmit={submitHandler}
            className='w-full flex flex-col justify-start pl-8 pt-5 mb-4'
          >
            <div>
              <label class='inline-flex items-center h-10'>
                <input
                  type='radio'
                  className='form-radio text-slate-400 bg-orange-50 text-xl border border-solid border-gray-500'
                  name='radio'
                  value='PayPal'
                  onClick={() => setPaymentMethod('PayPal')}
                />
                <span class='ml-2 text-xl'>PayPal</span>
              </label>
            </div>
            <div>
              <label class='inline-flex items-center h-10'>
                <input
                  type='radio'
                  className='form-radio text-slate-400 bg-orange-50 text-xl border border-solid border-gray-500'
                  name='radio'
                  value='Stripe'
                  onClick={() => setPaymentMethod('Stripe')}
                />
                <span class='ml-2 text-xl'>Stripe</span>
              </label>
            </div>
            <div>
              <label class='inline-flex items-center h-10'>
                <input
                  type='radio'
                  className='form-radio text-slate-400 bg-orange-50 text-xl border border-solid border-gray-500'
                  name='radio'
                  value='Cash'
                  onClick={() => setPaymentMethod('Cash')}
                />
                <span class='ml-2 text-xl'>Płatność przy odbiorze</span>
              </label>
            </div>
            <button
              type='submit'
              className='h-10 w-[90%] mt-4 bg-slate-400 rounded-sm uppercase font-semibold'
            >
              Przejdź do podsumowania
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
