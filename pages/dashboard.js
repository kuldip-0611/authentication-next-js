import { getSession,signIn } from "next-auth/react";
import { useEffect,useState } from "react";


const dashboard = ()=>{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const securePage = async () => {
            const session = await getSession();
            if (session) {
                setLoading(false);
            }
            else{
                signIn()
            }
        }
        securePage();
    })
    return(
       <>
          {
            loading ? (<div>Loading...</div>) : (<div>Dash Board</div>)
          }
       </>
    )
}
export default dashboard