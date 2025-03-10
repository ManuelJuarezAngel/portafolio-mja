export default function Empresas() {
    return (
        <div className="w-full flex justify-center bg-base-200 p-3" id="empresas">
            <div className="my-10 max-w-7xl text-center">
                <div className="px-10 pb-10">
                    <h2 className="text-4xl font-bold pb-8">Experiencia profesional con estas marcas</h2>
                    <p>En esta sección, te comparto algunas de las marcas con las que he tenido el placer de colaborar a lo largo de mi carrera. Cada logo refleja la confianza y la oportunidad de aportar mi experiencia en proyectos clave, ayudando a fortalecer su presencia y éxito en el mercado.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <div className="rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg flex justify-center items-center">
                        <img src="@/assets/KFC-logo.png" className="max-w-50" alt="marca" />
                    </div>
                    <div className="rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg flex justify-center items-center">
                        <img src="@/assets/kk.png" className="max-w-50" alt="marca" />
                    </div>
                    <div className="rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg flex justify-center items-center">
                        <img src="@/assets/alsea.png" className="max-w-50" alt="marca" />
                    </div>
                    <div className="rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg flex justify-center items-center">
                        <img src="@/assets/vdc.png" className="max-w-50" alt="marca" />
                    </div>
                    <div className="rounded bg-white/10 backdrop-blur-md border border-white/30 shadow-lg flex justify-center items-center">
                        <img src="@/assets/unilever.png" className="max-w-50" alt="marca" />
                    </div>
                </div>
            </div>
        </div>
    )
}
