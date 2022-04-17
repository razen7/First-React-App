// Use replace method of string to replace all .jpg with .png.
let sourceCode= `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" type="image/png" href="img/favicon.png">
        <title>CSS Grids Gallery</title>
    </head>
    <body>
        <div class="container">
            <div class="gallery">
                <figure class="gallery__item gallery__item--1">
                    <img src="img/image-1.jpg" alt="Gallery image 1" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src="img/image-2.jpg" alt="Gallery image 2" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src="img/image-3.jpg" alt="Gallery image 3" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src="img/image-4.jpg" alt="Gallery image 4" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src="img/image-5.jpg" alt="Gallery image 5" class="gallery__img">
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="img/image-6.jpg" alt="Gallery image 6" class="gallery__img">
                </figure>
            </div>
        </div>
    </body>
</html>`

console.log(sourceCode.replace(/\.jpg/gm,'.png'))