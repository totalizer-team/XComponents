---
group:
  title: Border
  order: 0
toc: content
mobile: false
---

# Moving Border

Dependencies: `framer-motion`

## Demo

<code src="./examples/border/moving-border"></code>

## Usage

```jsx | pure
import React from 'react';
import { ListItemText } from '@mui/material';
import MovingBorder from '@totalizer/xcomponents/MovingBorder';

export default () => {
  return (
    <MovingBorder
      sx={{
        width: 160,
        p: 2,
      }}
    >
      <ListItemText primary="Totalizer" secondary="default" />
    </MovingBorder>
  );
};
```

## API

### Props

Props of the `Box` component are also available.

| Name    | Type           | Default | Description |
| ------- | -------------- | ------- | ----------- |
| animate | `AnimateProps` | `{}`    |             |

### AnimateProps

| Name       | Type        | Default                      | Description |
| ---------- | ----------- | ---------------------------- | ----------- |
| double     | `bool`      | `false`                      |             |
| width      | `number`    | `2`                          |             |
| color      | `MUI color` | `theme.palette.primary.main` |             |
| outline    | `MUI color` | `divider`                    |             |
| delay      | `number`    | `0`                          |             |
| loop       | `bool`      | `true`                       |             |
| angle      | `number`    | `315`                        |             |
| length     | `number`    | `40`                         |             |
| ease       | `string`    | `linear`                     |             |
| duration   | `number`    | `8`                          |             |
| distance   | `number`    | `20`                         |             |
| repeatType | `string`    | `loop`                       |             |
| disabled   | `bool`      | `false`                      |             |
