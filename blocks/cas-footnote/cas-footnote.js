import "../../web-components/footnote.js";

export default async function decorate(block) {

  // extract the content
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
        const li = document.createElement('li');
        li.innerHTML = col.innerHTML;
        ul.append(li);
    });
  });

  // add the footnote component
  const footnote = new CascadeFootnote();
  const footnoteList = document.createElement('div');
  footnoteList.setAttribute('slot', 'list');
  footnoteList.appendChild(ul);
  footnote.appendChild(footnoteList);

  // replace the block with the footnote component
  block.replaceWith(footnote);
}
