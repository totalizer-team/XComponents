import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BookIcon from '@mui/icons-material/Book';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

export default [
  {
    icon: <AnalyticsIcon />,
    title: 'About',
    path: '/About',
  },
  {
    icon: <SupervisedUserCircleIcon />,
    title: 'User',
    children: [
      {
        icon: <AssignmentIndIcon />,
        title: 'Profile',
        secondary: '⌘P',
        path: '/Profile',
      },
      {
        icon: <CreditCardIcon />,
        title: 'Account',
        secondary: '⌘A',
        path: '/Account',
      },
    ],
  },
  {
    icon: <BookIcon />,
    title: 'Blog',
    info: 'Description',
    label: '+2',
    labelColor: 'primary',
    children: [
      {
        title: 'Create',
        label: '1',
        labelColor: 'error',
        path: '/Create',
      },
      {
        title: 'List',
        label: '20',
        path: '/List',
      },
    ],
  },
  {
    icon: <DoNotTouchIcon />,
    title: 'Disabled',
    disabled: true,
  },
];
