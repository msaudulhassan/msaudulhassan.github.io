# Editing Guidelines (MacOS)
## Images
1. Use ImageOptim to compress images.
1. If still not reasonably compressed, use Mogrify (ImageMagick) to further compress. e.g.
```bash
mogrify -format jpg -define jpg:extent=10kb -resize 400 <img_filename>
```
1. Further compress by using ImageOptim again.
