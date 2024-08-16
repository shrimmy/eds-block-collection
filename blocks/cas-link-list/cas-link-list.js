import '../../web-components/link-list.js';

export default async function decorate(block) {

  // Extract the content data
  const items = [];
  [...block.children].forEach((row) => {
    const anchor = row.querySelector('a');
    const img = row.querySelector('img');

    if (anchor && img) {
      const name = anchor.textContent.trim();
      const link = anchor.href;
      const imgSrc = img.src;
      const imgAlt = img.alt;

      items.push({ name, link, imgSrc, imgAlt });
    }
  });

  // debug
  //console.log(items);

  // Create the web component and set the content data
  const linkList = new LinkList();
  const ulElement = document.createElement('ul');
  ulElement.setAttribute('slot', 'links');
  for (const item of items) {
    const linkElement = document.createElement('li');
    linkElement.style.marginLeft = '2rem'; // There has to be a better way to do this
    const anchor = document.createElement('a');
    anchor.href = item.link;
    const div = document.createElement('div');
    div.innerHTML = item.name;
    div.appendChild(anchor);
    linkElement.appendChild(anchor);
    if (item.imgSrc) {
      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.alt = item.imgAlt;
      img.ariaHidden = true;
      anchor.appendChild(img);
      anchor.appendChild(div);
    }
    ulElement.appendChild(linkElement);
  }
  linkList.appendChild(ulElement);
  block.replaceWith(linkList);
};