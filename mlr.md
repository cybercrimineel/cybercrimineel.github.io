# mlr
_Markdown with LaTeX renderer_

A standalone webpage which can fetch, parse and display Markdown files
containing LaTeX equations.

## clarification

Imagine the following directory of files being served:

```
/
├── blog
│   ├── post_1.md
│   ├── post_2.md
│   ├── post_3.md
│   └── post_4.md
├── hello.md
└── render.html
```

Navigating to `render.html?_=hello` will render the contents of `/hello.md`. It
works the same for files in subdirectories, so `render.html?_=blog/post_1` will
render `/blog/post_1.md` for example.

## Markdown with LaTeX?

Take a look at this Markdown code:

```markdown
# Euler's identity

In mathematics, Euler's identity is the equality $e^{i\pi} + 1 = 0$ where $e$
is the base of natural logarithms, $i$ satisfies $i^2 = -1$ and $\pi$ is the
ratio of the circumfence of a circle to its diameter.
```

The LaTeX equations inbetween the `$`'s will be rendered as actual equations.
Vanilla Markdown doesn't support this, though this syntax is compatible with
[Pandoc](https://github.com/jgm/pandoc).

This project uses [Marked](https://github.com/markedjs/marked) and 
[KaTeX](https://github.com/KaTeX/KaTeX) to render the content of the files.
Syntax highlighting for code is done using
[highlight.js](https://github.com/highlightjs/highlight.js)

## building

Build using `npm run build` or `yarn build`. This procedure will create the
`render.html` file.