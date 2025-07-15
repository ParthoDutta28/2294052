// src/pages/StatsPage.jsx
import React from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const mockStats = [
  {
    shortUrl: 'http://localhost:3000/abcd1',
    createdAt: '2025-07-15 17:00',
    expiresAt: '2025-07-15 18:30',
    clicks: [
      { timestamp: '2025-07-15 17:15', source: 'Direct', location: 'India' },
      { timestamp: '2025-07-15 17:45', source: 'Facebook', location: 'Germany' },
    ],
  },
  {
    shortUrl: 'http://localhost:3000/xyz22',
    createdAt: '2025-07-15 17:10',
    expiresAt: '2025-07-15 19:00',
    clicks: [],
  },
];

const StatsPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>

      {mockStats.map((item, index) => (
        <Card key={index} variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" color="primary">
              {item.shortUrl}
            </Typography>
            <Typography>Created At: {item.createdAt}</Typography>
            <Typography>Expires At: {item.expiresAt}</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Clicks ({item.clicks.length})
            </Typography>

            {item.clicks.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No clicks yet.
              </Typography>
            ) : (
              <List dense>
                {item.clicks.map((click, idx) => (
                  <ListItem key={idx} disablePadding>
                    <ListItemText
                      primary={`${click.timestamp} — ${click.source}`}
                      secondary={`Location: ${click.location}`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default StatsPage;
