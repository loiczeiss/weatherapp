import { NextApiRequest, NextApiResponse } from 'next';
import geoip from 'geoip-lite';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle only GET requests
  if (req.method === 'GET') {
    try {
      console.log("API request received");

      // Get the user's IP address from the request headers
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
      console.log("User's IP address:", ip);

      // Lookup geolocation based on IP
      const geo = geoip.lookup(ip as string);
      console.log("Geolocation lookup result:", geo);

      if (geo) {
        return res.status(200).json({ lat: geo.ll[0], lon: geo.ll[1] });
      }

      // If no geolocation info found, return default location
      console.log("No geolocation found, returning default location.");
      return res.status(200).json({ lat: 42.0, lon: 2.56 });
    } catch (error: any) {
      console.error("Error in API handler:", error);
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  } else {
    // If the request method is not GET, respond with 405 Method Not Allowed
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
