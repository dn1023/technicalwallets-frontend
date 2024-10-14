/* export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
} */
//Note: For Node.js Express back-end, please use x-access-token header like this:
// Define the structure of the user object
interface User {
  accessToken: string;
  roles?: string[];
  email?: string;
  id?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  message?: string;
  // Add other properties as needed
}

// Define the structure of the returned header object
interface AuthHeader {
  'x-access-token'?: string;
}

// Convert the function to TypeScript
export default function authHeader(): AuthHeader {
  const userString = localStorage.getItem('user');
  const user: User | null = userString ? JSON.parse(userString) : null;

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}