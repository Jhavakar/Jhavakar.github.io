import myTrailerImage from '../images/mytrailer.png'
import restaurantImage from '../images/restraunt-res.png';
import weatherImage from '../images/weather-fore.png';
import codingImage from '../images/coding.png';

export const projects = [
    {
      id: 1,
      title: "WeatherForecast",
      description: "WeatherForecast is a weather application that provides current weather updates, forecasts, and weather-related information based on your location or any searched location.",
      techStack: "React, CSS, ReactJS, Node.js",
      category: "WEB APP",
      codeLink: "https://github.com/Jhavakar/My-React-Weather-App",
      image: weatherImage
    },
    {
      id: 2,
      title: "MyTrailer",
      description: "MyTrailer is a mobile application that allows users to watch trailers of the latest movies, get notifications for new releases, save your favourite movie trailers and keep track of upcoming movies.",
      techStack: "React Native, Redux, CSS, Firebase, Node.js",
      category: "MOBILE APP",
      codeLink: "https://github.com/Jhavakar/MyTrailers",
      image: myTrailerImage
    },
    {
      id: 3,
      title: "Restaurant Res",
      description: "Restaurant Reservation is an application that allows users to book tables at the restaurants, view available slots, receive confirmation notifications, and manage their reservations.",
      techStack: ".NET, C#, SQL Lite, Angular, CSS",
      category: "WEB APP",
      codeLink: "https://github.com/Jhavakar/RestaurantReservationApp",
      image: restaurantImage
    },
    {
        id: 4,
        title: "In Progress",
        description: "In Progress",
        techStack: "React, SQL",
        category: "WEB APP",
        codeLink: "",
        image: codingImage
      },
  ];
  