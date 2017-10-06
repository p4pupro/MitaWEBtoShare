import { Component, OnInit } from '@angular/core';
import { Infoequipo } from '../../servicios/infoequipo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoteam: Infoequipo) { }

  ngOnInit() {
  }

}
