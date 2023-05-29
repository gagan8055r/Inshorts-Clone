import React from 'react'
import './NewsCard.css'
import { Container } from '@mui/material';
const Newscard = ({newsItem}) => {
    // console.log(newsItem);
const fulldate=new Date(newsItem.publishedAt)
     var date= fulldate.toLocaleString()
    //  console.log(date);
    return (
        <Container>
        <div className='newsitem'>
            <img src={newsItem.urlToImage?newsItem.urlToImage:'https://s2s.co.th/wp-content/uploads/2019/09/photo-icon-1.jpg'} alt="" />

            <div className="newstext">
                <div >
                    <span className='newstitle'>{newsItem.title}</span>
                </div>
              
                <div>
                    <span className='newsauthor'> <b>short</b>  by  {newsItem.author?newsItem.author:"unknown"} {date}</span>
                </div>
                
                <div>
                    <span className='newsdescription'>{newsItem.description}</span>
                </div>
                <br>
                </br>
                <div>
                    <span className='newsurl'>read more news at <a href={newsItem.url} className='newssource'>{newsItem.source.name}</a></span>
                </div>
            </div>

      
    </div>
    </Container>
  )
}

export default Newscard
