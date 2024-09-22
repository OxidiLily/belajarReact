const Spotify = () => {
  return (
    <section className="flex mb-2 ml-7 sm:ml-0 sm:mb-0 sm:mx-2">
        <button
            href="/"
            className="group flex justify-center px-2.5 py-2 rounded-md drop-shadow-xl bg-[#1ED760] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1.2em"
            viewBox="0 0 16 16"
            strokeWidth="0"
            fill="currentColor"
            stroke="currentColor"
            >
            <path
                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"
            ></path>
            </svg>
            <span
            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-100 group-hover:text-sm group-hover:-translate-y-10 duration-700"
            >
            Spotify
            </span>
        </button>
    </section>
  );
};

export default Spotify;
