import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-airlinetable',
  templateUrl: './airlinetable.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./airlinetable.component.css']
})
export class AirlinetableComponent implements OnInit {

  cols: any[] = [];
  flights: any[] = [];
  airlineID: any;
  xmljson: any;
  newAirlineID: any = '';
  parser: DOMParser;
  loaded: any = false;
  input: any;

  imports: [ TableModule ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private ngxXml2jsonService: NgxXml2jsonService
  ) {
    this.parser = new DOMParser();
  }

  ngOnInit() {
    this.input = document.getElementById('searchInput');
    this.input.addEventListener('keyup', function(event){
      event.preventDefault();
      if(event.keyCode === 13){
        document.getElementById('searchButton').click();
      }
    })

    this.route.queryParamMap.subscribe( params => {
      this.airlineID = {...params.keys, ...params};
      this.httpClient
      .get('https://raw.githubusercontent.com/ManuSenpai/TestsXML/master/flights.xml',
       {'responseType':  'text'})
      .subscribe( (data) => {
        const xml = this.parser.parseFromString(data, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);
        obj['Rowsets']['Rowset']['Columns']['Column'].forEach( column => {
          this.cols.push(
            { field: column['@attributes'].Name, header: column['@attributes'].Name }
          );
        });
        obj['Rowsets']['Rowset']['Row'].forEach( column => {
          this.flights.push(
            {
              AIRLANEID: column.AIRLANEID,
              AIRLANE: column.AIRLANE,
              CONNECTID: column.CONNECTID,
              FLIGHTDATE: column.FLIGHTDATE,
              AIRPORTFR: column.AIRPORTFR,
              CITYFROM: column.CITYFROM,
              AIRPORTTO: column.AIRPORTTO,
              CITYTO: column.CITYTO,
              DEPTIME: column.DEPTIME,
              ARRTIME: column.ARRTIME,
              ARRDATE: column.ARRDATE,
              PRICE: column.PRICE,
              CURR: column.CURR,
              CURR_ISO: column.CURR_ISO
            }
          );
        });
        this.loaded = true;
      });
    });
  }

  updatePage() {
    this.cols = [];
    this.flights = [];
    this.loaded = false;
    this.router.navigate(
      ['/table'],
      {queryParams: { airlineID : this.newAirlineID } }
    );
  }

}
