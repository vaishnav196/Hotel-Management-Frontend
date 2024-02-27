import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MatTableDataSource } from '@angular/material/table';

export interface orders {
  orderId: number;
  productName: string;
  totalPrice: number;
  userId: number;
}

let orders: orders[] = [];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // dataSource =orders;
  orders: orders[];
  dataSource;
  displayedColumns: string[] = ['orderId',  'totalPrice', 'userId'];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    //  this.placedOrder(userId);
    // let userId=localStorage.getItem('userId');
    this.fetchAllgetOrders(userId);
  }

  // placedOrder(userId) {
  //   this.orderService.placeOrder(userId).subscribe((orders) => {
  //     console.log(orders)
  //   })
  // }


  fetchAllgetOrders(userId) {
    this.orderService.getOrders(userId).subscribe((getorder) => {
      // console.log(getorder)
      // orders=getorder;
     this.dataSource = getorder;
      console.log(getorder);
    })

  }



}
