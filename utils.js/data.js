import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',

      email: 'john@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Johnny',

      email: 'loli@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Moisture',
      slug: 'Moisture',
      category: 'lol',
      image: '/images/produkt2.webp',
      featuredImage: '/images/produkt2.webp',
      price: 70,
      countInStock: 20,
      description: 'A popular moisture',
      descriptionDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore ad beatae fugiat. Dolor minus excepturi totam similique officiis qui reprehenderit modi quasi illo exercitationem!',
    },
    {
      name: 'Candle Oil',
      slug: 'Candle Oil',
      category: 'massage',
      image: '/images/produkt1.webp',
      featuredImage: '/images/produkt1.webp',
      price: 80,
      countInStock: 20,
      description: 'A massage candle oil',
      descriptionDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore ad beatae fugiat. Dolor minus excepturi totam similique officiis qui reprehenderit modi quasi illo exercitationem!',
    },
    {
      name: 'Lorem shamp',
      slug: 'lorem-sha',
      category: 'Shamp',
      image: '/images/produkt3.webp',
      price: 90,
      countInStock: 20,
      description: 'lorem shampo lorem',
      descriptionDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore ad beatae fugiat. Dolor minus excepturi totam similique officiis qui reprehenderit modi quasi illo exercitationem!',
    },
    {
      name: 'lorem ips',
      slug: 'lorem ips',
      category: 'Oils',
      image: '/images/produkt4.webp',
      price: 90,
      countInStock: 20,
      description: 'Lorem ipsum dolor',
      descriptionDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore ad beatae fugiat. Dolor minus excepturi totam similique officiis qui reprehenderit modi quasi illo exercitationem!',
    },
    {
      name: 'Cream',
      slug: 'Cream',
      category: 'cream',
      image: '/images/produkt5.webp',
      price: 95,
      countInStock: 20,
      description: 'the best cream',
      descriptionDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore ad beatae fugiat. Dolor minus excepturi totam similique officiis qui reprehenderit modi quasi illo exercitationem!',
    },
    {
      name: 'Hand Spray',
      slug: 'Hand Spray',
      category: 'spray',
      image: '/images/produkt6.webp',
      price: 75,
      countInStock: 20,
      description: 'Hand spray lorem lorem',
      descriptionDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore ad beatae fugiat. Dolor minus excepturi totam similique officiis qui reprehenderit modi quasi illo exercitationem!',
    },
  ],
};

export default data;
