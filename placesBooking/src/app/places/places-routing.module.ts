import { PlaceDetailPageModule } from './discover/place-detail/place-detail.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children:  [
      {
            path: 'offers',
            children: [
              {
                path: '',
                loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
              },
              {
                path: 'new',
                loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
              },
              {
                path: 'edit:placeID',
                loadChildren: () => import('./offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
              },
              // {
              //   path: ':placeID',
              //   loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule  )
              // }
            ]
          },
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          },
          {
            path: ':placeID',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
          },

        ]
      },
    ]
  },
  // {
  //   path: 'discover',
  //   loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  // },
  // {
  //   path: 'offers',
  //   loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
