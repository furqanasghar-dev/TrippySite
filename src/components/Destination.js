import "./DestinationStyle.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tour give you opportunity to see a lot. within a time frame.</p>
      <DestinationData
        className="first-dev"
        heading="Hunza Valley: A Mountain Paradise"
        text="The Hunza Valley rests high in the Karakoram Mountains of northern Pakistan. People call it the mountain paradise because of its giant snow peaks, blue rivers, and green orchards. This deep valley sits surrounded by famous mountains like Rakaposhi and Ultar Sar. The Hunza Valley: The Mountain Paradise Tour takes you deep into this magical landscape. An expert guide travels with you to share the rich culture of the local Hunzakutz people. You start your trip driving along the historic Karakoram Highway next to rushing rivers. Your guide takes you to visit ancient forts like Baltit and Altit. These old stone buildings sit high on cliffs and look out over the entire valley below. Next, you walk through local villages filled with apricot trees and friendly faces. You also travel to Attabad Lake to see its bright turquoise water hidden between steep rocky mountains. From there, you go to the Passu Cones to view the sharp, jagged mountain peaks pointing into the sky. Your guide tells you stories about the silk road traders who walked these same paths centuries ago. You also get to taste fresh local food like walnut bread and organic fruits. The tour gives you plenty of time to take photos of the giant glaciers and peaceful terraces. It is a safe and breathtaking way to experience the high mountains of Pakistan. Visitors of all ages love the clean air, massive peaks, and warm hospitality. This guided trip makes your journey to northern Pakistan truly unforgettable."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-dev-reverse"
        heading="Eiffel Tower: The Iron Wonder"
        text="The Eiffel Tower is a famous iron tower in Paris, France. Gustave Eiffel built it for the 1889 World's Fair. It stands three hundred meters tall. At the time, it was the tallest man-made structure in the world. Many local artists did not like it at first. They called it a giant metal monster. Today, people love it. It is a global symbol of France and romance. Millions of visitors go there every year. They ride elevators or walk up stairs. The tower has three levels for visitors. The top level gives a clear view of Paris. At night, the tower shines with bright lights. It sparkles for five minutes every hour after dark. The iron structure needs painting every seven years. Workers use fifty tons of paint each time. It takes bravery to paint the high parts. The tower also helps with radio and TV broadcasts. Engineers added antennas to the very top over the years. Weather changes make the iron move a little bit. The tower grows in summer heat and shrinks in winter cold. Strong winds also push it slightly. It remains very safe and strong. World leaders light it up for special events. It shows colors for peace or solidarity. The Eiffel Tower remains a great human achievement. It proves what builders can do with iron and math. Visitors will always remember its grand shape against the sky."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
