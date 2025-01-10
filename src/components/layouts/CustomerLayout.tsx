import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CartDialog } from "../CartDialog";
import { LoginDialog } from "../LoginDialog";
import { useNavigate } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Login button clicked", { user }); // Debug log
    if (user) {
      navigate("/profile", { replace: true });
    } else {
      setLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neve-primary">NeveCafe</h1>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCartOpen(true)}
                  >
                    <ShoppingCart className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Cart</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLoginClick}
                  >
                    <User className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {user ? `${user.first_name} ${user.last_name}` : "Login"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <CartDialog open={cartOpen} onOpenChange={setCartOpen} />
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};