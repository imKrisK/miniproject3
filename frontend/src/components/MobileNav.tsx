import {  CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0(); // Correctly call useAuth0
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="test-orange-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex item-center font-bold gap-2">
                            <CircleUserRound className="text-orange-500" />
                            {user?.email || "User"}
                        </span>
                    ) : (
                        <span className="text-orange-500 font-bold">Log In</span>
                    )}
                    <span> Welcome To LocalFoodTruck.com </span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLinks /> 
                    ) : ( 
                    <Button onClick={() => loginWithRedirect()} 
                    className="flex-1 font-bold bg-orange-500">
                        Log In
                        </Button>
                    )}
            </SheetDescription>
      
            </SheetContent>
        </Sheet>
    );
}; 

export default MobileNav;