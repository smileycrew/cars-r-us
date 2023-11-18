import { setPaint } from "./TransientState.js"

document.addEventListener("change", (changeEvent) => {
   if (changeEvent.target.id === "paint") {
      const selection = parseInt(changeEvent.target.value)
      setPaint(selection)
   }
})

export const getPaints = async () => {
   const response = await fetch("http://localhost:8088/paints")
   const paints = await response.json()
   let html = `
      <h2>Paints</h2>
      <select id="paint">
      <option value="0">Select a paint</option>
   `
   const paintOptions = paints.map((paint) => {
      return `
         <option value="${paint.id}">${paint.name}
      `
   })
   html += paintOptions.join("")
   html += "</select>"
   return html
}

// To get the option that the user selected, you would access the .value property of the <select> element, not the individual options.
// const changeHandler = (changeEvent) => {
//     if (changeEvent.target.id === "resource") {
//        const chosenOption = changeEvent.target.value
//        console.log(parseInt(chosenOption))
//     }
//  }