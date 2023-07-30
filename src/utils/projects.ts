
export interface IProject {
    name: string, 
    git_url: string, 
    preview_url: string, 
    description: string, 
    technologies: string, 
}


const projects: IProject[] = [
    {
        name: 'To-Do List App', 
        git_url: 'https://github.com/baltatescuvalentin/react-todolist', 
        preview_url: 'https://todo-app-289b4.web.app/', 
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
        name: 'Tic-Tac-Toe', 
        git_url: 'https://github.com/baltatescuvalentin/Tic-Tac-Toe', 
        preview_url: 'https://baltatescuvalentin.github.io/Tic-Tac-Toe/', 
        description: 'A fun game of Tic-Tac-Toe for 2 players', 
        technologies: 'HTML, CSS, JS', 
    }, 
    {
        name: 'Etch-a-Sketch', 
        git_url: 'https://github.com/baltatescuvalentin/Etch-A-Sketch', 
        preview_url: 'https://baltatescuvalentin.github.io/Etch-A-Sketch/', 
        description: 'An app that let\'s you draw pixelated images with various options', 
        technologies: 'HTML, CSS, JS', 
    }, 
    {
        name: 'Rock-Papper-Scissors', 
        git_url: 'https://github.com/baltatescuvalentin/RockPaperScissors', 
        preview_url: 'https://baltatescuvalentin.github.io/RockPaperScissors/', 
        description: 'A fun game of Rock-Papper-Scissors against a \'bot\'', 
        technologies: 'HTML, CSS, JS', 
    }, 
    
]

export default projects;