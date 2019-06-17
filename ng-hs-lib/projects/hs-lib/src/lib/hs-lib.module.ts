import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HsLibComponent } from './hs-lib.component';
import { HsbuttonComponent } from './hsbutton/hsbutton.component';
import { DataService } from './data.service';




@NgModule({
  declarations: [HsLibComponent, HsbuttonComponent],
  imports: [
    HttpClientModule
  ],
  exports: [HsLibComponent, HsbuttonComponent]
})
export class HsLibModule {
}
