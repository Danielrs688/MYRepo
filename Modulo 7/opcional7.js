const pattern = /^<img\s?src="(.{2,}(\s)?){1}\.(png|jpg)"(\s)?\/>$/gim

const values = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

'<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>';

console.log(values.match(pattern));