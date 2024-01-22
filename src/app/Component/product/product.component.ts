import { Component, OnInit } from '@angular/core';
import { ItemDescription } from 'src/app/Model/common.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  items:ItemDescription[] = [new ItemDescription('Learning How To Fly','./assets/Images/image.webp',4.5,101,2,'50% off',''),
  new ItemDescription('You are the Best Wife','./assets/Images/image2.webp',3.1,110,2,'50% off',''),
  new ItemDescription('How to Win Friends and Influence People','./assets/Images/image3.webp',4.1,100,2,'50% off',''),
  new ItemDescription('One Indian Girl','./assets/Images/image4.webp',4.2,210,2,'50% off',''),
  new ItemDescription('Wake Up, Life is Calling','./assets/Images/5.webp',3.1,310,2,'50% off',''),
  new ItemDescription('The Power of Your','./assets/Images/6.webp',2.2,500,2,'50% off',''),
  new ItemDescription('The Psychology of Money','./assets/Images/7.webp',3.3,670,2,'50% off','')];
  contructor() {}

  ngOnInit(): void {
      // this.productArray.itemName = 'Test',
      // this.productArray.itemImg = './assets/Images/image.webp'
      // this.productArray.category = '',
      // this.productArray.rating = 4;
      // this.productArray.actualPrice = 100;
      // this.productArray.discountPercentage = 2;
      // this.productArray.discountPrice = 50;
  }
}
