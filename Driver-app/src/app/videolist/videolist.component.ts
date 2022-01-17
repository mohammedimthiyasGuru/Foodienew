import { Component, ViewChild , OnInit,ElementRef} from '@angular/core';

import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';


import { Router } from '@angular/router';
import { City_list } from '../../assets/xlsxtojson'
import { LocalStorage } from 'src/_core/_data/localstorage';
import { CommonService } from 'src/_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-videolist',
  moduleId: 'src/app/app.component',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.scss'],
})
export class VideolistComponent implements OnInit {


  @ViewChild('videoPlayer') videoplayer: ElementRef;



  loader : boolean = true;
  video_scr = './../../assets/RW20seconds_1.mp4';






   //////Chat Process////

   chat_type = "";
   chat_text = '';
   chat_location = '';
   chat_image = '';

  chat_view = false;

  videoSource : any;

  cameraSrc : any = "./../../assets/RW20seconds_1.mp4";

  timeLeft: number = 2;
  interval;

  chat_history = [];

  reply_id :any;
  reply_text : any;

  chat_list = [];

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  chat_count = 0;
  like_count = 0;
  like_status = false;
  share_count = 0;
  follow_status = false;
  video_id = 0;


  merchant_image =  '';
  merchant_name =  '';
  video_note = '';
  video_date  = '';



  video_list = []

  public show: boolean = true;

  final_data = [];


  merchant_id : any;
  user_id : any;



  public type: string = 'component';

  public disabled: boolean = false;




  ngOnInit() {
    console.log(this.storage.user);
    this.startTimer();
    this.service.new_video_list().subscribe((response:any) => {
      console.log(response);
      if(response.count !== 0){
        this.video_list = [];
        response.rows.forEach(element => {
          let c = {
            merchant_id : element.profile_id,
            merchant_image : element.merchant_info.profile_img || './../../assets/profile_user.jpg',
            merchant_name: element.merchant_info.profile_biz_name,
            video_id : element.id,
            video_url : element.video_link,
            video_note : element.video_note,
            video_date : element.createdAt,
          }
          this.video_list.push(c)
        });
      }
      }, err => {
      });
  }



  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: ScrollbarOptions = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(public toastr: ToastrManager,private router: Router,public City_list : City_list,private storage: LocalStorage,    private service: CommonService) {

  }




  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(){
    console.log("data");
    this.config = {
      a11y: { enabled: true },
      direction: 'vertical',
      slidesPerView: 1,
      keyboard: true,
      mousewheel: true,
      scrollbar: false,
      navigation: true,
      pagination: false
    }
  }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls(): void {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;
      this.config.navigation = true;
    }

    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.setIndex(0);
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
    this.merchant_id =  this.video_list[index].merchant_id;
    this.user_id = this.storage.user.profile_id;
    this.video_id = this.video_list[index].video_id;


    this.merchant_image = this.video_list[index].merchant_image;
    this.merchant_name = this.video_list[index].merchant_name;
    this.video_note = this.video_list[index].video_note;
    this.video_date  = this.video_list[index].video_date;






    this.check_count_status();
    for(let a = 0 ; a < this.video_list.length; + a++){
      var myVideo: any = document.getElementById(""+a);
      if(myVideo !== null){
        myVideo.pause();
      }
      if(a == this.video_list.length - 1){
        var myVideo: any = document.getElementById(""+index);
        console.log(myVideo);
        myVideo.play();
        myVideo.controls = false;

      }
    }


  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }



  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.toggleDirection()
        this.pauseTimer();
        this.loader = false;
        this.startTimer2();
      }
    },1000)
  }


  startTimer2() {
    this.timeLeft = 1;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
        this.onIndexChange(0);
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }









 hide_chat(data){
   this.chat_text = '';
   this.chat_type = 'text';
  this.chat_view = data
  if(data == true){
    let c = {
      "chat_merchat_id":this.merchant_id,
      "video_id":this.video_id
    }
    this.service.fetch_video_chat(c).subscribe((response:any) => {
      console.log(response);
      this.chat_history = response.rows;
      this.chat_history.forEach(element => {
        element.chat_like_status = false;
        element.chat_text_option = false;
        element.reply_record =  JSON.parse(element.reply_record);
        element.chat_like_data =  JSON.parse(element.chat_like_data);
        var chat_like_datas =  element.chat_like_data
         chat_like_datas.forEach(elements => {
          if(elements == this.user_id){
            element.chat_like_status = true;
          }
        });
      });
      console.log(this.chat_history);
      }, err => {
      });
  }else{
   this.check_count_status();
  }
 }




 submit_chat(){
  let user_details = this.storage.user;
  console.log(user_details);
  if(this.chat_text !== ''){
     this.chat_location = '';
     this.chat_image = '';
     this.chat_type = "text";
  }
  if(this.chat_location !== ''){
    this.chat_text = '';
    this.chat_image = '';
    this.chat_type = "location";
  }
  if(this.chat_image !== ''){
    this.chat_text = '';
    this.chat_location = '';
    this.chat_type = "image";
 }

   let chat_stru = {
     "user_image":user_details.profile_img || "./../../assets/profile_user.jpg" ,
     "user_name":user_details.user_full_name,
     "user_created_date": ""+new Date(),
     "reply_record": JSON.stringify([]),
     "type":this.chat_type,
     "text":this.chat_text,
     "location":this.chat_location,
     "image":this.chat_image,
     "chat_like_status" : false,
     "chat_like_data": JSON.stringify([]),
     "chat_merchat_id":this.merchant_id,
     "chat_user_id": this.user_id,
     "video_id":this.video_id
   }

  this.service.create_video_chat(chat_stru).subscribe((response:any) => {
    console.log(response);
    this.hide_chat(true);
    }, err => {
    });
 }


 chat_likes(data,status,index){
   console.log(data,status,index);
   if(status == true){
      data.chat_like_data.push(this.user_id);
      console.log(data.chat_like_data);
      let c = {
      video_chat_id : data.video_chat_id,
      chat_like_data : JSON.stringify(data.chat_like_data)
      }
      this.service.update_video_chat(c).subscribe((response:any) => {
        console.log(response);
        this.hide_chat(true);
        }, err => {
        });
   }
   else{
    data.chat_like_data.forEach((element, index) => {
      if(element == this.user_id){
        data.chat_like_data.splice(index, 1);
        let c = {
          video_chat_id : data.video_chat_id,
          chat_like_data : JSON.stringify(data.chat_like_data)
          }
          this.service.update_video_chat(c).subscribe((response:any) => {
            console.log(response);
            this.hide_chat(true);
            }, err => {
            });
      }
    });
   }
 }




 check_count_status(){
  this.like_count = 0;
  this.like_status = false;
  this.share_count = 0;
  this.chat_count = 0;
  let a = {
    user_id : this.user_id,
    merchant_id : this.merchant_id,
    video_id : this.video_id
  }

  this.service.fetch_like_details(a).subscribe((response:any) => {
    console.log(response);
    this.like_count = response.over_all_count;
    this.like_status = response.like_status;

    this.service.fetch_chat_details(a).subscribe((response:any) => {
      console.log(response);
      this.chat_count = response.over_all_count;

      this.service.fetch_follow_details(a).subscribe((response:any) => {
        console.log(response);
        this.follow_status = response.like_status;

        this.service.fetch_follow_details(a).subscribe((response:any) => {
          console.log(response);
          this.follow_status = response.like_status;

          this.service.fetch_share_details(a).subscribe((response:any) => {
            console.log(response);
            this.share_count = response.over_all_count;


            console.log(this.video_list);


            }, err => {
            });



          }, err => {
          });


        }, err => {
        });


      }, err => {
      });


    }, err => {
    });







 }


 click_like(){
  let a = {
    like_detail_user_id : this.user_id,
    like_detail_merchant_id : this.merchant_id,
    video_id : this.video_id
  }
  console.log(a);
  this.service.create_fetch_like(a).subscribe((response:any) => {
    console.log(response);
    // this.check_count_status(this.user_id,this.merchant_id);
    this.like_count = 0;
    this.like_status = false;
    let a = {
      user_id : this.user_id,
      merchant_id : this.merchant_id,
      video_id : this.video_id
    }
    this.service.fetch_like_details(a).subscribe((response:any) => {
      console.log(response);
      this.like_count = response.over_all_count;
      this.like_status = response.like_status;
      // this.chat_history = response.rows;
      }, err => {
      });
    // this.chat_history = response.rows;
    }, err => {
    });
 }




 click_share(){
  let a = {
    share_detail_user_id : this.user_id,
    share_detail_merchant_id : this.merchant_id,
    video_id : this.video_id
  }
  console.log(a);
  this.service.create_fetch_share(a).subscribe((response:any) => {
    console.log(response);
    // this.check_count_status(this.user_id,this.merchant_id);
    this.share_count = 0;
    let a = {
      user_id : this.user_id,
      merchant_id : this.merchant_id,
      video_id : this.video_id
    }
    this.service.fetch_share_details(a).subscribe((response:any) => {
      console.log(response);
      this.share_count = response.over_all_count;
      // this.chat_history = response.rows;
      }, err => {
      });
    // this.chat_history = response.rows;
    }, err => {
    });
 }

 click_follow(){
  let a = {
    follow_detail_user_id : this.user_id,
    follow_detail_merchant_id : this.merchant_id,
    video_id : this.video_id
  }
  console.log(a);
  this.service.create_fetch_follow(a).subscribe((response:any) => {
    console.log(response);
    // this.check_count_status(this.user_id,this.merchant_id);
    // this.chat_history = response.rows;
    let a = {
      user_id : this.user_id,
      merchant_id : this.merchant_id,
      video_id : this.video_id
    }
    this.service.fetch_follow_details(a).subscribe((response:any) => {
      console.log(response);
      this.follow_status = response.like_status;
      // this.chat_history = response.rows;
      }, err => {
      });
    }, err => {
    });
 }


 reply_action(index){
  this.chat_history.forEach(element => {
    element.chat_text_option = false;
  });
  this.chat_history[index].chat_text_option = true;

 }

 reply_submit(data,index){
  let a = {
    profile_image : this.storage.user.profile_img || data.user_image,
    profile_id : this.storage.user.profile_id,
    profile_name : this.storage.user.user_full_name,
    text : this.reply_text,
    date : new Date()
  }
  this.chat_history[index].reply_record.push(a);
  this.reply_text = '';
 }



 videoEnd(){

 }







}
