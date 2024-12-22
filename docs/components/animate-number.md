---
group:
  title: Animate
  order: 0
toc: content
mobile: false
---

# Animate Number

- Component: `XAnimateNumber`
- Dependencies: `framer-motion`

## Demo

<code src="./examples/animate-number" compact></code>

## Usage

```jsx | pure
import XAnimateNumber from '@totalizer/xcomponents/XAnimateNumber';
export default () => {
  return <XAnimateNumber to={500} unit="+" fontSize={24} />;
};
```

## API

Props of the `Typography` component are also available.

| Name    | Type           | Default | Description |
| ------- | -------------- | ------- | ----------- |
| animate | `AnimateProps` | `{}`    |             |

### AnimateProps

| Name     | Type     | Default | Description |
| -------- | -------- | ------- | ----------- |
| to       | `number` | `0`     |             |
| from     | `number` | `0`     |             |
| toFixed  | `number` | `0`     |             |
| once     | `bool`   | `true`  |             |
| duration | `number` | `2`     |             |
| amount   | `number` | `0.5`   |             |
| unit     | `string` | `""`    |             |
