import Image from "next/image";

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
          <li>Psałterz Dawidów - mistrzowski poetycki przekład biblijnych psalmów.</li>
        </ul>
        <p className="text-2xl">Fraszka "Na lipę":</p>
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
