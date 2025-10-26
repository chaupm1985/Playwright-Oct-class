import {Locator,Page} from "@playwright/test";
export class shopPage{
    readonly firstItemAddCart: Locator;
    readonly firstItemName: Locator;
    readonly firstItemPrice: Locator;
    readonly cartLink: Locator;
    readonly cartAddItemAlert: Locator;
    readonly cartQuantityIcon: Locator;
    readonly cartItemNameDropdown: Locator;
    readonly carttotalPriceDropdown: Locator;

    constructor(private page:Page){
       this.firstItemAddCart = page.locator('(//div[@class="text-center product-details"])[1]//a[.="Add to cart"]');
       this.firstItemName = page.locator('(//h2[@class="product-title"])[1]//a');
       this.firstItemPrice = page.locator('(//span[@class="price"])[1]/span');
       this.cartAddItemAlert = page.getByText('Product added.');
       this.cartQuantityIcon = page.locator('//div[contains(@class,"et_b_header-cart") and contains(@class,"et-content-dropdown")]//span[@class="et_b-icon"]//span[contains(@class,"et-cart-quantity")]');
       this.cartItemNameDropdown = page.locator('//div[contains(@class,"et_b_header-cart") and contains(@class,"et-content-dropdown")]//h4[@class="product-title"]/a');
       this.carttotalPriceDropdown = page.locator('//div[contains(@class,"et_b_header-cart") and contains(@class,"et-content-dropdown")]//span[@class="et-cart-total-inner"]/span');
       this.cartLink = page.locator('//div[contains(@class,"et_b_header-cart") and contains(@class,"et-content-dropdown")]');

    }
}