import { useRouter } from 'next/router';
import data from '../../utils.js/data';

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Nie znaleziono produktu</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
