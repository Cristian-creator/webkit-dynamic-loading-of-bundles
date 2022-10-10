import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react'
import ListItem from '../../interfaces/ListItem';
import { ListItemContainer, ListItemDescription, ListItemsContainer, ListItemTitle } from './ListItems.style';

interface ListItemsProps {
    items: ListItem[],
}

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <ListItemsContainer container>
        {
            items.map((item) => (
                <ListItemContainer item key={ item.id } sm={ 12 } md={ 6 } lg={ 4 } >
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