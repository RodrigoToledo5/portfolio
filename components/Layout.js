import Navbar from "./Navbar"
import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
const Layout = ({ children,footer=true }) => {
    const router=useRouter();
    
    useEffect(()=>{
        const handleRoutChange=url=>{
            console.log(url)
            NProgress.start();
        }
        router.events.on('routeChangeStart',handleRoutChange)
        router.events.on('routeChangeComplete',()=>NProgress.done());
        return ()=>{
            router.events.off('routerChageStart', handleRoutChange)
        }
    },[])
    return (
        <>

            <Navbar />
            <main className="container py-4">
                {children}
            </main>
            {
                footer&&(
                    <footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                        <h1>&copy; Rodrigo J. A. Toledo</h1>
                        <p>{new Date().getFullYear()}</p>
                        <p>Todos los derechos reservados</p>

                    </div>

                    </footer>
                )
            }
        </>
    )

}
export default Layout;