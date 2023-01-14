import React, { FC } from 'react';
import { IconType } from '../Icon/Icon';
import { IconLink, IconLinkType } from '../IconLink/iconLink';
import { SizeType, User, user } from '../User/user';
import { UserImage, UserImageSizeType } from '../UserImage/userImage';

export const Card: FC = ({ ...props }) => {
  return (
    <div className='d-flex flex-column px-xl py-l rounded-t-xl bg-white relative'>
      <div className='absolute -left-l'>
        <UserImage type={UserImageSizeType.M} />
      </div>

      <User type={SizeType.BASE} />

      <p className='mt-m'>
        Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo
        minus. Aut aut error velit voluptatum optio sed quis cumque error magni.
        Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et
        recusandae quos excepturi ut deleniti ut repellat magni.
      </p>

      <div className='my-m rounded-lg bg-violet-200 w-100 p-3'>image</div>
      <div className='flex'>
        <IconLink
          type={IconLinkType.slate}
          icon={IconType.bubble}
          text='Message'
          textSize='text-sm'
        />
        <div className='ml-xl'>
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.like}
            text='Like'
            textSize='text-sm'
          />
        </div>
        <div className='ml-xl'>
          <IconLink
            type={IconLinkType.slate}
            icon={IconType.share}
            text='Copy Link'
            textSize='text-xs'
          />
        </div>
      </div>
    </div>
  );
};
