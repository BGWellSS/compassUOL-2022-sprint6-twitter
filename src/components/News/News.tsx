import React from 'react';
import NewsCard, { NewsCardProps } from '../NewsCard/NewsCard';
import './News.scss';
// News List

interface NewsProps {
  newsCards?: NewsCardProps[],
  dark?: boolean,
  onClick?: () => void | undefined
}

export default function News({
  dark,
  newsCards = [{
    idCard: "default",
    title: "COVID19",
    time: "Last night",
    textContent: "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
    tags: "#covid19",
    dark: dark
  },{
    idCard: "1",
    title: "US news",
    time: "4h ago",
    textContent: "Parler may go offline following suspensions by Amazon, Apple and Google",
    tags: "#trump",
    dark: dark,
  },{
    idCard: "2",
    title: "India",
    time: "1h ago",
    textContent: "India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test",
    tags: "#sport",
    dark: dark,
  }],
  ...props
}: NewsProps) {

  return (
    <section
      className={`news-section${dark ? " news-section-dark" : ""}`}
      {...props}
      >
      <header className={`news-section-header`}>
        <h3 className={`section-title`}>
          {`What’s happening`}
        </h3>
      </header>
      <div className={`cards-container`}>
        {newsCards.map(item => (
          <NewsCard {...item}></NewsCard>
        ))}
      </div>
      <footer className={`news-section-footer`}>
        <a
          href="/404.html"
          className={`news-showmore`}
        >
          {`Show more`}
        </a>
      </footer>
    </section>
  );
}
