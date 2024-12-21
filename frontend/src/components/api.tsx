// src/api.ts

interface ApiResponse {
  message: string;
  timestamp: string;
  items: string[];
}

// Fetch data from the backend API
export async function fetchBackendData(): Promise<ApiResponse> {
  try {
      const response = await fetch('http://127.0.0.1:3000/api/data');
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data from backend:', error);
      throw error;
  }
}