import { getInterior } from "./interior.js"
import { getOrders } from "./orders.js"
import { getPackages } from "./packages.js"
import { getPaints } from "./paints.js"
import { getButton } from "./save.js"
import { getWheels } from "./wheels.js"
import { getTypes } from "./types.js"

const container = document.querySelector(".container")

const render = async () => {
    const paintHTML =  await getPaints()
    const wheelHTML =  await getWheels()
    const interiorHTML = await getInterior()
    const packageHTML = await getPackages()
    const saveHTML = getButton()
    const orderHTML = await getOrders()
    const listOfTypes = getTypes()

    container.innerHTML = `
        <h1>cars-r-us</h1>
        <article class="container-article1">
                <section class="container-article1-section1">
                    ${paintHTML}
                    ${wheelHTML}
                </section>
                <section class="container-article1-section2">
                    ${interiorHTML}
                    ${packageHTML}
                </section>
        </article>

        <article class="container-article2">
                <section class="container-article2-section1">
                    ${listOfTypes}
                    ${saveHTML}
                </section>  
        </article>

        <article class="container-article3">
                <section class="container-article3-section1">
                    ${orderHTML}
                </section>
        </article>
    `
}

document.addEventListener("updateOrder", event => {
    render()
})

render()