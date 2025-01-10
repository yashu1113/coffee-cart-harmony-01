import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // TODO: Validate token with backend
          // For now, we'll just check localStorage
          const userData = localStorage.getItem("user");
          if (userData) {
            setUser(JSON.parse(userData));
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock login with test credentials
      if (password !== "123456") {
        throw new Error("Invalid credentials");
      }

      let mockUser: User;
      
      switch (email) {
        case "manager@test.com":
          mockUser = {
            user_id: 1,
            first_name: "Test",
            last_name: "Manager",
            email: email,
            role: "admin",
          };
          break;
        case "customer@test.com":
          mockUser = {
            user_id: 2,
            first_name: "Test",
            last_name: "Customer",
            email: email,
            role: "customer",
          };
          break;
        default:
          throw new Error("Invalid email");
      }

      localStorage.setItem("token", "mock-token");
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      toast.success("Successfully logged in!");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials and try again.");
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Successfully logged out!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}