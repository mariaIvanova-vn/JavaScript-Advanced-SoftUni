class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let types = [];
        for (let vegg of vegetables) {
            let [type, quantity, price] = vegg.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let currVegg = this.availableProducts.find(v => v.type == type)
            if (currVegg == undefined) {
                this.availableProducts.push({ type, quantity, price });
                types.push(type);
            } else {
                currVegg.quantity += quantity;
                if (price > currVegg.price) {
                    currVegg.price = price;
                }
            }
        }
        return `Successfully added ${types.join(", ")}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);

            let currVegg = this.availableProducts.find(v => v.type == type)
            if (currVegg == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > currVegg.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += currVegg.price * quantity;
            currVegg.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);
        let currVegg = this.availableProducts.find(v => v.type == type)
        if (currVegg == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > currVegg.quantity) {
            currVegg.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            currVegg.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision() {
        let output = ["Available vegetables:"];
        this.availableProducts.sort((a, b) => a.price - b.price)
            .map(v => output.push(`${v.type}-${v.quantity}-$${v.price}`));
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return output.join('\n');
    }
}

