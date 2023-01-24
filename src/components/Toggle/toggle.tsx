import React, { FC, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Tab } = require('@headlessui/react')

export const Toggle: FC = () => {
  const styledTabs =
    'rounded-md ui-selected:bg-white hover:text-slate-600 ui-selected:text-violet-600  py-xs px-s transition-colors	'

  return (
    <div className="flex">
      <Tab.Group
        onChange={(index: number) => {
          console.log('Changed selected tab to:', index)
        }}
      >
        <Tab.List className="rounded-lg bg-slate-200 p-xxs ">
          <Tab className={`${styledTabs}`}>
            <p>Deine Mumbles</p>
          </Tab>
          <Tab className={`${styledTabs}`}>
            <p>Deine Likes</p>
          </Tab>
        </Tab.List>
        {/* <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels> */}
      </Tab.Group>
    </div>
  )
}
