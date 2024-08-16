import "../../web-components/card-item.js";

export default async function decorate(block) {

  // this is how i would prefer components to be used instead of having to provide the html structure
  // const html = `
  //   <cascade-card-item heading-text="Surface Pro 9" heading-size="h2" image-small="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorpstaging/Content-Card-Surface-Pro-9-Surface-Pro-Keyboard?wid=406&amp;hei=230&amp;fit=crop" body-text="The tablet flexibility you want and the laptop performance you need — all in one ultra-portable device" link-text="Surface Pro 9" link-url-target="https://www.microsoft.com/en-us/d/surface-laptop-5/8XN49V61S1BN?icid=deals-page_R1_CP2_SurfaceLaptop5_091123" link-type="cta"></cascade-card-item>
  // `
  // block.innerHTML = html;

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');

  const cardItem = new CardItem();

  const img = document.createElement('img');
  img.src = 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorpstaging/Content-Card-Surface-Pro-9-Surface-Pro-Keyboard?wid=406&amp;hei=230&amp;fit=crop';
  img.alt = 'Surface Pro 9';
  img.setAttribute('slot', 'image');
  cardItem.appendChild(img);

  const heading = document.createElement('h2');
  heading.setAttribute('slot', 'heading');
  heading.textContent = 'Surface Pro 9';
  cardItem.appendChild(heading);

  const description = document.createElement('p');
  description.setAttribute('slot', 'description');
  description.textContent = 'The tablet flexibility you want and the laptop performance you need — all in one ultra-portable device';
  cardItem.appendChild(description);

  //cardItem.headingText = 'Surface Pro 9';
  // cardItem.setAttribute('headingText', 'Surface Pro 9');
  // cardItem.setAttribute('headingSize', 'h2');
  // cardItem.setAttribute('imageSmall', 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorpstaging/Content-Card-Surface-Pro-9-Surface-Pro-Keyboard?wid=406&amp;hei=230&amp;fit=crop');
  // cardItem.setAttribute('bodyText', 'The tablet flexibility you want and the laptop performance you need — all in one ultra-portable device');
  // cardItem.setAttribute('linkText', 'Surface Pro 9');
  // cardItem.setAttribute('linkUrlTarget', 'https://www.microsoft.com/en-us/d/surface-laptop-5/8XN49V61S1BN?icid=deals-page_R1_CP2_SurfaceLaptop5_091123');
  // cardItem.setAttribute('linkType', 'cta');

  cardsContainer.appendChild(cardItem);
  //block.appendChild(cardsContainer);
  block.replaceWith(cardsContainer);
}