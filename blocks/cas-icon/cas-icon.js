import "../../web-components/icon.js";

export default async function decorate(block) {
  // get the value from the content
  const [iconNameElement] = [...block.children].map((c) => c.firstElementChild);
  const iconName = iconNameElement.innerHTML;

  const icon = new Icon();
  icon.setAttribute('icon', iconName);
  icon.setAttribute('size', 'x4large');

  block.replaceWith(icon);
}