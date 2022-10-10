import axios from 'axios';
import React, { useEffect, useState } from 'react'
import config from '../../config';
import ListItem from '../../interfaces/ListItem';
import ListItems from '../ListItems.tsx/ListItems';
import Navbar from '../Navbar/Navbar'

const RightSidebarAndApiOne = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const { defaultModuleValues: { defaultAPI } } = config;

  useEffect(() => {
    axios.get(`/${defaultAPI}`)
      .then((res) => {
        setListItems(res.data);
      });
  }, [defaultAPI]);

  return (
    <div>
        <Navbar sidebarPosition='right' />
        <h1> API 1 </h1>
        { listItems.length > 0 && <ListItems items={ listItems } /> }
    </div>
  )
}

export default RightSidebarAndApiOne