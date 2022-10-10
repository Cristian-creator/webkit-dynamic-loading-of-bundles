import { Grid, styled, Typography } from "@mui/material";

export const ListItemsContainer = styled(Grid)({
    maxWidth: '1200px',
    margin: '3rem auto',
});

export const ListItemContainer = styled(Grid)({
    margin: '0 auto',
    '& > div': {
        margin: '1rem auto',
    }
});

export const ListItemTitle = styled(Typography)({
    height: '32px',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '1 !important',
    overflow: 'hidden',
});

export const ListItemDescription = styled(Typography)({
    height: '120px',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '5 !important',
    overflow: 'hidden',
});