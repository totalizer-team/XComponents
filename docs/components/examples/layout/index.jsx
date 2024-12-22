import React from 'react';

import Layout from '@totalizer/xcomponents/Layout';
import SidebarMenu from '@totalizer/xcomponents/SidebarMenu';
import config from '../navigation-config';

export default () => {
  const [path, setPath] = React.useState('/Account');
  const [open, setOpen] = React.useState(true);

  const Sidebar = () => {
    return (
      <SidebarMenu
        open={open}
        options={config}
        isSelected={(item) => item.path === path}
        onClick={(item) => {
          if (item.path) setPath(item.path);
        }}
        sx={{ p: 1 }}
      />
    );
  };

  return (
    <Layout open={open} onOpenChange={setOpen} sidebar={<Sidebar />}>
      <div>{path}</div>
    </Layout>
  );
};
