export interface ChatMessage {
  client: User;
  message: string;
  timestamp: Date;
}

export interface User {
  id?: number;
  voornaam?: string;
  achternaam: string;
}
