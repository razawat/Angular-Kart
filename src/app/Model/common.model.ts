//  ------ Class used for a item ---------------- //
export class ItemDescription {
  itemName: string = '';
  itemImg: string = '';
  rating: number = 0;
  actualPrice: number = 0;
  discountPrice: number = 0;
  discountPercentage: string = '';
  category: string = '';

  constructor(itemName:string,itemImg:string,rating:number,actualPrice:number,discountPrice:number,discountPercentage:string,category:string) {
    this.itemName = itemName;
    this.itemImg = itemImg;
    this.rating = rating;
    this.actualPrice = actualPrice;
    this.discountPrice = discountPrice;
    this.discountPercentage = discountPercentage;
    this.category = category;
  }
}
