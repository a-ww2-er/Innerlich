import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type props = {
}
export default async function DashboardPage({ }: props) {

    const auth = await onAuthenticateUser()

    if(auth.status === 200 || auth.status=== 201){
        return redirect(`/dashboard/${auth.user?.firstName}${auth.user?.lastName}`)
    }
    if(auth.status === 400 || auth.status === 500 || auth.status === 403 || auth.status === 404){
        return redirect('/auth/sign-in')
    }
    return (
        <div></div>
    );
}
