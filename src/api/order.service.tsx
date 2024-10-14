// Import the built-in Fetch API
//import fetch from 'node-fetch';
import authHeader from "./auth-header";

interface OrderResponse {
  message?: string;
}

interface GetOrderAllResponse {
  message?: string;
  data?: Array<any>;
}

interface GetOrderResponse {
  message?: string;
  data?: Array<any>;
}
/* interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}
 */

const API_URL = process.env.NEXT_PUBLIC_BACKEND_ORDER_API;

class OrderService {
  private static instance: OrderService;

  private constructor() { }

  public static getInstance(): OrderService {
    if (!OrderService.instance) {
      OrderService.instance = new OrderService();
    }
    return OrderService.instance;
  }

  async register(userid: string, addressdata: object, orderlist: object, preferences: object, collectiondelivery: object, coupon: string): Promise<OrderResponse> {
    return fetch(`${API_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ userid, addressdata, orderlist, preferences, collectiondelivery, coupon }),
    }).then(response => {
      /* if (!response.ok) {
        throw new Error('Network response was not ok');
      } */
      return response.json();
    }).catch(error => console.error('Error registering:', error));
  }

  async getAllOrders(): Promise<[]> {
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

  async getAllOrdersByDate(date: number): Promise<[]> {
    return fetch(`${API_URL}allbydate`, {
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

  async getAllOrdersByCollectionDate(date: number): Promise<[]> {
    console.log(date);
    return fetch(`${API_URL}allbycollectiondate`, {
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

  async getAllOrdersByDeliveryDate(date: number): Promise<[]> {
    return fetch(`${API_URL}allbydeliverydate`, {
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

  async getOrderById(id: number): Promise<{}> {
    return fetch(`${API_URL}orderbyid`, {
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

  async getOrderByUserId(id: number): Promise<[]> {
    return fetch(`${API_URL}orderbyuserid`, {
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

export default OrderService.getInstance();