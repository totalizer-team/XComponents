import React from 'react';

import Layout from '@totalizer/xcomponents/Layout';
import { VerticalMenu } from '@totalizer/xmenu';
import options from './options';

export default () => {
  const [title, setTitle] = React.useState('Keys');
  const [open, setOpen] = React.useState(true);

  const Sidebar = () => {
    return (
      <VerticalMenu
        options={options}
        isSelected={(item) => item.title === title}
        onClick={(item) => {
          if (!item.children) setTitle(item.title);
        }}
        sx={{ p: 1 }}
      />
    );
  };

  return (
    <Layout open={open} onOpenChange={setOpen} sidebar={<Sidebar />}>
      <div>{title}</div>
    </Layout>
  );
};
