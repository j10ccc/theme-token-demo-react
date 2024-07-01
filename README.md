# Theme Color Token Demo

Give a demo: using color token under diverse themes.

**Example:**

```tsx
function Container() {
  const { setColorMode } = useColorMode()

  useEffect(() => {
    // Subscribe device color mode change

    return () => {
      // Unsubscribe
    }
  }, [])

  return (
    <h1 style={{ color: themeColor.Title }}>Title</h1>
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

also you can use it with StyleSheet, just like in React Native

```ts
const createStyleSheet = () => StyleSheet.create({
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
```
