// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface UserResponse {
  accessToken?: string;
  roles?: string[];
  email?: string;
  id?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  message?: string;
  // Add other fields as per your API response
}

interface RegisterResponse {
  message?: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_AUTH_API;

class AuthService {
  private static instance: AuthService;

  private constructor() { }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async signin(email: string, password: string): Promise<UserResponse> {
    return fetch(`${API_URL}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
      });
  }

  async update(userid: string, username: string, firstname: string, lastname: string, email: string, phone: string, password: string, roles: string[], accessToken: string): Promise<UserResponse> {
    return fetch(`${API_URL}update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid, username, firstname, lastname, email, phone, password, roles, accessToken }),
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
      });
  }

  logout(): void {
    localStorage.removeItem("user");
  }

  async signup(username: string, email: string, password: string): Promise<RegisterResponse> {
    return fetch(`${API_URL}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  getCurrentUser(): UserResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}

export default AuthService.getInstance();