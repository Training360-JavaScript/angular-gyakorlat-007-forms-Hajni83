import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../../model/event';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {


  event: Event = new Event();

  constructor(
    private eventService:EventService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
     this.eventService.get(params['id']).subscribe(event =>
      this.event = event));
  }

  onUpdate(eventForm: NgForm) {
    this.eventService.update(eventForm.value);

  }
}
