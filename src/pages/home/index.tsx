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

export default function HomePage() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [tweetList, setTweets] = useState<TweetProps[]>(
    [
      {
        userName: "Bessie Cooper",
        userTagName: "@alessandroveronezi",
        userID: "1",
        userURL: "/404.html",
        postText: "Tom is in a big hurry.",
        imageURL: "/images/post-image-default.png",
        dark: darkMode,},
      {
        userName: "Jenny Wilson",
        userTagName: "@gabrielcantarin",
        userID: "2",
        userURL: "/404.html",
        postText: "Tom is in a big hurry.",
        imageURL: "/images/post-image-01.png",
        dark: darkMode,
      }
    ]
  );

  return (
    <main className="home-page">
      <section className="page-content">
        <aside className="a-side">
          <Menu dark={darkMode}/>
        </aside>
        <section className="main-content">
          <Header label="Home" dark={darkMode}/>
          <Post setTweets={setTweets} dark={darkMode}/>
          <Spacer dark={darkMode}/>
          <TweetFeed tweets={tweetList} dark={darkMode}/>
        </section>
        <aside className="b-side">
          <Search dark={darkMode}/>
          <News dark={darkMode}/>
          <Follow dark={darkMode}/>
        </aside>
      </section>
      <Footer
        title="Don’t miss what’s happening"
        desc="People on Twitter are first to know."
        />
    </main>
  );
}
