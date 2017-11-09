import { Component, OnInit } from '@angular/core';
import { ItemSelectorService } from './item-selector.service';

@Component({
    templateUrl: 'item-selector.component.html',
    styleUrls : ['item-selector.component.scss'],
    providers: [ItemSelectorService]
})
export class ItemSelectorComponent {

    constructor(private _itemSelectorService: ItemSelectorService) { }

    public itemList: Array<any> = [];
    public selectedCategory: any = {};
    public selectedProducts: Array<any> = [];
    public product: string = "";


    //add the prodcut to the selcted product grid
    public addProduct(product): void {
        if (product) {
            this.selectedProducts.push(product);
        }
    };

    //remove the product from the grid
    public removeProduct(index: number): void {
        this.selectedProducts.splice(index, 1);
    }

    //format the data to list in the auto complete
    public autocompleListFormatter(data: any): string {
        return `${data['productName']}`;
    }

    //on value selected from the dropdown and reset the dropdown
    public onSelect(value): void {
        this.resetSearchBox();
        this.addProduct(value);
    }

    //reset the input value
    public resetSearchBox(): void {
        this.product = "";
    }

    //check the category is the selected one in the list
    public isSelecetdCategory(category,selected) : boolean {
        return category.categoryId==selected.categoryId ? true : false;
    }

    //get the data from the service
    public getCategories(): void {
        this._itemSelectorService.getCategories().then(res => {
            this.itemList = JSON.parse(res);
            this.selectedCategory = this.itemList[0]; //by default select the first array
        }).catch(err => {
            console.log("error: ", err);
        })
    }

    //load the required data on component load
    ngOnInit(): void {
        this.getCategories();
    }


}
