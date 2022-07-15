import { useEffect } from "react";

function Home() {

    useEffect(()=>{
        document.title = "Home Title"
    }, []);

    return (
        <h1>Home</h1>
    )
}

export default Home;