// Description: This is a custom block that will wrap the content in a x-heading web component.

/// ***********************************
/// EDS Block: x-heading
function hasWrapper(el) {
  return !!el.firstElementChild && window.getComputedStyle(el.firstElementChild).display === 'block';
}

export default async function decorate(block) {
  // get the value from the content
  const [titleText] = [...block.children].map((c) => c.firstElementChild);
  let text = '';

  if (!hasWrapper(titleText)) {
    text = titleText.innerHTML;
  }

  const xHeading = new XHeading();
  //const xHeading = document.createElement('x-heading');
  const h2Element = document.createElement('h2');
  h2Element.onclick = () => {
    alert('Dummy behavior for x-heading - ' + text);
  };
  h2Element.setAttribute('slot', 'title');
  h2Element.innerHTML = text;
  xHeading.appendChild(h2Element);

  // clear out the block
  block.innerHTML = '';
  
  // add the web component
  block.appendChild(xHeading);
}

/// ***********************************
/// Web Component: x-heading
const template = document.createElement('template');
template.innerHTML = `
  <div>
    <slot name="title">Default Title Text</slot>
  </div>
`;
template.style = `
  :host {
    display: block;
    background-color: #f8f8f8;
  }
`;

class XHeading extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    const clone = template.content.cloneNode(true);
    shadowRoot.appendChild(clone);
  }
}

customElements.define('x-heading', XHeading);
