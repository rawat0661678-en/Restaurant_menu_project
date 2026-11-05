import React, { useState } from "react";
import LefRig from "./LefRig";
import './Lefrig.css';

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Addtocart() {
  const juiceItems = [
    {
      id: 1,
      name: "Classic Orange Juice",
      category: "Citrus",
      price: "₹199",
      description:
        "100% fresh squeezed valencia oranges packed with Vitamin C.",
      color: "border-orange-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QuYHYS6ME83LHWqr-d79qtaIYS-UqCqpKTaKekuYQA&s=10",
    },
    {
      id: 2,
      name: "Green Detox Blender",
      category: "Detox",
      price: "₹249",
      description:
        "A refreshing blend of crisp green apple, spinach, cucumber, and mint.",
      color: "border-green-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsH-34m0wL45M0Q4ZuuoL3SxTYKS9RJp4jADqPK0QS4Q&s=10",
    },
    {
      id: 3,
      name: "Wild Berry Blast",
      category: "Berry",
      price: "₹279",
      description:
        "Antioxidant-rich medley of sweet strawberries, blueberries, and raspberries.",
      color: "border-pink-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg692e_bMNucjO4lTRKiYASHlKhlo6qUgHesuN0HWUg&s",
    },
    {
      id: 4,
      name: "Tropical Mango Sunshine",
      category: "Tropical",
      price: "₹229",
      description:
        "Thick, creamy Alphonso mango pulp mixed with a splash of passion fruit.",
      color: "border-amber-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7KZq1Z0qCUGecCx_G0erBFaNePpD5m4k5yiqu835wg&s=10",
    },
    {
      id: 5,
      name: "Watermelon Mint Zest",
      category: "Hydration",
      price: "₹189",
      description:
        "Hydrating cold-pressed watermelon juice finished with lime and fresh mint.",
      color: "border-red-400",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJIYhj1-DQxlUSr1xjjzXda6cZTrSvVczLP62KXRYkw&s=10",
    },
    {
      id: 6,
      name: "Creamy Strawberry Shake",
      category: "Shake",
      price: "₹259",
      description:
        "Rich vanilla ice cream blended thick with whole local strawberries and whipped cream.",
      color: "border-rose-400",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwQ7J2tO30TTKwbiAaOQeV0ixE7owBhSV2piKLasg-w&s=10",
    },
    {
      id: 7,
      name: "Classic Chocolate Fudge Shake",
      category: "Shake",
      price: "₹279",
      description:
        "Decadent dark chocolate ganache whipped with premium milk gelato.",
      color: "border-amber-900",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5Yh4XY0VMeoDGLZ_zniasybETQ4fLxSo1C54VImD0w&s=10",
    },
    {
      id: 8,
      name: "Pineapple Coconut Zing",
      category: "Tropical",
      price: "₹219",
      description:
        "Tangy pineapple juice paired with smooth, refreshing coconut water.",
      color: "border-yellow-400",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR075NmHL-iTW5QekVizJFVDThdI5CJVqr9HTjSqnEx9w&s=10",
    },
    {
      id: 9,
      name: "Rich Mango Milkshake",
      category: "Shake",
      price: "₹249",
      description:
        "Lush, sweet mango chunks blended with cold whole milk and crushed pistachios.",
      color: "border-yellow-600",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNuR8G8dYGTqe689JXGRHfspZ7DfXhA4zNq4bK0as8g&s=10",
    },
    {
      id: 10,
      name: "Pomegranate Ruby Splash",
      category: "Citrus",
      price: "₹289",
      description:
        "Freshly pressed ruby red pomegranate seeds with a twist of pink Himalayan salt.",
      color: "border-red-700",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKABNZSfFHGUrDpbLjNIG7SXiSyHMNoOqHtBdkJH1NQ&s=10",
    },
  ];

  const [data, setdata] = useState("");

  function handleleft() {
    
    setdata((prevPosition) => prevPosition - 340);
  }

  function handleright() {
    setdata((prevPosition) => prevPosition + 340);
  }

  return (
    <>
      <div className="cantainer">
        <div className="box">
          <div
            className="cards flex gap-2 shadow-olive-600"
            style={{
              transform: `translateX(${data}px)`,
              transition: "transform 0.4s ease-in-out",
            }}
          >
              {juiceItems.map((v) => (
                <LefRig
                  key={v.id}
                  Product={v}
                  data={data}
                  handleleft={handleleft}
                  handleright={handleright}
                />
              ))}
            </div>
            <div className="Scrollbtn flex justify-around mt-3">
              <button onClick={handleright}>
                <FaArrowAltCircleLeft className="h-10 w-15" />
              </button>
              <button  onClick={handleleft}>
                <FaArrowAltCircleRight className="h-10 w-15" />
              </button>
            
            </div>
          
        </div>
      </div>
    </>
  );
}
export default Addtocart;
