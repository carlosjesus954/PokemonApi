import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [LayoutPageComponent, FooterComponent, NavBarComponent],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
