import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import { fadeIn} from "ng-animate";

@Component({
  selector: 'app-animate',
  template: `
    <div [@fadeIn] class="rect" *ngIf="visible">
      <p>Пам’ять  - з'єднувальна нитка між минулим і теперішнім. Ми частина спогадів, а вони частина нас.Без них не було б нас,
        а без нас не було б їх.Завдяки або всупереч цим фрагментам життя – ми ті, хто ми є. Наша пам'ять наче флешка, яка
         зберігає у собі безліч файлів ,як приємних , теплих та щасливих. Так і сумних, гнітючих.
         Сайт "Memories" був створений задля того, щоб, Ви могли ділитися з іншимим своїми спогадами. Добрі вони чи погані.
         Сподіваємось тут ви зможете знайти однодумців. Тих, з ким зможете поділитись уривками свого минулого і відчути що є ті хто тебе розуміє.
        Створи свій спогад прямо зараз <button routerLink="/create" class ="btn btn-link">ТУТ</button></p>
    </div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', useAnimation(fadeIn)),
      transition('* => void', useAnimation(fadeIn, {
        params: {
          timing: 3,
          delay: 0.3
        }
      })),
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true

  constructor() { }

  ngOnInit() {
  }

}

