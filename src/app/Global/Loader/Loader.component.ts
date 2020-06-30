import { Component, OnInit }                                              from '@angular/core';
import { LoaderService }                                                  from 'src/app/shared/Services/Loader.service';

@Component({
  selector: 'app-Loader',
  templateUrl: './Loader.component.html',
  styleUrls: ['./Loader.component.css']
})
export class LoaderComponent implements OnInit {
diametro = 40
  constructor(public loaderService: LoaderService) { }

  ngOnInit() {
  }

}
