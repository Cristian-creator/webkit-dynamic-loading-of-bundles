import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import ListItem from '../../interfaces/ListItem';

interface ListItemsProps {
    items: ListItem[],
}

const ListItemsContainer = styled(Grid)({
    maxWidth: '1200px',
    margin: '3rem auto',
});

const ListItemContainer = styled(Grid)({
    margin: '0 auto',
    '& > div': {
        margin: '1rem auto',
    }
});

const ListItemTitle = styled(Typography)({
    height: '32px',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '1 !important',
    overflow: 'hidden',
});

const ListItemDescription = styled(Typography)({
    height: '120px',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '5 !important',
    overflow: 'hidden',
});

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <ListItemsContainer container>
        {
            items.map((item) => (
                <ListItemContainer item key={ item.id } sm={ 6 } md={ 4 } >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={ item.image }
                        alt={ item.title }
                        />
                        <CardContent>
                            <ListItemTitle gutterBottom variant="h5">
                                { item.title }
                            </ListItemTitle>
                            <ListItemDescription color="text.secondary">
                                { item.description }
                            </ListItemDescription>
                        </CardContent>
                    </Card>
              </ListItemContainer>
            ))
        }
    </ListItemsContainer>
  )
}

export default ListItems;