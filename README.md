# Unstated - withContainers

Higher-Order Component for providing [unstated](https://github.com/jamiebuilds/unstated) containers to a component.

Simplifies your components, removing the need to constantly use unstate's `Subscribe` component.

It can also be used as a class decorator.

## Install

```shell
$ npm install --save unstated-with-containers
```

## Usage

```js
import * as React from 'react';
import {Container} from 'unstated';
import withContainers from 'unstated-with-containers';

class CounterContainer extends Container<any> {
  state = { value: 0 };
  increment = () => {
    this.setState({ value: this.state.value + 1 });
  }
  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  }
}

const App = withContainers ( CounterContainer )(
  ({ containers: [counter] }) => ( // props.containers[0] === props.container
    <>
      <p>{counter.state.value}</p>
      <button onClick={counter.increment.bind ( counter )}>Increment</button>
      <button onClick={counter.decrement.bind ( counter )}>Decrement</button>
    </>
  )
);
```

## Related

- **[unstated-compose](https://github.com/fabiospampinato/unstated-compose)**: Compose multiple containers into one.
- **[unstated-connect2](https://github.com/fabiospampinato/unstated-connect2)**: Easily connect your containers to components, without sacrificing performance.
- **[unstated-suspense](https://github.com/fabiospampinato/unstated-suspense)**: Unstated container with support for suspending/unsuspending updates propagation.
- **[unstated-compose-suspense](https://github.com/fabiospampinato/unstated-compose-suspense)**: unstated-compose containers with support for suspending/unsuspending updates propagation.

## License

MIT © Fabio Spampinato
