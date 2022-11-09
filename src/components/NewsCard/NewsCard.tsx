import React from 'react';
import './NewsCard.scss';

export interface NewsCardProps {
  idCard: string,
  title: string,
  time: string,
  textContent: string,
  tags: string,
  dark?: boolean,
  onClick?: () => void | undefined,
}

export default function NewsCard({
  idCard,
  title,
  time,
  textContent,
  tags,
  dark = false,
  ...props
}: NewsCardProps) {

  return (
    <article
      className={`news-card${dark ? " news-card-dark" : ""}`}
      {...props}
    >
      <section className={`content-container`}>
        <div className={`card-content`}>
          <header className={`news-card-header`}>
            <span className={`news-card-desc`}>
              {title}
            </span>
            <span className={`dot-separator`}>{`.`}</span>
            <div className={`news-card-time`}>
              {time}
            </div>
          </header>
          <p className={`news-card-text`}>
            {textContent}
          </p>
        </div>
        <picture className={`news-card-image-container`}>
          <img
            src={`/images/news-${idCard ? idCard : "default"}.png`}
            alt={`news - ${title}`}
            className={`news-card-image`}
          />
        </picture>
      </section>
      <footer className={`news-card-footer`}>
        <span className={`tag-label`}>
          {`Trending with`}
        </span>
        <a
          href={`/404.html`}
          className={`tags`}
        >
          {tags}
        </a>
      </footer>
    </article>
  );
}
