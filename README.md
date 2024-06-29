# Theme Color Token Demo

Give a demo: using color token under diverse themes.

**Example:**

```tsx
function Page() {

  return (
    <h1 style={{ color: themeColor.Title }}>Title</h1>
  )
}
```

also you can use it with StyleSheet, just like in React Native

```ts
const createStyleSheet = () => ({
  title: {
    color: themeColor.Title
  }
})

export default createStyleSheet
```

```tsx
function Container() {
  const styleSheet = createStyleSheet()

  return (
    <h1 style={styleSheet.title}>Title</h1>
  )
}

export default function Page() {
  return {
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  }
}
```