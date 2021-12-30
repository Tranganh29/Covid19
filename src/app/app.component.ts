import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from './server-http.service';

@Component({
  selector: 'covid19-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Covid19';
  

  constructor(private serverHttp: ServerHttpService){}

ngOnInit(): void {
    this.serverHttp.getAll().subscribe((data) => {
      console.log(data);
    });
}
}
