import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestaurantServiceService } from '../restaurant-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface BranchOrdersInterface {
 id:String ;
 orderNumber: string ;
 price:number ;
 status:string ;
}
const s: BranchOrdersInterface[] = [
  {id: "ss", orderNumber: 'Hydrogen', price:3, status: 'H' }
];

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-myrestaurant',
  templateUrl: './myrestaurant.component.html',
  styleUrls: ['./myrestaurant.component.css']
})
export class MyrestaurantComponent implements OnInit ,AfterViewInit {
 orders:any
 displayedColumns: string[] = ['orderNumber', 'price', 'status','changeStatus'];
 dataSource: any
  constructor(
    private readonly restaurantService:RestaurantServiceService,
  ) { }

  ngOnInit(): void {
    this.getAllOrders("85abbb15-36ba-40ef-a626-0cbbb1e31a66")
  }

 async getAllOrders(branchId:any){
    (await this.restaurantService.getAllBranchOrders(branchId)).subscribe(
     async ( response ) => {
        this.dataSource =  new MatTableDataSource<BranchOrdersInterface>(response['Orders']);
         // this.orders = new MatTableDataSource(Array.of(this.orders)); 
      }
   )
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator ;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
   // this.dataSource.sort = this.sort;
    
  }

  console(data:any){
    console.log('test' ,data)
  }

  reject(data:any){
    console.log('test' ,data)

  }

  accept(){

  }

  wait(){}
}


