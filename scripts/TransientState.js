const transientState = {
    "paintId": 0,
    "wheelId": 0,
    "interiorId": 0,
    "packageId": 0,
    "typeId": 0
}

export const setPaint = (chosenPaintId) => {
    transientState.paintId = chosenPaintId
    console.log(transientState)
}

export const setWheel = (chosenWheelId) => {
    transientState.wheelId = chosenWheelId
    console.log(transientState)
}

export const setInterior = (chosenInteriorId) => {
    transientState.interiorId = chosenInteriorId
    console.log(transientState)
}

export const setPackage = (chosenPackageId) => {
    transientState.packageId = chosenPackageId
    console.log(transientState)
}
// function that will set the transient state using an id
export const setType = (id) => {
    transientState.typeId = id
    console.log(transientState)
}
export const setOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("updateOrder")

    document.dispatchEvent(customEvent)
}