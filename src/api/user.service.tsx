// Import the built-in Fetch API
import authHeader from "./auth-header";
interface PublicContentResponse {
  // Define the structure of the response here
  message?: string;
  data?: Array<any>;
}
interface EmployeeContentResponse {
  // Define the structure of the response here
  message?: string;
  data?: any[];
}

interface GeneralContentResponse {
  // Define the structure of the response here
  message?: string;
}

interface UserBoardResponse {
  // Define the structure of the response here
}

interface ModeratorBoardResponse {
  // Define the structure of the response here
}

interface AdminBoardResponse {
  // Define the structure of the response here
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_USER_API;

class UserService {
  private static instance: UserService;

  private constructor() { }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getAll(): Promise<[]> {
    return fetch(`${API_URL}getAll`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  /* async getAllEmployeeContent(): Promise<[]> {
    return fetch(`${API_URL}allEmployee`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  getUserBoard(): Promise<UserBoardResponse> {
    return fetch(`${API_URL}user`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  getModeratorBoard(): Promise<ModeratorBoardResponse> {
    return fetch(`${API_URL}mod`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  getAdminBoard(): Promise<AdminBoardResponse> {
    return fetch(`${API_URL}admin`, {
      method: 'GET',
      headers: {
        ...authHeader(),
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  } */

  /* async convertEmployee(userid: number): Promise<GeneralContentResponse> {
    return fetch(`${API_URL}updatetoemployee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }

  async convertUser(userid: number): Promise<GeneralContentResponse> {
    return fetch(`${API_URL}updatetouser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  } */

  async delete(userid: number): Promise<GeneralContentResponse> {
    return fetch(`${API_URL}delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }

  async getById(userid: number): Promise<{}> {
    return fetch(`${API_URL}getById`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }

  async update(userid: string, username: string, firstname: string, lastname: string, email: string, phone: string, password: string): Promise<GeneralContentResponse> {
    return fetch(`${API_URL}update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid, username, firstname, lastname, email, phone, password }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }
}

export default UserService.getInstance();