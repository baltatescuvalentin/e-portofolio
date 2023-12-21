
export interface IProject {
    name: string, 
    git_url: string, 
    preview_url: string, 
    description: string, 
    technologies: string, 
    demo_url?: string,
}


const projects: IProject[] = [
    {
        name: 'Workout Buddy', 
        git_url: 'https://github.com/baltatescuvalentin/workout-buddy', 
        preview_url: 'https://workoutbuddy-app.netlify.app/', 
        description: 'A buddy for your workout journey with many features as Fitness Tracker, Calculators, Workout routines, exercises', 
        technologies: 'ReactJS, React-Redux, Express, MongoDB, Mongoose, SASS', 
    },
    {
        name: 'Rent-a-car', 
        git_url: 'https://github.com/baltatescuvalentin/rent-a-car', 
        preview_url: 'https://rent-a-car-omega.vercel.app/', 
        description: 'A site for renting cars with functionality for accounts and also administrator features demonstrated in the video', 
        technologies: 'ReactJS, TailwindCSS, NextJS, MongoDB, Prisma, JS', 
        demo_url: 'https://youtu.be/22XGDBtjI8w',
    },
    {
        name: 'To-Do List App', 
        git_url: 'https://github.com/baltatescuvalentin/react-todolist', 
        preview_url: 'https://todolist-one-psi.vercel.app/', 
        description: 'A helpful app to keep track of what you want to do and when to do', 
        technologies: 'ReactJS, TailwindCSS, JS, Firebase', 
    },
    {
        name: 'WeatherApp', 
        git_url: 'https://github.com/baltatescuvalentin/WeatherAPP', 
        preview_url: 'https://baltatescuvalentin.github.io/WeatherAPP/', 
        description: 'An app for checking the weather using a specialized API and informative display', 
        technologies: 'HTML, CSS, JS', 
    }, 
    {
        name: 'Shopping Cart', 
        git_url: 'https://github.com/baltatescuvalentin/shopping-cart', 
        preview_url: 'https://baltatescuvalentin.github.io/shopping-cart', 
        description: 'A shopping app for your favourite clothes', 
        technologies: 'ReactJS, Styled Components, JS', 
    },
    {
        name: 'CV Maker Application', 
        git_url: 'https://github.com/baltatescuvalentin/CV-Maker-Application-placeholder/tree/code', 
        preview_url: 'https://baltatescuvalentin.github.io/CV-Maker-Application-placeholder/', 
        description: 'An app that is helpful for making your personal CV', 
        technologies: 'ReactJS, CSS, JS', 
    },    
    {
        name: 'Etch-a-Sketch', 
        git_url: 'https://github.com/baltatescuvalentin/Etch-A-Sketch', 
        preview_url: 'https://baltatescuvalentin.github.io/Etch-A-Sketch/', 
        description: 'An app that let\'s you draw pixelated images with various options', 
        technologies: 'HTML, CSS, JS', 
    }, 
    
]

export default projects;