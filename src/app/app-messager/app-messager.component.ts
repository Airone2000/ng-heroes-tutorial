import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-app-messager',
  templateUrl: './app-messager.component.html',
  styleUrls: ['./app-messager.component.css']
})
export class AppMessagerComponent implements OnInit {

  constructor( public messageService: MessageService ) { }

  ngOnInit() {
    
  }

}
