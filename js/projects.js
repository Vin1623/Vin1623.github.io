// ============================================================
//  ALL PROJECT CONTENT LIVES HERE. Edit this file to update the site.
//
//  Media for each project goes in  assets/<id>/  and is switched on below:
//    cover:     image shown on the home-page card   (e.g. "cover.png")
//    schematic: PDF, SVG or PNG exported from Altium (e.g. "schematic.pdf")
//    model:     3D board as .glb                     (e.g. "board.glb")
//    photos:    list of real-board photos            (e.g. ["front.jpg"])
//  Leave a field as null / [] until the file exists — the page shows a
//  placeholder instead of a broken link.
// ============================================================

window.PROJECTS = [
  {
    id: "bldc-esc",
    title: "Brushless DC Motor Electronic Speed Controller",
    short: "4-layer 3-phase BLDC ESC — RP2040 + DRV8305, six 60 V MOSFETs, per-phase shunt sensing.",
    role: "Sole designer (personal project)",
    tools: ["Altium Designer"],
    date: "Fall 2026",
    status: "Boards ordered from JLCPCB · bring-up pending",
    tags: ["Power electronics", "Motor control", "4-layer", "USB-C"],
    overview:
      "Independent design of a 4-layer electronic speed controller for a 3-phase brushless DC motor, built around an RP2040 microcontroller and a DRV8305 gate driver. Boards have been ordered from JLCPCB; bring-up and motor testing with a Flipsky 5055 200 KV motor come next, followed by firmware.",
    highlights: [
      ["Power Stage", "Six 60 V N-channel MOSFETs form three half-bridges driven by a DRV8305 three-phase gate driver, with high-current phase routing and bulk decoupling on the 7.4 V LiPo input."],
      ["Current Sensing", "Three 5 mΩ phase-current shunts for per-phase current measurement."],
      ["Logic Power & MCU", "A TPS54202 buck converter supplies the 3.3 V rail for the RP2040, external QSPI flash, and 12 MHz crystal."],
      ["USB-C & Signal Integrity", "USB-C programming and debug with ESD protection; USB D+/D− routed to a 90 Ω differential-impedance target on a JLCPCB 4-layer controlled-impedance stackup."],
      ["DFM & Verification", "Solid ground referencing, power polygons, via arrays, and controlled clearances, with ERC/DRC and footprint checks completed before fabrication."],
    ],
    cover: null,
    schematic: "BLDC_ESC_Vincent_Tan_Schematic.pdf",
    model: null,
    photos: [],
  },
  {
    id: "urc-rover",
    title: "Rover Electrical System (University Rover Challenge)",
    short: "Electrical lead for a 20+ student team — 9-node CAN network and 40 V power architecture.",
    role: "Electrical Team Lead",
    tools: ["Altium Designer", "CAN"],
    date: "June 2026 – Present",
    status: "In progress",
    tags: ["System architecture", "CAN", "Power distribution", "Leadership"],
    overview:
      "Lead the rover’s electrical system across the power, logic, motor/sensor, and battery/wiring subteams (20+ students), owning system architecture, interface definitions, and PCB design reviews.",
    highlights: [
      ["CAN Network", "Architected a 9-node classic CAN network linking a Jetson with an STM32 and ESC on each of four wheel modules, defining bus topology, node interfaces, 120 Ω termination, and controlled-impedance differential routing."],
      ["Power Architecture", "Led design of a 40 V Li-ion power system distributing battery power to motor drivers and regulated 12 V and 5 V rails through high-current buck converters; directed subteam layout with copper planes, stitching vias, and solid ground references."],
      ["Design Reviews & Mentoring", "Run PCB design reviews and teach signal integrity, grounding, return-current paths, and design for manufacturing to the electrical team."],
    ],
    cover: null,
    schematic: null, // tip: a block diagram (CAN topology / power tree) works great here
    model: null,
    photos: [],
  },
  {
    id: "micromouse-pcb",
    title: "Micromouse PCB (IEEE)",
    short: "4-layer mixed-signal main board for a maze-solving robot — stackup, protection, bring-up & rework.",
    role: "Electrical Team Member (Aug 2025 – May 2026); Electrical Team Lead since Aug 2026",
    tools: ["Altium Designer", "RP2040 Zero"],
    date: "Spring 2026",
    status: "Assembled and reworked",
    tags: ["Mixed-signal", "4-layer", "Debugging", "Robotics"],
    overview:
      "Co-designed the 4-layer mixed-signal main board for an autonomous maze-solving robot. I led the initial schematic, board outline, and stackup; a senior teammate mentored placement and routing; after assembly I led troubleshooting and rework. The board fits motor drivers and ToF/IMU sensors within the chassis size limit.",
    highlights: [
      ["Stackup & Noise Control", "Chose a Signal-Ground-Power-Signal stackup so each signal layer sits next to a solid reference plane, reducing coupling between the motor drivers and the ToF and IMU sensors."],
      ["Power Distribution & Protection", "3.3 V and 5 V regulation, Schottky-diode reverse-current protection, and a 100 µF bulk capacitor to hold the supply up during motor current transients."],
      ["Battery Monitoring", "A resistive voltage divider into the RP2040 ADC (GP28) lets the firmware track battery voltage during runs."],
      ["Peripheral Integration", "Routed a Bluetooth module, ToF sensors, and an IMU, giving the robot a wireless data link during development and testing."],
      ["Bring-up & Rework", "Diagnosed a motor-drive failure (driver inputs present, outputs dead) with a multimeter, then reworked the driver with hot-air reflow and 30 AWG bodge wires to correct an inverter footprint error, restoring motor operation."],
    ],
    cover: null,
    schematic: null,
    model: null,
    photos: [],
  },
  {
    id: "mate-float",
    title: "Float Subsystem PCB (MATE ROV)",
    short: "Stepper-driven buoyancy-engine board — noise debugging led to a 4-layer Rev 2.",
    role: "Float PCB Subsystems Lead",
    tools: ["Altium Designer", "ESP32", "DRV8825"],
    date: "Fall 2025 – Spring 2026",
    status: "Rev 2 designed · not yet tested",
    tags: ["Motor control", "Thermal", "Debugging", "Rev 2"],
    overview:
      "Lead designer of the driver board for the float’s buoyancy engine, which moved from peristaltic pumps to high-torque stepper motors. The first revision was a 2-layer board; after diagnosing sensor noise on it, I redesigned it as a 4-layer board.",
    highlights: [
      ["Motor Control", "DRV8825 drivers run high-torque stepper motors for fine buoyancy adjustment."],
      ["Thermal Management", "Copper pours and thermal vias spread heat from 12 V driver operation inside the sealed enclosure."],
      ["Limit-Switch Inputs", "Pull-up resistor circuits on interrupt-capable ESP32 inputs let the firmware detect the home position of each stepper."],
      ["Noise Debugging & Rev 2", "Traced corrupted depth-sensor readings on the first board to stepper-motor noise by comparing USB-powered and battery-powered operation with the steppers running. The second revision moves to a 4-layer Signal-Ground-Ground-Signal stackup and separates the motor-side and depth-sensor I²C paths (not yet tested)."],
    ],
    cover: null,
    schematic: null,
    model: null,
    photos: [],
  },
  {
    id: "mag-encoder",
    title: "Ultra-Compact Magnetic Encoder (IEEE Micromouse)",
    short: "9 mm × 9 mm wheel-encoder board for speed and distance feedback.",
    role: "Electrical Team Member",
    tools: ["Altium Designer", "Microsoldering"],
    date: "Fall 2025",
    status: "Completed",
    tags: ["Miniaturization", "Sensors"],
    overview:
      "Co-designed a sensor interface PCB that gives the Micromouse wheel-speed and distance feedback in an extremely space-constrained chassis.",
    highlights: [
      ["Miniaturization", "Fit the full sensor interface within a 9 mm × 9 mm board outline."],
      ["Noise Control", "Placed components and routed vias to keep the magnetic sensor lines short and away from noise sources."],
      ["Mechanical Fit", "M1 mounting holes let the sensor mount directly beside the wheel assembly without increasing the robot’s width."],
    ],
    cover: null,
    schematic: null,
    model: null,
    photos: [],
  },
  {
    id: "buck-12v5v",
    title: "12 V-to-5 V Buck Converter (MATE ROV)",
    short: "First full schematic-to-layout project — WEBENCH reference design to a 2-layer board.",
    role: "Electrical Team Member",
    tools: ["Altium Designer", "TI WEBENCH"],
    date: "Fall 2024",
    status: "Completed",
    tags: ["Power", "2-layer"],
    overview:
      "Schematic capture and 2-layer PCB layout for a 12 V-to-5 V step-down regulator. This was my first project taking a generated reference design through to a finished board layout in Altium.",
    highlights: [
      ["Design Synthesis", "Generated the buck topology and bill of materials in TI WEBENCH Power Designer from the input and output requirements."],
      ["PCB Layout", "Laid out the 2-layer board in Altium Designer, placing components and routing traces to follow the reference design’s layout guidance."],
    ],
    cover: null,
    schematic: null,
    model: null,
    photos: [],
  },
];
