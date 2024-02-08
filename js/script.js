'use strict';

const products = [
  {
    title: 'Sunglasses',
    price: 50,
    description: 'Stay cool in the sun',
    rating: { rate: 4.5, count: 200 },
    category: 'Accessories',
  },
  {
    title: 'Headphones',
    price: 120,
    description: 'Immerse yourself in music',
    rating: { rate: 4.7, count: 150 },
    category: 'Electronics',
  },
  {
    title: 'Running Shoes',
    price: 80,
    description: 'Lightweight and comfortable for your daily run',
    rating: { rate: 4.3, count: 180 },
    category: 'Footwear',
  },
  {
    title: 'Backpack',
    price: 70,
    description: 'Carry your essentials with style',
    rating: { rate: 4.2, count: 220 },
    category: 'Accessories',
  },
  {
    title: 'Smartwatch',
    price: 200,
    description: 'Stay connected on the go',
    rating: { rate: 4.6, count: 120 },
    category: 'Electronics',
  },
];

/* let productContent = '';

for (const product of products) {
  let productCard = `<article>
<h2>${product.title}</h2>
<p>${product.description}</p>
</article>`;

  productContent += productCard;
  document.querySelector('main').innerHTML += productContent;
} */

const productsInfo = document.createElement('section');
for (const product of products) {
  const productArticle = document.createElement('article');
  const productHeader = document.createElement('h2');
  productHeader.innerText = product.title;

  const productDescription = document.createElement('p');
  productDescription.innerText = product.description;

  productArticle.appendChild(productHeader);
  productArticle.appendChild(productDescription);

  productsInfo.appendChild(productArticle);
}

document.querySelector('main').appendChild(productsInfo);
