export const config = {
    branding: {
        name: "Mirador Construcciones",
        logo: "MIRADOR",
        slogan: "Líderes en construcción y arquitectura de alto nivel.",
        description: "En Mirador Construcciones materializamos proyectos de alta complejidad con precisión técnica, eficiencia operativa y un compromiso inquebrantable con la calidad.",
        location: "Sede Central — Buenos Aires",
        email: "hola@miradorconstrucciones.com",
        phone: "+54 11 9876-5432",
        whatsapp: "+541198765432",
        cta_text: "INICIAR OBRA",
        cta_link: "/contact",
    },
    navigation: [
        { label: "INICIO", href: "/" },
        { label: "LA EMPRESA", href: "/about" },
        { label: "SERVICIOS", href: "/services" },
        { label: "OBRAS", href: "/projects" },
        { label: "CONTACTO", href: "/contact" },
    ],
    products: [
        { id: "p1", name: "Grifería Premium Industrial", price: "$4,800 MXN", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", desc: "Acabado en metal cepillado para baños de lujo contemporáneo." },
        { id: "p2", name: "Piedra Volcánica Negra", price: "$900/m2 MXN", image: "https://images.unsplash.com/photo-1590069230002-70cc889757f5?q=80&w=800", desc: "Revestimiento natural de alta resistencia y estética minimalista." },
        { id: "p3", name: "Iluminación Dimmer Pro", price: "$3,600 MXN", image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=800", desc: "Sistema de control lumínico inteligente para ambientes dinámicos." },
    ],
    services: [
        { id: "const-res", title: "Construcción Residencial" },
        { id: "obras-com", title: "Obras Comerciales" },
        { id: "gestion-proy", title: "Gerenciamiento de Proyectos" },
        { id: "remod-est", title: "Remodelaciones Estructurales" },
    ],
    projects: [
        {
            id: "torre-mirador-polanco",
            title: "Torre Mirador Polanco",
            category: "Residencial Premium",
            year: "2024",
            location: "Ciudad de México",
            area: "8,400 m²",
            tag: "Proyecto Insignia",
            subtitle: "24 niveles de lujo con vista panorámica a la ciudad",
            description: "Desarrollo vertical de uso mixto con 96 departamentos, amenidades de nivel internacional y acabados de primera. Estructura de concreto reforzado con certificación LEED.",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400",
            highlights: [
                { label: "Pisos", value: "24" },
                { label: "Construidos", value: "8,400 m²" },
                { label: "Tiempo de Obra", value: "18 meses" }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
                "https://images.unsplash.com/photo-1554435493-94764d99d13e?q=80&w=1200"
            ],
            content: {
                context: "Ubicado en el corazón de Polanco, este proyecto redefine el skyline de la zona con una propuesta que fusiona lujo residencial y funcionalidad corporativa.",
                process: "Implementamos sistemas de encofrado deslizante para optimizar los tiempos de ejecución de la estructura principal, logrando un ritmo de un piso cada 6 días.",
                materiality: "Piel de vidrio de alto desempeño, mármoles importados en lobby y áreas comunes, y estructuras de acero reforzado.",
                result: "Certificación LEED Gold obtenida gracias a la eficiencia en el uso de recursos y el diseño bioclimático.",
                testimonial: "La precisión técnica de Mirador fue clave para resolver la complejidad estructural de la torre.",
                credits: {
                    client: "Desarrolladora Alpha",
                    collaborators: "Arq. Studio Global",
                    timeline: "18 Meses"
                }
            }
        },
        {
            id: "centro-empresarial-monterra",
            title: "Centro Empresarial Monterra",
            category: "Comercial",
            year: "2023",
            location: "Monterrey, N.L.",
            area: "3,200 m²",
            tag: "Entregado",
            subtitle: "Espacios de trabajo diseñados para el futuro",
            description: "Edificio de oficinas corporativas de 8 niveles con tecnología domótica, estacionamiento automatizado y fachada ventilada de alto rendimiento térmico.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400",
            highlights: [
                { label: "Pisos", value: "8" },
                { label: "Oficinas", value: "3,200 m²" },
                { label: "Tiempo de Obra", value: "12 meses" }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200"
            ],
            content: {
                context: "En el distrito financiero de Monterrey, este edificio se erige como un referente de sostenibilidad y tecnología aplicada al trabajo.",
                process: "Coordinación BIM integral para la integración de sistemas de domótica y HVAC de última generación.",
                materiality: "Fachada de panel fenólico, vidrios reflectivos de baja emisividad y estructuras metálicas vistas.",
                result: "Un espacio de oficinas Clase A con ocupación del 100% al momento de la entrega.",
                testimonial: "El cumplimiento de los plazos fue impecable, permitiendo a los inquilinos mudarse según lo planeado.",
                credits: {
                    client: "Inversiones Monterra",
                    collaborators: "MEP Engineers Pro",
                    timeline: "12 Meses"
                }
            }
        },
        {
            id: "fraccionamiento-los-mezquites",
            title: "Fraccionamiento Los Mezquites",
            category: "Habitacional",
            year: "2023",
            location: "Querétaro, Qro.",
            area: "4.2 ha",
            tag: "Vendido 100%",
            subtitle: "120 casas donde la familia crece segura",
            description: "Desarrollo horizontal cerrado con casa club, áreas verdes, canchas deportivas y sistema de seguridad perimetral las 24 horas.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400",
            highlights: [
                { label: "Viviendas", value: "120" },
                { label: "Terreno", value: "4.2 ha" },
                { label: "Tiempo de Obra", value: "24 meses" }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200"
            ],
            content: {
                context: "Un desarrollo pensado para la familia moderna, priorizando la seguridad y el contacto con la naturaleza.",
                process: "Construcción modular serializada para garantizar uniformidad en la calidad y eficiencia en los costos.",
                materiality: "Mampostería reforzada, acabados en pasta fina y pavimentos permeables en vialidades.",
                result: "Éxito comercial total con el 100% de las unidades vendidas antes de finalizar la obra.",
                testimonial: "La calidad de las casas y el diseño de las áreas comunes superaron nuestras expectativas.",
                credits: {
                    client: "Desarrollos Querétaro",
                    collaborators: "Urbano Plan",
                    timeline: "24 Meses"
                }
            }
        },
        {
            id: "nave-logistica-mova",
            title: "Nave Logística MOVA Tlalnepantla",
            category: "Industrial",
            year: "2024",
            location: "Estado de México",
            area: "6,800 m²",
            tag: "En proceso",
            subtitle: "Infraestructura industrial de alto rendimiento",
            description: "Nave industrial de gran claro con estructura metálica, piso de concreto pulido nivel FF50, andenes de carga y oficinas administrativas integradas.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400",
            highlights: [
                { label: "Nave", value: "6,800 m²" },
                { label: "Altura", value: "12m" },
                { label: "Tiempo de Obra", value: "8 meses" }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200"
            ],
            content: {
                context: "Ubicación estratégica para la logística regional, requiriendo una nave de alta resistencia y gran volumen.",
                process: "Montaje de estructura metálica de grandes claros mediante grúas de alto tonelaje coordinadas por GPS.",
                materiality: "Acero estructural A36, lámina KR-18 con aislamiento térmico y pisos industriales de alta planicidad.",
                result: "Una infraestructura robusta lista para soportar operaciones logísticas 24/7.",
                testimonial: "La velocidad de montaje y la precisión en los niveles de piso son excepcionales.",
                credits: {
                    client: "Logística MOVA",
                    collaborators: "Steel Structures Inc",
                    timeline: "8 Meses"
                }
            }
        }
    ],
    dynamicContent: {
        city: "Buenos Aires",
        localAnchor: "Recoleta",
        stats: {
            experienceYears: 15,
            completedProjects: 85,
            awardsWon: 12,
            activeUsers: "250+",
            labels: {
                experience: "Años de experiencia en el sector.",
                users: "Clientes satisfechos",
                mindset: "Nuestra visión nació de un desafío ambicioso."
            }
        },
        team: [
            {
                name: "Ing. Lucas Ferrari",
                role: "Director General de Obras",
                bio: "Ingeniero Civil con más de 15 años de experiencia liderando proyectos de infraestructura y edificación de gran escala. Experto en optimización de procesos.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Arq. Valentina Mares",
                role: "Jefa de Planificación & BIM",
                bio: "Especialista en coordinación técnica y metodologías ágiles aplicadas a la construcción. Valentina asegura que cada proyecto se ejecute sin desvíos.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
            }
        ],
        awards: [
            { year: "2023", title: "Excelencia en Construcción Sustentable", award: "Gold Medal - CPAU", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=600" },
            { year: "2022", title: "Innovación en Gestión de Obra", award: "Premio Estilo - CABA", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600" }
        ],
        about_page: {
            story: "Fundada en 2012, Mirador Construcciones nació para elevar los estándares de ejecución en la industria. Lo que comenzó como una cuadrilla de especialistas se ha convertido en una empresa constructora integral, reconocida por su solvencia técnica y el cumplimiento riguroso de plazos.",
            philosophy: {
                title: "Construcción Inteligente",
                text: "No solo levantamos muros; construimos infraestructuras para el futuro. Nuestra filosofía combina la ingeniería de vanguardia con un control de calidad exhaustivo en cada etapa de la obra, garantizando solidez y eficiencia energética.",
                values: ["Precisión Técnica", "Eficiencia Operativa", "Seguridad Total"]
            },
            qa: [
                { question: "¿Cuál es el diferencial de Mirador?", answer: "Nuestra metodología de gestión integrada que minimiza imprevistos y optimiza el uso de recursos." },
                { question: "¿Cómo manejan los plazos de entrega?", answer: "Utilizamos planificación crítica y monitoreo en tiempo real para asegurar que cada hito se cumpla según lo pactado." },
                { question: "¿Tienen certificación de seguridad?", answer: "Cumplimos con los más altos estándares nacionales e internacionales de seguridad e higiene en obra." }
            ]
        },
        services_page: {
            hero: {
                title: "Soluciones de Ingeniería y Obra",
                subtitle: "Transformamos proyectos complejos en realidades tangibles mediante procesos optimizados."
            },
            packages: [
                {
                    id: "construccion-llave-en-mano",
                    title: "Obra Llave en Mano",
                    price_from: "25,000",
                    description: "Nos encargamos de todo, desde la cimentación hasta los acabados finales. Tranquilidad total para el inversor.",
                    benefits: ["Presupuesto Cerrado", "Plazos Garantizados", "Gestión de Gremios Integral"],
                    cta: "SOLICITAR PRESUPUESTO",
                    image: "/services-img/construccion-residencial.webp"
                },
                {
                    id: "gerenciamiento-obra",
                    title: "Gerenciamiento de Proyectos (EPC)",
                    price_from: "15,000",
                    description: "Control exhaustivo de costos, tiempos y calidad para obras de terceros o desarrollos inmobiliarios.",
                    benefits: ["Auditoría de Obra Continua", "Optimización de Suministros", "Informes de Avance Semanales"],
                    cta: "CONSULTAR SERVICIOS",
                    image: "/services-img/industrial.webp"
                }
            ],
            process: [
                { step: "01", title: "Análisis Técnico", desc: "Evaluamos la viabilidad del proyecto y realizamos el estudio de suelos inicial." },
                { step: "02", title: "Presupuestación Detallada", desc: "Cómputo métrico y desglose de costos transparente sin sorpresas." },
                { step: "03", title: "Planificación de Obra", desc: "Cronograma de ejecución detallado con hitos de entrega claros." },
                { step: "04", title: "Ejecución & Supervisión", desc: "Dirección técnica constante y control de calidad en cada etapa." },
                { step: "05", title: "Entrega & Post-Venta", desc: "Entrega formal de la obra y seguimiento para asegurar la satisfacción total." }
            ]
        },
        section_details: {
            Hero: {
                background_concept: "/services-img/industrial.webp",
                microtext: "Sede Central — Buenos Aires",
                title: "Materializamos infraestructuras, construimos confianza.",
                subtitle: "En Mirador Construcciones combinamos ingeniería de precisión con procesos ágiles para entregar obras que superan los estándares de la industria.",
                cta_primary: "SOLICITAR COTIZACIÓN",
                cta_secondary: "VER OBRAS"
            },
            Features: [
                {
                    title: "Construcción Residencial",
                    solution: "Creamos espacios de vida personalizados que combinan confort con la más alta excelencia arquitectónica moderna.",
                    label: "Nuestros Servicios",
                    image: "/services-img/construccion-residencial.webp",
                    icon: "home"
                },
                {
                    title: "Construcción Comercial",
                    solution: "Desarrollamos plazas comerciales, oficinas y locales de alto impacto, diseñados para maximizar la rentabilidad y el flujo de clientes.",
                    label: "Nuestros Servicios",
                    image: "/services-img/construccion-comercial.png",
                    icon: "building"
                },
                {
                    title: "Remodelación y Renovación",
                    solution: "Transformamos estructuras existentes con acabados de lujo y mejoras estructurales de vanguardia.",
                    label: "Nuestros Servicios",
                    image: "/services-img/remodelacion.webp",
                    icon: "wrench"
                },
                {
                    title: "Construcción Industrial",
                    solution: "Soluciones de ingeniería robustas para instalaciones industriales complejas y centros logísticos.",
                    label: "Nuestros Servicios",
                    image: "/services-img/industrial.webp",
                    icon: "factory"
                },
                {
                    title: "Infraestructura y Obra Civil",
                    solution: "Proyectos de desarrollo urbano a gran escala y obras críticas ejecutadas con precisión milimétrica.",
                    label: "Nuestros Servicios",
                    image: "/services-img/obra-civil.webp",
                    icon: "building"
                }
            ],
            LeadMagnet_Calculator: {
                title: "Planificación Inteligente",
                subtitle: "Algoritmo de cálculo propio. Actualización semanal de costos."
            },
            Immersive: {
                steps: [
                    { title: "Paso 01 - Escaneo del Entorno", desc: "Capturamos el ADN del sitio en alta resolución con tecnología láser." },
                    { title: "Paso 02 - Proyección 3D", desc: "Modelado hiper-realista para toma de decisiones rápida." }
                ]
            },
            Testimonials: [
                { 
                    name: "Alejandro Ruiz", 
                    project: "Residencia El Campanario, Qro.", 
                    text: "La experiencia con Mirador Construcciones fue impecable. Entregaron mi casa antes de lo previsto y con acabados de primera. ¡Súper recomendados!",
                    rating: 5
                },
                { 
                    name: "Ing. Mónica Estrada", 
                    project: "Logística MOVA, Edomex", 
                    text: "Buscábamos una constructora seria para nuestra nave industrial y Mirador superó las expectativas. Muy profesionales en todo el proceso técnico.",
                    rating: 5
                },
                { 
                    name: "Ricardo Slim", 
                    project: "Grupo Comercial Alpha, CDMX", 
                    text: "Excelente atención al detalle. Transformaron nuestro local en Polanco en un espacio moderno y funcional. El manejo del presupuesto fue transparente.",
                    rating: 5
                },
                { 
                    name: "Arq. Sofía García", 
                    project: "Desarrolladora Vertical, Puebla", 
                    text: "Desde el primer día nos dieron mucha confianza. La Torre Mirador es un orgullo para nuestra ciudad y todo gracias a su ejecución técnica impecable.",
                    rating: 5
                },
                { 
                    name: "Familia Hernández", 
                    project: "Casa Monterra, Monterrey", 
                    text: "La mejor decisión para nuestra remodelación. Saben escuchar al cliente y proponer soluciones creativas. Gracias por el excelente trabajo.",
                    rating: 5
                },
                { 
                    name: "Gerardo Villarreal", 
                    project: "Industrial Park, Monterrey", 
                    text: "Un equipo de profesionales que de verdad sabe de construcción pesada. Su gestión de obra y seguridad es de clase mundial. Altamente confiables.",
                    rating: 5
                },
                { 
                    name: "Daniela Orozco", 
                    project: "Inversionista Inmobiliaria", 
                    text: "Mis respetos para Mirador. Cumplieron con cada hito del proyecto sin retrasos, algo difícil de encontrar en este ramo. 5 estrellas bien merecidas.",
                    rating: 5
                }
            ]
        },
        contact_page: {
            hero: {
                title: "Conversemos sobre tu visión",
                subtitle: "Sin fricciones, sin esperas infinitas. Un camino directo hacia tu próximo espacio."
            },
            scheduling: {
                title: "Agenda una Llamada de Descubrimiento",
                subtitle: "Reserva 15 minutos directamente en nuestra agenda para hablar sobre tu proyecto.",
                calendly_url: "https://calendly.com/mirador/discovery",
                button_text: "VER DISPONIBILIDAD"
            },
            info: {
                address: "Av. del Libertador 1200, Recoleta, CABA",
                google_maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.444391629828!2d-58.3917894!3d-34.5930262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabce5555555%3A0x5555555555555555!2sAv.%20del%20Libertador%201200%2C%20C1101%20ABN%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1712280000000!5m2!1ses-419!2sar",
                response_time: "Garantizamos una respuesta en menos de 24 horas hábiles.",
                socials: [
                    { platform: "Instagram", url: "https://instagram.com/miradorconstrucciones", icon: "instagram" },
                    { platform: "LinkedIn", url: "https://linkedin.com/company/miradorconstrucciones", icon: "linkedin" },
                    { platform: "Pinterest", url: "https://pinterest.com/miradorconstrucciones", icon: "pinterest" }
                ]
            }
        }
    }
};
