# jurischain-module

Jurischain module is a JavaScript library for dealing with [Jurischain](https://www.jurischain.com.br/) as CJS module.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install jurischain-module.

```bash
npm install --save-dev jurischain-module
```

## Usage

```js
const { solve: jurischainSolver } = require('jurischain-module')

jurischainSolver({
    seed: 'seed-xpto'
    difficulty: 10
}).then((solution) => console.log(solution))
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)