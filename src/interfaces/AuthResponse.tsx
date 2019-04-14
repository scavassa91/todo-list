export interface AuthResponse {
  status: number;
  data: {
    status: string;
    sessionId: string;
    errorRate: number;
  };
}
