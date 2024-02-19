import {Component, inject, OnInit} from '@angular/core';
import {icon, Map, marker, Marker, tileLayer} from "leaflet";
import {PlacesService} from "../places.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-map',
  standalone: true,
  imports:[],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

  route: ActivatedRoute = inject(ActivatedRoute);
  houseid!: string;
  houseGeo:any;
  userGeo:any;
  map:any;

  constructor(private placesSvc:PlacesService) {
    this.houseid = this.route.snapshot.params['id']
  }
  ngOnInit():void{
    setTimeout( () =>{
      this.houseGeo = this.placesSvc.getHouseLocation(this.houseid);
      console.log(this.placesSvc.getUserLocation(), "init")
      this.userGeo = this.placesSvc.getUserLocation();
    }, 1000)
  }
  houseMap(){
    if(this.map){
      this.map.remove()
    }
    setTimeout( () =>{

      this.map = new Map('map').setView(this.houseGeo, 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
      marker(this.houseGeo).addTo(this.map)
    }, 1000);
  }
  userMap(){
    this.map.remove()
    setTimeout( () =>{
      this.map = new Map('map').setView(this.userGeo, 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
      marker(this.userGeo).addTo(this.map)
    }, 1000);
  }

  ngAfterViewInit(){
    this.houseMap();
  }
}
