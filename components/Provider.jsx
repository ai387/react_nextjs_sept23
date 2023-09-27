import React from 'react'

import {Sessionprovider} from 'next-auth/react'

const Provider = ({ children, session }) => {
  return (
    <Sessionprovider session={session}>
        {children}
    </Sessionprovider>

  )
}

export default Provider