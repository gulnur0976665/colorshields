"use client";
import React from "react";
import scss from "./blogDetails.module.scss";
import Hero from "@/components/ui/blog/Hero";
import { useParams } from "next/navigation";
import { useArticlesQuery } from "@/redux/api/articles";
import bg from "../../../assets/Vector bg.png";
import Image from "next/image";
import Form from "@/components/ui/form/Form";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data: articles, isLoading, isError } = useArticlesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching articles.</p>;

  const filter = articles?.filter((el) => el.id === Number(blogId));

  return (
    <div className={scss.blogDetailsWrapper}>
      <Hero />
      <div className="container">
        <Image src={bg} alt="vectorBg" className={scss.backgroundVector} />
        <div className={scss.blogContent}>
          {filter?.map((article) => (
            <div key={article.id} className={scss.blogCard}>
              <div className={scss.cardHeader}>
                <h2 className={scss.cardTitle}>{article.title}</h2>
                <p className={scss.cardMeta}>
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
              <div className={scss.cardImageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className={scss.cardImage}
                />
              </div>
              <div className={scss.cardBody}>
                <p className={scss.cardSubtitle}>{article.subtitle}</p>
                <p className={scss.cardSummary}>{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default BlogDetails;
