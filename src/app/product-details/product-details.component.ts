import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private logService: LogService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.product = products[+params.get('productId')];
      }
    );
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.logService.log(product.name + ' added to cart!')
  }
}