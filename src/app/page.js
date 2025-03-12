export default function Home() {
  return (
    <div>
      <header className="text-left px-16 py-4">
        <div className='flex gap-2'>
          <div className="pt-12">
            <h2 className='text-6xl text-[#EA9AB2] font-bold pb-3'>
              Hi there!
            </h2>
            <h1 className='text-7xl text-[#D14A1F] font-bold pb-6'>
              I'm Aakanksha.
            </h1>
            <p className="text-2xl">
              I'm a first-year MMath student at the David R. Cheriton School of Computer Science at the University of Waterloo.
              I'm supervised by <a className="underline hover:no-underline" href="http://edithlaw.ca" target="_blank">Dr. Edith Law</a> in the <a className="underline hover:no-underline" href="http://hci.cs.uwaterloo.ca" target="_blank">human-computer interaction (HCI) lab</a>.
            </p>
            <div className="text-4xl font-bold text-[#F1B842] pt-6 decoration-wavy decoration-3 underline-offset-4">
              <a className="underline hover:no-underline pr-5" href="">Work</a>
              <a className="underline hover:no-underline px-5" href="">Projects</a>
              <a className="underline hover:no-underline px-5" href="./CV.pdf" target='_blank'>CV</a>
            </div>
          </div>
          <img src={"./aakanksha.png"} className="w-1/3 rounded-xl" alt="A picture of Aakanksha standing on a big rock" />
        </div>

      </header>
    </div>
  );
}
