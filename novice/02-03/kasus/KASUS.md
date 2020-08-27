# RamdaJS, UnderscoreJS dan LodashJS

> Beberapa persamaan RamdaJS, LodashJS dan RamdaJS, diantara:

- Ketiganya merupakan library Javascript yang digunakan untuk functional Programming.
- Penulisan syntax Underscore dan Lodash cenderung mirip
- Ketiganya support browser dan console

## Contoh kemiripan penggunaan lodash dan underscore

#### Underscore

```sh
_.map([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
```

#### Lodash

```sh
function square (n) {
  return n * n;
}

_.map([4, 8], square);
// => [16, 64]
```
