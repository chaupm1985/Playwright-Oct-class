import {Locator,Page} from "@playwright/test";

export class CartPage{
    readonly quantityTextBox: Locator;
    readonly updateCartButton: Locator;
    readonly cartUpdateLabel: Locator;
    readonly proceedCheckOutButton: Locator;
    readonly clearCart:Locator;
    readonly cartemptyLabel:Locator;

    constructor(private page:Page){
       this.quantityTextBox = page.getByRole('spinbutton', { name: 'quantity' });
       this.updateCartButton = page.getByRole('button', { name: 'Update cart' });
       this.cartUpdateLabel = page.getByText('Cart updated.');
       this.proceedCheckOutButton = page.getByRole('link', { name: 'Proceed to checkout' })
       this.clearCart = page.getByText('Clear shopping cart');
       this.cartemptyLabel = page.getByRole('heading', { name: 'YOUR SHOPPING CART IS EMPTY' });
}
}