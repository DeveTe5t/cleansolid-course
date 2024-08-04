
type SizeProduct = '' | 'S' | 'M' | 'L' | 'XL';

class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: SizeProduct = '',
    ) { }

    isProductReady(): boolean {

        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((this[key] as string).length <= 0) throw new Error(`${key} is empty`);
                    // if (this[key].length <= 0) throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((this[key] as number) <= 0) throw new Error(`${key} is zero`);
                    // if (this[key] <= 0) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }

        return true;
    }

    toString() {
        // No dry
        // if (this.name.length <= 0) throw new Error('Name is empty');
        // if (this.price <= 0) throw new Error('Price is zero');
        // if (this.size.length <= 0) throw new Error('Size is empty');        

        if (!this.isProductReady()) return;

        return `${this.name} (${this.price}) ${this.size}`;
    }
}

(() => {

    const bluePants = new Product('Blue Pants', 12, 'L');
    // const bluePants = new Product('Blue Large Pants', 10, 'M');
    console.log(bluePants.toString());
})();