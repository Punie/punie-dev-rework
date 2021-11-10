const theme = () => {
  const $root = document.documentElement;
  const $body = document.querySelector('body');

  const local_theme_preference = localStorage.getItem('data-theme');
  const prefers_dark_mode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (local_theme_preference) {
    $root.setAttribute('data-theme', local_theme_preference);
  } else if (prefers_dark_mode) {
    $root.setAttribute('data-theme', 'dark');
  }

  setTimeout(() => {
    $body.style.transition =
      'color 500ms ease-in-out, background-color 500ms ease-in-out';
  }, 0);

  const toggleTheme = () => {
    const currentTheme = $root.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      $root.setAttribute('data-theme', 'light');
      localStorage.setItem('data-theme', 'light');
    } else {
      $root.setAttribute('data-theme', 'dark');
      localStorage.setItem('data-theme', 'dark');
    }
  };

  document
    .querySelector('#theme-toggle')
    .addEventListener('click', toggleTheme);

  document
    .querySelector('#mobile-theme-toggle')
    .addEventListener('click', toggleTheme);
};

const initMobileMenu = () => {
  const $mobile_navbar = document.querySelector('#mobile-navbar');
  const $mobile_navbar_icon = document.querySelector('.mobile-navbar-icon');

  const $mobile_panel = document.querySelector('#mobile-panel');
  const $mobile_menu = document.querySelector('#mobile-menu');

  const slideout = new Slideout({
    panel: $mobile_panel,
    menu: $mobile_menu,
    padding: 180,
    tolerance: 70,
  });
  slideout.disableTouch();

  $mobile_navbar_icon.addEventListener('click', () => {
    slideout.toggle();
  });

  slideout.on('beforeopen', () => {
    $mobile_navbar.classList.add('fixed-open');

    $mobile_navbar_icon.classList.add('icon-click');
    $mobile_navbar_icon.classList.remove('icon-out');
  });

  slideout.on('beforeclose', () => {
    $mobile_navbar.classList.remove('fixed-open');

    $mobile_navbar_icon.classList.add('icon-out');
    $mobile_navbar_icon.classList.remove('icon-click');
  });

  $mobile_panel.addEventListener('touchend', () => {
    slideout.isOpen() && $mobile_navbar_icon.click();
  });
};

const footnotes = () => {
  const $footnotes = document.querySelectorAll('.footnote-definition');

  if ($footnotes.length === 0) {
    return;
  }

  const $parent_container = $footnotes[0].parentElement;

  const $footnotes_container = document.createElement('div');
  $footnotes_container.setAttribute('class', 'footnotes');

  $parent_container.appendChild($footnotes_container);

  for (const $footnote of $footnotes) {
    const id = $footnote.id;
    const ref_id = `${id}-ref`;

    const $ref_item = document.querySelector(
      `.footnote-reference > a[href="#${id}"]`
    );
    $ref_item.setAttribute('id', ref_id);

    const $backlink = document.createElement('a');
    $backlink.setAttribute('href', `#${ref_id}`);

    const $icon = document.createElement('i');
    $icon.setAttribute('class', 'fas fa-reply');

    $backlink.appendChild($icon);
    $footnote.appendChild($backlink);
    $footnotes_container.appendChild($footnote);
  }
};

const copy_button = () => {
  const $code_blocks = document.querySelectorAll('.z-code');

  for (const $code_block of $code_blocks) {
    const $button = document.createElement('button');
    $button.setAttribute('class', 'btn-copy');

    const $clone_icon = document.createElement('i');
    $clone_icon.setAttribute('class', 'far fa-clone');

    const $validate_icon = document.createElement('i');
    $validate_icon.setAttribute('class', 'fas fa-check');

    $button.appendChild($clone_icon);
    $button.appendChild($validate_icon);
    $code_block.appendChild($button);

    $button.addEventListener('click', () => {
      const is_table = $code_block.hasAttribute('data-linenos');

      let text = '';
      if (is_table) {
        const $cells = $code_block.querySelectorAll(
          'table tbody > tr > td:nth-child(2)'
        );

        for (const $cell of $cells) {
          const range = document.createRange();
          range.selectNodeContents($cell);
          text += range.toString();
        }
      } else {
        text = $code_block.textContent;
      }

      navigator.clipboard
        .writeText(text)
        .then(() => {
          $button.classList.add('copied');

          return sleep(2000);
        })
        .then(() => {
          $button.classList.remove('copied');
        });
    });
  }
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
