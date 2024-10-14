// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface SlotResponse {
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_SLOT_API;

class SlotService {
  private static instance: SlotService;

  private constructor() { }

  public static getInstance(): SlotService {
    if (!SlotService.instance) {
      SlotService.instance = new SlotService();
    }
    return SlotService.instance;
  }

  async register(name: string): Promise<SlotResponse> {
    return fetch(`${API_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ name }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  async getAllSlots(): Promise<[]> {
    return fetch(`${API_URL}all`, {
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

  async deleteById(id: number): Promise<SlotResponse> {
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

export default SlotService.getInstance();