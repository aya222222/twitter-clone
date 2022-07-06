import React from 'react'

import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
// import 'ProfileSide.css'
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
     <LogoSearch/>
     <InfoCard/>
     <FollowersCard/>
    </div>
  )
}

export default ProfileLeft