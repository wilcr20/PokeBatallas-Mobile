import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayBattlePage } from './play-battle.page';

const routes: Routes = [
  {
    path: '',
    component: PlayBattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayBattlePageRoutingModule {}
