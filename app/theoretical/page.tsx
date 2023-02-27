"use client";
import { Accordion } from '@/components';
import { Box } from '@mui/material';

export default function TheoreticalTest () {
    const questions = [
        {
            id: 1,
            question: '¿Cuál es la diferencia entre una API rest y una API soap?',
            tag: 'Backend',
            response: [
                'Las APIs REST se basan en HTTP y se enfocan en los recursos, mientras que las APIs SOAP se basan en XML y se enfocan en la definición de servicios web y su contrato formal.',
                'Las APIs REST son más flexibles y escalables, mientras que las APIs SOAP son más estructuradas y seguras.',
                'La elección entre una API REST y una API SOAP depende de las necesidades específicas de cada proyecto.']
        },
        {
            id: 2,
            question: '¿Qué es GIT?',
            tag: 'General',
            response: [
                'GIT es un sistema de control de versiones de software que permite a los desarrolladores rastrear los cambios en el código fuente de su proyecto a lo largo del tiempo.', 
                'Cada vez que se hace un cambio, se crea una instantánea que registra esos cambios, lo que permite a los desarrolladores trabajar en equipo de forma colaborativa y fusionar los cambios en una rama principal común.',
                'GIT también permite la creación de múltiples ramas de trabajo y es compatible con múltiples plataformas y sistemas operativos.',
                'GIT es ampliamente utilizado en la industria del software y hay servicios en línea que ofrecen alojamiento de repositorios GIT para facilitar la colaboración y el trabajo en equipo.']
        },
        {
            id: 3,
            question: '¿Cuál es la diferencia entre clase, objeto, array, método y función?',
            tag: 'General',
            response: ['Una clase es una plantilla que define los atributos y comportamientos de un conjunto de objetos relacionados.',
            'Un objeto es una instancia de una clase específica que tiene valores específicos para sus atributos y puede ejecutar sus comportamientos.',
            'Un array es una estructura de datos que contiene una colección de elementos del mismo tipo.',
            'Un método es un comportamiento de una clase que realiza una tarea específica.',
            'Una función es un bloque de código independiente que realiza una tarea específica y puede ser llamado desde cualquier parte del programa.']
        },
        {
            id: 4,
            question: '¿Cuáles son los comandos para agregar y commitear una carpeta por GIT?',
            tag: 'General',
            response: [
                'git add ejemplo',
                'git commit -m "Agregando carpeta ejemplo',
                'git push'
            ]
        },
        {
            id: 5,
            question: '¿Cuál es la diferencia entre PHP, CGI, fastCGI y FPN?',
            tag: 'Backend',
            response: [
                'PHP es un lenguaje de programación utilizado para crear aplicaciones web dinámicas.',
                'CGI es una especificación para la comunicación entre un servidor web y un programa externo', 
                'FastCGI es una versión mejorada de CGI que mantiene una instancia del proceso de PHP en memoria para mejorar el rendimiento',
                'FPM es una implementación de FastCGI específica para PHP que administra y optimiza los procesos FastCGI de PHP en un servidor.']
        },
        {
            id: 6,
            question: '¿Qué es un selector de elemento DOM?, escribe un ejemplo sin ninguna librerías',
            tag: 'Frontend',
            response: [
                'Un selector de elemento DOM es una sintaxis que permite identificar y seleccionar elementos HTML en un documento web utilizando JavaScript.',
                'Se utilizan para manipular y modificar el contenido y el estilo de los elementos en la página. // Selección de un elemento por su ID',
                'const miElemento = document.getElementById("mi-id");']
        },
        {
            id: 7,
            question: '¿Cuál es la diferencia entre paradigma POO y paradigma funcional?',
            tag: 'General',
            response: [
                'POO y la programación funcional son enfoques diferentes para resolver problemas de programación.',
                'La POO se enfoca en la interacción entre objetos y la encapsulación de datos y comportamiento',
                'La programación funcional se enfoca en la evaluación de funciones matemáticas y la minimización de efectos secundarios',
                'La elección del paradigma dependerá de las necesidades específicas de cada proyecto.'
            ]
        },
        {
            id: 8,
            question: '¿Cuáles son los puntos a tener en cuenta para que no puedan realizar una inyección SQL tras recibir los datos por cualquier método del protocolo HTTP?',
            tag: 'Bases de datos',
            response: [
                'Para evitar la inyección SQL al recibir datos por cualquier método del protocolo HTTP, es necesario:',
                'Validar y sanitizar los datos.',
                'Utilizar consultas preparadas',
                'Limitar los permisos del usuario de la base de datos',
                'Evitar mensajes de error detallados',
                'utilizar capas de abstracción de datos'
            ]
        },
        {
            id: 9,
            question: '¿Qué sentencia SQL para leer los campos id, nombre, salario y puesto de la tabla empleados cuyo salario sea mayor a 25000?',
            tag: 'Bases de datos',
            response: [
                'SELECT id, nombre, salario, puesto FROM empleados WHERE salario > 25000;'
            ]
        },
    ]
    return (
        <>
            <Box sx={{ textAlign: 'center', paddingY: '1rem' }}>
                <h1>Prueba teórica</h1>
            </Box>
            <Accordion questions={questions}/>
        </>
    )
}



