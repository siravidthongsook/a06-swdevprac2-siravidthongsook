"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  venueName: string;
  imgSrc: string;
  description?: string;
  imageAlt?: string;
  rating: number;
  onRatingChange: (venueName: string, rating: number) => void;
  onClick?: () => void;
};

export default function Card({
  venueName,
  imgSrc,
  description,
  imageAlt,
  rating,
  onRatingChange,
  onClick,
}: CardProps) {
  const ratingFieldName = `${venueName} Rating`;

  return (
    <InteractiveCard onClick={onClick}>
      <article className={styles.card}>
        <div className={styles.imageWrap}>
          <Image
            src={imgSrc}
            alt={imageAlt ?? venueName}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className={styles.image}
          />
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>{venueName}</h2>
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
          <div
            id={ratingFieldName}
            data-testid={ratingFieldName}
            className={styles.ratingWrap}
            onClick={(event) => event.stopPropagation()}
          >
            <Rating
              name={ratingFieldName}
              value={rating}
              onChange={(_, newValue) => onRatingChange(venueName, newValue ?? 0)}
            />
          </div>
        </div>
      </article>
    </InteractiveCard>
  );
}
