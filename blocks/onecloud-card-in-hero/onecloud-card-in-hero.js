export default function decorate(block) {

  const card = new onecloudwebcomponents.CardInHero();

  const textBlock = new onecloudwebcomponents.TextBlock();
  textBlock.setAttribute('slot', 'card-in-hero__top');
  card.appendChild(textBlock);

  // why is this not in the web-components package?
  // const badge = new onecloudwebcomponents.Badge();
  // badge.setAttribute('slot', 'text-block__badge');
  // textBlock.append(badge);

  const icon = new onecloudwebcomponents.Icon();
  icon.setAttribute('icon', 'heart');
  icon.setAttribute('size', '4xlarge');
  //badge.append(icon);
  card.append(icon);

  const span = document.createElement('span');
  span.setAttribute('slot', 'text-block__heading');
  span.innerText = 'Empowering others';
  textBlock.append(span);

  const p = document.createElement('p');
  p.setAttribute('slot', 'text-block__content');
  p.innerText = 'Our mission is to empower every person and every organization on the planet to achieve more.';
  textBlock.append(p);

  //block.append(card);


  const card_in_hero_html = `
  <reimagine-card-in-hero card-base="glass">
    <reimagine-text-block slot="card-in-hero__top">
      <reimagine-badge slot="text-block__badge">
        <reimagine-icon icon="heart"></reimagine-icon>
      </reimagine-badge>
      <span slot="text-block__heading">Empowering others</span>
      <p slot="text-block__content">
        Our mission is to empower every person and every organization on the
        planet to achieve more.
      </p>
    </reimagine-text-block>
    <reimagine-button-group slot="card-in-hero__bottom">
      <reimagine-button size="large" appearance="button--primary" shape="rounded">
        <span slot="button__text">Label</span>
      </reimagine-button>
      <reimagine-button
        size="large"
        appearance="button--secondary"
        shape="rounded"
      >
        <span slot="button__text">Label</span>
      </reimagine-button>
    </reimagine-button-group>
  </reimagine-card-in-hero>
  `
  const htmlBlock = document.createElement('div');
  htmlBlock.innerHTML = card_in_hero_html;

  block.replaceWith(htmlBlock);

  
}
