import React, {useState} from "react";
import Follow from "../../components/Follow/Follow";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import News from "../../components/News/News";
import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import Spacer from "../../components/Spacer/Spacer";
import { TweetProps } from "../../components/Tweet/Tweet";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import "./Home.scss";

export default function HomePage({dark = false}) {
  const [tweetList, setTweets] = useState<TweetProps[]>(
    [
      {
        userName: "User Name",
        userTagName: "@tagname",
        userID: "1",
        userURL: "/404.html",
        postText: "Tom is in a big hurry.",
        imageURL: "/images/post-image-default.png",
        dark: dark,},
      {
        userName: "User Name",
        userTagName: "@tagname",
        userID: "2",
        userURL: "/404.html",
        postText: "Tom is in a big hurry.",
        imageURL: "/images/post-image-01.png",
        dark: dark,
      }
    ]
  );
  return (
    <main className="home-page">
      <section className="page-content">
        <aside className="a-side">
          <Menu />
        </aside>
        <section className="main-content">
          <Header label="Home"/>
          <Post setTweets={setTweets}/>
          <Spacer />
          <TweetFeed tweets={tweetList}/>
        </section>
        <aside className="b-side">
          <Search />
          <News />
          <Follow />
        </aside>
      </section>
      <Footer
        title="Don’t miss what’s happening"
        desc="People on Twitter are first to know."
        />
    </main>
  );
}
