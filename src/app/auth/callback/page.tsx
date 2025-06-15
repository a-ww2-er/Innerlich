import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type props = {
}
export default async function AuthCallbackPage({ }: props) {

    const auth = await onAuthenticateUser()

    if(auth.status === 200 || auth.status=== 201){
        return redirect(`/dashboard/${auth.user?.WorkSpace[0].id}`)
    }
    if(auth.status === 400 || auth.status === 500 || auth.status === 403 || auth.status === 404){
        return redirect('/auth/sign-in')
    }

}
