
import { Component, OnInit } from '@angular/core';

import { TimeService } from './time.service'
import { Time } from "./time";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  providers: [TimeService],
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  
  nome: string = "";
  id: number;
  times = [];

  constructor(private timeService: TimeService) { 

   }

  ngOnInit(): void {  
    this.getTimes();
    console.log(this.times);
  }

  getTimes(): void {
    this.timeService.getTimes().then(t => this.times = t.retorno);
  }

  inserirTimes(): void{

    this.nome = this.nome.trim();

    if (!this.nome){
      return;
    }

    this.timeService.createTime(this.nome)
    .then(time => {
      console.log(time.mensagem);
    }); 
  }

  removerTimes(id): void {
    this.timeService
    .deleteTime(id)
    .then(() => {
      this.times = this.times.filter(h => h.id !== id);
    });
  }

}
