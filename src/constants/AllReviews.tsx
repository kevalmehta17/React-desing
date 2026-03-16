import person1 from "../assets/image/person1.png"
import person2 from "../assets/image/person2.png";
import person3 from "../assets/image/person3.png";

export const allReviews: {
  id: number;
  imageSrc: string;
  reviewHeading: string;
  review: string;
  name: string;
}[] = [
  {
    id: 1,
    imageSrc: person1,
    reviewHeading: "2 weeks of using Glow Serum",
    review:
      "After 2 weeks of using Xtragleam, my skin has never felt smoother. Thank you!",
    name: "Lisa, Verified Buyer",
  },
  {
    id: 2,
    imageSrc: person2,
    reviewHeading: "Game Changer",
    review:
      "The Glow Serum is a game-changer. My dark spots faded within weeks, and my skin feels so hydrated!",
    name: "Emma L., Verified Buyer",
  },
  {
    id: 3,
    imageSrc: person3,
    reviewHeading: "More Confident",
    review:
      "I’ve struggled with acne for years, but Xtragleam changed everything! My skin is glowing, and I’ve never felt more confident.",
    name: "Sarah A., Verified Buyer",
  },
];