export default function Proyectos() {
    return (
        <section className="w-full flex justify-center bg-base-200 p-3">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-65rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#d52fff] to-[rgb(255,32,32)] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="max-w-7xl flex justify-center items-center gap-4 flex-col sm:flex-col lg:flex-row-reverse z-20 my-10">
                <div className="w-full lg:w-[30%] py-4 px-5">
                    <h2 className="text-4xl font-bold pb-5">Mi huella en cada proyecto</h2>
                    <p className="text-justify">Te presento algunos de mis primeros proyectos, donde diseñé y desarrollé landing pages funcionales y atractivas. Aunque fueron el inicio de mi carrera, siguen siendo clave en mi aprendizaje y creatividad, antes de enfocarme en aplicaciones web más complejas.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full lg:w-[70%] place-items-center">
                    <div className="h-100 w-88 md:w-50 rounded shadow-lg cursor-pointer">
                        <a href="">
                            <img src="src/assets/ball.webp" className="h-full w-full object-cover" alt="img" />
                        </a>
                    </div>
                    <div className="h-100 w-88 md:w-50 rounded shadow-lg cursor-pointer">
                        <a href="">
                            <img src="src/assets/cazuelas1.webp" className="h-full w-full object-cover" alt="img" />
                        </a>
                    </div>
                    <div className="h-100 w-88 md:w-50 rounded shadow-lg cursor-pointer">
                        <a href="">
                            <img src="src/assets/invitacion.png" className="h-full w-full object-cover" alt="img" />
                        </a>
                    </div>
                    <div className="h-100 w-88 md:w-50 rounded shadow-lg cursor-pointer">
                        <a href="">
                            <img src="src/assets/ruthless.png" className="h-full w-full object-cover" alt="img" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
