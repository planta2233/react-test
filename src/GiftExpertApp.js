import React, {useState} from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Deportivos'])

  return (
    <>
        <div>GiffExpert</div>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ul>
          { 
            categories.map( category => (
              <GifGrid 
                key={category} 
                category={ category }
              />
            )) 
          }
        </ul>
    </>
  )
}
