import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './MMSLogistic.scss'

// Logistic section
import LogisticIntro from '../../Logistis/LogisticIntro'
import LogisticRule from '../../Logistis/LogisticRule'
import LogisticTalk from '../../Logistis/LogisticTalk'
import LogisticComplaint from '../../Logistis/LogisticComplaint'
import LogisticShip from '../../Logistis/LogisticShip'

function MMSLogistic(props) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className="logistic">
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Giới thiệu" value="1" />
                    <Tab label="Quy định" value="2" />
                    <Tab label="Hỏi đáp" value="3" />
                    <Tab label="Khiếu nại" value="4" />
                    <Tab label="Vận đơn" value="5" />
                </TabList>
                </Box>
                
                {/* Giới thiệu */}
                <TabPanel value="1">
                    <LogisticIntro/>
                </TabPanel>
                
                {/* Quy định */}
                <TabPanel value="2">
                    <LogisticRule/>
                </TabPanel>
                
                {/* Hỏi đáp */}
                <TabPanel value="3">
                    <LogisticTalk/>
                </TabPanel>
                
                {/* Khiếu nại */}
                <TabPanel value="4">
                    <LogisticComplaint/>
                </TabPanel>
                
                {/* Vận đơn */}
                <TabPanel value="5">
                    <LogisticShip/>
                </TabPanel>

                
            </TabContext>
            </Box>
        </div>
    );
}

export default MMSLogistic;