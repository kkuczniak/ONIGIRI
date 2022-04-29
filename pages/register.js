import Link from 'next/link';
import Layout from '../components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useContext, useEffect } from 'react';
import { Store } from '../utils.js/Store';
import Cookies from 'js-cookie';

export default function Register() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters'),
    passwordConfirm: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must and should match'),
    name: Yup.string().required(),
    email: Yup.string().email(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { redirect } = router.query;
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const submitHandler = async ({ name, email, password }) => {
    // if (password !== confirmPassword) {
    //   alert('Hasło nieprawidłowe');
    //   return;
    // }

    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', JSON.stringify(data));
      router.push(redirect || '/');
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };

  return (
    <Layout title='załóż konto'>
      <section className='login flex justify-center h-screen'>
        <div className='formContainer w-full max-w-md lg:mt-10 mt-8 flex flex-col items-center  '>
          <h1 className='text-5xl font-semibold pb-2'>Załóż konto</h1>
          <h3 className=''>Cieszymy się, że chcesz do nas dołączyć!</h3>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='w-full flex flex-col justify-start pl-8 pt-5 mb-4'
          >
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='username'
              >
                Imię
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='text'
                placeholder='Imię'
                {...register('name')}
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='username'
              >
                TWÓJ E-MAIL
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='email'
                placeholder='Twój e-mail'
                {...register('email')}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='password'
              >
                HASŁO
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='password'
                placeholder='Hasło'
                {...register('password')}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                htmlFor='password'
              >
                POTWIERDŹ HASŁO
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='password'
                placeholder='Potwierdź hasło'
                {...register('passwordConfirm')}
              />
            </div>

            <button
              type='submit'
              className='h-10 w-[90%] mt-4 bg-slate-400 rounded-sm uppercase font-semibold'
            >
              Załóż konto
            </button>
          </form>

          <p>Masz już konto?</p>
          <Link href={`/login?redirect=${redirect || '/'}`} passHref>
            Zaloguj się
          </Link>
        </div>
      </section>
    </Layout>
  );
}
