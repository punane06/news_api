'use client'
import React from 'react'
import NewsList from '../components/NewsList'
import LogOut from '../components/LogOut'

const News = () => {
  return (
    <div>
        <h1>News</h1>
        <LogOut />
        <NewsList />
    </div>
  )
}

export default News