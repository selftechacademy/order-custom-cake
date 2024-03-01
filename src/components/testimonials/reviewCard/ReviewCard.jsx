import React from 'react'
import PropTypes from 'prop-types';
import './reviewCard.style.scss'
import { useTranslation } from "react-i18next";


function ReviewCard  ({video, userIndex}) {
  const videoRef = React.useRef();
  const { t } = useTranslation();
  
  return (
    <div className='review-card'>
      <video
        ref={videoRef}
        title={t(`testimonials.name${userIndex + 1}`)}
        src={video}
        controls
        width='70%'
      >
        <track kind="captions" />
      </video>
      <div className='review-card__content'>
        <h1 className="review-card__content__quote">“</h1>
        <p>{t(`testimonials.quote${userIndex+1}`)}</p>
        <h3>{t(`testimonials.name${userIndex + 1}`)}</h3>
        <h4>{t(`testimonials.title${userIndex + 1}`)}  {t(`testimonials.company${userIndex+1}`)}</h4>
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  video: PropTypes.string.isRequired,
  userIndex: PropTypes.number.isRequired,
};

export default ReviewCard;