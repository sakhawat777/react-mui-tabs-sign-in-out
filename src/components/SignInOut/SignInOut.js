import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './SignInOut.css';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<section>
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`full-width-tabpanel-${index}`}
				aria-labelledby={`full-width-tab-${index}`}
				{...other}>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		</section>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const SignInOut = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};
	return (
		<section className='main'>
			<Box sx={{ bgcolor: 'background.paper', width: 500 }}>
				<AppBar position='static'>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor='secondary'
						textColor='inherit'
						variant='fullWidth'
						aria-label='full width tabs example'>
						<Tab label='SIGN IN' {...a11yProps(0)} />
						<Tab label='SIGN UP' {...a11yProps(1)} />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={handleChangeIndex}>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<SignIn />
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						<SignUp />
					</TabPanel>
				</SwipeableViews>
			</Box>
			<div className='second'>
				<h1 className='foring'>
					<span className='tech'>Tech </span> <br /> M
					<span className='o'>o</span>rning
				</h1>
				<p className='para'>Shaping Tomorrow's Cybersecurity</p>
				<h1 className='welcome'>Welcome to TechMorning</h1>
				<h3 className='applicant'>
					<span className='notice'>Notice:</span> <br />
					An applicant can register only once.
				</h3>
				<p className='para'>
					Registered applicant, please login with your credentials by
					entering email and password
				</p>
			</div>
		</section>
	);
};

export default SignInOut;
