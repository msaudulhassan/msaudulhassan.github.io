# Editing Guidelines (MacOS)
## Images
1. Use ImageOptim to compress images.
2. If still not reasonably compressed, use Mogrify (ImageMagick) to further compress. e.g.
```bash
mogrify -format jpg -define jpg:extent=10kb -resize 400 <img_filename>
```
3. Further compress by using ImageOptim again.

## Adding a new publication page
Publication page go to `pages/<publication-name>/index.html`. It'd be easier to copy `pages/stability-tractability/index.html` and modify it, instead of starting anew.

### Metadata
1. Webpage description and title must be:
```html
<meta name="description" content="Muhammad Saud Ul Hassan | Publications">
<title>Muhammad Saud Ul Hassan - Publications</title>
```
2. For published work, add the citation_title and citation_abstract metadata:
```html
<meta name="citation_title" content="Title of your publication">
<meta name="citation_abstract" content="Abstract of your publication">
```

### Navbar
1. Make sure the "publications" tab is marked `selected-tab` in the `nav-bar`

### Content
Add your content in `<div id=content> </div>`. You can use `page-title`, `page-links`, `page-authors`, and `page-abstract` classes to style the content. See, e.g., `pages/stability-tractability/index.html`

### Add Schema.org Markup
See [schema.org](https://schema.org) for details.