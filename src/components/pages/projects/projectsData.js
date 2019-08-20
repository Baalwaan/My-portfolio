import SquareCircleImg from '../../../assets/projects/square-circle.png';
import GithubCardsImg from '../../../assets/projects/github-cards.png';
import StarGameImg from '../../../assets/projects/react-star-game.png';
import RemindlyImg from '../../../assets/projects/remindly.png';
import AuthProjectImg from '../../../assets/projects/auth.png';
import SmoothieImg from '../../../assets/projects/smoothie-bar.png';
import FavWorkoutImg from '../../../assets/projects/fav-workout.png';

// project urls

const squareCircleUrl = 'https://github.com/FAC-Sixteen/square-circle';
const githubCardsUrl = 'https://github.com/Baalwaan/Github-profile-cards';
const StarGameUrl = 'https://github.com/Baalwaan/star-game';
const remindlyUrl = 'https://github.com/Baalwaan/Remindly';
const authUrl = 'https://github.com/Baalwaan/Authentication-By-Me';
const smootieUrl = 'https://github.com/Baalwaan/Smoothie-bar';
const favWorkoutUrl = 'https://github.com/Baalwaan/exp-hbs-project';

//note to self when working on modal remember to add project summary!
const projects = [
  {
    name: 'Square Circle',
    image_path: SquareCircleImg,
    repo_url: squareCircleUrl
  },
  {
    name: 'Github Cards Profile',
    image_path: GithubCardsImg,
    repo_url: githubCardsUrl
  },
  {
    name: 'React Star Game',
    image_path: StarGameImg,
    repo_url: StarGameUrl
  },
  { name: 'Remindly App', image_path: RemindlyImg, repo_url: remindlyUrl },
  {
    name: 'Authentication Project',
    image_path: AuthProjectImg,
    repo_url: authUrl
  },
  { name: 'Smoothie Bar App', image_path: SmoothieImg, repo_url: smootieUrl },
  {
    name: 'Post Ur Fav Workout',
    image_path: FavWorkoutImg,
    repo_url: favWorkoutUrl
  }
];

export default projects;
