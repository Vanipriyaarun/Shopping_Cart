document.getElementById('add1').addEventListener('click', (event) => {
  let element_my_cart = document.getElementById('my_cart');
  let new_li = document.createElement('li');
  new_li.innerText = 'Goat Milk Shampoo 500ml  Price:$ 7.00';
  let new_img = document.createElement('img');
  new_img.setAttribute("src", 'https://tinyurl.com/2zmh59nb');

  new_li.appendChild(new_img);

  element_my_cart.appendChild(new_li);

});

document.getElementById('add2').addEventListener('click', (event) => {
  let element_my_cart2 = document.getElementById('my_cart');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Moisturising Bodywash 500ml  Price: $ 8.99';
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", 'https://tinyurl.com/48tw7nj6');

  new_li2.appendChild(new_img2);

  element_my_cart2.appendChild(new_li2);

});

document.getElementById('add3').addEventListener('click', (event) => {
  let element_my_cart3 = document.getElementById('my_cart');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Honeyfix Facewash 400ml  Pirce: $ 5.99 ';
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", 'https://tinyurl.com/bdzjtu3y');

  new_li3.appendChild(new_img3);

  element_my_cart3.appendChild(new_li3);

});

document.getElementById('add4').addEventListener('click', (event) => {
  let element_my_cart4 = document.getElementById('my_cart');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Aloevera Gel (hair and face) 100g  Price: $ 4.01';
  let new_img4 = document.createElement('img');
  new_img4.setAttribute("src", 'https://tinyurl.com/2hs2ua9w');

  new_li4.appendChild(new_img4);

  element_my_cart4.appendChild(new_li4);

});

document.getElementById('add5').addEventListener('click', (event) => {
  let element_my_cart5 = document.getElementById('my_cart');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Cold Pressed Almond Oil 400ml  Price: $ 5.97';
  let new_img5 = document.createElement('img');
  new_img5.setAttribute("src", 'https://tinyurl.com/yd36w66s');

  new_li5.appendChild(new_img5);

  element_my_cart5.appendChild(new_li5);

});