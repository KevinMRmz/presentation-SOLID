interface Note {}
const axios = async (url: any) => "";

// Bad Code
export class Notes {
  URL = "localhost:4000/notes";

  async getNotes() {
    return await fetch(this.URL);
  }

  // ...
}

// Clean Code
interface HttpClient {
  get: (url: string) => Promise<any[]>;
}

class FetchProvider implements HttpClient {
  async get(url: string): Promise<any> {
    return await fetch(url);
  }
}

class AxiosProvider implements HttpClient {
  async get(url: string): Promise<any> {
    return await axios(url);
  }
}

async function http(url: string) {}

// Open for modifications
//
// We extend the functionality of the httpClient interface,
// it works as an adapter to make a request
// without modifiying the NoteApi class.
//
class MyHttpLibrary implements HttpClient {
  // http works as a custom library or a external http library
  async get(url: string): Promise<any> {
    return await http(url);
  }

  // ...
}

export class NotesAPI {
  URL = "localhost:4000/notes";

  constructor(private http: HttpClient) {}

  async getNotes() {
    return await this.http.get(this.URL);
  }
}

const fetchProvider = new FetchProvider();
const axiosProvider = new AxiosProvider();

//const notesAPI = new NotesAPI(fetchProvider);
const notesAPI = new NotesAPI(axiosProvider);
