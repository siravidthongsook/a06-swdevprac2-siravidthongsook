"use client";

import { useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";
import styles from "./card-panel.module.css";

type Venue = {
  venueName: string;
  imgSrc: string;
  description: string;
};

type RatingState = Map<string, number>;

type RatingAction =
  | { type: "set"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

const venues: Venue[] = [
  {
    venueName: "The Bloom Pavilion",
    imgSrc: "/image1.jpg",
    description:
      "A bright garden venue with floral details and airy seating for elegant celebrations.",
  },
  {
    venueName: "Spark Space",
    imgSrc: "/img/sparkspace.jpg",
    description:
      "A clean modern hall for launches, talks, and private events with a city feel.",
  },
  {
    venueName: "The Grand Table",
    imgSrc: "/img/grandtable.jpg",
    description:
      "A classic banquet room with warm lighting and generous space for formal gatherings.",
  },
];

const initialRatings = new Map<string, number>(
  venues.map((venue) => [venue.venueName, 0]),
);

function ratingReducer(state: RatingState, action: RatingAction): RatingState {
  const nextState = new Map(state);

  if (action.type === "set") {
    nextState.set(action.venueName, action.rating);
    return nextState;
  }

  nextState.delete(action.venueName);
  return nextState;
}

export default function CardPanel() {
  const router = useRouter();
  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);
  const [selectedRatings, setSelectedRatings] = useState<Record<string, number>>(
    Object.fromEntries(venues.map((venue) => [venue.venueName, 0])),
  );

  const handleRatingChange = (venueName: string, rating: number) => {
    setSelectedRatings((current) => ({
      ...current,
      [venueName]: rating,
    }));
    dispatch({ type: "set", venueName, rating });
  };

  return (
    <section className={styles.panel}>
      <div className={styles.sectionHeading}>
        <p className={styles.kicker}>Featured Venue</p>
        <h2>Elegant spaces for weddings, launches, and private gatherings</h2>
      </div>

      <div className={styles.cardRow}>
        {venues.map((venue) => (
          <Card
            key={venue.venueName}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
            description={venue.description}
            rating={selectedRatings[venue.venueName] ?? 0}
            onRatingChange={handleRatingChange}
            onClick={() =>
              router.push(`/booking?venue=${encodeURIComponent(venue.venueName)}`)
            }
          />
        ))}
      </div>

      <div className={styles.ratingList}>
        <p className={styles.ratingTitle}>Venue List with Ratings : {ratings.size}</p>
        {[...ratings.entries()].map(([venueName, rating]) => (
          <p
            key={venueName}
            data-testid={venueName}
            className={styles.ratingItem}
            onClick={() => dispatch({ type: "remove", venueName })}
          >
            {venueName} : {rating}
          </p>
        ))}
      </div>
    </section>
  );
}
