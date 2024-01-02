export {};

interface HttpClient {
  get: <T>(url: string) => Promise<T[]>;
  getOne: <T>(url: string, id: string) => Promise<T>;
  post: <T, D>(url: string, data: D) => Promise<T[]>;
  put: <T, D>(url: string, data: D, id: string) => Promise<T[]>;
  delete: <T>(url: string, id: string) => Promise<T>;
}
