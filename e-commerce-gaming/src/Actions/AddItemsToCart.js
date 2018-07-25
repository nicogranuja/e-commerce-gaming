export function addItem(item,price) {

    return {
        type: 'ADD_ITEM',
        addItem: item,
        price: price

    }
}