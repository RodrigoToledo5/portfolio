import Layout from '../components/Layout'
import Link from 'next/link'
import { skills, experiencies, project } from '../profile'

const Index = () => (
    <Layout>
        {/** Header */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid p-4" src="rodrigo-toledo-profile.png" alt="Rodrigo J. A. Toledo"></img>
                        </div>
                        <div className="col-md-8 py-5">
                            <h1>Rodrigo J. A. Toledo</h1>
                            <h3>Full Stack Developer</h3>
                            <p>Mi nombre es Rodrigo soy Full stack developer me considero una persona entusiasta con un gran sentido de pertenencia hacia los equipos en los cuales decido integrarme.
                                Estoy iniciando en el mundo tech con muchas ganas de aprender, dando lo mejor de mi trabajando para obetener buenos resultados.</p>
                            <a href="/contact">Contratame</a>
                        </div>
                    </div>
                </div>

            </div>

        </header>

        {/**Second section */}
        <div className="row py-2 text-light">
            <div className="col-md-4">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h1>Habilidades</h1>

                        {skills.map(({ skill, percentaje }, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${percentaje}%` }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h1>Sobre mi</h1>
                        <ul>
                            {experiencies.map(({ title, subtitle, description }, index) => (
                                <li key={index}>
                                    <h3>{title} </h3>
                                    <h5>{subtitle}:</h5>
                                    <p>{description}</p>
                                </li>

                            ))}
                        </ul>
                        {/* <Link href="/experience">
                            <a className="btn btn-primary">Conocer mas</a>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
        {/** Portfolio */}
        <div className="row">

            <div className="col-md-12">
                <div className="card card-body bg-dark">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {project.map(({ title, description, imagen ,link,video}, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                    <img src={`/${imagen}`} alt="pokemon" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    <a href={link}>Acceder</a>
                                    <p></p>
                                    {video&&<a href={video}>Ver video</a>}
                                    </div>
                                </div>
                            
                            </div>
                        ))}
                </div>
            </div>
        </div>

    </div>
    
    </Layout >
)
export default Index;