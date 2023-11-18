export const getOrders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=wheel&_expand=interior&_expand=package")
    const orders = await response.json()
    let html = `
        <h2>Custom Car Orders</h2>    
    `
    const placedOrders = orders.map((order) => {
        if (order.typeId === 1) {
            let costOfOrder = order.paint.price + order.wheel.price + order.interior.price + order.package.price
            return `
                <div>${order.paint.name} car with ${order.wheel.type} wheels, ${order.interior.material}, and the ${order.package.name} for a total cost of ${costOfOrder}</div>
            `
        } else if (order.typeId === 2) {
            let costOfOrder = (order.paint.price + order.wheel.price + order.interior.price + order.package.price) * 1.5
            return `
                <div>${order.paint.name} SUV with ${order.wheel.type} wheels, ${order.interior.material}, and the ${order.package.name} for a total cost of ${costOfOrder}</div>
            `
        } else {
            let costOfOrder = (order.paint.price + order.wheel.price + order.interior.price + order.package.price) * 2.25
            return `
                <div>${order.paint.name} truck with ${order.wheel.type} wheels, ${order.interior.material}, and the ${order.package.name} for a total cost of ${costOfOrder}</div>
            `
        }

    })
    html += placedOrders.join("")

    return html
}