import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {Character} from "../../../shared/models/character.model";
import {CharactersService} from "../../../shared/services/characters.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {
  routeSubscription?: Subscription;
  character$?: Observable<Character>;

  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const id = Number(paramMap.get('id'));
      this.character$ = this.characterService.getCharacter(id);
    })
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

}
