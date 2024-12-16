import { Divider, Stack } from '@mui/material';

import SearchBar from 'dumi/theme/slots/SearchBar';
import ColorSwitch from '../ColorSwitch';
import Logo from '../Logo';
import Navbar from '../Navbar';
import SocialLink from '../SocialLink';

import { useRouteMeta, useSiteData } from 'dumi';
import React, { useState } from 'react';

import './index.less';

const Header = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();

  return (
    <Stack
      sx={{
        p: 2,
        pt: 1,
        pb: 1,
        mb: 2,
        position: 'sticky',
        zIndex: 10,
        top: 0,
        flexGrow: 1,
        backgroundColor: 'background.paper',
      }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" spacing={3}>
        <Logo />
        <Navbar />
      </Stack>
      <Stack direction="row" alignItems="center">
        <SearchBar />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: 2, ml: 2 }}
        />
        <SocialLink />
        <ColorSwitch />
      </Stack>
    </Stack>
  );

  // return (
  //   <div
  //     className="dumi-default-header"
  //     data-static={Boolean(frontmatter.hero) || undefined}
  //     data-mobile-active={showMenu || undefined}
  //     onClick={() => setShowMenu(false)}
  //   >
  //     <div className="dumi-default-header-content">
  //       <section className="dumi-default-header-left">
  //         <Logo />
  //       </section>
  //       <section className="dumi-default-header-right">
  //         <Navbar />
  //         <div className="dumi-default-header-right-aside">
  //           <SearchBar />
  //           <LangSwitch />
  //           <RtlSwitch />
  //           {themeConfig.prefersColor.switch && <ColorSwitch />}
  //           {socialIcons.map((item) => (
  //             <SocialIcon icon={item.icon} link={item.link} key={item.link} />
  //           ))}
  //           <HeaderExtra />
  //         </div>
  //       </section>
  //       <button
  //         type="button"
  //         className="dumi-default-header-menu-btn"
  //         onClick={(ev) => {
  //           ev.stopPropagation();
  //           setShowMenu((v) => !v);
  //         }}
  //       >
  //         {showMenu ? <IconClose /> : <IconMenu />}
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Header;
