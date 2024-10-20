// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface ProductResponse {
  message?: string;
}

interface ProductDetailResponse {
  title?: string;
  content?: string;
  oldprice?: string;
  newprice?: string;
  param1?: string;
  param2?: string;
  look?: string;
  handshake?: string;
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

  async updateImage(formdata:FormData): Promise<ProductResponse> {
    return fetch(`${API_URL}updateImage`, {
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

  async update(id: string, title: string, content: string, oldprice: string, newprice: string, param1: string, param2: string, look: string, handshake: string): Promise<ProductResponse> {
    return fetch(`${API_URL}update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ id, title, content, oldprice, newprice, param1, param2, look, handshake }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
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

  async getSome(): Promise<[]> {
    return fetch(`${API_URL}getSome`, {
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

  async getAllByCategory(category: string, subcategory: string, subsubcategory: string): Promise<[]> {
    return fetch(`${API_URL}getAllByCategory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ category, subcategory, subsubcategory }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  async getById(id: string): Promise<ProductDetailResponse> {
    return fetch(`${API_URL}getById`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ id }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  async delete(id: number): Promise<ProductResponse> {
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