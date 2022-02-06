import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const UserComponent = ({ data }) => {
	return (
		<Card style={{ margin: 40 }} sx={{ maxWidth: 345 }}>
			<CardContent>
				<CardMedia
					component='img'
					height='140'
					image={data.avatar_url}
					alt='green iguana'
				/>
				<Typography gutterBottom variant='h5' component='div'>
					{data.login}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.email}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{data.username}
				</Typography>
				<a href={data.html_url} target='_blank' rel='noreferrer'>
					Repo
				</a>
			</CardContent>
		</Card>
	);
};

export default UserComponent;