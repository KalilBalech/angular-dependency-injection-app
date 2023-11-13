import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log('TestComponent inicializado');
  }

  logMessage() {
    this.logger.log('Botão clicado!');
  }
}
