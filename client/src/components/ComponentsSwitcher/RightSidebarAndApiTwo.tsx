import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListItem from '../../interfaces/ListItem';
import ListItems from '../ListItems.tsx/ListItems';
import Navbar from '../Navbar/Navbar'

const RightSidebarAndApiTwo = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  useEffect(() => {
    axios.get('/api2')
      .then((res) => {
        setListItems(res.data);
      });
  }, []);

  return (
    <div>
        <Navbar sidebarPosition='right' />
        <h1> API 2 </h1>
        { listItems.length > 0 && <ListItems items={ listItems } /> }
    </div>
  )
}

export default RightSidebarAndApiTwo