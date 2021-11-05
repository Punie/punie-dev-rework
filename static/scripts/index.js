const theme = () => {
  const root = document.documentElement;
  const body = document.querySelector('body');

  const local_data_theme = localStorage.getItem('data-theme');
  const user_prefers_dark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (local_data_theme) {
    root.setAttribute('data-theme', local_data_theme);
  } else if (user_prefers_dark) {
    root.setAttribute('data-theme', 'dark');
  }

  setTimeout(() => {
    body.style.transition =
      'color 500ms ease-in-out, background-color 500ms ease-in-out';
  }, 0);

  const toggleTheme = () => {
    const currentTheme = root.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
    }
  };

  document
    .getElementById('theme-toggle')
    .addEventListener('click', toggleTheme);

  document
    .getElementById('mobile-theme-toggle')
    .addEventListener('click', toggleTheme);
};

const initMobileMenu = () => {
  const $mobileNav = document.getElementById('mobile-navbar');
  const $mobileNavIcon = document.querySelector('.mobile-navbar-icon');
  const $mobilePanel = document.getElementById('mobile-panel');
  const $mobileMenu = document.getElementById('mobile-menu');

  const slideout = new Slideout({
    panel: $mobilePanel,
    menu: $mobileMenu,
    padding: 180,
    tolerance: 70,
  });
  slideout.disableTouch();

  $mobileNavIcon.addEventListener('click', () => {
    slideout.toggle();
  });

  slideout.on('beforeopen', () => {
    $mobileNav.classList.add('fixed-open');

    $mobileNavIcon.classList.add('icon-click');
    $mobileNavIcon.classList.remove('icon-out');
  });

  slideout.on('beforeclose', () => {
    $mobileNav.classList.remove('fixed-open');

    $mobileNavIcon.classList.add('icon-out');
    $mobileNavIcon.classList.remove('icon-click');
  });

  $mobilePanel.addEventListener('touchend', () => {
    slideout.isOpen() && $mobileNavIcon.click();
  });
};

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
