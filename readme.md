# migre-me

> Encurtar URLs no [Migre.me](http://migre.me/).

Instale com `npm install --save migre-me`.

## Uso

Veja um exemplo:

```js
var migreMe = require("migre-me");

migreMe("https://github.com/", function (err, data) {
  console.log(err || data);
  // { erro: 0,
  //   info: 'OK',
  //   criado_em: '2016-02-11 12:23:47',
  //   url: 'https://github.com/',
  //   id: 'sXgAv',
  //   migre: 'http://migre.me/sXgAv',
  //   ping: 'FAIL',
  //   consumo_api_hora: 4,
  //   tempo: 0.0064628124237061 }
});
```

## Licença

MIT