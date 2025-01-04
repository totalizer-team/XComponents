---
group:
  title: Menu
  order: 0
order: 1
toc: content
mobile: false
---

# Sidebar Menu

- Component: `SidebarMenu`

## Demo

`open=true`

<code src="./examples/menu/menu-sidebar-open" ></code>

`open=false`

<code src="./examples/menu/menu-sidebar-close" ></code>

## API

### Props

| Name       | Type              | Default  | Description |
| ---------- | ----------------- | -------- | ----------- |
| open       | `bool`            | `true`   |             |
| options    | `array<MenuItem>` | `[]`     |             |
| isSelected | `function`        | `()=>{}` |             |
| onClick    | `function`        | `()=>{}` |             |

### MenuItem Props

| Name       | Type                                                                    | Default  | Description |
| ---------- | ----------------------------------------------------------------------- | -------- | ----------- |
| icon       | `Material Icon`                                                         | `null`   |             |
| title      | `string`                                                                | `""`     |             |
| info       | `string`                                                                | `""`     |             |
| secondary  | `string`                                                                | `""`     |             |
| label      | `string`                                                                | `""`     |             |
| labelColor | `inherit \|primary \| secondary \| success \| error \| info \| warning` | `""`     |             |
| disabled   | `bool`                                                                  | `false`  |             |
| onClick    | `function`                                                              | `()=>{}` |             |
