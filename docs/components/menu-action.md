---
nav:
  title: Components
  order: 1
group:
  title: Menu
  order: 0
toc: content
mobile: false
---

# Action Menu

- Component: `ActionMenu`

## Demo

<code src="./examples/menu-action" ></code>

## Usage

```js
<ActionMenu
  options={options}
  placement="bottom"
  onClick={(item) => {
    console.log(item);
  }}
>
  <IconButton>
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
  </IconButton>
</ActionMenu>
```

## API

### Props

| Name      | Type                                                                  | Default  | Description |
| --------- | --------------------------------------------------------------------- | -------- | ----------- |
| options   | `array<MenuItem>`                                                     | `[]`     |             |
| arrow     | `bool`                                                                | `true`   |             |
| width     | `Number \| String`                                                    | `auto`   |             |
| placement | `top-start \| top \| top-end \| bottom-start \| bottom \| bottom-end` | `bottom` |             |
| onClick   | `function`                                                            | `()=>{}` |             |

### MenuItem Props

c: `DEFAULT` | `Title` | `Divider`

#### DEFAULT

| Name       | Type                                                                    | Default  | Description |
| ---------- | ----------------------------------------------------------------------- | -------- | ----------- |
| avatar     | `url string`                                                            | `""`     |             |
| icon       | `Material Icon`                                                         | `null`   |             |
| title      | `string`                                                                | `""`     |             |
| info       | `string`                                                                | `""`     |             |
| secondary  | `string`                                                                | `""`     |             |
| label      | `string`                                                                | `""`     |             |
| labelColor | `inherit \|primary \| secondary \| success \| error \| info \| warning` | `""`     |             |
| disabled   | `bool`                                                                  | `false`  |             |
| onClick    | `function`                                                              | `()=>{}` |             |

#### Title

| Name  | Type     | Default | Description |
| ----- | -------- | ------- | ----------- |
| title | `string` | `""`    |             |

#### Divider

No properties.
