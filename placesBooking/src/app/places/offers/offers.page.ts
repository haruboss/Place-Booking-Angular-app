import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Subscription } from 'rxjs';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  filterTerm: string;
  loadedPlaces: Place[];
  isLoading = false;
  private offersSub: Subscription;

  constructor(private placesSerice: PlacesService, private router: Router ) { }


  ngOnInit() {
  this.offersSub = this.placesSerice.places.subscribe(places => {
  this.loadedPlaces = places;
});
  }
  ionViewWillEnter() {
    this.isLoading = true;
    this.placesSerice.fetchPlaces().subscribe(() => {
      this.isLoading = false;
    });
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log('Editing item', offerId);
  }
  ngOnDestroy(){
    if(this.offersSub){
      this.offersSub.unsubscribe();
    }
  }
}
