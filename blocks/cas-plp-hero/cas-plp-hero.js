import "../../web-components/cascade-plp-hero.js";
import "../../web-components/block-heading.js";

export default async function decorate(block) {
  //const plpHero = document.createElement('cascade-plp-hero');
  const plpHero = new PLPHero();

  plpHero.setAttribute('componentName', 'plp-hero-uid9f20');
  plpHero.setAttribute('heading-display-size', 'h1');
  plpHero.setAttribute('headingSize', 'h1');
  plpHero.setAttribute('theme', 'theme-night');
  plpHero.setAttribute('eyebrow-display-size', 'h5');
  plpHero.setAttribute('eyebrow-size', 'h2');
  plpHero.setAttribute('eyebrow-margin-bottom', 'mb-1');
  plpHero.setAttribute('desktop-video-url', 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/surface-pro-11th-edition-sapphire-hero-desktop_en-us');
  plpHero.setAttribute('desktop-image-url', 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-pro-11th-edition-sapphire-poster-desktop_tbmnl_en-us');
  plpHero.setAttribute('desktop-image-transparent', 'fmt=png-alpha&amp;scl=1');
  plpHero.setAttribute('desktop-image-alt-text', 'Surface Pro Sapphire from the front.');
  plpHero.setAttribute('tablet-video-url', 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/surface-pro-11th-edition-sapphire-hero-desktop_en-us');
  plpHero.setAttribute('tablet-image-url', 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-pro-11th-edition-sapphire-poster-desktop_tbmnl_en-us');
  plpHero.setAttribute('tablet-image-alt-text', 'Surface Pro Sapphire from the front.');
  plpHero.setAttribute('tablet-image-transparent', 'fmt=png-alpha&amp;scl=1');
  plpHero.setAttribute('mobile-video-url', 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/surface-pro-11th-edition-sapphire-hero-mobile_en-us-1');
  plpHero.setAttribute('mobile-image-url', 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-pro-11th-edition-sapphire-poster-mobile_tbmnl_en-us');
  plpHero.setAttribute('mobile-image-alt-text', 'Surface Pro Sapphire from the front.');
  plpHero.setAttribute('mobile-image-transparent', 'fmt=png-alpha&amp;scl=1');
  plpHero.setAttribute('translations', 'translations');
  plpHero.setAttribute('wordmark-image-url', 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Copilot--PC-wordmark-white');
  plpHero.setAttribute('wordmark-image-alt', 'Surface Pro is a Copilot+ PC.');
  //plpHero.setAttribute('--ds-plp-inner-background-color', '#0A0520');
  plpHero.setAttribute('heading-heading-text', 'Surface Pro');
  //plpHero.setAttribute('--ds-block-heading-title-background', 'linear-gradient(272.08deg, #FFB98A 7.15%, #E1DFF2 48.43%, #FFFFFF 71.63%, #E1DFF2 102.16%)');
  
  const blockHeading = new BlockHeading();
  blockHeading.setAttribute('slot', 'block-heading');
  //blockHeading.setAttribute('center-text', 'true');

  plpHero.append(blockHeading);
  
  block.replaceWith(plpHero);
}