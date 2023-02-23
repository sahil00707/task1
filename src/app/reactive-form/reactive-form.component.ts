import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MyDataService} from '../services/my-data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit  {
  tempData:any;
  d:any;
  sendDataId:any;
  reactiveForm:any;
  //userForm: FormGroup<{ first_name: FormControl<string | null>; }>;
  fName:any='';
  mName:any='';
  lName:any='';

  ngOnInit(): void {
    //fetching id from 1st page
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.sendDataId = params?.['data'];
    });

    this.tempData=new MyDataService().getData(this.sendDataId);
    this.d= JSON.parse( this.tempData);

      this.reactiveForm=new FormGroup({
      fName:new FormControl(this.d.fName||'',Validators.pattern('[a-zA-Z ]*')),
      mName:new FormControl(this.d.mName||''),
      lName:new FormControl(this.d.lName||''),
      age:new FormControl(this.d.age||null),
      gender:new FormControl(this.d.gender||''),
      hobby1:new FormControl(this.d.hobby1),
      hobby2:new FormControl(this.d.hobby2),
      hobby3:new FormControl(this.d.hobby3),
      hobby4:new FormControl(this.d.hobby4),
      hobby5:new FormControl(this.d.hobby5),
      company:new FormControl(this.d.company||''),
      hobby:new FormControl(this.d.hobby||''),
    }); 
  }

  fetchData(){
    
  }
  constructor(private route:ActivatedRoute,private router:Router,private fb: FormBuilder){
    this.reactiveForm = this.fb.group({
      fName: '',
      mName: '',
      lName: '',
    });
  }

  //to send data to the local storage
     setData(){
      localStorage.setItem(this.sendDataId,JSON.stringify(this.reactiveForm?.value));
      this.router.navigate(['/'])
     // console.log(localStorage.getItem(  JSON.parse(this.sendDataId)));
    } ;
    setValue() {
      this.fName=this.reactiveForm.get('fName')?.value; // input value retrieved
      this.mName=this.reactiveForm.get('mName')?.value; // input value retrieved
      this.lName=this.reactiveForm.get('lName')?.value; // input value retrieved
    }
 
}
