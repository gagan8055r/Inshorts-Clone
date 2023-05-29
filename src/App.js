// import 
import { useEffect, useState } from 'react';
import './App.css';
import Navbarinshorts from './components/Navbarinshorts';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios'
import apikey from './data/config';
import Footer from './components/Footer/Footer';
function App() {
  const[category,setCategory]=useState('general')
  const[newsArray,setnewsArray]=useState([])
  const[newsResults,setnewsResults]=useState([])
const[loadMore,setloadMore]=useState(20)
  const newsapi=async()=>{
    try{
const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`)
setnewsArray(news.data.articles)
// console.log(news.data);
setnewsResults(news.data.totalResults)


}
catch(error){
  console.log(error);
}
} 
// console.log(newsArray);
  
  
  useEffect(()=>{
newsapi();// eslint-disable-next-line
  },[newsResults,category,loadMore])
  return (
    <div classname='App'>

      <Navbarinshorts setCategory={setCategory}></Navbarinshorts>
      <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setloadMore={setloadMore}></NewsContent>
  
     <Footer></Footer>
    </div>
  );
}

export default App;
