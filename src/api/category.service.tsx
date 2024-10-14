// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface CategoryResponse {
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_CATEGORY_API;

class CategoryService {
  private static instance: CategoryService;

  private constructor() { }

  public static getInstance(): CategoryService {
    if (!CategoryService.instance) {
      CategoryService.instance = new CategoryService();
    }
    return CategoryService.instance;
  }

  async getAllCategories(): Promise<[]> {
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

}

export default CategoryService.getInstance();