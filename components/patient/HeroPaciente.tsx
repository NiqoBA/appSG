'use client'

interface HeroPacienteProps {
  onStartEvaluation: () => void
}

/**
 * Hero section de la vista del paciente
 * Presenta el servicio y permite iniciar la evaluación
 */
export default function HeroPaciente({ onStartEvaluation }: HeroPacienteProps) {
  return (
    <section className="text-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Te ayudamos a entender qué estudio médico es el adecuado para tu caso.
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Contanos brevemente tu situación y uno de nuestros médicos revisará tu caso 
        para orientarte sobre si corresponde hacer una prueba genética u oncológica, 
        y cuáles podrían ser los siguientes pasos.
      </p>
      
      <button
        onClick={onStartEvaluation}
        className="bg-celeste text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-celeste-dark transition-colors shadow-lg mb-4"
      >
        Empezar evaluación gratuita
      </button>
      
      <p className="text-sm text-gray-500 mb-12">
        Toma menos de 2 minutos · Sin compromiso · 100% confidencial
      </p>
      
      {/* Pasos del proceso */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-celeste/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-celeste font-bold text-xl">1</span>
          </div>
          <p className="text-gray-800 font-medium">Nos contás tu situación</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-celeste/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-celeste font-bold text-xl">2</span>
          </div>
          <p className="text-gray-800 font-medium">Un médico revisa tu caso</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-celeste/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-celeste font-bold text-xl">3</span>
          </div>
          <p className="text-gray-800 font-medium">Te orientamos sobre estudios y próximos pasos</p>
        </div>
      </div>
    </section>
  )
}

