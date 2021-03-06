import Member from 'db/models/member';
import roomService from 'modules/Room/service';

const getOne = async ({ memberId }) => {
  try {
    const data = await Member.findById(memberId).lean();
    return data;
  } catch (error) {
    return next(error);
  }
};
const create = async (data) => {
  try {
    data.enableShareScreen = true;
    data.enalbleShareWebcam = true;
    data.enableShareMicro = true;
    let rs = await Member.create(data);
    return rs;
  } catch (error) {
    throw error;
  }
};
const update = async (memberId, data) => {
  try {
    const rs = await Member.findByIdAndUpdate(memberId, { $set: updateData }, { new: true }).lean();
    return rs;
  } catch (error) {
    throw error;
  }
};
const deleteOne = async (memberId) => {
  try {
    const data = await Member.findByIdAndDelete(memberId);
    return data;
  } catch (error) {
    throw error;
  }
};
const deleteByInfor = async (data) => {
  try {
    const rs = await Member.findOneAndDelete(data);
    return rs;
  } catch (error) {
    throw error;
  }
};

const memberService = { getOne, create, update, deleteOne, deleteByInfor };
export default memberService;
