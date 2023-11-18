import { setOrder } from "./TransientState.js"

document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "button") {
        console.log("button clicked")
        setOrder()
    }
})

export const getButton = () => {
    
    return `
    <button id="button">Save Order</button
    `
}