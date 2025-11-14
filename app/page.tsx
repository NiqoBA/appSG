'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-celeste font-bold text-xl">
              SouthGenetics
            </Link>
            <nav className="flex items-center space-x-6">
              <a href="#como-funciona" className="text-gray-600 hover:text-celeste text-sm font-medium transition-colors">
                Cómo funciona
              </a>
              <a href="#para-pacientes" className="text-gray-600 hover:text-celeste text-sm font-medium transition-colors">
                Para pacientes
              </a>
              <a href="#para-medicos" className="text-gray-600 hover:text-celeste text-sm font-medium transition-colors">
                Para médicos
              </a>
              <Link
                href="/"
                className="bg-celeste text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-celeste-dark transition-colors"
              >
                Ingresar
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            La nueva forma de conectar pacientes, médicos y estudios avanzados de cáncer y genética.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            En SouthGenetics combinamos asistencia médica con inteligencia artificial para ayudar a decidir qué estudios pedir, cuándo hacerlos y cómo simplificar todo el proceso, tanto para pacientes como para médicos.
          </p>

          {/* CTAs principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            <Link
              href="/paciente"
              className="bg-white border-2 border-celeste rounded-lg p-8 hover:bg-celeste/5 transition-all shadow-sm hover:shadow-md group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-celeste transition-colors">
                Soy paciente
              </h3>
              <p className="text-gray-600 text-sm">
                Quiero entender qué estudio podría necesitar.
              </p>
            </Link>

            <Link
              href="/doctor"
              className="bg-white border-2 border-celeste rounded-lg p-8 hover:bg-celeste/5 transition-all shadow-sm hover:shadow-md group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-celeste transition-colors">
                Soy médico
              </h3>
              <p className="text-gray-600 text-sm">
                Quiero apoyo para decidir y solicitar estudios.
              </p>
            </Link>
          </div>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Usamos información basada en guías clínicas internacionales. No reemplazamos una consulta médica, la potenciamos.
          </p>
        </div>
      </section>

      {/* Sección Quiénes somos */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Somos SouthGenetics
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            SouthGenetics es una empresa especializada en genética y oncología, que trabaja con pruebas avanzadas como Oncotype Dx Mama, paneles somáticos, estudios hereditarios y otras herramientas de precisión médica. Ahora estamos construyendo una plataforma con asistentes de inteligencia artificial para hacer más accesible y ordenado el acceso a estos estudios en Latinoamérica.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Queremos llevar el estándar de los mejores centros de cáncer del mundo a la realidad diaria de nuestra región.
          </p>
        </div>
      </section>

      {/* Sección Qué hacen nuestros asistentes */}
      <section id="como-funciona" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Qué hacen nuestros asistentes de IA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna Pacientes */}
            <div id="para-pacientes" className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Asistente para pacientes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-celeste/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-celeste"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Te escucha en lenguaje natural y te ayuda a entender qué tipo de estudio podría ser útil en tu situación.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-celeste/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-celeste"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Te orienta sobre qué especialistas pueden ayudarte (oncólogos, genetistas, etc.).
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-celeste/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-celeste"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Te guía paso a paso para que el proceso de acceso a estudios avanzados sea menos confuso.
                  </p>
                </li>
              </ul>
            </div>

            {/* Columna Médicos */}
            <div id="para-medicos" className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Asistente para médicos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-celeste/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-celeste"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Recibe la situación clínica y sugiere qué estudio podría estar indicado según guías internacionales.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-celeste/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-celeste"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ayuda a generar órdenes médicas claras y estandarizadas.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-celeste/10 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-celeste"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Simplifica el flujo de solicitud y pago de estudios, sin depender de vendedores.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Por qué esto importa */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Por qué este programa es diferente
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-celeste/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-celeste" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Decisiones más claras
              </h3>
              <p className="text-gray-600 text-sm">
                Menos dudas al elegir estudios oncológicos y genéticos.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-celeste/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-celeste" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Menos fricción
              </h3>
              <p className="text-gray-600 text-sm">
                Pacientes y médicos conectados en un flujo simple, sin papeles innecesarios.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-celeste/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-celeste" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Basado en evidencia
              </h3>
              <p className="text-gray-600 text-sm">
                Inspirado en guías como NCCN, ASCO y otras referencias internacionales.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-celeste/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-celeste" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pensado para Latinoamérica
              </h3>
              <p className="text-gray-600 text-sm">
                Lenguaje claro, flujos adaptados a nuestra realidad y contexto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Elegí cómo querés empezar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bloque Paciente */}
            <div className="bg-gradient-to-br from-celeste/5 to-celeste/10 rounded-lg p-8 border border-celeste/20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Soy paciente
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Quiero contar mi situación, entender mejor qué estudios existen y con qué tipo de médico debería hablar.
              </p>
              <Link
                href="/paciente"
                className="inline-block bg-celeste text-white px-6 py-3 rounded-lg font-medium hover:bg-celeste-dark transition-colors shadow-md"
              >
                Entrar a la interfaz de paciente
              </Link>
            </div>

            {/* Bloque Médico */}
            <div className="bg-gradient-to-br from-celeste/5 to-celeste/10 rounded-lg p-8 border border-celeste/20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Soy médico
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Quiero probar el asistente para apoyar mis decisiones y simplificar la solicitud de estudios para mis pacientes.
              </p>
              <Link
                href="/doctor"
                className="inline-block bg-celeste text-white px-6 py-3 rounded-lg font-medium hover:bg-celeste-dark transition-colors shadow-md"
              >
                Entrar a la interfaz de médico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              SouthGenetics · Programa de Asistentes de IA para cáncer y genética
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-celeste transition-colors">
                Términos
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-celeste transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-celeste transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
