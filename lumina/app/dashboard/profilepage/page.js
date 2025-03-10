import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import ProfilePage from "./profilepage";



export default async function() {
    const session = await auth();   
    return(
        <>
        <AuthorizationCheck/>
        <ProfilePage userId={session?.user?.id}/>
        </>
    )
}
