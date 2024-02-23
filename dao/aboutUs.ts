export interface AboutUsClient {
  total_clients: number;
  page_size: number;
  max_page: number;
  current_page: number;
  next: number | null;
  previous: number | null;
  last_updated: string;
  clients: Client[];
}

export interface Client {
  name: string;
  logo: string;
}
