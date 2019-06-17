import { Component, OnInit } from '@angular/core';
import { DataService } from 'projects/hs-lib/src/lib/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'demo1';
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.setDataUrl(`https://jsonplaceholder.typicode.com/todos/1`);
    this.dataService.getData().subscribe(console.log);
  }
}
