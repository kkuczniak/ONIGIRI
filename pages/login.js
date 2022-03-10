import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../utils.js/Store';
import Cookies from 'js-cookie';

export default function Login() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { redirect } = router.query;
  const { userInfo } = state;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/login', {
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
    <Layout title='login'>
      <section className='login flex justify-center h-screen'>
        <div className='formContainer w-full max-w-md lg:mt-20 mt-10 flex flex-col items-center  '>
          <h1 className='text-5xl font-semibold pb-2'>Cześć, tęskniliśmy!</h1>
          <h3 className=''>Zaloguj się do swojego konta</h3>
          <form
            onSubmit={submitHandler}
            className='w-full flex flex-col justify-start pl-8 pt-5 mb-4'
          >
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                for='username'
              >
                TWÓJ E-MAIL
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='email'
                placeholder='Twój e-mail'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                for='password'
              >
                HASŁO
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='password'
                placeholder='Hasło'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type='submit'
              className='h-10 w-[90%] mt-4 bg-slate-400 rounded-sm uppercase font-semibold'
            >
              Zaloguj się
            </button>
          </form>
          <p>Nie posiadasz konta?</p>
          <Link href='/register'>Zarejestruj się</Link>
        </div>
      </section>
    </Layout>
  );
}
