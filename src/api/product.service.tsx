// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface ProductResponse {
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_PRODUCT_API;

class ProductService {
  private static instance: ProductService;

  private constructor() { }

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async register(formdata:FormData): Promise<ProductResponse> {
    return fetch(`${API_URL}register`, {
      method: 'POST',
      headers: {
        ...authHeader(),
      },
      body: formdata,
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  async getAllProducts(): Promise<[]> {
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

  async deleteById(id: number): Promise<ProductResponse> {
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

export default ProductService.getInstance();