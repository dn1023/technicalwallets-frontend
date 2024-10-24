// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface CartResponse {
  message?: string;
}

interface GetCartAllResponse {
  message?: string;
  data?: Array<any>;
}

interface GetCartResponse {
  message?: string;
  data?: Array<any>;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_CART_API;

class CartService {
  private static instance: CartService;

  private constructor() {

  }

  public static getInstance(): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService();
    }
    return CartService.instance;
  }
  /* userid: req.body.userid,
    productid: req.body.productid,
    category: req.body.category,
    subcategory: req.body.subcategory,
    subsubcategory: req.body.subsubcategory,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,*/

  async register(userid: string, productid: string, category: string, subcategory: string, subsubcategory: string,
    name: string, email: string, phone: string, message: string): Promise<CartResponse> {
    return fetch(`${API_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid, productid, category, subcategory, subsubcategory, name, email, message, phone }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  async update( name: string, email: string, phone: string, message: string): Promise<CartResponse> {
    return fetch(`${API_URL}update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ name, email, message, phone }),
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
      body: JSON.stringify({ date })
    })
      .then(response => {
        /* if (!response.ok) {
          throw new Error('Network response was not ok');
        } */
        return response.json();
      });
  }

  async getById(id: string): Promise<[]> {
    return fetch(`${API_URL}getById`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ id })
    })
      .then(response => {
        /* if (!response.ok) {
          throw new Error('Network response was not ok');
        } */
        return response.json();
      });
  }

  async getByUserId(userid: string): Promise<[]> {
    return fetch(`${API_URL}getByUserId`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid })
    })
      .then(response => {
        /* if (!response.ok) {
          throw new Error('Network response was not ok');
        } */
        return response.json();
      });
  }

  async delete(id: string): Promise<CartResponse> {
    return fetch(`${API_URL}delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ id })
    })
      .then(response => {
        /* if (!response.ok) {
          throw new Error('Network response was not ok');
        } */
        return response.json();
      });
  }
}

export default CartService.getInstance();