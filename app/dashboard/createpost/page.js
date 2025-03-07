import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import Page from "./createpost";





export default async function page () {
    const session = await auth();
        return (
            <>
            <AuthorizationCheck/>
            <Page userId= {session?.user?.id}/>
            </>
        )
}