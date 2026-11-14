import type { Project } from '../utils/project-structure'

export const PROJECT_NAMES = [
  'Woodland Mystery',
  'Living Space',
  'Shaders studies',
  'Modellation site',
  'Astral Abyss',
  'VFX studies',
  'Interaction camera',
]

export const CONTENT: Project[] = [
  {
    id: 'Woodland Mystery',
    title: 'Woodland Mystery\n\n',
    team: 'Davide Pessi, Anita Ruggiu, Pietro Arsi, Matteo Ferrero\n\n',
    role: 'game designer / developer\n\n',
    dates: '09/2023 - 02/2024\n\n',
    description: `The project was developed using Unity.
    As game designer I designed the story of the game, balancing minigames and dialogue to always keep the player on the hook.
    As developer I built the world where the player would play starting from a set of assets and developed the dialogue system and the interactions system for the game.
    The videogame, started during a university course is currently being developed. 
    The demo is the story of a detective Fox which is assigned the case of finding the criminal behind the destruction of the ex-mayor statue Owl.
    The demo is available on my itch account.`,
    externalLink: 'https://polimi-game-collective.itch.io/woodland-mystery',
    defaultImg: 'Woodland Mystery.webp',
    extraMedia: [
      { type: 'image', url: 'woodland-mystery/WM-Dialogue.webp' },
      { type: 'image', url: 'woodland-mystery/WM-mock-up.webp' },
      { type: 'image', url: 'woodland-mystery/WM-Notebook.webp' },
      { type: 'image', url: 'woodland-mystery/WM-Puzzle1.webp' },
      { type: 'image', url: 'woodland-mystery/WM-Puzzle2.webp' },
      { type: 'image', url: 'woodland-mystery/WM-shader.webp' },
      { type: 'image', url: 'woodland-mystery/WM-Team.webp' },
    ],
  },
  {
    id: 'Living Space',
    title: 'Living Space\n\n',
    team: 'Davide Pessi, Matteo Fiorentino\n\n',
    role: 'developer - designer\n\n',
    dates: '09/2024 - 03/2025\n\n',
    description: `The thesis is part of a bigger project which involved also Defne Kocamustafaogullari as designer. 
            The development of the project followed three steps:\n
            - Understand the shape of our non-anthropomorphic body we want to develop, which messages are easier to convey with the chosen body and which movements are best to use to convey a specific message.\n
            - Develop the first application in VR where two users can interact with each other one as human and the other as the space.\n
            - Improve the application both on a graphic level and by changing controls of the space body so that are more intuitive and coherent with the space.\n
            Since our objective was to create a space that was composed of many entities our main system was developed using Unity DOTS which help us to optimize performance while still handling each movement of every single entity.\n\n
            As developer I also developed:\n
            - The gestures and controls of the VR.\n
            - Handled the system network that help us to connect the two users through LAN and keep every event synchronized using Unity Netcode.\n
            - Handled the lightning and particle systems of the environment such ad the fog or the glow of elements, using post processing effects and built-in Unity particle systems.\n
            - Developed the main interaction of the space which allow the user to modify the shape of the space using his hands.\n
           `,
    defaultImg: 'Living Space.webp',
    extraMedia: [
      { type: 'image', url: 'dog/LS-Bump.webp' },
      { type: 'image', url: 'dog/LS-fog.webp' },
      { type: 'image', url: 'dog/LS-Interaction.webp' },
      { type: 'image', url: 'dog/LS-Prototype.webp' },
      { type: 'image', url: 'dog/LS-prototype2.webp' },
      { type: 'image', url: 'dog/LS-Survey.webp' },
      { type: 'image', url: 'dog/LS-Tutorial.webp' },
      { type: 'image', url: 'dog/LS-Test.webp' },
      { type: 'image', url: 'dog/LS-Team.webp' },
    ],
  },
  {
    id: 'Modellation site',
    title: 'Modellation Site\n\n',
    team: 'Davide Pessi\n\n',
    role: 'developer and designer\n\n',
    dates: '08/2026 - now\n\n',
    description: `The aim of this project was gamifying an idea of one of my friend, by proposing a mathematical approach to modelling shapes,
     while also keep an eye on the look of the web page. The web page allow you to modify x, y and z of the vertices of 
    the model you import or of the default model given. You can then download your work in .OBJ or .STF.`,
    defaultImg: 'Modellation site.webp',
    extraMedia: [
      { type: 'video', url: 'modelling/changing-shape.webm' },
      { type: 'image', url: 'modelling/example-1.webp' },
      { type: 'image', url: 'modelling/example-2.webp' },
      { type: 'video', url: 'modelling/onboarding.webm' },
    ],
  },
  {
    id: 'Astral Abyss',
    title: 'Astral Abyss\n\n',
    team: 'Davide Pessi\n\n',
    role: 'developer\n\n',
    dates: '04/2024 - 04/2024\n\n',
    description: `Astral Abyss is an exploration, stealth game developed with Unity during a Game Jam realized by Open Data Playground.\n
    The theme was 'deep space' and the time for the Game Jam was one week.\n
    As a developer I implemented the UI interface and the character controller. I also helped in the making of the animation and aspect of the game.
    `,
    externalLink: `https://nakura79.itch.io/astral-abyss`,
    defaultImg: 'astral-abyss.webp',
    extraMedia: [
      { type: 'image', url: 'abstral-abyss/dialogue-box.webp' },
      { type: 'video', url: 'abstral-abyss/gameplay.webm' },
    ],
  },
  {
    id: 'Shaders studies',
    title: 'Shader studies\n\n',
    team: 'Davide Pessi\n\n',
    role: 'developer\n\n',
    dates: '02/2025 - now\n\n',
    description: `My studies always tries to recreate some effects I've seen in the world or I've seen implemented by other folks\n
    I've started from the book of shaders and then tried to use all my knowledge on my projects, like in Woodland Mystery or on stand alone project.\n
    Some of the shaders I'm most proud of are here and they are implemented in different framework/programs (Unity, Touchdesigner, WebGl).\n\n
    
    Description by order:\n
    - A shader made in Unity that recreate the roughness and texture of a drawing pencil as an outline combined with an animated fill made with two frames.\n
    - A shader made in WebGl used in post processing that aims at pixelate the vision combined with a toon shader.\n
    - A shader made in TouchDesigner that aims at simulate the watercolors texture.\n
    - A shader made in Unity that aims at simulate the effect of an expired film roll.\n
    - A shader made in Unity that aims at recreating the movement of a light veil moved by wind.
    `,
    defaultImg: 'shaders/expired-film.webp',
    extraMedia: [
      { type: 'image', url: 'shaders/shadow-1.webp' },
      { type: 'image', url: 'shaders/shadow-2.webp' },
      { type: 'video', url: 'modelling/changing-shape.webm' },
      { type: 'video', url: 'shaders/shader-painting.webm' },
      { type: 'image', url: 'shaders/expired-film.webp' },
      { type: 'video', url: 'shaders/shader-veil.webm' },
    ],
  },
  {
    id: 'VFX studies',
    title: 'VFX studies\n\n',
    team: 'Davide Pessi\n\n',
    role: 'developer\n\n',
    dates: '08/2026 - now\n\n',
    description: `My studies always tries to recreate some effects I've seen in the world or I've seen implemented by other folks\n
  
    Description by order:\n
    - A firework VFX
    `,
    defaultImg: 'vfx.png',
    extraMedia: [{ type: 'video', url: 'VFX/firework1.webm' }],
  },
  {
    id: 'Interaction camera',
    title: 'Interaction camera\n\n',
    team: 'Davide Pessi\n\n',
    role: 'developer\n\n',
    dates: '08/2026 - now\n\n',
    description: `The project is still on going, the main idea was to experiment with Touch designer by implementing different shaders and letting the user switch between one shader and another by pinching his fingers. 
    The shader is only applied to the rectangle made by the user's hands. 
    The hand-tracking is made by the MediaPipe plugin.
    `,
    defaultImg: 'interaction-camera.webp',
    extraMedia: [
      { type: 'video', url: 'interaction-camera/1.webm' },
      { type: 'video', url: 'interaction-camera/2.webm' },
      { type: 'video', url: 'interaction-camera/3.webm' },
    ],
  },
]
