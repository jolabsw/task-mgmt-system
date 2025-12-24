export interface RequestConfig {
  url: string;
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export interface ApiResponse<T> {
    data: T
}