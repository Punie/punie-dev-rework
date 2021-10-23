const main = () => {
  console.log("Hello, world o/");
};

const footnotes = () => {
  const footnotes = document.querySelectorAll('.footnote-definition');

  for (const footnote of footnotes) {
    const id = footnote.id;
    const ref = `${id}-ref`;

    document.querySelector(`.footnote-reference > a[href="#${id}"]`).setAttribute('id', ref);

    const link = document.createElement('a');
    link.setAttribute('href', `#${ref}`);
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-reply')
    link.appendChild(icon);

    footnote.appendChild(link);
  }

  const footnotesContainer = document.createElement('div');
  footnotesContainer.setAttribute("class", "footnotes");

  footnotes[0].parentElement.appendChild(footnotesContainer);
  for (const footnote of footnotes) {
    footnotesContainer.appendChild(footnote);
  }
}