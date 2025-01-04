import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { Box, IconButton, Stack } from '@mui/material';

import { VerticalMenu } from '@totalizer/xmenu';

const VARIANT_KEYS = [
  {
    type: 'slide in',
    values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'],
  },
  {
    type: 'slide out',
    values: ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight'],
  },
  {
    type: 'fade in',
    values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'],
  },
  {
    type: 'fade out',
    values: [
      'fadeOut',
      'fadeOutUp',
      'fadeOutDown',
      'fadeOutLeft',
      'fadeOutRight',
    ],
  },
  {
    type: 'zoom in',
    values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'],
  },
  {
    type: 'zoom out',
    values: [
      'zoomOut',
      'zoomOutUp',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
    ],
  },
  {
    type: 'bounce in',
    values: [
      'bounceIn',
      'bounceInUp',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
    ],
  },
  {
    type: 'bounce out',
    values: [
      'bounceOut',
      'bounceOutUp',
      'bounceOutDown',
      'bounceOutLeft',
      'bounceOutRight',
    ],
  },
  { type: 'flip in', values: ['flipInX', 'flipInY'] },
  { type: 'flip out', values: ['flipOutX', 'flipOutY'] },
  { type: 'scale in', values: ['scaleInX', 'scaleInY'] },
  { type: 'scale out', values: ['scaleOutX', 'scaleOutY'] },
  { type: 'rotate in', values: ['rotateIn'] },
  { type: 'rotate out', values: ['rotateOut'] },
];

export default function ControlPanel({ value, onChange }) {
  return (
    <Stack
      sx={{
        position: 'relative',
        zIndex: 10,
        width: 220,
        height: 200,
        borderLeft: 1,
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          p: 1,
          pb: 10,
          // height: 100,
          overflowY: 'auto',
        }}
      >
        <VerticalMenu
          options={VARIANT_KEYS.map((group) => ({
            // icon: <AnimationIcon />,
            title: group.type,
            children: group.values.map((el) => ({ title: el, value: el })),
          }))}
          isSelected={(item) => item.title === value}
          onClick={(item) => {
            if (item.value) onChange(item.value);
          }}
        />
      </Box>
      <IconButton
        sx={{
          position: 'absolute',
          zIndex: 10,
          top: 10,
          left: -50,
        }}
        onClick={() => {
          onChange(value);
        }}
        size="small"
      >
        <ReplayRoundedIcon />
      </IconButton>
    </Stack>
  );
}
