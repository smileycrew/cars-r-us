import { setInterior } from "./TransientState.js"

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "material") {
        const selection = parseInt(changeEvent.target.value)
        setInterior(selection)
    }
})

export const getInterior = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()
    let html = `
        <h2>Interiors</h2>
        <select id="material">
        <option value="0">Select a material</option>
    `
    const interiorOptions = interiors.map((material) => {
        return `
            <option value="${material.id}">${material.material}
        `
    })
    html += interiorOptions.join("")
    html += "</select>"
    return html
}