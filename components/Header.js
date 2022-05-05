const Header = ({ query, handleQuery }) => {
  return (
    <div className="w-full">
      <div className="flex mx-auto gap-2 border border-slate-300 p-3 rounded-lg max-w-lg">
        <svg
          className="stroke-slate-300"
          width="24"
          height="24"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
        </svg>
        <input
          className="focus:outline-none"
          placeholder="Search for countries"
          value={query}
          onChange={(event) => handleQuery(event.target.value)}
        />
      </div>
    </div>
  );
};
export default Header;
