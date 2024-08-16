import "../../web-components/hero-cta.js";
import "../../web-components/block-heading.js"

export default async function decorate(block) {
  const heroCta = new HeroCta();

  heroCta

  const blockHeading = new BlockHeading();
  blockHeading.textContent = 'Hero CTA';
  blockHeading.setAttribute('slot', 'block-heading');


  heroCta.appendChild(blockHeading);

  // heading.textContent = 'Hero CTA';
  // heading.setAttribute('slot', 'block-heading');

  // heroCta.appendChild(heading);
 
  block.append(heroCta);
}
