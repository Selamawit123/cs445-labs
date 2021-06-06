const shoppingCart = (function() {

    let basket = [];

    return {
        upsertItem: function(product) {
            for (let i = 0; i < basket.length; i++) {
                let temp = basket[i];
                if (temp.id === product.id) {
                    basket[i] = product;
                    return;
                }
            }
            basket.push(product);
        },
        getItemsCount: function() {
            return basket.length;
        },
        getTotalPrice() {
            return basket.reduce((total, p) => total + p.price * p.count, 0);
        },
        removeItemById(id) {
            basket = basket.filter(p => p.id !== id);
        }
    };

})();

const p1 = { id: 0, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5, count: 1 }
const p2 = { id: 1, name: 'Rice', description: 'white rice from China', price: 5.0, count: 4 }
const p3 = { id: 2, name: 'Pasta', description: 'Pasta from Italy', price: 3.0, count: 25 }

shoppingCart.upsertItem(p1);
shoppingCart.upsertItem(p2);
shoppingCart.upsertItem(p3);
console.log(shoppingCart.getTotalPrice());
p3.name = 'verra';
p3.price = 4;
shoppingCart.upsertItem(p3);

console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());