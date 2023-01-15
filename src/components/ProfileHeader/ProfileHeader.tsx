import React, { FC } from 'react';
import { SizeType, User } from '../User/user';
import { UserImage, UserImageSizeType } from '../UserImage/userImage';

export const ProfileHeader: FC = ({ ...props }) => {
  return (
    <div>
      <div className='w-100 pt-16/9 bg-violet-200 rounded-lg relative mb-l'>
        <div className='absolute -bottom-xxl right-l'>
          <UserImage type={UserImageSizeType.XL} />
        </div>
      </div>
      <User type={SizeType.XL} />
      <p className='mt-s'>
        Ostschweizer mit Leidenschaft für Fussball, designaffin, nie ohne Bart,
        Weinliebhaber, leichte Tendenz zu Football Manager-Sucht, kocht gerne
        indisch, baut seit neustem Duplotürme und Brio-Bahnanlagen.
      </p>
    </div>
  );
};