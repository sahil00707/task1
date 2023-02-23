import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  tempData: any;
  d: any;
  sendDataId: any;
  ngOnInit(): void {
    this.tempData = new MyDataService().getData(this.sendDataId);
    this.d = JSON.parse(this.tempData) || null;
  }
  sendData(data: any) {
    new MyDataService().setData(this.sendDataId, data);
    this.router.navigate(['/app-reactive-form'], { queryParams: { data: this.sendDataId } })
  }
  constructor(private router: Router, private route: ActivatedRoute) {
    this.sendDataId = this.route.snapshot.paramMap.get('id');
  }

}
