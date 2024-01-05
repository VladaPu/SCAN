import React from 'react';
import './ResultPageMain.css';
import aim from './womenAim.svg';
import { useSelector } from 'react-redux';
import PublicationCards from './PublicationCards';
import ResultCarouselDesktop from './ResultCarousel/ResultCarouselDesktop';
import ResultCarouselMobile from './ResultCarousel/ResultCarouselMobile';
import LoaderInfo from '../Header/AccountAfterAuthorization/LoaderInfo/LoaderInfo';

const ResultPageMain = () => {
  let fundedDocs = useSelector(state => state.histograms.histogramInfo)
  const newWidth = useSelector(state => state.app.width)
  const isMobile = newWidth < 700
  const ChosenCarousel = isMobile ? ResultCarouselMobile : ResultCarouselDesktop
  const isChosenCarousel = fundedDocs ? <ChosenCarousel /> : <LoaderInfo />
  return (
    <main className='resultMain'>
      <div className='resultMain__wrapper'>  
        <div className='resultMain__upper'>
          <div className='upper__box'>
            <h1 className='upper__title'>Ищем. Скоро будут результаты</h1>
            <section>Поиск может занять некоторое время, просим сохранять терпение.</section>
          </div>
          <div className='img__box'>
            <img src={aim} alt='aim'/>
          </div>
        </div>
        <div className='resultMain__middle'>
          <div className='upper__box'>
            <h1 className='upper__title upper__title_middle'>Общая сводка</h1>
            <section className='resultMain__section'>Найдено {fundedDocs?.length||0} варианта(ов)</section>
          </div>
          {isChosenCarousel}
        </div>
        <div className='resultMain__lower'>
          <div className='lower__box'>
            <h1 className='upper__title upper__title_middle'>cписок документов</h1>
            <PublicationCards />
          </div>
        </div>
      </div>  
    </main>
  )
}

export default ResultPageMain
