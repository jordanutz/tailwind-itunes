import React from 'react';
import './App.css';

// Icons
import {AiFillApple, AiFillHeart} from 'react-icons/ai';
import {IoIosMusicalNotes, IoIosRadio} from 'react-icons/io';
import {BsArrowUpRight} from 'react-icons/bs'

function App() {

  const tracks = [
    {id: 1, title: '(|)', time: '1:29'}, 
    {id: 2, title: 'Nothing\'s Real', time: '4:07'}, 
    {id: 3, title: 'What\'s It Gonna Be?', time: '3:34'}, 
    {id: 4, title: 'Touch', time: '3:34'}, 
    {id: 5, title: 'Kidz \'n\' Stuff', time: '5:10'}, 
    {id: 6, title: 'Indecision', time: '3:32'}, 
    {id: 7, title: 'What Happened to Us?', time: '4:09'}, 
    {id: 8, title: '(||)', time: '0:45'}, 
    {id: 9, title: 'Tongue Tied', time: '3:50'}, 
    {id: 10, title: 'Make It Up', time: '3:31'}, 
    {id: 11, title: '2 Shy', time: '4:38'}, 
    {id: 12, title: 'White Light', time: '10:41'}, 
    {id: 13, title: 'The Space Tapes', time: '9:23'}, 
  ]

  return (
    <div className="App grid grid-cols-11 h-screen relative">
      <aside className="menu bg-bg-menu col-span-2 border-r border-gray-400 border-solid px-6 py-2">
        <section className="mb-4 cursor-pointer">
          <h1 className="flex items-center text-2xl font-bold">
            <AiFillApple className="text-2xl" />
            Music
          </h1>
        </section>
        <section>
          <input type="text" className="mb-4 w-full border border-gray-400 border-solid rounded-sm px-3 py-1" placeholder="Search" />
        </section>
        <section className="py-3 border-b text-gray-900">
          <section className="menu__menu-item">
            <AiFillHeart className="menu__menu-icon bg-brand-blue" />
            For You
          </section>
          <section className="menu__menu-item">
            <IoIosMusicalNotes className="menu__menu-icon bg-brand-blue" />
            Browse
          </section>
          <section className="menu__menu-item">
            <IoIosRadio className="menu__menu-icon bg-brand-blue" />
            Radio
          </section>
        </section>
        <section className="py-3 cursor-pointer">
          <p className="flex items-center text-gray-600 text-sm">
            <IoIosMusicalNotes className="mr-2 text-3xl border rounded-full w-9 h-9 p-1 flex items-center border-gray-600" />
            Open in Music 
            <BsArrowUpRight className="ml-1" />
          </p>
        </section>
      </aside>
      <section className="col-span-9 px-8 py-3">
        <header className="flex items-end justify-end mb-16">
          <button className="text-sm bg-brand-blue rounded-md px-5 py-1 text-white shadow-md focus:outline-none focus:shadow-outline">Sign In</button>
        </header>
        <main className="grid grid-cols-4 px-2">
          <section className="col-span-1 sticky">
            <img className="rounded-md shadow-xl" src="https://media.pitchfork.com/photos/5929bb44abf31b7dc7155a53/1:1/w_320/bb6b528d.jpg" alt="Shura - Nothing's Real" />
          </section>
          <section className="col-span-3 pl-8 pr-32 overflow-y-scroll h-tracks">
            <h2 className="font-bold text-2xl text-gray-900">Nothing's Real</h2>
            <h3 className="font-bold text-xl mb-1 text-brand-blue">Shura</h3>
            <section className="mb-3">
              <h4 className="text-xs text-gray-600"><span className="uppercase">Electronic</span> • 2016</h4>
            </section>
            <button className="mb-4 btn focus:outline-none focus:shadow-outline active:bg-active-blue">Preview</button>
            <section className="mb-6">
              <p className="text-xs">
                <span className="text-gray-700 font-bold">Editors' Notes: </span>
                Pop that’s both understated and immediate, from a rising singer/songwriter. On her long-awaited debut, Shura weaves together elegant, intricately patterned electro-pop that channels late-‘80s Madonna (“What’s It Gonna Be?”), Janet Jackson (“Indecision”), and more. Though it has the grand sweep and melodic goods of a major breakthrough,  also bears the subtle flourishes (and song titles) of a reticent, deeply introspective mind.
              </p>
            </section>
            <section>
              {tracks.map( (track,index, arr) => (
                <section className={`group flex justify-between px-3 py-5 text-sm items-center cursor-pointer border-t ${track.id === arr.length && 'border-b'} hover:bg-brand-blue hover:text-white active:bg-brand-blue hover:rounded-md`} key={track.id}>
                  <section className="flex items-center">
                    <p className="mr-5 text-xs text-gray-600 group-hover:text-white">{track.id}</p>
                    <h5>{track.title}</h5>
                  </section>
                  <section>
                    <p className="text-xs text-gray-600 group-hover:text-white">{track.time}</p>
                  </section>
                </section>
              ))}
            </section>
          </section>
        </main>
        <footer className="fixed bottom-0 right-0 left-0 flex justify-between px-8 bg-brand-blue py-4 items-center text-white shadow-2xl">
          <section>
            <h6 className="font-bold">Get 60 millon songs free for 3 months.</h6>
            <p className="text-sm font-light">Plus your entire music library on all your devices. 3 months free, then $9.99/month.</p>
          </section>
          <section>
            <button className="bg-white text-brand-blue px-6 rounded-sm py-1 text-sm">Try It Free</button>
          </section>
        </footer>
      </section>
    </div>
  );
}

export default App;
