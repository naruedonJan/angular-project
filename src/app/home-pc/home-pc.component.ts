import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pc',
  templateUrl: './home-pc.component.html',
  styleUrls: ['./home-pc.component.css']
})
export class HomePCComponent implements OnInit {

  range_internet = [0,0,0,0];
  package = 0;
  internet = 0;
  voice = 0;
  duration = 0;
  package_value = 0;
  check_mobile;

  constructor( private router:Router ) { }

  ngOnInit() {
  }
CheckDivce(){
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
    return check;
  }

  SlideRange(index){
    let slide_progress = document.getElementById('range-progress_'+index);
    let slide_pop = document.getElementById('value_pop_'+index);
    let input = document.getElementById('rang_slider_'+index);
    let max = parseInt(input.getAttribute('max'));
    let min = parseInt(input.getAttribute('min'));
    let bubble:any = document.getElementById('value_slider_'+index);
    console.log(this.range_internet[index]);
    let value = this.range_internet[index];
    // let slide_no = index
    slide_pop.style.display = 'block';
    bubble.style.display = 'block';
    slide_pop.style.animation = 'popup 0.5s ease forwards';
    bubble.style.animation = 'textup 0.5s ease forwards';
    input.onmousemove = () => {
    // input.ontouchmove = () => {
      if(index == 0){
        if(this.range_internet[0] >= 12 && this.range_internet[0] < 25){
          this.package = 12;
        }else if(this.range_internet[0] >= 25 && this.range_internet[0] < 37){
          this.package = 25;
        }else if(this.range_internet[0] >= 37 && this.range_internet[0] < 50){
          this.package = 37;
        }else if(this.range_internet[0] == 50){
          this.package = 50;
        }else if(this.range_internet[0] == 0) {
          this.package = 0;
        }
        bubble.innerHTML = this.package;
      }else if(index == 1){
        if(this.range_internet[1] == 3){
          this.internet = 6;
        }else if(this.range_internet[1] == 4){
          this.internet = 42;
        }else if(this.range_internet[1] == 0) {
          this.internet = 0;
        }else{
          this.internet = this.range_internet[1];
        }
        bubble.innerHTML = this.internet;
      }else if(index == 2){
        if(this.range_internet[2] >= 125 && this.range_internet[2] < 250){
          this.voice = 125;
        }else if(this.range_internet[2] >= 250 && this.range_internet[2] < 370){
          this.voice = 250;
        }else if(this.range_internet[2] >= 370 && this.range_internet[2] < 500){
          this.voice = 370;
        }else if(this.range_internet[2] == 500){
          this.voice = 500;
        }else if(this.range_internet[2] == 0) {
          this.voice = 0;
        }
        bubble.innerHTML = this.voice;
      }else if(index == 3){
        if(this.range_internet[3] >= 15 && this.range_internet[3] < 30){
          this.duration = 15;
        }else if(this.range_internet[3] == 30){
          this.duration = 30;
        }else if(this.range_internet[3] == 7) {
          this.duration = 7;
        }
        bubble.innerHTML = this.duration;
      }
      this.package_value = this.package + this.internet + this.voice + this.duration;

      this.setBubble(this.range_internet[index], slide_progress , slide_pop ,bubble,min,max);
      // input.ontouchend = () => {
        input.onmouseup = () => {
        slide_pop.style.animation = 'popdown 0.5s ease forwards';
        bubble.style.animation = 'textdown 0.5s ease forwards';
        setTimeout(() => {
          slide_pop.style.display = 'none';
          bubble.style.display = 'none';
        }, 100);

      }
    }

  }

  setBubble(range, progress, pop , bubble , min , max ) {
    const newVal = (((range - min) * 100) / (max - min));
    // bubble.innerHTML = range;
    bubble.style.left = `calc(${newVal}% + (${48 - newVal * 1.15}px))`;
    // bubble.style.top = `calc(${0 + (slide_no * 90)}px)`;
    progress.style.width = `calc(${newVal}% + (${0 - (newVal + 5)}px))`;
    pop.style.left = `calc(${newVal}% + (${36 - newVal * 1.15}px))`;
  }

  clickSubmit(){
    this.router.navigateByUrl('bank')
  }
}
