// import { setAuthCookies } from 'next-firebase-auth';
// import initFirebaseAuth from '../../lib/initFirebaseAuth';

// initFirebaseAuth();

const handler = async (req, res) => {
  try {
    // await setAuthCookies(req, res);
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error.' });
  }
  return res.status(200).json({ status: true });
};

export default handler;
