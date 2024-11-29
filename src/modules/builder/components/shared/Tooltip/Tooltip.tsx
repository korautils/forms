import TooltipMui, { TooltipProps } from '@mui/material/Tooltip';

const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <TooltipMui
      arrow
      {...props}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -6],
              },
            },
          ],
        },
      }}
    >
      {children}
    </TooltipMui>
  );
};

export default Tooltip;
