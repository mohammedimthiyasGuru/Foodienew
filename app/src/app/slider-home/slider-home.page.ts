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
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.page.html',
  styleUrls: ['./slider-home.page.scss'],
})
export class SliderHomePage implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  loader : boolean = false;
  status = 0;
  timeLeft: number = 2;
  interval;
  public slides = [
    {
      image:"../../../../assets/slider-1.png",
      text:"Upload your products menu through Merchant web Dash& Manage your orders through orders status updater.",
      index:0

    },
    {

      image:"../../../../assets/slider-2.png",
      text:"Make Viral your business through your promo videos and offers",
      index:1

    },
    {
      image:"../../../../assets/slider-3.png",
      text:"Make your sale and get your sales report through your wallet and get paid",
      index:2
    }
  ];

  video_list = []
  public show: boolean = true;
  final_data = [];
  merchant_id : any;
  user_id : any;
  public type: string = 'component';
  public disabled: boolean = false;


  constructor(public toastr: ToastrManager,
    private router: Router,
    public City_list : City_list,
    private storage: LocalStorage,
    private StatusBar : StatusBar,
    private service: CommonService) {

    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();



  }

  ngOnInit() {
    this.startTimer();
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
      direction: 'horizontal',
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
    this.status = index;
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
      }
    },1000)
  }




  pauseTimer() {
    clearInterval(this.interval);
  }





















 getting(){
  this.router.navigateByUrl('/auth/location');
}








}
