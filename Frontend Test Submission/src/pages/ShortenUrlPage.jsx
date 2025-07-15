import { useState } from 'react';
import { log } from "../logger/logger";
import axios from 'axios';

const ShortenUrlPage = () => {
  const [url, setUrl] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [validity, setValidity] = useState('');

  const handleShorten = async () => {
    try {
      await log('frontend', 'info', 'component', 'User clicked shorten button');

      if (!url.startsWith('http')) {
        await log('frontend', 'error', 'component', 'Invalid URL input');
        alert('Invalid URL');
        return;
      }

      const body = {
        url,
        shortcode: shortcode || undefined,
        validity: validity ? parseInt(validity) : undefined,
      };

      const res = await axios.post('/api/shorten', body);
      await log('frontend', 'info', 'component', 'Short URL created successfully');
      alert('Short URL: ' + res.data.shortUrl);
    } catch (err) {
      await log('frontend', 'fatal', 'component', `Failed to shorten URL: ${err.message}`);
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-white text-lg font-bold mb-4">Shorten URL</h2>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" className="mb-2" />
      <input value={shortcode} onChange={(e) => setShortcode(e.target.value)} placeholder="Custom Shortcode" className="mb-2" />
      <input value={validity} onChange={(e) => setValidity(e.target.value)} placeholder="Validity (minutes)" className="mb-2" />
      <button onClick={handleShorten} className="bg-blue-500 text-white px-4 py-2 rounded">Shorten</button>
    </div>
  );
};

export default ShortenUrlPage;
