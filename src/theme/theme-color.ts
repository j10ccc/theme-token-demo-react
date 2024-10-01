import light from "../tokens/light";
import dark from "../tokens/dark";
import { TokenCollection } from "../tokens/defineToken";
import themeInstance, { ThemeInstance } from "./theme-instance";

const colors: Record<ThemeInstance["mode"], TokenCollection> = {
  light,
  dark
}

const themeColor = new Proxy<TokenCollection>(colors[themeInstance.mode], {
  get: (_, key: keyof TokenCollection) => colors[themeInstance.mode][key]
})

export default themeColor
