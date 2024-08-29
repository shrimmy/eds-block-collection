
function createButton(label, appearance) {
  const button = new onecloudwebcomponents.Button();
  button.setAttribute('size', 'large');
  button.setAttribute('appearance', appearance);
  button.setAttribute('shape', 'rounded');
  button.innerHTML = `<span slot="button__text">${label}</span>`;
  return button;
}

export default function decorate(block) {

  const paragraph = block.querySelector('p');
  const paragraphText = paragraph.innerText;
  const header = document.querySelector('h1, h2, h3, h4');
  const headerText = header.innerText;
  header.remove(); // will be replaced with a span
  const links = block.querySelectorAll('a');
  links.forEach(link => link.remove());

  const card = new onecloudwebcomponents.CardInHero();
  card.setAttribute('card-base', 'glass');

  const textBlock = new onecloudwebcomponents.TextBlock();
  textBlock.setAttribute('slot', 'card-in-hero__top');
  card.appendChild(textBlock);

  // why is this not in the web-components package?
  const badge = new onecloudwebcomponents.Badge();
  badge.setAttribute('slot', 'text-block__badge');
  textBlock.append(badge);

  const icon = new onecloudwebcomponents.Icon();
  icon.setAttribute('icon', 'bot');
  card.append(icon);
  
  badge.append(icon);
  
  const span = document.createElement('span');
  span.setAttribute('slot', 'text-block__heading');
  span.innerText = headerText;
  textBlock.append(span);

  paragraph.setAttribute('slot', 'text-block__content');
  textBlock.append(paragraph);

  const buttonGroup = new onecloudwebcomponents.ButtonGroup();
  buttonGroup.setAttribute('slot', 'card-in-hero__bottom');
  links.forEach(link => {
    var appearance = 'button--secondary';
    if (links[0] === link) {
      appearance = 'button--primary';
    }
    const button = createButton(link.innerText, appearance);
    button.setAttribute('href', link.getAttribute('href'));
    buttonGroup.append(button);
  });
  
  card.append(buttonGroup);

  block.append(card);

  const card_in_hero_html = `
  <reimagine-card-in-hero card-base="glass">
    <reimagine-text-block slot="card-in-hero__top">
      <reimagine-badge slot="text-block__badge">
        <reimagine-icon icon="bot"></reimagine-icon>
      </reimagine-badge>
      <span slot="text-block__heading">${headerText}</span>
      <p slot="text-block__content">
        ${paragraphText}
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

  // optional method of adding the block as html text
  //block.append(htmlBlock);

  
}
