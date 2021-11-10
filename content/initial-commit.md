+++
title = "Initial commit"
date = 2020-11-09
+++

:tada:

It's been more than a year now that I wanted to try and start a blog. But being
a tad OCD means I could never settle on a title, domain name, theme or even
color scheme for my code snippets (yeah, it was that bad).

Anyway, I feel it's time for me to take a leap of faith and don't fret too much
on such matters and most importantly, start doing some writin' yo!

So if you like to read about some niche experimental language you've never
heared of, decypher some big scary mathematical formulas I don't even always
understand myself, or just follow along as I talk endlessly about type systems
and other controversial subjects in software engineering (like semicolons, TDD,
or comments in code), let's roll! :rocket:

Oh, and by the way, I like emojis :rainbow:. They're cute. Don't be a hater!

<!-- more -->

Some random additional things to take into account before you go.

I chose [gitalk](https://github.com/gitalk/gitalk) for my comment system. What
that means is that you will need a [Github](https://github.com/) account if you
plan to leave a comment (and I _really_ invite you to!). I realize that might be
inconvenient if you are not a tech person but I truly hate
[disqus](https://disqus.com/) with a passion.

I won't talk _only_ about software engineering or computer science subjects. I
happen to be french, so naturally I **love** food and I **love** cooking and I
am really, _really_ passionate about it so there is a good chance I will write
about it from time to time.

Finally, I promised you some niche language snippets and weird math formulas so
here you go:

- a little bit of [idris](https://www.idris-lang.org/) wisdom (unfortunately,
  [chroma](https://github.com/alecthomas/chroma/) highlighting is quite buggy
  with idris still)

```idris
zipWith : (a -> b -> c) -> Vect n a -> Vect n b -> Vect n c
zipWith _ [] [] = []
zipWith f (x :: xs) (y :: ys) = f x y :: zipWith f xs ys
```

- the rules of induction for the natural numbers
  - $Rule 1$ : $0$ is a natural number
  - $Rule 2$ : if $n$ is a natural number, then $succ(n)$ is a natural number

$$
\begin{array}{cl}
\displaystyle\frac{}{0 : \mathtt{Nat}} & {(Rule 1)} \\\\ \\\\
\displaystyle\frac{n : \mathtt{Nat}}{\mathtt{succ}(n) : \mathtt{Nat}} & {(Rule 2)} \\\\ \\\\
\end{array}
$$
