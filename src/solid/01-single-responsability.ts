(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {

        // private httpAdapter: Object;

        getProduct(id: number) {
            console.log('Product: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Saving in database', product);
        }
    }

    class Mailer {

        private masterEmail: string = 'fulano@google.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Sending email to customers', template);
        }
    }

    // Usually, this is a class to control the view that is displayed to the user. 
    // Remember that we can have many views that perform this same task.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        // dependecy injection
        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            // console.log('Product: ', { id, name: 'OLED Tv' });
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            // console.log('Saving in database', product);
            this.productService.saveProduct(product);
        }

        notifyClients() {
            // console.log('Sending email to customers');
            this.mailer.sendEmail(['heya@google.com', 'heyo@google.com'], 'to-clients');
        }

        // onAddToCart(productId: number) {        
        //     console.log('Adding to cart', productId);
        // }

    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart(productId: number) {
            console.log('Adding to cart', productId);
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cardBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    // productBloc.onAddToCart(10);
    cardBloc.addToCart(10);

})();