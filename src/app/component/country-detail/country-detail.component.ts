import { Component, OnInit ,Output,Input} from '@angular/core';
import { Country } from 'src/app/Models/Country';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input () datas :Country[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
