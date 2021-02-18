import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
 console.log(this.router.snapshot.params["id"]);
  }

}
