import { setType } from "./TransientState.js"

// set the "example" state
export const types = [
  {
    "id": 1,
    "type": "car"
  },
  {
    "id": 2,
    "type": "suv"
  },
  {
    "id": 3,
    "type": "truck"
  }
]
// funcion that returns the state in html
export const getTypes = () => {
  let html = `
    <section>
      <select id="type">
        <option value="0">Choose a type...</option>
  `
  const mapTypes = types.map((type) => {
    return `<option value="${type.id}">${type.type}</option>`
  })
  html += mapTypes.join("")
  html += `
      </select>
    </section>
  `
  return html
}
// event listener wil invoke function from transient state
document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "type") {
    const typeId = parseInt(changeEvent.target.value)
    setType(typeId)
  }
})
// traneisnet state will set the state

// when orders are retreived we use an if statement