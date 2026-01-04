import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-display font-semibold text-foreground mb-2">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="rounded-full">
          <a href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;