const inquirer = require('inquirer');
require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué deseas hacer?',
    choices: [
      {
        value: 1,
        name: `${'1'.green}. Buscar Ciudad`
      },
      {
        value: 2,
        name: `${'2'.green}. Historial`
      },
      {
        value: 0,
        name: `${'0'.green}. Salir`
      }
    ]
  }
]

const inquirerMenu = async () => {
  console.clear()
  console.log('================================='.cyan);
  console.log(`TODO LIST: ${'SELECCIONA'.brightYellow.bold} ${'UNA OPCIÓN'.bold}`);
  console.log('================================='.cyan);
  const {opcion} = await inquirer.prompt(preguntas); 
  return opcion
}

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presiona ${'ENTER'.green} para continuar`,
    }
  ];
  console.log('\n')
  await inquirer.prompt(question)
}

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ) {
        if( value.length === 0) {
          return 'por favor ingrese un valor valido';
        }
        return true;
      }
    }
  ];

  const {desc} = await inquirer.prompt(question);
  return desc
}

const listarLugares = async( lugares = []) => {
  const choices = lugares.map( (lugar, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: lugar.id,
      name: `${idx} ${lugar.nombre}`
    }
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + 'Cancelar'
  });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione lugar:',
      choices
    }
  ];
  const {id} = await inquirer.prompt(questions); 
  return id;
}

const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const {ok} = await inquirer.prompt(question);
  return ok;
}

const mostrarListadoChecklist = async( tareas = []) => {

  const choices = tareas.map( (tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: (tarea.completadoEn) ? true : false
    }
  });

  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices
    }
  ];
  const {ids} = await inquirer.prompt(pregunta); 
  return ids;
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
  confirmar,
  mostrarListadoChecklist
}