import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
  ],
})
export class WfCoreModule {
  static forRoot( ): ModuleWithProviders {
    return {
      ngModule: WfCoreModule,
      providers: [
        DecimalPipe,
        DatePipe,
      ]
    };
  }

  static forFeature(): ModuleWithProviders {
    return {
      ngModule: WfCoreModule,
      providers: []
    };
  }
}
