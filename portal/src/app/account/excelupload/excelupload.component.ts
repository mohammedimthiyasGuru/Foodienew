import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { AuthService } from 'src/app/_core/services/auth.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { City_list } from 'src/assets/xlsxtojson';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-excelupload',
  templateUrl: './excelupload.component.html',
  styleUrls: ['./excelupload.component.scss'],
})
export class ExceluploadComponent implements OnInit {
  
  timeLeft: number = 0;
  interval;



  
  country_name = [{"country_name":"INDIA"},{"country_name":"MALAYSIA"},{"country_name":"SINGAAPORE"}];
  state_name = [{"country_name":"INDIA","state_name":"Andaman and Nicobar Islands AN"},{"country_name":"INDIA","state_name":"Andhra Pradesh AP"},{"country_name":"INDIA","state_name":"Arunachal Pradesh AR"},{"country_name":"INDIA","state_name":"Assam AS"},{"country_name":"INDIA","state_name":"Bihar BR"},{"country_name":"INDIA","state_name":"Chandigarh CH"},{"country_name":"INDIA","state_name":"Chhattisgarh CT"},{"country_name":"INDIA","state_name":"Dadra and Nagar Haveli and Daman and Diu DH"},{"country_name":"INDIA","state_name":"Delhi DL"},{"country_name":"INDIA","state_name":"Goa GA"},{"country_name":"INDIA","state_name":"Gujarat GJ"},{"country_name":"INDIA","state_name":"Haryana HR"},{"country_name":"INDIA","state_name":"Himachal Pradesh HP"},{"country_name":"INDIA","state_name":"Jammu and Kashmir JK"},{"country_name":"INDIA","state_name":"Jharkhand JH"},{"country_name":"INDIA","state_name":"Karnataka KA"},{"country_name":"INDIA","state_name":"Kerala KL"},{"country_name":"INDIA","state_name":"Ladakh LA"},{"country_name":"INDIA","state_name":"Lakshadweep LD"},{"country_name":"INDIA","state_name":"Madhya Pradesh MP"},{"country_name":"INDIA","state_name":"Maharashtra MH"},{"country_name":"INDIA","state_name":"Manipur MN"},{"country_name":"INDIA","state_name":"Meghalaya ML"},{"country_name":"INDIA","state_name":"Mizoram MZ"},{"country_name":"INDIA","state_name":"Nagaland NL"},{"country_name":"INDIA","state_name":"Odisha OR"},{"country_name":"INDIA","state_name":"Puducherry PY"},{"country_name":"INDIA","state_name":"Punjab PB"},{"country_name":"INDIA","state_name":"Rajasthan RJ"},{"country_name":"INDIA","state_name":"Sikkim SK"},{"country_name":"INDIA","state_name":"Tamil Nadu TN"},{"country_name":"INDIA","state_name":"Telangana TG"},{"country_name":"INDIA","state_name":"Tripura TR"},{"country_name":"INDIA","state_name":"Uttar Pradesh UP"},{"country_name":"INDIA","state_name":"Uttarakhand UT"},{"country_name":"INDIA","state_name":"West Bengal WB"},{"country_name":"MALAYSIA","state_name":"Johor 01"},{"country_name":"MALAYSIA","state_name":"Kedah 02"},{"country_name":"MALAYSIA","state_name":"Kelantan 03"},{"country_name":"MALAYSIA","state_name":"Kuala Lumpur 14"},{"country_name":"MALAYSIA","state_name":"Labuan 15"},{"country_name":"MALAYSIA","state_name":"Malacca 04"},{"country_name":"MALAYSIA","state_name":"Negeri Sembilan 05"},{"country_name":"MALAYSIA","state_name":"Pahang 06"},{"country_name":"MALAYSIA","state_name":"Penang 07"},{"country_name":"MALAYSIA","state_name":"Perak 08"},{"country_name":"MALAYSIA","state_name":"Perlis 09"},{"country_name":"MALAYSIA","state_name":"Putrajaya 16"},{"country_name":"MALAYSIA","state_name":"Sabah 12"},{"country_name":"MALAYSIA","state_name":"Sarawak 13"},{"country_name":"MALAYSIA","state_name":"Selangor 10"},{"country_name":"MALAYSIA","state_name":"Terengganu 11"},{"country_name":"SINGAAPORE","state_name":"Central Region"},{"country_name":"SINGAAPORE","state_name":"North-East Region"},{"country_name":"SINGAAPORE","state_name":"East Region"},{"country_name":"SINGAAPORE","state_name":"North Region"},{"country_name":"SINGAAPORE","state_name":"West Region"}];
  city_names = [];
  email_loader = false;
  email_error : boolean = false;
  email_error_text = "";
  constructor(
    private router: Router,
    private auth: AuthService,
    private storage: LocalStorage,
    private formBuilder: FormBuilder,
   
  ) { 
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }

  ForgetPasswordForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {
    this.ForgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
    this.startTimer();
  }


  startTimer() {
    this.timeLeft = this.city_names.length;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        let Data = {
          state_name : this.city_names[this.timeLeft].state_name,
          city_name : this.city_names[this.timeLeft].city_name
         }
        this.auth.city_insert(Data).subscribe(res => {
         console.log("Inserted",res)
        }, err => {
          console.log(err);
        });


      } else {
        this.timeLeft = 0;
        this.pauseTimer();
      }
    },500)
  }


  pauseTimer() {
    clearInterval(this.interval);
  }


  call_function(){

   

  }


  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData);
      // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
      // this.setDownload(dataString);
      console.log(jsonData.Sheet1);
      this.city_names = jsonData.Sheet1;
      this.startTimer();
    }
    reader.readAsBinaryString(file);
  }

  
  
}
