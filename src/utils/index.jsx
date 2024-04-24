export function getMinimumCart(array) {
    const sortedCarts = array.toSorted((a, b) => a['total'] - b['total'])
    
    return array.findIndex((el) => el === sortedCarts[0]);
}

export function getTotalQueueCount(array) {
    return array.map((info) => {
        const total = info.customers.reduce((acc, current) => acc + current, 0)
        return {
            ...info,
            "total": total
        }
    })
}

export function addToQueue(array, queueId, value) {
    const customers = array[queueId]["customers"];
    customers.push(value);
}