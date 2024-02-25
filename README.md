<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Triangular

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Triangular distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Triangular = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-ctor@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-triangular-ctor/tags). For example,

```javascript
Triangular = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-ctor@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Triangular = require( 'path/to/vendor/umd/stats-base-dists-triangular-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Triangular;
})();
</script>
```

#### Triangular( \[a, b, c] )

Returns a [triangular][triangular-distribution] distribution object.

```javascript
var triangular = new Triangular();

var mu = triangular.mean;
// returns 0.5
```

By default, `a = 0.0`, `b = 1.0`, and `c = 0.5`. To create a distribution having a different `a` (minimum support), `b` (maximum support), and `c` (mode), provide the corresponding arguments.

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.5 );

var mu = triangular.mean;
// returns ~3.167
```

* * *

## triangular

An [triangular][triangular-distribution] distribution object has the following properties and methods...

### Writable Properties

#### triangular.a

Minimum support of the distribution. `a` **must** be a number smaller than or equal to `b` and `c`.

```javascript
var triangular = new Triangular();

var a = triangular.a;
// returns 0.0

triangular.a = 0.5;

a = triangular.a;
// returns 0.5
```

#### triangular.b

Maximum support of the distribution. `b` **must** be a number larger than or equal to `a` and `c`.

```javascript
var triangular = new Triangular( 2.0, 4.0, 2.5 );

var b = triangular.b;
// returns 4.0

triangular.b = 3.0;

b = triangular.b;
// returns 3.0
```

#### triangular.c

Mode of the distribution. `c` **must** be a number larger than or equal to `a` and smaller than or equal to `b`.

```javascript
var triangular = new Triangular( 2.0, 5.0, 4.0 );

var c = triangular.c;
// returns 4.0

triangular.c = 3.0;

c = triangular.c;
// returns 3.0
```

* * *

### Computed Properties

#### Triangular.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var entropy = triangular.entropy;
// returns ~1.886
```

#### Triangular.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var kurtosis = triangular.kurtosis;
// returns -0.6
```

#### Triangular.prototype.mean

Returns the [expected value][expected-value].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var mu = triangular.mean;
// returns ~8.667
```

#### Triangular.prototype.median

Returns the [median][median].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var median = triangular.median;
// returns ~8.899
```

#### Triangular.prototype.mode

Returns the [mode][mode].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var mode = triangular.mode;
// returns 10.0
```

#### Triangular.prototype.skewness

Returns the [skewness][skewness].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var skewness = triangular.skewness;
// returns ~-0.422
```

#### Triangular.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var s = triangular.stdev;
// returns ~1.7
```

#### Triangular.prototype.variance

Returns the [variance][variance].

```javascript
var triangular = new Triangular( 4.0, 12.0, 10.0 );

var s2 = triangular.variance;
// returns ~2.889
```

* * *

### Methods

#### Triangular.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.cdf( 2.5 );
// returns 0.125
```

#### Triangular.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.logcdf( 2.5 );
// returns ~-2.079
```

#### Triangular.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.logpdf( 2.5 );
// returns ~-0.693
```

#### Triangular.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.pdf( 2.5 );
// returns 0.5
```

#### Triangular.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var triangular = new Triangular( 2.0, 4.0, 3.0 );

var y = triangular.quantile( 0.5 );
// returns 3.0

y = triangular.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var triangular = new Triangular( 2.0, 4.0, 3.0 );

var mu = triangular.mean;
// returns 3.0

var median = triangular.median;
// returns 3.0

var s2 = triangular.variance;
// returns ~0.167

var y = triangular.cdf( 2.5 );
// returns 0.125

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-triangular-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-triangular-ctor/main/LICENSE

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
