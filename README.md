# Unstated With Containers

Higher-Order Component for subscribing to containers.

Simplifies your components, removing the need to constantly use the `Subscribe` component.

## Install

```shell
$ npm install --save unstated-with-containers
```

## Usage

```tsx
import * as React from 'react';
import {Container} from 'unstated';
import withContainers from 'unstated-with-containers';

class CounterContainer extends Container {
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

- **[unstated-connect2](https://github.com/fabiospampinato/unstated-connect2)**: Connect containers to components, without sacrificing performance.
- **[unstated-hmr](https://github.com/fabiospampinato/unstated-hmr)**: Preserve containers' states across Hot-Module-Replacements.
- **[unstated-compose](https://github.com/fabiospampinato/unstated-compose)**: Compose multiple containers into one.
- **[unstated-compose-suspense](https://github.com/fabiospampinato/unstated-compose-suspense)**: Add suspend/unsuspend support to `unstated-compose`.
- **[unstated-compose-suspense-middleware](https://github.com/fabiospampinato/unstated-compose-suspense-middleware)**: Add middlewares support to `unstated-compose-suspense`.
- **[unstated-suspense](https://github.com/fabiospampinato/unstated-suspense)**: Suspend/unsuspend updates propagation from your containers.
- **[unstated-suspense-middleware](https://github.com/fabiospampinato/unstated-suspense-middleware)**: Add middlewares support to `unstated-suspense`.

## License

MIT © Fabio Spampinato
