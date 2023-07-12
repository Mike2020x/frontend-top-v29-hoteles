import { useState } from "react";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import "./Blog.scss";

function Blog() {
  const initialArticles = [
    {
      id: 1,
      image: "/mountain.jpg",
      author: "Julia Holmes",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias, asperiores quaerat dolorum ipsam cumque sint eveniet? Accusamus commodi eos blanditiis veritatis exercitationem libero earum fugit animi, est ad facere.",
    },
    {
      id: 2,
      image: "/expedition.jpg",
      author: "Julia Holmes",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias, asperiores quaerat dolorum ipsam cumque sint eveniet? Accusamus commodi eos blanditiis veritatis exercitationem libero earum fugit animi, est ad facere.",
    },
    // Agrega más artículos aquí
  ];

  const [articles, setArticles] = useState(initialArticles);

  const toggleArticleContent = (id) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) => {
        if (article.id === id) {
          return {
            ...article,
            expanded: !article.expanded,
          };
        }
        return article;
      })
    );
  };

  return (
    <div className="blog-page">
      <div className="content__blog">
        <div className="content__blog--description">
          <div>
            <h2>Super Easy Booking</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              debitis provident animi odit eum quo, temporibus labore excepturi
              quasi totam fugit voluptatum necessitatibus sequi voluptatibus
              saepe facere accusamus vero quis!
            </p>
          </div>
          <div className="content__blog--attribute">
            <img src="/explore.jpg" alt="explore" />
            <h4>Explore</h4>
          </div>
          <div className="content__blog--attribute">
            <img src="/get_quotes.jpg" alt="get quotes" />
            <h4>Get Quotes</h4>
          </div>
          <div className="content__blog--attribute">
            <img src="/customize.jpg" alt="customize" />
            <h4>Customize</h4>
          </div>
          <div className="content__blog--attribute">
            <img src="/book_enjoy.jpg" alt="book enjoy" />
            <h4>Book & Enjoy</h4>
          </div>
        </div>
      </div>

      <div className="content__blog--published">
        {articles.map((article) => (
          <div className="content__blog--published-article" key={article.id}>
            <img src={article.image} alt={article.title} />
            <div className="content__blog--newsletter">
              <h4>Posted By: {article.author}</h4>
              <h3>{article.title}</h3>
              {article.expanded && <p>{article.content}</p>}
              <button onClick={() => toggleArticleContent(article.id)}>
                {article.expanded ? "READ LESS" : "READ MORE"}
              </button>
            </div>
          </div>
        ))}

        <div className="content__blog--subscribe">
          <SubscriptionForm />
        </div>
      </div>
    </div>
  );
}

export default Blog;