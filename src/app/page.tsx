import Image from "next/image";
import funfacticon from "@/public/funfact.svg";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-amber-50">
        <h1 className="text-7xl text-black">Jan Kochanowski</h1>
        <h3 className="text-4xl text-black">
          Informacje o Janie Kochanowskim i jego dziełach
        </h3>
        <label>Portret:</label>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Jan_Kochanowski.png"
          alt="Portret Jana Kochanowskiego"
        />
        <p className="text-2xl p-4 mt-2">Życiorys Kochanowskiego:</p>
        <p className="text-xl">Najważniejsze etapy życia Kochanowskiego:</p>
        <ul className="list-disc p-4 mt-2">
          <li>Ok. 1530 r. - Narodziny w Sycynie na Mazowszu</li>
          <li>
            1544 - 1555 r. - Rozpoczyna naukę w Akademii Krakowskiej, po czym
            trzykrotnie wyjeżdża na studia do słynnej włoskiej Padwy. Tam
            dogłębnie poznaje twórczość antyczną.
          </li>
          <li>
            lata 60. XVI w. - Pełni funkcję sekretarza króla Zygmunta II
            Augusta. Przebywa na dworach magnackich i dworze królewskim,
            nawiązując liczne przyjaźnie.
          </li>
          <li>
            1575 r. - Żeni się z Dorotą Podlodowską i ostatecznie osiada w
            odziedziczonym majątku - Czarnolesie.
          </li>
          <li>
            1584 r. - w wyniku nagłego ataku apopleksji umiera w Lublinie.
          </li>
        </ul>
        <p className="text-xl">Dokonania i twórczość:</p>
        <ul className="list-disc p-4 mt-2">
          <li>
            Fraszki - zbiór krótkich, dowcipnych i refleksyjnych wierszy o życiu
            ziemiańskim, obyczajach i naturze ludzkiej.
          </li>
          <li>
            Pieśni - monumentalny zbiór liryki (np. Pieśń o spustoszeniu Podola
            czy Czego chcesz od nas, Panie), poruszający tematy patriotyczne,
            religijne i filozoficzne.
          </li>
          <li>
            Treny - cykl 19 osobistych wierszy żałobnych, napisanych po śmierci
            ukochanej, kilkuletniej córki Urszulki. Dzieło to zrewolucjonizowało
            europejską poezję, w której do tej pory treny pisano głównie dla
            wielkich, zasłużonych mężów stanu.
          </li>
          <li>
            Odprawa posłów greckich - pierwsza polska tragedia humanistyczna,
            nawiązująca do mitu o wojnie trojańskiej, o wydźwięku politycznym i
            moralnym.
          </li>
          <li>
            Psałterz Dawidów - mistrzowski poetycki przekład biblijnych psalmów.
          </li>
        </ul>
        <p className="text-2xl p-4 mt-2">Życie prywatne:</p>
        <p className="text-xl">Rodzina:</p>
        <ul className="list-disc p-4 mt-2">
          <li>Ojciec - Piotr Kochanowski</li>
          <li>Matka - Anna Białaczowska</li>
          <li>Żona - Dorota Podlodowska</li>
          <li>Córka - Urszula Kochanowska</li>
        </ul>
        <p>
          Jan Kochanowski Urodził się w 1530 r. w Sycynie. Dokładna data jego
          urodzenia nie jest jednak znana.
        </p>
        <p className="text-xl">Fakty:</p>
        <ul className="list-disc mt-4">
          <li>Był szlachcicem i mieszkał w Czarnolesie.</li>
          <li>Miał kilkoro dzieci, w tym córkę Urszulę Kochanowską.</li>
          <li>
            Śmierć Urszulki bardzo go dotknęła i stała się inspiracją do
            napisania Treny.
          </li>
          <li>Cenił życie rodzinne, spokój i życie na wsi.</li>
        </ul>
        <div className="flex mt-8">
          <Image src={funfacticon} alt="Ciekawostka" className="w-16 mr-2" />
          <p>
            Ciekawostka: Kochanowski jest uważany za jednego z najwybitniejszych
            poetów polskiego renesansu.
          </p>
        </div>
        <div className="mt-8">
          1. Jan Kochanowski był patriotą i troszczył się o ojczyznę
          <br />
          &bull; Poeta uważał, że obywatel powinien dbać o dobro państwa.
          Krytykował egoizm szlachty i brak odpowiedzialności za kraj.
          <br />
          <br />
          <br />
          2. Język polski
          <br />
          &bull; Kochanowski pisał po polsku i udowodnił, że język narodowy
          nadaje się do wielkiej literatury, co miało ogromne znaczenie dla
          kultury narodowej.
          <br />
          <br />
          <br />
          3. Tematy polityczne i społeczne
          <br />
          &bull; W utworach komentował sytuację Rzeczypospolitej, nawoływał do
          jedności narodowej i obrony kraju.
          <br />
          <br />
          <br />
          4. Tworzył pieśni patriotyczne
          <br />
          &bull; Szczególnie znana jest pieśń o spustoszeniu Podola, w której
          poeta apelował o obronę ojczyzny przed najazdami.
          <br />
          <br />
          <br />
          5. Odprawa posłów greckich
          <br />
          &bull; Dramat pokazujący, że prywatne interesy mogą doprowadzić
          państwo do upadku. Utwór miał być przestrogą dla Polaków.
        </div>
        <p className="text-2xl mt-8">Fraszka "Na lipę":</p>
        <q className="bg-amber-200 p-4 mt-2">
          Gościu, siądź pod mym liściem, a odpoczni sobie!
          <br />
          <br />
          Nie dojdzie cię tu słońce, przyrzekam ja tobie,
          <br />
          <br />
          Choć się nawysszej wzbije, a proste promienie
          <br />
          <br />
          Ściągną pod swoje drzewa rozstrzelane cienie.
          <br />
          <br />
          Tu zawżdy chłodne wiatry z pola zawiewają,
          <br />
          <br />
          Tu słowicy, tu szpacy wdzięcznie narzekają.
          <br />
          <br />
          Z mego wonnego kwiatu pracowite pszczoły
          <br />
          <br />
          Biorą miód, który potym szlachci pańskie stoły.
          <br />
          <br />
          A ja swym cichym szeptem sprawić umiem snadnie,
          <br />
          <br />
          Że człowiekowi łacno słodki sen przypadnie.
          <br />
          <br />
          Jabłek wprawdzie nie rodzę, lecz mię pan tak kładzie
          <br />
          <br />
          Jako szczep napłodniejszy w hesperyskim sadzie.
        </q>
      </main>
    </div>
  );
}
