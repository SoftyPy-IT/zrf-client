import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DonateForm from './DonateForm';
import MembershipForm from './MembershipForm';

export default function DonationTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const tabStyle = {
        width: '200px',
        height: '50px',
        borderRadius: '1px',
        backgroundColor: '#216740',
        color: 'white',
        border: 'none',
        borderBottom: 'none',
        marginRight: '2px',
        marginLeft: '2px',
        '&.Mui-selected': {
            backgroundColor: '#E3C80D',
            color: 'white',
            borderBottom: 'none',
        },
        '&:hover': {
            backgroundColor: 'darkred',
        },
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 0, sm: 2 }, 
            }}
        >
            <Box sx={{ width: '100%', maxWidth: 700, }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 'none', display: 'flex', justifyContent: 'center' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="donation tabs"
                            sx={{ borderBottom: 'none' }}
                            TabIndicatorProps={{
                                style: {
                                    display: 'none',
                                },
                            }}
                        >
                            <Tab
                                label="Donate Now"
                                value="1"
                                sx={tabStyle}
                                disableRipple
                            />
                            <Tab
                                label="Get Membership"
                                value="2"
                                sx={tabStyle}
                                disableRipple
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><DonateForm /></TabPanel>
                    <TabPanel value="2"><MembershipForm /></TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}
