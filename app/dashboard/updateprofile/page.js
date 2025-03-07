import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import UpdateProfile from "./updateprofile";

export default async function page(){
    const session = await auth();
    return(
        <>
        <AuthorizationCheck/>
        <UpdateProfile userId={session?.user?.id}/>
        </>
    )
}