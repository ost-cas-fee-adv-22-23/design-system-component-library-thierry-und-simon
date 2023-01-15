import React, { FC, ReactNode } from 'react';
import { IconType } from '../Icon/Icon';
import { IconLink, IconLinkType } from '../IconLink/iconLink';
import { SizeType, User, user } from '../User/user';
import { UserImage, UserImageSizeType } from '../UserImage/userImage';

export enum CardType {
  mumble = 'SvgMumble',
  profile = 'SvgProfile',
}

export type CardProps = {
  showProfileImage: boolean;
  children: ReactNode;
};

export const Card: FC<CardProps> = ({
  showProfileImage,
  children,
  ...props
}) => {
  return (
    <div className='d-flex flex-column px-xl py-l rounded-t-xl bg-white relative'>
      {showProfileImage && (
        <div className='absolute -left-l'>
          <UserImage type={UserImageSizeType.M} />
        </div>
      )}

      {children}
    </div>
  );
};
