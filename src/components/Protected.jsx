import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'

const Protected = ({children}) => {
  return (
    <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn/>
    </SignedOut>
    </>
  )
}

export default Protected