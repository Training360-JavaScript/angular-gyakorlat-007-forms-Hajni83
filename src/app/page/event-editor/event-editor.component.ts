import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  constructor(
    private eventService:EventService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>
     this.eventService.get(params['id']).subscribe(event =>
      console.log(event)));
  }

}
