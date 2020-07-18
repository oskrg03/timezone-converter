import { Component, OnInit } from '@angular/core';
import { ApiTimezoneService } from '../services/api-timezone.service';
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  response: any;
  
  constructor(private api: ApiTimezoneService) {


  }
  ngOnInit(): void {}

  form = new FormGroup({
    time: new FormControl(""),
    timezone: new FormControl(0)
  });

  getHora() {
    let time = this.form.value['time'];
    let timezone = this.form.value['timezone']
    if(this.validar(time, timezone)){
      this.api.getResponse(time, timezone).subscribe((data) => {
        this.response = JSON.stringify(data, undefined, 4);
        // console.log(data.response)
      });
    }else{
      this.response = "error, la hora está incorrecta"
    }
  
  }

  validar(time: string, timezone: number) {
    let [horas, minutos, segundos] = time.split(':');
    if (horas != null && minutos != null && segundos != null) {
      if (
        parseInt(horas) > 0 &&
        parseInt(minutos) > 0 &&
        parseInt(segundos) > 0
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
