import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title: string = 'Actor Detail';
  actor: Actor = new Actor();
  id: number = 0;

  constructor(private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    // get the actor from the actor service
    this.actorSvc.get(this.id).subscribe(jr => {
      this.actor = jr.data as Actor;
    });
  }
  
  delete() {
    this.actorSvc.delete(this.id).subscribe( jr => {
      console.log("actor delete jr",jr);
      // fix here. 
      if (jr.errors != null) {
        console.log("Error deleting actors: "+jr.errors);
      }
      this.router.navigateByUrl("actors/list");
    });
  }
}
