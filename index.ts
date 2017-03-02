import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SipgateComponent} from './src/sipgate.component';
import {SipgateDirective} from './src/sipgate.directive';
import {SipgatePipe} from './src/sipgate.pipe';
import {SipgateService} from './src/sipgate.service';

export * from './src/sipgate.component';
export * from './src/sipgate.directive';
export * from './src/sipgate.pipe';
export * from './src/sipgate.service';
export * from './src/api';
// export * from './src/models';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SipgateComponent,
    SipgateDirective,
    SipgatePipe
  ],
  exports: [
    SipgateComponent,
    SipgateDirective,
    SipgatePipe
  ]
})
export class SipgateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SipgateModule,
      providers: [SipgateService]
    };
  }
}
