import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  airlineID: any = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTable(){
    if ( this.airlineID.length > 0 ) {
      this.router.navigate(
        ['/table'],
        {queryParams: { airlineID : this.airlineID } }
      );
    } else {
      alert('Debes introducir una ID');
    }
  }

}
