export const shadowColors = ['37745B', '8B9D77', 'EDC5AB', '367d56', '8ea253', 'dfef89',
  'a67762', 'abad71', '8ea594', '395112', '84a02b', 'b7c656', 'cedf90',
  'c39dd7', 'ed7669', 'ef505d', '2a72f8', '1a512e', 'b0d3bf', '65b7b1'];

function fillUrls(obj) {
  let arr = [];
  for (let property in obj) arr.push(obj[property])
  return arr;
}

const urls = {
  "smartphones": 'https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2023---our-top-10-list.jpg',
  'laptops': "/shop/Laptop.jpg",
  'fragrances': 'https://www.vancleefarpels.com/content/dam/vancleefarpels/La-Maison/fragrances/van-cleef-arpels-fragrances-mainfeature-2000-1250-x3.jpg',
  "skincare": 'https://hellobubble.com/cdn/shop/products/fullline_bundle.jpg?v=1607433085&width=2000',
  "groceries": 'https://sqy7rm.media.zestyio.com/How-to-Save-Money-on-Groceries.jpg?width=1080&height=1080&fit=crop',
  "home-decoration": 'https://media.designcafe.com/wp-content/uploads/2020/09/30173843/home-decor-ideas-for-living-room.jpg',
  "furniture": 'https://www.englandfurniture.com/cid368/css/1000/images/11_6c00-cooper_sofa_detail.jpg',
  "tops": 'https://m.media-amazon.com/images/I/61l9ah6a4iL._AC_UY1100_.jpg',
  "womens-dresses": 'https://dy9ihb9itgy3g.cloudfront.net/products/4660/54906/54906__d_f.740.jpg',
  "womens-shoes": 'https://lapotoknn.ru/upload/iblock/478/4787da231da8619e428da3021094d282.jpg',
  "mens-shirts": 'https://cdn.josephturner.co.uk/Original/mens-navy-butcher-formal-striped-shirt-msbsnv_1.jpg',
  "mens-shoes": 'https://img.kwinto-shoes.ru/img/big/0018444.jpg',
  "mens-watches": 'https://ir.ozone.ru/s3/multimedia-j/c1000/6226297315.jpg',
  "womens-watches": 'https://nikawatches.ru/upload/iblock/83a/5gydv5r3hu494gusybgu0i8rrvpxty9a.jpg',
  "womens-bags": 'https://stockmann.ru/istk/H0w9mmTlChyvPyfp1h0loBWXzqeGVt6A8svRLnuwPPE/rs:fill-down:344:516:0/g:no/bG9jYWw6Ly8vdXBsb2FkL2libG9jay9kNmIvNTIzNTg2NF8xLmpwZw.jpg',
  "womens-jewellery": 'https://ik.imagekit.io/bfrs/tr:w-1000,h-1000,pr-true,cm-pad_resize,bg-FFFFFF/image_youbella/data/YBNK_5809_1.jpg',
  "sunglasses": 'https://sunniesstudios.com/cdn/shop/products/WhiteGoldPondFull_ValFront.jpg?v=1684985131',
  "automotive": 'https://ati-auto.ru/upload/iblock/c13/c13508dfa1a18d10f5e9212b767ae4d8.jpg',
  "motorcycle": 'https://motorrika.ru/image/cache/catalog/!!!-ALEX/MOTO/KAWASAKI%2021/MOTO/Ninja_1000SX/Ninja_1000SX_grey/01-1600x1200.jpg',
  "lighting": 'https://assets.andrewmartin.co.uk/images/story-fluid/257806-lighting-studio-2.jpg',
}
export const imgURLs = fillUrls(urls);






