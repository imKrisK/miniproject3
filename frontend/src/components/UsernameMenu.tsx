import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react"; // Ensure this import is correct
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const UsernameMenu = () => { 
    const { user, logout } = useAuth0(); // Correctly call useAuth0

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2"> 
                <CircleUserRound className="text-orange-500"/>
                {user?.email || "Username"}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-orange-500"> 
            </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button 
                onClick={() => logout}
                className="fex flex-1 font-bold bg-orange-500"> 
                    Log Out</Button>
            </DropdownMenuItem>
            </DropdownMenuContent>
           
        </DropdownMenu>
    );
};

export default UsernameMenu;