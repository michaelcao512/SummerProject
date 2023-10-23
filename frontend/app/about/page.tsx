export default async function AboutPage() {

    const resUsers = await fetch('http://localhost:3001/users')
    const dataUsers = await resUsers.json()

    const bodyLogin = 
    {
        "username": "testuser",
        "password": "testpassword" 
    }
    const resLogin = await fetch('http://localhost:3001/auth/login',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyLogin),
    }
    )
    const data = await resLogin.json()

    return (
        <body>

            <div>

                <h1>About Page</h1>
                <p>{JSON.stringify(dataUsers)}</p>
                <p>{JSON.stringify(bodyLogin)}</p>
                <p>{data.access_token}</p>
       
            </div>
        </body>

    );
    
    
}   