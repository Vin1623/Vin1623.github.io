// Personal info shown in the header, hero and footer.
window.SITE = {
  name: "Vincent Tan",
  tagline: "Electrical Engineering student · PCB design, power & embedded hardware",
  school: "B.E. Electrical Engineering, Stony Brook University · Expected May 2028",
  about:
    "I design multi-layer PCBs in Altium, from personal motor-control boards to system-level power and CAN architecture for Stony Brook’s robotics teams. I care most about the parts that decide whether a board works on the bench: stackup, grounding, return paths, and debugging what went wrong. Looking for Summer 2027 hardware internships.",
  email: "vincent.tan@stonybrook.edu",
  linkedin: "https://www.linkedin.com/in/vincent-tan-2006ny/",
  github: "https://github.com/Vin1623",
  // Put your PDF at assets/Vincent_Tan_Resume.pdf, then set this to that path.
  // Remove phone number / home address from the public copy.
  resume: null,
  skills: {
    "PCB Design": ["Altium Designer", "Multi-layer stackups (2/4-layer)", "Controlled impedance", "DFM, ERC/DRC"],
    "Power & Analog": ["Buck converters", "Multi-rail power architecture", "Gate drivers / half-bridges", "Current sensing"],
    "Embedded & Comms": ["RP2040", "STM32", "ESP32", "CAN", "I²C", "USB-C"],
    "Programming": ["C", "C++", "Python", "MATLAB", "Java", "AVR Assembly"],
    "Bench": ["Bring-up & debugging", "Hot-air rework", "Microsoldering", "Multimeter"],
  },
};
