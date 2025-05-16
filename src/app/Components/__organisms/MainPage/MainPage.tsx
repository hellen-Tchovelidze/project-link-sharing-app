import React from 'react'
import PhoneSimulator from '../../__molecules/PhoneSimulator/PhoneSimulator'
import EmptyLinks from '../../__molecules/EmptyLinks/EmptyLinks'

const MainPage = () => {
  return (
    <div className='flex'>
      <PhoneSimulator />
        <EmptyLinks/>
    </div>
  )
}

export default MainPage
