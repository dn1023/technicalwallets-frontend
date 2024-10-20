// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface HelpResponse {
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_HELP_API;

class HelpService {
  private static instance: HelpService;

  private constructor() {

  }

  public static getInstance(): HelpService {
    if (!HelpService.instance) {
      HelpService.instance = new HelpService();
    }
    return HelpService.instance;
  }

  async register(userid: string, name: string, email: string, phone: string, message: string): Promise<HelpResponse> {
    return fetch(`${API_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid, name, email, phone, message }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  async update(id: number, name: string, email: string, phone: string, message: string): Promise<HelpResponse> {
    return fetch(`${API_URL}update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ id, name, email, phone, message }),
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

  async getAllByDate(date: string): Promise<[]> {
    return fetch(`${API_URL}getAllByDate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ date }),
    })
      .then(response => {
        /* if (!response.ok) {
          throw new Error('Network response was not ok');
        } */
        return response.json();
      });
  }

  async delete(id: number): Promise<HelpResponse> {
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

export default HelpService.getInstance();