const footnotes = () => {
  const footnotes = document.querySelectorAll('.footnote-definition');

  if (footnotes.length === 0) {
    return;
  }

  const parentContainer = footnotes[0].parentElement;

  const footnotesContainer = document.createElement('div');
  footnotesContainer.setAttribute('class', 'footnotes');

  parentContainer.appendChild(footnotesContainer);

  for (const footnote of footnotes) {
    const id = footnote.id;
    const refId = `${id}-ref`;

    const refItem = document.querySelector(
      `.footnote-reference > a[href="#${id}"]`
    );
    refItem.setAttribute('id', refId);

    const backlink = document.createElement('a');
    backlink.setAttribute('href', `#${refId}`);

    const icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-reply');

    backlink.appendChild(icon);
    footnote.appendChild(backlink);
    footnotesContainer.appendChild(footnote);
  }
};

const theme = () => {
  const root = document.documentElement;

  const user_prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const local_data_theme = localStorage.getItem("data-theme");

  if (local_data_theme) {
    root.setAttribute('data-theme', local_data_theme);
  } else if (user_prefers_dark) {
    root.setAttribute('data-theme', 'dark');
  }

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
    }
  });
}