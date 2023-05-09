import React, { useState }  from 'react';
import Navigation from '../components/Navigation'
import Logo from '../components/Logo';


const Blog = () => {
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
    
    if (content.length <140){
        setError(true)
    } else{
        setError(false)
    }
    }

    return (
        <div className="blog-container">
        <Logo />
        <Navigation />
        <h1>Blog</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder='Nom' />
            <textarea 
                style= {{ border: error ? "1px solid red" : "1px solid #61dafb" }}
                placeholder="Qu'est ce que tu penses ?" 
                cols="30"  
                rows="10"
                onChangeCapture = {(e) => setContent(e.target.value)}
            >
            </textarea>
            {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
            <input type="submit" value="Envoyer" />

        </form>
        </div>
    );
};

export default Blog;