import { Component, OnInit } from '@angular/core';
import { TimeComponent } from  '../time.component'
import { TimeService } from '../time.service'

@Component({
  selector: 'app-criar-time',
  templateUrl: './criar-time.component.html',
  styleUrls: ['./criar-time.component.css'],
  providers: [TimeService]

})
export class CriarTimeComponent extends TimeComponent implements OnInit {

  constructor( private service : TimeService) {super(service);}

  ngOnInit() {
  }

}
