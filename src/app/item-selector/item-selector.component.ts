import { Component, OnInit } from '@angular/core';
import { ItemSelectorService } from './item-selector.service';

@Component({
    templateUrl: 'item-selector.component.html',
    providers: [ItemSelectorService]
})
export class ItemSelectorComponent {

    constructor(private settleService: ItemSelectorService) { }

    public itemList = [
        {
            "categoryId": 1,
            "categoryName": "All",
            "products": [
                {
                    "productId": 11,
                    "productName": "Product 1"
                },
                {
                    "productId": 12,
                    "productName": "Product 1"
                },
                {
                    "productId": 13,
                    "productName": "Product 1"
                },
                {
                    "productId": 14,
                    "productName": "Product 1"
                },
                {
                    "productId": 15,
                    "productName": "Product 1"
                },
                {
                    "productId": 16,
                    "productName": "Product 1"
                }
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "All",
            "products": [
                {
                    "productId": 11,
                    "productName": "Product 1"
                },
                {
                    "productId": 12,
                    "productName": "Product 1"
                },
                {
                    "productId": 13,
                    "productName": "Product 1"
                },
                {
                    "productId": 14,
                    "productName": "Product 1"
                },
                {
                    "productId": 15,
                    "productName": "Product 1"
                },
                {
                    "productId": 16,
                    "productName": "Product 1"
                }
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "All",
            "products": [
                {
                    "productId": 11,
                    "productName": "Product 1"
                },
                {
                    "productId": 12,
                    "productName": "Product 1"
                },
                {
                    "productId": 13,
                    "productName": "Product 1"
                },
                {
                    "productId": 14,
                    "productName": "Product 1"
                },
                {
                    "productId": 15,
                    "productName": "Product 1"
                },
                {
                    "productId": 16,
                    "productName": "Product 1"
                }
            ]
        }
    ];

    public selectedCategory = this.itemList[0];
    public selectedProducts = [];



    public addProduct(product) : void {
        if(product){
            this.selectedProducts.push(product);
        }
    }


}
