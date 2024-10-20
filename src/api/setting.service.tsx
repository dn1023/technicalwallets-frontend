// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface SettingResponse {
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_SETTING_API;

class SettingService {
  
  private static instance: SettingService;

  private constructor() {

  }

  public static getInstance(): SettingService {
    if (!SettingService.instance) {
      SettingService.instance = new SettingService();
    }
    return SettingService.instance;
  }

  async update(address: string, phone: string, email: string, paymenttoken: string, smtpemail: string, smtppass: string, receiveremail1: string, receiveremail2: string): Promise<SettingResponse> {
    return fetch(`${API_URL}update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ address, phone, email, paymenttoken, smtpemail, smtppass, receiveremail1, receiveremail2 }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error updating:', error));
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
}

export default SettingService.getInstance();