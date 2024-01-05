import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { documentSearch } from '../../../MockData/documentSearch'
import { dropDocumentsInfo, getDocuments } from '../../../store/slices/histograms'
import './PublicationCards.css'
import {convertDocObjectToCard} from '../../../utils/convertDocObjectToCardInfo'
import Badge from 'react-bootstrap/Badge';

const PublicationCards = () => {
  const {publicationIds, documents} = useSelector(state => ({
    publicationIds: state.histograms.publicationIds,
    documents: state.histograms.documents
  }))

  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(0);
  useEffect(()=>{
    if(publicationIds.length){
      const idsForRequest = publicationIds.slice(offSet,  offSet+10)
      if(idsForRequest.length) {
        dispatch(getDocuments({ids:idsForRequest}))
      }
      // setOffSet((offSet)=>offSet+10)
    }
  },[publicationIds,dispatch,offSet])

  if(!documents.length) {
    return null
  }
  const docs = convertDocObjectToCard(documents)
  const showTenArticles = () => {
    const idsForRequest = publicationIds.slice(offSet, 10);
    // dispatch(getDocuments({ids:idsForRequest}))
    setOffSet((offSet)=>offSet+10)
  }
  let isDone = documents.length >= publicationIds.length
  return (
    <>
    <div className='publicationCards__wrapper'>
    {docs.map((obj, ind)=>
    
    <div className='publicationCards__content' key={ind}>
        <div className='publicationCards__dateArticle'>
          <span className='publicationCards__span'>{obj.date}</span>
          <a 
          className='publicationCards__article'
          href={obj.articleUrl}>{obj.articleUrlTitle}
          </a>
        </div>
        <h4 className='publicationCards__title'>{obj.articleTitle}</h4>
        {obj.articleTags && obj.articleTags.map(tag => (
          <Badge bg="warning" text="dark" key={tag}>{tag}</Badge>
        ))}
        {obj.imageUrl && <img className='publicationCards__img' src={obj.imageUrl} alt='article pic' />}
        <div dangerouslySetInnerHTML={{ __html: obj.articleContent }} />
        <div className='publicationCards__buttonBox'>
          <form action={obj.articleUrl} target="_blank"> 
            <button className='publicationCards__button'>Читать источник</button>
          </form>
          <section className='publicationCards__section'>{obj.wordCount} слов&lang;а&rang;</section>
        </div>
    </div>         
      )}
  </div>
  <div className='adjustBox'>
    {!isDone && <button onClick={showTenArticles} className='publicationCards__showBtn'>Показать больше</button>}
  </div>
  
  </>
)
}

export default PublicationCards
