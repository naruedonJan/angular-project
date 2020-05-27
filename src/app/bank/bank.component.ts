import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onScroll(event:any){
    let ele = document.getElementById('bank-scroll');
    let right = document.getElementById('slide-right');
    let left = document.getElementById('slide-left');
    if(ele.scrollLeft == 0){
      right.style.display = 'block'
      left.style.display = 'none'
    }else if(ele.scrollLeft >= 226){
      right.style.display = 'none'
      left.style.display = 'block'
    }

  }

  clickConfirm(){
    Swal.fire('กรุณาตรวจสอบ SMS ','ยืนยันการทำรายการสำเร็จ','success')
  }

}
