import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class MessageService
{
    messages: string[] = [];

    addMessage(message): void
    {
        this.messages.unshift(message);
    }

    clearMessages(): void
    {
        this.messages = [];
    }
}