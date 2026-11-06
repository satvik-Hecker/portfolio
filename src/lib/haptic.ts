/**
 * Trigger haptic feedback on touch devices. Does nothing with a mouse.
 *
 * Android and most browsers use the Vibration API; iOS Safari has no
 * Vibration API, but toggling a hidden `<input switch>` gives a system tap.
 * Custom patterns only work where the Vibration API exists.
 *
 * Adapted from chanhdai.com (MIT), see .licenses/LICENSE.
 */
export function haptic(pattern: number | number[] = 10) {
  try {
    if (!window.matchMedia("(pointer: coarse)").matches) return

    if ("vibrate" in navigator) {
      navigator.vibrate(pattern)
      return
    }

    const label = document.createElement("label")
    label.ariaHidden = "true"
    label.style.display = "none"

    const input = document.createElement("input")
    input.type = "checkbox"
    input.setAttribute("switch", "")
    label.appendChild(input)

    try {
      document.head.appendChild(label)
      label.click()
    } finally {
      document.head.removeChild(label)
    }
  } catch {
    // Haptics are a nicety; never let them break navigation
  }
}
