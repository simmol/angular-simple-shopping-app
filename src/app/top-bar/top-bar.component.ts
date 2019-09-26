import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  cart_count;
  _subscription;

  constructor(
    private cartService: CartService,
    private logger: LogService
  ) { 
    this.cart_count = cartService.getCount();
    this._subscription = cartService.countChange.subscribe((value) => { 
      this.cart_count = value;
    });
  }

  ngOnInit() {
    this.cart_count = this.cartService.getItems().length;
    this.logger.log(this.cart_count);
  }

  ngOnDestroy() {
   //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/