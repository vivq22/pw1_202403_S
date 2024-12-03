const demoPlanEstudio = [
    {
        "id": 1,
        "bloque": "I",
        "asignaturas": [
            {
                "id": "es101",
                "nombre": "Español",
                "creditos": 3,
                "orden": 0,
            },
            {
                "id": "mt101",
                "nombre": "Matemáticas",
                "creditos": 4,
                "orden": 1
            },
            {
                "id": 'if112',
                "nombre": "Introducción a las Ciencias de la Computación",
                "creditos": 3,
                "orden": 2
            },
            {
                "id": 'sc101',
                "nombre": "Sociología",
                "creditos": 3,
                "orden": 3
            },
            {
                "id": 'fi101',
                "nombre": "Filosofía",
                "creditos": 3,
                "orden": 4
            },
            {
                "id": 'esvu1',
                "nombre": "Seminario de iniciación",
                "creditos": 0,
                "orden": 4
            },
        ]
    },
    {
        "id": 2,
        "bloque": "II",
        "asignaturas": [
            {
                "id": 'es201',
                "nombre": "Expresión Oral y Escríta",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['es101']
            },
            {
                "id": "mt201",
                "nombre": "Precálculo",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['mt101']
            },
            {
                "id": 'if200',
                "nombre": "Fundamento y Lógica de la Programación",
                "creditos": 4,
                "orden": 2,
                "requisitos": ['if112']
            },
            {
                "id": 'hs101',
                "nombre": "Historia de Honduras",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'cr201',
                "nombre": "El Hombre Frente a la Vida",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['fi101']
            },
            {
                "id": 'idin1',
                "nombre": "Inglés (Principiante)",
                "creditos": 6,
                "orden": 5,
            },
            {
                "id": 'espf1',
                "nombre": "Retiro para padres de familia",
                "creditos": 0,
                "orden": 6,
            }
        ]
    },
    {
        "id": 3,
        "bloque": "III",
        "asignaturas": [
            {
                "id": "mt202",
                "nombre": "Estadística I",
                "creditos": 4,
                "orden": 0,
                "requisitos": ['mt101']
            },
            {
                "id": "mt303",
                "nombre": "Cáclulo I",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['mt201']
            },
            {
                "id": 'if214',
                "nombre": "Programación Estructurada I",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['if200']
            },
            {
                "id": "if213",
                "nombre": "Estructuras Discretas",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['if200']
            },
            {
                "id": 'idin2',
                "nombre": "Inglés (Intermedio bajo)",
                "creditos": 6,
                "orden": 4,
                "requisitos": ['idin1']
            },
            {
                "id": 'if394',
                "nombre": "Diseño Gráfico",
                "creditos": 3,
                "orden": 5,
            }
        ]
    },
    {
        "id": 4,
        "bloque": "IV",
        "asignaturas": [
            {
                "id": "ad302",
                "nombre": "Métodos y técnicas de investigación",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['mt202']
            },
            {
                "id": "mt401",
                "nombre": "Calculo II",
                "creditos": 4,
                "orden": 1,
                "requisitos": ['mt303']
            },
            {
                "id": "if303",
                "nombre": "Programación Estructurada II",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['if214']
            },
            {
                "id": "fs201",
                "nombre": "Física I",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['mt101']
            },
            {
                "id": 'ad101',
                "nombre": "Administración",
                "creditos": 3,
                "orden": 4,
            },
            {
                "id": 'idin3',
                "nombre": "Inglés (Intermedio alto)",
                "creditos": 6,
                "orden": 5,
                "requisitos": ['idin2']
            },
            {
                "id": 'cnfs1',
                "nombre": "Laboratorio de Física",
                "creditos": 2,
                "orden": 6,
            },
        ]
    },

    {
        "id": 5,
        "bloque": "V",
        "asignaturas": [
            {
                "id": "if322",
                "nombre": "Base de Datos I",
                "creditos": 3,
                "orden": 0,
            },
            {
                "id": "ct201",
                "nombre": "Contabilidad",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": "if325",
                "nombre": "#Programación en Entorno de Desarrollo Visual",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['if303']
            },
            {
                "id": "if319",
                "nombre": "Principios de la electrónica",
                "creditos": 2,
                "orden": 3,
                "requisitos": ['fs201']
            },
            {
                "id": "mt204",
                "nombre": "Matemáticas Financiera",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['mt101']
            },
            {
                "id": "idin4",
                "nombre": "Inglés (Avanzado)",
                "creditos": 6,
                "orden": 5,
                "requisitos": ['idin3']
            },
        ]
    },

    {
        "id": 6,
        "bloque": "VI",
        "asignaturas": [
            {
                "id": "if327",
                "nombre": "Base de Datos II",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['if322']
            },
            {
                "id": "fi501",
                "nombre": "Ética Profesional",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['cr201']
            },
            {
                "id": "if212",
                "nombre": "Análisis y Diseño de Sistemas",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": "if323",
                "nombre": "Redes I",
                "creditos": 4,
                "orden": 3,
            },
            {
                "id": 'if324',
                "nombre": "Circuitos Lógicos",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if319']
            },
            {
                "id": 'idin5',
                "nombre": "Inglés (Vocabulario y Lectura Técnica)",
                "creditos": 6,
                "orden": 5,
                "requisitos": ['idin4']
            },
            {
                "id": "esvu2",
                "nombre": "Seminario de Madurez en la vida Universitaria",
                "creditos": 0,
                "orden": 6,
            }
        ]
    },

    {
        "id": 7,
        "bloque": "VII",
        "asignaturas": [
            {
                "id": "if342",
                "nombre": "Base de Datos Multidimensional",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['if327']
            },
            {
                "id": "if340",
                "nombre": "Programación Multiplataforma",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": "if314",
                "nombre": "Desarrollo de Software",
                "creditos": 4,
                "orden": 2,
                "requisitos": ['if212']
            },
            {
                "id": "if328",
                "nombre": "Redes II",
                "creditos": 4,
                "orden": 3,
                "requisitos": ['if323']
            },
            {
                "id": 'if329',
                "nombre": "Sistemas Automatizados",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if324']
            },
            {
                "id": 'idin6',
                "nombre": "Inglés (Composición y Conversación)",
                "creditos": 6,
                "orden": 5,
                "requisitos": ['idin5']
            }
        ]
    },

    {
        "id": 8,
        "bloque": "VIII",
        "asignaturas": [
            {
                "id": "if391",
                "nombre": "Sistemas Inteligentes para Negocios",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['if342']
            },
            {
                "id": "if346",
                "nombre": "Implementación de Software",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['if314']
            },
            {
                "id": "if345",
                "nombre": "Sistemas Operativos I",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": "if370",
                "nombre": "Microcontroladores",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'bg205',
                "nombre": "Ecología",
                "creditos": 3,
                "orden": 4,
            }
        ]
    },

    {
        "id": 9,
        "bloque": "IX",
        "asignaturas": [
            {
                "id": "if353",
                "nombre": "Desarrollo de Portales Web I",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['if340']
            },
            {
                "id": "if351",
                "nombre": "Programación Móvil",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": "ad104",
                "nombre": "Gestión de la Calidad",
                "creditos": 3,
                "orden": 2,
            },
            {
                "id": "if352",
                "nombre": "Sistemas Operativos II",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['if345']
            },
            {
                "id": 'if381',
                "nombre": "Seminario de Hardware y Electricidad",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if370']
            }
        ]
    },

    {
        "id": 10,
        "bloque": "X",
        "asignaturas": [
            {
                "id": "if357",
                "nombre": "Desarrollo de Portales Web II",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['if353']
            },
            {
                "id": "if355",
                "nombre": "Programación Móvil II",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['if351']
            },
            {
                "id": "mt304",
                "nombre": "Control Estadístico de la Calidad",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['ad104']
            },
            {
                "id": "if356",
                "nombre": "Gestión y Estandares de Tecnología de Información",
                "creditos": 3,
                "orden": 3,
            },
            {
                "id": 'cr501',
                "nombre": "Doctrina Social de la Iglesia",
                "creditos": 3,
                "orden": 4,
            },
            {
                "id": 'esvu3',
                "nombre": "Seminario de Preparación a la vida Profesional",
                "creditos": 0,
                "orden": 5,
            }
        ]
    },

    {
        "id": 11,
        "bloque": "XI",
        "asignaturas": [
            {
                "id": "if362",
                "nombre": "Negocios Web",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['if357']
            },
            {
                "id": "if347",
                "nombre": "Programación de Negocios",
                "creditos": 3,
                "orden": 1,
            },
            {
                "id": "ad402",
                "nombre": "Planeación y Diseño de un modelo de calidad",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['mt304']
            },
            {
                "id": "if360",
                "nombre": "Seguridad Informática y Gestión de Riesgo",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['if356']
            },
            {
                "id": 'if358',
                "nombre": "Administración de Centros de Computo",
                "creditos": 3,
                "orden": 4,
                "requisitos": ['if356']
            },
            {
                "id": 'fmts1',
                "nombre": "Trabajo Educativo Social",
                "creditos": 0,
                "orden": 5,
            }
        ]
    },
    
    {
        "id": 12,
        "bloque": "XII",
        "asignaturas": [
            {
                "id": "if361",
                "nombre": "Seminario-Taller de Software",
                "creditos": 3,
                "orden": 0,
                "requisitos": ['if362']
            },
            {
                "id": "if392",
                "nombre": "Gestión de Proyectos Informáticos",
                "creditos": 3,
                "orden": 1,
                "requisitos": ['if347']
            },
            {
                "id": "if350",
                "nombre": "Big Data",
                "creditos": 3,
                "orden": 2,
                "requisitos": ['if391']
            },
            {
                "id": "if380",
                "nombre": "Auditoría de Sistemas de Información",
                "creditos": 3,
                "orden": 3,
                "requisitos": ['if360']
            },
            {
                "id": 'if324',
                "nombre": "Excel Avanzado para ingeniería",
                "creditos": 3,
                "orden": 4,
            }
        ]
    },

    {
        "id": 13,
        "bloque": "XIII",
        "asignaturas": [
            {
                "id": "if400",
                "nombre": "Práctica Profesional Supervisada",
                "creditos": 0,
                "orden": 0,
            }
        ]
    },

    {
        "id": 14,
        "bloque": "Electivas Aprobadas",
        "asignaturas": [
            {
                "id": "if395",
                "nombre": "Investigación Tecnológica",
                "creditos": 0,
                "orden": 0,
            }
        ]
    },

    {
        "id": 15,
        "bloque": "RQT",
        "asignaturas": [
            {
                "id": "20%",
                "nombre": "20",
                "creditos": 0,
                "orden": 0,
            },
            {
                "id": "30%",
                "nombre": "30",
                "creditos": 0,
                "orden": 0,
            },
            {
                "id": "40%",
                "nombre": "40",
                "creditos": 0,
                "orden": 0,
            },
            {
                "id": "50%",
                "nombre": "50",
                "creditos": 0,
                "orden": 0,
            },
            {
                "id": "60%",
                "nombre": "60",
                "creditos": 0,
                "orden": 0,
            },
            {
                "id": "70%",
                "nombre": "70",
                "creditos": 0,
                "orden": 0,
            },
            {
                "id": "80%",
                "nombre": "80",
                "creditos": 0,
                "orden": 0,
            },
        ]
    },

    {
        "id": 16,
        "bloque": "CPG",
        "asignaturas": [
            {
                "id": "spda1",
                "nombre": "Primeros Auxilios I",
                "creditos": 1,
                "orden": 0,
            },
            {
                "id": "dpft1",
                "nombre": "Futbolito I",
                "creditos": 1,
                "orden": 1,
            },
            {
                "id": "mjha1",
                "nombre": "Hábitos de Estudio",
                "creditos": 1,
                "orden": 2,
            },
        ]
    }
];


class PlanDeEstudio{
    planDeEstudio=[];
    container = null;
    asignaturas = {};

    constructor( planDeEstudio, containerSelector = "main"){
        if (!planDeEstudio) {
            throw new Error("Plan de Estudio es requerido.");
        }
        const tmpContainer = document.querySelector(containerSelector);
        if (!tmpContainer) {
            throw new Error("El contenedor no se encuentra");
        }
        this.planDeEstudio = planDeEstudio;
        this.container = tmpContainer;
        this.generateUI();
    }
    generateUI(){
        this.container.classList.add('plan');
        this.planDeEstudio.forEach( (bloque) => {
            this.container.appendChild(
                this.generateBloque(bloque)
            );
        } );

    }
    generateBloque(bloque){
        const bloqueUI = document.createElement("SECTION");
        bloqueUI.classList.add('bloque');
        bloqueUI.setAttribute("id", `blq_${bloque.id}`);
        
        const bloqueLabel = document.createElement("DIV");
        bloqueLabel.classList.add('label');
        bloqueLabel.innerHTML = bloque.bloque;
        bloqueUI.appendChild(bloqueLabel);

        const asignaturas = document.createElement("DIV");
        asignaturas.classList.add('asignaturas');
        bloque.asignaturas.forEach(
            (asignatura)=>{
                asignaturas.appendChild(this.generateAsignatura(asignatura));
            }
        );
        bloqueUI.appendChild(asignaturas);
        return bloqueUI;
    }

    generateAsignatura(asignatura){
        const asignaturaUI = document.createElement("DIV");
        asignaturaUI.classList.add('asignatura');
        asignaturaUI.setAttribute('id', asignatura.id);
        if(asignatura.requisitos){
            asignaturaUI.setAttribute(
                'data-requisitos',
                JSON.stringify(asignatura.requisitos)
            );
        }
        asignaturaUI.innerHTML = `<strong>${asignatura.nombre}
            <br/>(${asignatura.id})
            </strong>
            <br/>
            Créditos: ${asignatura.creditos}`;

           
            asignaturaUI.addEventListener('mouseenter', (e)=>{
                asignaturaUI.classList.add('selected');
                const requisitos = JSON.parse(asignaturaUI.dataset.requisitos || '[]');
                const apertura = JSON.parse(asignaturaUI.dataset.apertura || '[]');

                requisitos.forEach((req)=>{
                    this.asignaturas[req].classList.add("requisito");
                });

                apertura.forEach((apt)=>{
                    this.asignaturas[apt].classList.add("apertura");
                });

            });

            asignaturaUI.addEventListener('mouseleave', (e)=>{
                asignaturaUI.classList.remove('selected');
                const requisitos = JSON.parse(asignaturaUI.dataset.requisitos || '[]');
                const apertura = JSON.parse(asignaturaUI.dataset.apertura || '[]');

                requisitos.forEach((req)=>{
                    this.asignaturas[req].classList.remove("requisito");
                });

                apertura.forEach((apt)=>{
                    this.asignaturas[apt].classList.remove("apertura");
                });
            });

            if(asignatura.requisitos){
                asignatura.requisitos.forEach((req)=>{
                    if(this.asignaturas[req]){
                        // const apertura = JSON.parse(this.asignaturas[req].getAttribute('data-apertura')|| '[]');
                        const apertura = JSON.parse(
                            this.asignaturas[req].dataset.apertura|| '[]'
                        );

                        if(!apertura.includes(asignatura.id)){
                            apertura.push(asignatura.id);
                        }
                        this.asignaturas[req].setAttribute(
                            'data-apertura',
                            JSON.stringify(apertura)
                        );
                    };                    

                });
            }
            

            this.asignaturas[asignatura.id] = asignaturaUI;
        return asignaturaUI;
    }
}