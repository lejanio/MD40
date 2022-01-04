import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CharactersService} from "../../shared/services/characters.service";
import {Character} from "../../shared/models/character.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {
  characters$?: Observable<Character[]>

  tableHeadTitles = [
    'ID',
    'Vārds',
    'Statuss',
    'Suga',
  ];

  characterSubscription?: Subscription;

  constructor(private charactersService: CharactersService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.characters$ = this.charactersService.getCharacters();
  }

}
