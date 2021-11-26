import TvIcon from '@material-ui/icons/Tv';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export const SidebarData = [
  {
    title: "Anime",
    icon: <TvIcon color="primary"/>,
    subNav: [
      {
        title: "Agregar Anime",
        path: '/'
      },
      {
        title: "Listado de Anime",
        path: '/'
      }
    ]
  },
  {
    title: "Manga",
    icon: <MenuBookIcon color="primary"/>,
    subNav: [
      {
        title: "Agregar Manga",
        path: '/'
      },
      {
        title: "Listado de Manga",
        path: '/'
      }
    ]
  },
  {
    title: "Temporada Anime",
    icon: <CalendarTodayIcon color="primary"/>,
    subNav: [
      {
        title: "Agregar Temporada",
        path: '/temporada/nuevo'
      },
      {
        title: "Listado de Temporada",
        path: '/temporada'
      }
    ]
  }
];
