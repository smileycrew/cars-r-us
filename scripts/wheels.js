import { setWheel } from "./TransientState.js"

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        const selection = parseInt(changeEvent.target.value)
        setWheel(selection)
    }
})

export const getWheels = async () => {
    
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    let html = `
    <h2>Wheels</h2>
    <select id="wheel">
    <option value="0">Select a wheel</option>
    `
    const wheelOptions = wheels.map((wheel) => {
        return `
            <option value="${wheel.id}">${wheel.type}</option>
        `
    })
    html += wheelOptions.join("")
    html += "</select>"
    return html
}