# SouthGenetics - CDSS Oncológico

Prototipo minimalista de un Sistema de Apoyo a Decisiones Clínicas (CDSS) para pruebas oncológicas desarrollado por **SouthGenetics**.

## Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Celeste fuerte** como color secundario (#0096c7)

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
├── app/
│   ├── doctor/          # Vista del médico con perfil y sidebar
│   ├── paciente/        # Vista del paciente
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página de inicio
│   └── globals.css      # Estilos globales
├── components/
│   ├── doctor/          # Componentes del flujo médico
│   │   ├── DoctorHeader.tsx    # Header con perfil del médico
│   │   ├── ChatSidebar.tsx      # Sidebar con lista de chats
│   │   ├── ChatBox.tsx          # Chat ampliado
│   │   ├── TestInfo.tsx         # Perfil de prueba Oncotype
│   │   ├── OrderForm.tsx        # Formulario de orden médica
│   │   ├── MedicalOrder.tsx     # Orden médica generada
│   │   └── PaymentLink.tsx      # Link de pago
│   └── patient/         # Componentes del flujo paciente
│       ├── PatientForm.tsx
│       └── PatientResult.tsx
└── ...
```

## Características Principales

### Vista Médico (`/doctor`)

- **Header con perfil**: Foto del médico (Dr. Juan Pérez) y logo de SouthGenetics
- **Sidebar de chats**: Lista de todas las conversaciones con pacientes
- **Chat ampliado**: Área de chat más grande y cómoda para escribir
- **Perfil de prueba Oncotype**: 
  - Foto/logo de la prueba
  - Descripción detallada
  - Precio ($2,500 USD)
- **Flujo completo**:
  1. El médico escribe información del paciente
  2. El sistema responde: "La prueba que la paciente debe hacerse es Oncotype"
  3. Se muestra el perfil completo de la prueba
  4. El médico crea una orden médica
  5. Se muestra la orden médica generada
  6. El médico confirma y se muestra un link de pago
  7. El médico envía el link al paciente

### Vista Paciente (`/paciente`)

1. El paciente completa un formulario con su situación
2. El sistema muestra: "El médico Juan puede ayudarte"
3. El paciente puede:
   - Agendar una reunión
   - Solicitar una orden médica
4. Se muestran mensajes de confirmación según la acción

## Diseño

- **Color principal**: Celeste fuerte (#0096c7)
- **Diseño minimalista**: Interfaz limpia y profesional
- **Layout responsivo**: Adaptado para diferentes tamaños de pantalla
- **Componentes organizados**: Código modular y bien estructurado

## Notas

- Todo el flujo está hardcodeado (sin backend real)
- No hay persistencia de datos
- Todos los textos están en español
- Diseño optimizado para demostración del concepto

## SouthGenetics

Sistema desarrollado por **SouthGenetics** para apoyar a los profesionales de la salud en la toma de decisiones clínicas relacionadas con pruebas oncológicas.
