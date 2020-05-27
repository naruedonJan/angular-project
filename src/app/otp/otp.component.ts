import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2'
import { isNumber } from 'util';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})



export class OtpComponent implements OnInit {
  phone_num;
  otp_num;
  isnumber = false;

  constructor(private router:Router) { }

  ngOnInit() {

  }
  clickOTP(phone_num){
    if(this.isnumber){
      // console.log("isnum")
      let popup = document.getElementById('card-popup');
      popup.style.display = "block"
      popup.style.animation = "anim-fade-card 0.4s ease forwards"
    }else{
      let alert = document.getElementById('alert-num');
      alert.style.display = 'block';
      Swal.fire('ขออภัยค่ะ','กรุณาใส่เฉพาะตัวเลข','error')
    }
  }

  keyCheck(event:any){
    let value = event.target.value;
    if (isNaN(value)) 
    {
      let alert = document.getElementById('alert-num');
      alert.style.display = 'block';
      this.isnumber = false;
    }else{
      let alert = document.getElementById('alert-num');
      alert.style.display = 'none';
      this.isnumber = true;
    }
  }

  clickNext(){
    this.router.navigateByUrl('home');
  }
  clickSubmit(otp_num){
    if(otp_num == undefined){
      Swal.fire('ขออภัยค่ะ','รหัสยืนยันผิดพลาด','error')
    }else{
      if(otp_num.length == 6){
        Swal.fire('ขอบคุณค่ะ','กรอกหมายเลข OTP สำเร็จ','success')
        let isnum = Number.isInteger(parseInt(otp_num));
        let popup = document.getElementById('card-popup');
        popup.style.display = "none"
        let yourpackage = document.getElementById('yourpackage');
        yourpackage.style.display = 'block';
      }else{
        Swal.fire('ขออภัยค่ะ','รหัสยืนยันผิดพลาด','error')
      }
    }
   

  }

  clickResend(){
    Swal.fire('กรุณารอสักครู่','ระบบกำลังส่งหมายเลข OTP ใหม่','success')
  }

}
