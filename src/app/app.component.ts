import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cart_count;
  constructor(
    private cartService: CartService,
    private logger: LogService
  ) { }

  ngOnInit() {
    this.cart_count = this.cartService.getItems().length;
    this.logger.log(this.cart_count);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/