---
group:
  title: Animate
  order: 0
toc: content
mobile: false
---

# Animate Text

- Component: `XAnimateText`
- Dependencies: `framer-motion`

## Demo

<code src="./examples/animate-text" compact></code>

## Usage

```jsx | pure
import React from 'react';
import XAnimateText from '@totalizer/xcomponents/XAnimateText';

export default () => (
  <XAnimateText
    animate={{
      name: 'slideInUp',
      distance: 200,
    }}
    sx={{
      fontSize: 24,
    }}
  >
    Totalizer
  </XAnimateText>
);
```

## API

### Props

Props of the `Typography` component are also available.

| Name    | Type           | Default | Description |
| ------- | -------------- | ------- | ----------- |
| animate | `AnimateProps` | `{}`    |             |

### AnimateProps

| Name        | Type     | Default     | Description |
| ----------- | -------- | ----------- | ----------- |
| name        | `string` | `slideInUp` |             |
| distance    | `number` | `160`       |             |
| once        | `bool`   | `true`      |             |
| amount      | `number` | `1/3`       |             |
| repeatDelay | `number` | `100`       |             |
