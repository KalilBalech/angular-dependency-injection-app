import { NgModule } from '@angular/core';
import { LoggerService } from './logger.service';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [AppComponent],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
