const main = () => {
  console.log("Hello, world o/");
};

const footnotes = () => {
  document.querySelectorAll('.footnote-definition').forEach(fn => {
    const id = fn.id;
    const ref = `${id}-ref`;

    document.querySelector(`.footnote-reference > a[href="#${id}"]`).setAttribute('id', ref);

    const link = document.createElement('a');
    link.appendChild(document.createTextNode('↩️'));
    link.setAttribute('href', `#${ref}`);

    fn.appendChild(link);
  })
}