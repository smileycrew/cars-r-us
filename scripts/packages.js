import { setPackage } from "./TransientState.js"

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "package") {
        const selection = parseInt(changeEvent.target.value)
        setPackage(selection)
    }
})

export const getPackages = async () => {
    const response = await fetch("http://localhost:8088/packages")
    const packages = await response.json()
    let html = `
        <h2>Packages</h2>
        <select id="package">
        <option value="0">Select a package</opotion>
    `
    const packageOptions = packages.map((option) => {
        return `
            <option value="${option.id}">${option.name}</option>
        `
    })
    html += packageOptions.join("")
    html += "</select>"
    return html
}