import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { Country } from 'src/app/Models/Country';
import { StatusOfPage } from 'src/app/Models/StatusOfPage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() newEvent = new EventEmitter<Country>();
  onpage: StatusOfPage[] = [
    {
      "status": "0"
    }
  ]

  country: Country[] = [
    {
      "id" : 1,
      "name" : "CHINA",
      "people" : 1,
      "large" : 13000000,
      "description" : "CHINA IS GOOD COUNTRY",
      "visible" : true
    },
    {
      "id" : 2,
      "name" : "INDONESIA",
      "people" : 3,
      "large" : 13020102,
      "description" : "INDONESIA IS GOOD COUNTRY",
      "visible" : true
    },
    {
      "id" : 3,
      "name" : "GERMAN",
      "people" : 4,
      "large" : 23300320,
      "description" : "GERMAN IS GOOD COUNTRY",
      "visible" : true
    },
    {
      "id" : 4,
      "name" : "PHILIPHINA",
      "people" : 2,
      "large" : 313000000,
      "description" : "PHILIPHINA IS GOOD COUNTRY",
      "visible" : true
    },
    {
      "id" : 5,
      "name" : "SINGAPURA",
      "people" : 5,
      "large" : 113000000,
      "description" : "SINGAPURA IS GOOD COUNTRY",
      "visible" : true
    },
  ]
  sortPeople = [...this.country];
  sortLarge = [...this.country];

  sortingPeople(){

    this.sortPeople = this.sortPeople.sort(function(a,b){
      return b.people - a.people
    })
  }
  sortingLarge(){
    this.sortLarge = this.sortLarge.sort(function(a,b){
      return b.large - a.large
    })
  }

  showall(){
    this.onpage.map((v) =>{
      v.status = '1';
      console.log(v)
      return v
    })
  }
  backTo(){
    this.onpage.map((v) =>{
      v.status = '0';
      console.log(v)
      return v
    })
  }
  setActivated(){
    this.onpage.map((v) =>{
     v.activated = !v.activated;
     console.log(v)
      return v
    })
  }
  Detail(id:number){
    const newid = id-1
    this.setActivated()
    this.country.map((v, i) =>{
      if(i==newid) v.visible = !v.visible;
      return v
    })
  }
  constructor() { }

  ngOnInit(): void {
    this.sortingPeople()
    this.sortingLarge()
    console.log(this.country)
  }
}
