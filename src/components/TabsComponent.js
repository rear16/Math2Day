import React, { useState } from 'react'

import {Box, Tab, Tabs} from '@mui/material';
import {TabContext, TabPanel} from '@mui/lab';
import SumView from './SumView';
import RestView from './RestView';
import MultiView from './MultiView';

export default function TabsComponent() {
  var [tab, setTab] = useState(3);

  return (
    <>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} aria-label="basic tabs example">
                <Tab label="Sumas" value="1"/>
                <Tab label="Restas" value="2"/>
                <Tab label="Multiplicaciones" value="3"/>
                <Tab label="Divisiones" value="4"/>
            </Tabs>
        </Box>
        <TabPanel value="1"><SumView/></TabPanel>
        <TabPanel value="2"><RestView/></TabPanel>
        <TabPanel value="3"><MultiView/></TabPanel>
        <TabPanel value="4">None</TabPanel>
      </TabContext>
    </>
  )
}
