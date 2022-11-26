import { useRouter } from 'next/router';
import React from 'react'

const App = (props: any) => {
  const route = useRouter()

  console.log(route.query);
  return (
    <div>{route.query.player_id}</div>
  )
}

export default App