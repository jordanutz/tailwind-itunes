import React from 'react';
import './App.css';

// Icons
import {AiFillApple, AiFillHeart} from 'react-icons/ai';
import {IoIosMusicalNotes, IoIosRadio} from 'react-icons/io';
import {BsArrowUpRight} from 'react-icons/bs'

function App() {
  return (
    <div className="App grid grid-cols-11 h-screen">
      <aside className="bg-gray-200 col-span-2 border-r border-gray-400 border-solid px-6 py-2">
        <section className="mb-4">
          <h1 className="flex items-center text-2xl font-bold"><AiFillApple className="text-2xl" />Music</h1>
        </section>
        <section>
          <input type="text" className="w-full border border-gray-400 border-solid rounded-sm px-3 py-1" />
        </section>
        <section>
          <section className="flex"><AiFillHeart />For You</section>
          <section className="flex"><IoIosMusicalNotes />Browse</section>
          <section className="flex"><IoIosRadio />Radio</section>
        </section>
        <section>
          <p><IoIosMusicalNotes />Open in Music <BsArrowUpRight /></p>
        </section>

      </aside>

      <section className="col-span-9">
        <header>

        </header>

        <main>

        </main>

        <footer>
          
        </footer>

      </section>


     
    </div>
  );
}

export default App;
