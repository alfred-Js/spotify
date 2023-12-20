import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, SidebarComponent, MediaPlayerComponent, HeaderUserComponent
  ],
  exports: [SidebarComponent, MediaPlayerComponent, HeaderUserComponent]
})
export class SharedModule { }
