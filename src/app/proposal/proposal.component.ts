import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [GoogleMap, NgFor, MapMarker],
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss',
})
export class ProposalComponent {
  center: google.maps.LatLngLiteral = {
    lat: 38.3214163,
    lng: 24.1834009,
  };

  public zoom: number = 6;

  markerPositions1: any[] = [];
  markerPositions2: any[] = [];

  constructor(private element: ElementRef) {
    let index: number = 1;
    const args = element.nativeElement.querySelectorAll('.js-map-container');
    args.forEach((item: any) => {
      let stores: any = [];
      item.querySelectorAll('.js-map-item').forEach((item2: any) => {
        let obj = {
          lat: parseFloat(item2.dataset.lat),
          lng: parseFloat(item2.dataset.long),
          title: item2.dataset.title,
        };
        if (index == 1) {
          this.markerPositions1.push(obj);
        } else {
          this.markerPositions2.push(obj);
        }
      });
      index++;
    });
  }
}
