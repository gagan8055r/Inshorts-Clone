import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'
import NewsCard from '../NewsCard/Newscard'
const Newscontent = ({newsResults,newsArray,loadMore,setloadMore}) => {
  return (
    <Container maxWidth="md">
    <div className="content">
        <div className="downloadmessage">

            <span>For the best experience use inshorts app on your smartphone</span>

            <a href='https://apps.apple.com/in/app/inshorts/id892146527'><img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" className='img'/></a>
           <a href='https://play.google.com/store/apps/details?id=com.nis.app&hl=en_IN&gl=US'><img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" className='img' /></a> 
        </div>
{
  newsArray.map((newsItem)=>{
return(
<NewsCard newsItem={newsItem} key={newsItem.title} ></NewsCard>
  )})
}

{
loadMore<=newsResults &&(
<>
<hr></hr>
  <button onClick={()=>{
    setloadMore(20+loadMore)
  }}>Load more</button >
  </>
)
}
    </div>
    
    </Container>
  )
}

export default Newscontent
