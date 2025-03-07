import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import HomePage from "./homepage";






export default async function homePage(){
    const session = await auth();   
    return(
        <>
        <AuthorizationCheck/>
        <HomePage userId={session?.user?.id}/>      
        </>
    )
}