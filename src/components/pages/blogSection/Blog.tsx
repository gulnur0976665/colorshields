"use client";
import React from "react";
import Hero from "@/components/ui/blog/Hero";
import { useArticlesQuery } from "@/redux/api/articles";
import scss from "./Blog.module.scss";
import Form from "@/components/ui/form/Form";
import Image from "next/image";
import bg from "../../../assets/Vector bg.png";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  const { data: articles, isLoading, isError } = useArticlesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching articles.</p>;

  return (
    <div className={scss.Blog}>
      <Hero />
      <div className={scss.titleBlock}>
        <p className={scss.subHr}></p>
        <h3 className={scss.title}>Articles about epoxy</h3>
      </div>
      <Image src={bg} alt="vectorBg" className={scss.vectorBg} />
      <div className={scss.content}>
        {articles?.map((article) => (
          <div
            key={article.id}
            className={scss.articleCard}
            onClick={() => router.push(`/details/${article.id}`)}
          >
            <div className={scss.imageContainer}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                className={scss.articleImage}
              />
            </div>

            <div className={scss.articleContent}>
              <div className={scss.articleHeader}>
                <h2 className={scss.articleAuthor}>{article.title}</h2>
                <p className={scss.articleMeta}>
                  {new Date(article.publication_date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}{" "}
                  • {article.read_time} min
                </p>
              </div>
              <div className={scss.articleBody}>
                <p className={scss.articleTitle}>{article.subtitle}</p>
                <p className={scss.articleSummary}>
                  {article.summary.slice(0, 200)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Blog;
