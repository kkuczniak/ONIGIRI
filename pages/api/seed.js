import nc from 'next-connect';
import db from '../../utils.js/db';
import data from '../../utils.js/data';
import Product from '../../models/Product';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
