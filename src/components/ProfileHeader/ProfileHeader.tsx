import React, { FC } from 'react';
import { SizeType, User } from '../User/user';
import { UserImage, UserImageSizeType } from '../UserImage/userImage';

export const ProfileHeader: FC = ({ ...props }) => {
  return (
    <div className=''>
      <div className='w-100 pt-3/4 bg-violet-200'></div>

      <div className='relative'>
        <div className='absolute -b-xl r-0 min-h-'>
          <UserImage type={UserImageSizeType.XL} />
        </div>
      </div>
      <User type={SizeType.XL} />
    </div>
  );
};
