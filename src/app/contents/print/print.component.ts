import { Component, OnInit, Inject } from '@angular/core';
declare var jsPDF: any;
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    }

    download() {
      var doc = new jsPDF('p', 'pt', 'a4');
      doc.text('palique', 10, 10);
      doc.save();
     }

     print () {
      window.print();
     }
  }
