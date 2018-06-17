import { Event } from './event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Array<Event> = [];
  constructor() { }

  ngOnInit() {
    this.events.push({
      id: '',
      subheading: 'subheading 1',
      category: [],
      heading: 'simple heading',
      description: 'Simple description',
      createdBy: '',//userId
      date: new Date(),
      likes: 12,
      shares: 1
    });
    this.events.push({
      id: '',
      subheading: 'subheading 2',
      category: [],
      heading: 'Simple aheading 2',
      description: 'Simple description 1',
      createdBy: '',//userId
      date: new Date(),
      likes: 118,
      shares:11
    });    
  }

  /*{    id: string;
    name: string;
    category: Array<string>,
    desscription: string,
    createdBy: string,//userId
    date: Date
  }*/

}
