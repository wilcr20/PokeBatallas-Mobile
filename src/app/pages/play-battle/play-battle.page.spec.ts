import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayBattlePage } from './play-battle.page';

describe('PlayBattlePage', () => {
  let component: PlayBattlePage;
  let fixture: ComponentFixture<PlayBattlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
