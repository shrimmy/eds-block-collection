export default async function decorate(block) {
  const jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://code.jquery.com/jquery-3.7.1.slim.min.js';
  block.appendChild(jqueryScript);

  const buyboxScript = document.createElement('script');
  buyboxScript.src = '/blocks/x-buy-box/buybox-clientlib.js';
  block.appendChild(buyboxScript);

}