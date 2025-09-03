import { useBrightness } from "../context/BrightnessContext"
import "./BrightnessControl.css"

const BrightnessControl = () => {
  const { brightness, updateBrightness } = useBrightness()

  const handleChange = (e) => {
    updateBrightness(e.target.value)
  }

  return (
    <label className="brightness-slider">
      <input type="range" className="level" min="30" max="100" value={brightness} onChange={handleChange} />
      <svg className="brightness" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
        <path
          d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0-2c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3c0 .28.22.5.5.5zm0 13c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.28-.22-.5-.5-.5zm8-7c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5zm-13 0c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3c.28 0 .5-.22.5-.5zm11.24-4.83a.5.5 0 0 0-.71-.7l-2.12 2.12a.5.5 0 0 0 .71.7l2.12-2.12zm-9.9 9.9a.5.5 0 0 0-.7-.71l-2.12 2.12a.5.5 0 0 0 .7.71l2.12-2.12zm9.9 2.12a.5.5 0 0 0 .71-.7l-2.12-2.12a.5.5 0 0 0-.71.7l2.12 2.12zm-9.9-9.9a.5.5 0 0 0 .7.71l2.12-2.12a.5.5 0 0 0-.7-.71l-2.12 2.12z"
          fill="currentColor"
        />
      </svg>
    </label>
  )
}

export default BrightnessControl

