<!-- Logo -->
<p align="center">
  <a href="#">
    <img height="120" width="120" background="#fff" src="./docs/logoo.svg">
  </a>
</p>

<!-- Name -->
<h1 align="center">
  <a href="#">React Skeleton Loading</a>
</h1>

<!-- Badges -->
<p align="center">
<a href="#">
  <img alt="dependencies" src="https://david-dm.org/vipul-21/react-skeleton-loading.svg" />
</a>

</p>

Hey, we're in development.
## Usage

### Installation

Npm: `$ npm i react-skeleton-loading --save`

**You can use it in two ways :**

```jsx
// import the individual component
import { Skeleton } from 'react-skeleton-loading'

const MyLoader = () => <Skeleton />
```

## Options

| Name                    | Type        | Default          | Description                                                |
| ----------------------- | ----------- | ---------------- | ---------------------------------------------------------- |
| **animate**             | `{Boolean}` | `true`           | `false` to render with no animation                        |
| **speed**               | `{Number}`  | `2`              | Animation speed in seconds                                 |
| **display**               | `{Boolean}`  | `2`              | Display skeleton loading or not                                 |
| **className**           | `{String}`  | `''`             | Classname in the parent `div`                                  |
| **width**               | `{Number}`  | `400`            | width of `div`                                |
| **height**              | `{Number}`  | `130`            | height of `div`                                 |
| **backgroundColor**        | `{String}`  | `#f3f3f3`        | Background                                                 |
| **gradientColor**      | `{String}`  | `#ecebeb`        | Animation color                                            |
| **widthRandomness**      | `{Number}`  | `1`              | Todo           |
| **heightRandomness**    | `{Number}`  | `1`              | Todo            |
| **style**               | `{Object}`  | `null`           | Ex: `{ width: '100%', height: '70px' }`                                |
| **children**           | `{node}`  | null | Todo. |


**Or in custom mode

```jsx
import { CustomSkeleton } from 'react-skeleton-loading'

const MyLoader = () => (
  <CustomSkeleton
    component={<Example />}
  />
)
```

## Options


| Name                    | Type        | Default          | Description                                                |
| ----------------------- | ----------- | ---------------- | ---------------------------------------------------------- |
| **component**               | `{node}`  | `null`           | Custom react component                          |
| **children**           | `{node}`  | null | Todo. |


## Credit

Originally made by [@VipulSingh][2].

Made possible by [@VikramThakur][3] by his valuable contributions.

[1]: https://github.com/vipul-21/react-skeleton-loading
[2]: https://github.com/vipul-21
[3]: https://github.com/rhydvik
