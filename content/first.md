+++
title = "Initial commit"
date = 2021-10-17

# [extra]
# author = "Hugo Saracino"
# photo = "img/hugo.jpg"
+++

This is the first article on this preview. Purely intended to showcase how the
site is meant to be rendered. For example when it comes to _italics_, **bold**,
~~strikethrough~~ or how emojis are displayed! :rocket:

<!-- more -->

## Hierarchy

### Subtitle

## Elements

### Text

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dictum
risus, non mollis ipsum. Interdum et malesuada fames ac ante ipsum primis in
faucibus. Morbi quis tellus non tellus blandit varius at in purus. Nunc aliquam
in erat semper varius. Nunc id nisl volutpat, mattis orci a, finibus urna.
Vivamus mattis, felis sed molestie fermentum, est mi ultricies tortor, eu luctus
metus tortor finibus sapien. Etiam eget sapien mauris. Morbi sodales vestibulum
lectus eget ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et
ultrices posuere cubilia curae; Sed dignissim lectus sit amet nulla tincidunt
sollicitudin.

Curabitur venenatis, elit fringilla dictum ultricies, sem purus commodo metus,
eu elementum ipsum erat blandit lorem. Proin tristique, leo in eleifend
lobortis, lacus orci sagittis mauris, mattis pharetra mi nunc fringilla libero.
Fusce id congue magna.

### Links

We can redirect [somewhere][repo] or even have footnote[^footnote-1] upon
footnote[^footnote-2] upon footnote[^footnote-3] (:construction:) yay!

### Lists

#### Ordered

1. Something
2. Something else
3. Whatever

#### Unordered

- Foo
- Bar
- Baz

#### Todo

- [x] Take out the trash
- [ ] Finish these styled

### Quotes

> Remember Peter, with great power, comes great responsibilities. And I won’t be
> here for ever to help you!

{% quote(author="Uncle Ben") %}
Remember Peter, with great power, comes great responsibilities. And I won’t be
here for ever to help you!
{% end %}

### Code

Code can be `inline` or use code-blocks:

```elm
module Main exposing (main)

import Browser
import Html


main =
    Browser.sandbox
        { init = ()
        , update = \_ _ -> ()
        , view = \_ -> Html.text "Hello world"
        }
```

and code blocks can display line numbers and highlight specific lines:

```rs,linenos,hl_lines=8-11
#[macro_use] extern crate rocket;

#[get("/hello/<name>/<age>")]
fn hello(name: &str, age: u8) -> String {
    format!("Hello, {} year old named {}!", age, name)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![hello])
}
```

### Math

Math expressions can be added as a block:

$$
\begin{array}{cl}
\displaystyle\frac{}{0 : \mathtt{Nat}} & {(Rule 1)}
\\\\ \\\\
\displaystyle\frac{n : \mathtt{Nat}}{\mathtt{succ}(n) : \mathtt{Nat}} & {(Rule 2)}
\\\\ \\\\
\end{array}
$$

But also displayed inline in a paragraph $x+\sqrt{1-x^2}$ like this!

[^footnote-1]: something from the first footnote!

[^footnote-2]: something from the second footnote!

[^footnote-3]: something from the third footnote!

[repo]: https://github.com/Punie
