import Layout from '../components/Layout'

const Contact = ({user}) => {
    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>Rodrigo J. A. Toledo</h1>
                        <img src={user.avatar_url} alt="Rodrigo J. A. Toledo" />
                        <h3>Full Stack Developer</h3>
                        <h4 target="_blank" className="outline-secondary my-2">Mail: rodrit182@hotmail.com</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.github.com/users/RodrigoToledo5`);
    const data = await res.json();

    const statusCode=res.status>200?res.status:false;
    return {
        props: {
            user: data,
            statusCode:statusCode
        }
    }
}
export default Contact;