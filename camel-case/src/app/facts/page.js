import BottomNav from "@/components/BottomNav";
import FactStyles from "@/app/facts/page.module.css";
import Styles from "@/app/page.module.css";
export default function facts() {
  return (
    <main>
      <div className={FactStyles.factsHolder}>
        <h1 className={Styles.pageName}>Facts</h1>
        <ul>
          <li>
            There are two major species of Camel: Camelus bactrianus (Bactrian
            Camel) and Camelus dromedarius (Dromedary Camel.)
          </li>
          <li>
            The Dromedary Camel is much more common, accounting for 90% of
            camels that are currently alive. These camels have one hump.
          </li>
          <li>
            While most Dromedary Camels are domesticated, there are still wild
            Bactrian Camels, and these camels have two humps.
          </li>
        </ul>
        <h2>Dimensions:</h2>
        <p>Most camels are:</p>
        <ul>
          <li>7.5-12 feet long</li>
          <li>5-6.5 feet tall</li>
          <li>900-1300 pounds</li>
        </ul>
        <h3>Sources:</h3>
        <ul>
          <li>
            <a href="https://www.pbs.org/wnet/nature/blog/camel-fact-sheet/">
              https://www.pbs.org/wnet/nature/blog/camel-fact-sheet/
            </a>
          </li>
        </ul>
      </div>

      <BottomNav
        item1="home"
        href1=""
        item2="habitat"
        href2="/habitat"
        item3="gallery"
        href3="/gallery"
      />
    </main>
  );
}
