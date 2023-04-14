import { SocialMediasArea } from "./components/SocialMediasArea"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { Tooltip } from "./components/UI/Tooltip"

function App() {

  return (
    <>
      <Tooltip tooltip={'oii'}>
        <h1 className="w-max">
          Evenilson Liandro
        </h1>
      </Tooltip>
      <ThemeSwitcher />
      <SocialMediasArea />
    </>
  )
}

export default App
