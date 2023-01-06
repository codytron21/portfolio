
import intelliai from "../../assets/intelliai.png";
import societalbeings from "../../assets/societalbeings.png";
import sudoku from "../../assets/sudoku.png";
import newstron from "../../assets/newstron.png";


export default function data() {

    return (
        [
            {
                id: 1,
                image: intelliai,
                title: 'An intelligent chatbot build with ChatGTP API.',
                github: 'https://github.com/codytron21/intelli_ai',
                demo: 'https://intelli-ai.vercel.app/'
            },
            {
                id: 2,
                image: societalbeings,
                title: 'A Full-stack Social media Application',
                github: 'https://github.com/codytron21/Societal-Beings',
                demo: 'https://societalbeings.netlify.app/'
            },
            {
                id: 3,
                image: newstron,
                title: 'A voice controlled newsreader.',
                github: 'https://github.com/codytron21/newstron',
                demo: 'https://newstron.netlify.app/'
            },
            {
                id: 4,
                image: sudoku,
                title: 'A Sudoku Solver',
                github: 'https://github.com/codytron21/sudokuPuzzle',
                demo: 'https://codysudokupuzzle.netlify.app/'
            },



        ]
    )
}
