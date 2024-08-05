import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayBattlePageRoutingModule } from './play-battle-routing.module';

import { PlayBattlePage } from './play-battle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayBattlePageRoutingModule
  ],
  declarations: [PlayBattlePage]
})
export class PlayBattlePageModule {}
