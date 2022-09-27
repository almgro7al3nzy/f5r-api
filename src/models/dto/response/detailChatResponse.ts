export interface detailChatResponse {
  message_id: number;
  message: string;
  type: string;
  email: string;
  name: string;
  sent_at: string;
}

export interface socketResponse {
  message_id: number;
  content: string;
  type: string;
  email: string;
  name: string;
  sent_at: string;
}

export interface infoResponse {
  room_number: string;
  account_number: string;
}

export interface chatInfoResponse {
  room_name: string;
  count: number;
}
