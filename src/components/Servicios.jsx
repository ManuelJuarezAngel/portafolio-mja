export default function Servicios() {
    return (
        <section className="w-full flex justify-center bg-base-200 p-3" id="servicios">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-100 z-10 transform-gpu overflow-hidden blur-3xl sm:top-220"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-30rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#b79ff8] to-[#fc3f97] opacity-35 sm:left-[calc(50%-5rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="max-w-7xl flex justify-center items-center gap-4 flex-col sm:flex-col lg:flex-row z-20 my-10">
                <div className="w-[100%] lg:w-[50%] lg:p-5 p-1 pb-5">
                    <h2 className="text-4xl font-bold pb-5">Dale Vida a Tu Proyecto Digital</h2>
                    <p className="text-justify">Impulsamos tu presencia en línea con soluciones digitales innovadoras. Desde el diseño de sitios web hasta la optimización SEO, ofrecemos servicios personalizados para potenciar tu negocio y brindarte resultados reales.</p>
                </div>
                <div className="w-[100%] lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/pagina-de-inicio.png" className="w-36" alt="icon" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2">Sitios Web</h3>
                            <p>Diseño y desarrollo de sitios web modernos, adaptados a tus necesidades.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/codigo.png" className="w-36" alt="icon" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2">Aplicaciones Web</h3>
                            <p>Apps web personalizadas, escalables y optimizadas para un alto rendimiento.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/seo.png" className="w-36" alt="icon" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2">Posicionamiento SEO</h3>
                            <p>Optimización para mejorar la visibilidad y ranking en Google.</p>
                        </div>
                    </div>

                    <div className="card rounded bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <img src="/img/apoyo-tecnico.png" className="w-36" alt="icon" />
                            </div>
                            <br />
                            <h3 className="card-title border-b border-gray-300 pb-2">Mantenimiento y Soporte Web</h3>
                            <p>Actualización, seguridad y monitoreo continuo para tu sitio web.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
