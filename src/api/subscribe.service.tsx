// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface SubscribeResponse {
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_SUBSCRIBE_API;

class SubscribeService {
  private static instance: SubscribeService;

  private constructor() {

  }

  public static getInstance(): SubscribeService {
    if (!SubscribeService.instance) {
      SubscribeService.instance = new SubscribeService();
    }
    return SubscribeService.instance;
  }

  async register(name: string, email: string): Promise<SubscribeResponse> {
    return fetch(`${API_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ name, email }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  async update(id: number, name: string, email: string): Promise<SubscribeResponse> {
    return fetch(`${API_URL}update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ id, name, email }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  async getAll(): Promise<[]> {
    return fetch(`${API_URL}getAll`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    })
      .then(response => {
        /* if (!response.ok) {
          throw new Error('Network response was not ok');
        } */
        return response.json();
      });
  }

  async delete(id: number): Promise<SubscribeResponse> {
    return fetch(`${API_URL}delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ id }),
    }).then(response => {
      return response.json()
    });
  }
}

export default SubscribeService.getInstance();