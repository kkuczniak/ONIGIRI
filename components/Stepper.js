export default function Stepper(props) {
  return (
    <div className='p-5'>
      <div className='mx-4 md:p-4 lg:px-24'>
        <div className='flex items-center'>
          <div className='flex items-center  text-[#8A9B68] relative'>
            <div className='rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-[#8A9B68]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-user'
              >
                <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#8A9B68]'>
              Zaloguj się
            </div>
          </div>
          <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-[#8A9B68]'></div>
          <div
            className={`flex items-center ${
              props.shippingDone ? 'text-[#8A9B68]' : 'text-gray-500'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                props.shippingDone ? 'border-[#8A9B68]' : 'border-gray-300'
              } ${props.shippingActive ? 'bg-orange-50' : ''}
              `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-truck'
              >
                <rect x='1' y='3' width='15' height='13'></rect>
                <polygon points='16 8 20 8 23 11 23 16 16 16 16 8'></polygon>
                <circle cx='5.5' cy='18.5' r='2.5'></circle>
                <circle cx='18.5' cy='18.5' r='2.5'></circle>
              </svg>
            </div>
            <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#8A9B68]'>
              Dostawa
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              props.paymentDone ? 'border-[#8A9B68]' : 'border-gray-300'
            } `}
          ></div>
          <div
            className={`flex items-center  ${
              props.paymentDone ? 'text-[#8A9B68]' : 'text-gray-500'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                props.paymentDone ? 'border-[#8A9B68]' : 'border-gray-300'
              } ${props.paymentActive ? 'bg-orange-50' : ''} `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-credit-card'
              >
                <rect x='1' y='4' width='22' height='16' rx='2' ry='2'></rect>
                <line x1='1' y1='10' x2='23' y2='10'></line>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                props.paymentDone ? 'text-[#8A9B68]' : 'text-gray-500'
              }`}
            >
              Płatność
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              props.checkDone ? 'border-[#8A9B68]' : 'border-gray-300'
            } `}
          ></div>
          <div
            className={`flex items-center ${
              props.checkDone ? 'text-[#8A9B68]' : 'text-gray-500'
            }  relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 
              
              ${props.checkDone ? 'border-[#8A9B68]' : 'border-gray-300'}
              ${props.checkActive ? 'bg-orange-50' : ''}
              `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='feather feather-database '
              >
                <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                props.checkDone ? 'text-[#8A9B68]' : 'text-gray-500'
              } `}
            >
              Podsumowanie
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
