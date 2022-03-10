import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Store } from '../utils.js/Store';

export default function Shipping() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }

  return <div>shipping</div>;
}
