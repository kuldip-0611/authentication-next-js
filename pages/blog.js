import { getSession } from "next-auth/react"

const blog = ({data})=>{

    return(
        <h1>blog-page === {data}</h1>
    )
}
export default blog

export async function getServerSideProps(context){
    const session = getSession(context);

    if(session === null){
        return{
            redirect:{
                destination:"/api/auth/signin?callbackUrl=http://localhost:3000/blog",
                permanent:false
            }
        }
    }

    return{
        props:{
            data:session ? 'bharelu' : 'khali'
        }
    }

}