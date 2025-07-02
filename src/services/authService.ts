export const loginRequest = async (email: string, password: string) => {
  const response = await fetch('http://localhost:5050/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json(); // expects { token, user }
};

export const signupRequest = async (email: string, password: string, role: string) => {
  const response = await fetch('http://localhost:5050/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, role }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Signup failed');
  }

  return response.json(); // expects { token, user }
}; 