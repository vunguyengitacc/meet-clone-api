import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'rooms' },
    permissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'permissions' },
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'roles' },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
    },
  }
);

memberSchema.virtual('user', {
  ref: 'users',
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
});

memberSchema.virtual('room', {
  ref: 'rooms',
  localField: 'roomId',
  foreignField: '_id',
  justOne: true,
});

memberSchema.virtual('permissions', {
  ref: 'permissions',
  localField: 'permissionId',
  foreignField: '_id',
});

memberSchema.virtual('roles', {
  ref: 'roles',
  localField: 'roleId',
  foreignField: '_id',
});

const Member = mongoose.model('members', memberSchema);

export default Member;