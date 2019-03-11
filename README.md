[![npm](https://img.shields.io/npm/l/@y7k/component-text-input.svg)](https://www.npmjs.com/package/@y7k/component-text-input) [![npm](https://img.shields.io/npm/v/@y7k/component-text-input.svg)](https://www.npmjs.com/package/@y7k/component-text-input)

# Y7K Component: Text Input

This is a styled, custom `<input>` input Vue component. If you change the text, it will emit a event to its parent Vue component. It has a a little debounce delay by default. 

It is based on [Vue 2](https://vuejs.org), [MaintainableCSS](https://maintainablecss.com/) and the [Y7K Style Plate](https://github.com/y7k/style). Detailed information in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/lists/filterable-list/index-filterable-list).


![Component](img-component.png)


## Installation

##### Install npm package
```bash
npm install @y7k/component-text-input --save
```

##### Include in your project
```js
import textInput from '@y7k/component-text-input';
```

##### Variant 1: Register components globally:
```js
import textInput from '@y7k/component-text-input';
textInput.registerGlobally();
```
 
##### Variant 2: Use components directly:
```js
import { TextInput } from '@y7k/component-text-input';

// Vue component example
export default {

    components: {
        TextInput,
    },
}
```

##### Include styles
In your main.scss file
```scss
@import '@y7k/filterable-list/src/scss/textInput';

// If you don't set "node_modules" as a webpack include path:
@import '../[path]/../node_modules/@y7k/component-text-input/src/scss/textInput';
```


## Documentation
Please have a look at the usage documentation in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/ui-elements/text-input/index-text-input).
