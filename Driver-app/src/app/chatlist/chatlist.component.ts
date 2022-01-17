import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City_list } from '../../assets/xlsxtojson'
import { LocalStorage } from 'src/_core/_data/localstorage';
import { CommonService } from 'src/_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss'],
})
export class ChatlistComponent implements OnInit {

  message_list = [];
  final_data = [];


  constructor(public toastr: ToastrManager,private router: Router,public City_list : City_list,private storage: LocalStorage,    private service: CommonService) { }

  ngOnInit() {
    // let a = {
    //   chat_reciver_id : 2
    // }
    // this.service.fetch_chat_by_reciver_id(a).subscribe((response:any) => {
    // console.log(response);
    // let chat_list = response.rows;
    // for(let a = 0; a < chat_list.length ; a++){
    //      if(a == 0){
    //       let data = {
    //         "chat_reciver_id": chat_list[a].chat_reciver_id || '',
    //         "chat_sender_id": chat_list[a].chat_sender_id || '',
    //         "image":chat_list[a].receiver_info.profile_img || '',
    //         "name":chat_list[a].receiver_info.profile_first_name,
    //         "shop_name" : chat_list[a].receiver_info.profile_biz_name,
    //         "designation":chat_list[a].receiver_info.role_id,
    //         "time":chat_list[a].createdAt,
    //         "chat_type": chat_list[a].chat_type || '',
    //         "chat_text": chat_list[a].chat_text || '',
    //         "chat_location": chat_list[a].chat_location || '',
    //         "chat_img": chat_list[a].chat_img || '',
    //         "chat_read_status": chat_list[a].chat_read_status || '',
    //         "last_text_status":false,
    //         "count":0
    //       }
    //       if(data.chat_read_status == 'U'){
    //         data.count = 1;
    //         data.last_text_status = true;
    //       }else{
    //         data.count = 0;
    //         data.last_text_status = false;
    //       }
    //       this.message_list.push(data);
    //       console.log(this.message_list);
    //      } else
    //      {
    //        let temp_count2 = this.message_list.length;
    //        let check_status = 0;
    //        for(let b = 0; b < temp_count2; b++){
    //         if(this.message_list[b].chat_reciver_id == chat_list[a].chat_reciver_id){
    //           if(chat_list[a].chat_read_status == 'U'){
    //             this.message_list[b].count = this.message_list[b].count + 1;
    //             this.message_list[b].last_text_status = true;
    //             this.message_list[b].time  = chat_list[a].createdAt;
    //           }
    //           check_status = 1;
    //         }
    //         if(b == temp_count2 - 1){
    //             if(check_status == 0){
    //               let data = {
    //                 "chat_reciver_id": chat_list[a].chat_reciver_id || '',
    //                 "chat_sender_id": chat_list[a].chat_sender_id || '',
    //                 "image":chat_list[a].receiver_info.profile_img || '',
    //                 "name":chat_list[a].receiver_info.profile_first_name,
    //                 "shop_name" : chat_list[a].receiver_info.profile_biz_name,
    //                 "designation":chat_list[a].receiver_info.role_id,
    //                 "time":chat_list[a].createdAt,
    //                 "chat_type": chat_list[a].chat_type || '',
    //                 "chat_text": chat_list[a].chat_text || '',
    //                 "chat_location": chat_list[a].chat_location || '',
    //                 "chat_img": chat_list[a].chat_img || '',
    //                 "chat_read_status": chat_list[a].chat_read_status || '',
    //                 "last_text_status":false,
    //                 "count":0
    //               }
    //               this.message_list.push(data);
    //             }
    //         }







    //        }












    //      }
    // }
    // }, err => {
    // });


    let user_id = {
      chat_reciver_id : +this.storage.user.profile_id
    }
    this.service.fetch_chat_by_reciver_id(user_id).subscribe((response:any) => {
     console.log(response);
     this.final_data = [];
     if(response.count !== 0){
      let c = {
         profile_img : response.rows[0].chat_name,
         profile_name : "Admin",
         profile_type : "Admin Support",
         last_text : response.rows[0].chat_text,
         unread_count : 0,
         last_text_status : "R",
         last_date : response.rows[0].createdAt,
         title_text : response.rows[0].chat_name,
      }
      if(response.rows[0].chat_text == ""){
         c.last_text = response.rows[0].chat_type
      }
      this.final_data.push(c);
     }
     for(let a  = 0; a < response.rows.length;a++){
          let check = 0;
          let final_count = this.final_data.length;
          for(let b = 0; b < final_count; b++){
            console.log(this.final_data[b].title_text,response.rows[a].chat_name);
             if(this.final_data[b].title_text == response.rows[a].chat_name){
                check = 1;
                if(response.rows[a].chat_read_status == 'U' && response.rows[a].chat_reciver_id == +this.storage.user.profile_id){
                  this.final_data[b].last_text_status = "U";
                  this.final_data[b].unread_count = this.final_data[b].unread_count + 1;
                 }
                 this.final_data[b].last_date = response.rows[a].createdAt;
                 this.final_data[b].last_text = response.rows[a].chat_text;
                 if(response.rows[a].chat_text == ''){
                  this.final_data[b].last_text = response.rows[a].chat_type
                }
             }
            if(b == final_count - 1){
              if(check == 0){
                let c = {
                  profile_img : response.rows[a].chat_name,
                  profile_name : "Admin",
                  profile_type : "Admin Support",
                  last_text : response.rows[a].chat_text,
                  unread_count : 0,
                  last_text_status : "R",
                  last_date : response.rows[a].createdAt,
                  title_text : response.rows[a].chat_name,
               }
               if(response.rows[a].chat_read_status == 'U' && response.rows[a].chat_reciver_id == +this.storage.user.profile_id){
                 c.last_text_status = "U";
                 c.unread_count = 1;
                }
                if(response.rows[a].chat_text == ""){
                  c.last_text = response.rows[a].chat_type;
                }
                this.final_data.push(c);
              }
            }
          }
        if(a == response.rows.length - 1){
          console.log(this.final_data);
        }
     }
    }, err => {
    });
  }

  move_to_chat_detail(data){
    this.storage.chat_detail = {order_id : data};
    console.log(this.storage.chat_detail);
    this.storage.routes_text = '/chatlist';
    this.router.navigate(['/chatviewsingle']);
  }

}
