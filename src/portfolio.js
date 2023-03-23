const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://josepablo134.github.io/',
  title: '~',
}

const DevName = 'Josepablo C'

const about = {
  // all the properties are optional - can be left empty or deleted
  name: DevName,
  role: 'Computer Engineer',
  description:
    '“If I have seen further it is by standing on the shoulders of giants”',
  resume: 'https://www.linkedin.com/in/josepablo-cruz-a897a1132/',
  social: {
    linkedin: 'https://www.linkedin.com/in/josepablo-cruz-a897a1132/',
    github: 'https://github.com/josepablo134/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'microMiddlewares',
    description:
		'Containing a graphics library, a LTI DSP driver, common communication drivers: SPI, I2C; external device drivers: MCP2515 SPI-CAN bridge, ILI9341 color display driver, SSD1306 OLED display driver, and more. This project is a set of reusable platform independent middlewares and drivers. The middleware design is based on the Linux Kernel Device Drivers. The project is exported as a CMake package.',
    stack: ['CMake', 'arm-none-eabi-gcc', 'Doxygen'],
    sourceCode: 'https://github.com/josepablo134/microMiddlewares',
    livePreview: 'https://github.com/josepablo134/microMiddlewares',
  },
  {
    name: 'microANN',
    description:
      'Micro Artificial Neural Network is a minimalist ANN library to deploy AI on microcontrollers. This allows the creation of multi-layer ANNs in an environment without dynamic memory.',
    stack: ['C','ANN','IA'],
    sourceCode: 'https://github.com/josepablo134/microANN',
    livePreview: 'https://github.com/josepablo134/microANN',
  },
  {
    name: 'uRTOS',
    description:
      'A minimalist RTOS made from scratch based on FreeRTOS interfaces. The purpose of this RTOS is experimenting with OS subjects. Mainly created for PIC18F4550 but later ported to Tiva C ARM-M microcontroller.',
    stack: ['C','RTOS'],
    sourceCode: 'https://gitlab.com/josepablo134/urtos',
    livePreview: 'https://gitlab.com/josepablo134/urtos',
  },
  {
    name: 'TivaCTemplate',
    description:
      'A template for projects based on TivaC microcontrollers and FreeRTOS made with CMake/Ninja. Provides a general and common structure for projects development, allowing integration of external software packages like my software package microMiddlewares. This template is the base of most of my personal projects.',
    stack: ['CMake', 'Ninja', 'arm-none-eabi-gcc', 'GDB', 'OpenOCD'],
    sourceCode: 'https://github.com/josepablo134/TivaCTemplate',
    livePreview: 'https://github.com/josepablo134/TivaCTemplate',
  },
  {
    name: 'PIC18F4550CTemplate',
    description:
      'A template for projects based on PIC18F4550 microcontroller. Provides a general and common structure for projects development. This project is based on MPLAB X and already contains several drivers ready to use like: UART, ADC, PWM, DIO, SPI, I2C, Timer 1 and Program Flash. PIC18F4550 was the very first microcontroller I learned detailed so I developed a dev. board to continue working on this platform. This project is the base of most of my personal projects based on this microcontroller.',
    stack: ['MPLAB X', 'PIC18F4550'],
    sourceCode: 'https://github.com/josepablo134/PIC18F4550Ctemplate',
    livePreview: 'https://github.com/josepablo134/PIC18F4550Ctemplate',
  },
  {
    name: 'HDMI-CEC to Serial Bridge',
    description:
      'One of my very first ambitions projects. I hacked the HDMI-CEC communication protocol existing on the HDMI specification so I can control HDMI devices. Since there is no microcontroller supporting this communication protocol I developed a bit banging project on the PIC16F628A, a very cheap and minimalist microcontroller.',
    stack: ['MPLAB X', 'PIC16F628A', 'Bit banging', 'HDMI-CEC'],
    sourceCode: 'https://github.com/josepablo134/cec_bridge',
    livePreview: 'https://github.com/josepablo134/cec_bridge',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C/C++',
  'Make/CMake/Ninja',
  'Linux User Space/Device Drivers',
  'Embedded Linux: Buildroot/Yocto',
  'RTOS: FreeRTOS, Ti-RTOS, CMSIS-RTOS, OSEK-RTOS',
  'Compiler and Linker: Memory Management/Allocation/Memory Architecture Design',
  'Automotive: AUTOSAR, ASPICE, Vector DaVinci, Elektrobit Tresos',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jcruzbaas@gmail.com',
}

export { header, about, projects, skills, contact }
