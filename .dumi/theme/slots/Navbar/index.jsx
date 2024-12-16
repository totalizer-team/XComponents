import React from 'react';

import AssignmentIcon from '@mui/icons-material/Assignment';
import BookIcon from '@mui/icons-material/Book';
import DnsIcon from '@mui/icons-material/Dns';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ExploreIcon from '@mui/icons-material/Explore';
import InboxIcon from '@mui/icons-material/Inbox';
import InputIcon from '@mui/icons-material/Input';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WebStoriesIcon from '@mui/icons-material/WebStories';

import XNavigation from '@totalizer/xcomponents/XNavigation';
import { history, useLocation, useNavData } from 'dumi';

const ICONS = {
  guide: <ExploreIcon />,
  components: <WebStoriesIcon />,
  blog: <BookIcon />,
  price: <WebStoriesIcon />,
  example: <DnsIcon />,
  examples: <DnsIcon />,
  playground: <SportsEsportsIcon />,
  input: <InputIcon />,
  enhancement: <DynamicFormIcon />,
  form: <InboxIcon />,
};

export default ({ data }) => {
  const nav = useNavData();
  const { pathname } = useLocation();

  const config = nav.map((item) => {
    const icon = ICONS[item.title.toLowerCase()] || <AssignmentIcon />;
    return {
      icon,
      title: item.title,
      path: item.activePath,
      link: item.link,
      children: item.children
        ? item.children.map((child) => {
            return {
              // icon: <GpsFixedIcon />,
              title: child.title,
              path: child.activePath,
              link: child.link,
            };
          })
        : undefined,
    };
  });

  return (
    <XNavigation
      variant="horizontal"
      options={config}
      isSelected={(item) => pathname.startsWith(item.path)}
      onClick={(item) => {
        if (item.link) history.push(item.link);
      }}
    />
  );
};
