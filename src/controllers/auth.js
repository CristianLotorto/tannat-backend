import SuperAdmin from '../models/SuperAdmin';

const getAuth = async (req, res) => {
  try {
    const superAdmin = await SuperAdmin.findOne({ firebaseUid: req.headers.firebaseUid });
    if (superAdmin) {
      return res.status(201).json({
        message: 'Super Admin found',
        data: superAdmin,
        error: false,
      });
    }

    return res.status(404).json({
      message: 'User not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: null,
      error: true,
    });
  }
};

export default { getAuth };
