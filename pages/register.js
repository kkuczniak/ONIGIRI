import Link from 'next/link';
import Layout from '../components/Layout';

export default function Register() {
  return (
    <Layout title='register'>
      <section className='login flex justify-center h-screen'>
        <div className='formContainer w-full max-w-md lg:mt-20 mt-10 flex flex-col items-center  '>
          <h1 className='text-5xl font-semibold pb-2'>Załóż konto</h1>
          <h3 className=''>Cieszymy się, że chcesz do nas dołączyć!</h3>
          <form className='w-full flex flex-col justify-start pl-8 pt-5 mb-4'>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                for='username'
              >
                Imię
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='text'
                placeholder='Imię'
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-600 text-sm font-bold mb-2 uppercase'
                for='username'
              >
                Nazwisko
              </label>
              <input
                className='h-10 w-[90%] border border-solid border-gray-500 drop-shadow-md outline-none text-xl'
                type='text'
                placeholder='Nazwisko'
              />
            </div>
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
              />
            </div>

            <button className='h-10 w-[90%] mt-4 bg-slate-400 rounded-sm uppercase font-semibold'>
              Załóż konto
            </button>
          </form>

          <p>Masz już konto?</p>
          <Link href='/login'>Zaloguj się</Link>
        </div>
      </section>
    </Layout>
  );
}
