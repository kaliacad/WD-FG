export default function Pagination({ postsPerPage, data, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  function handleOnClick(number) {
    paginate(number);
  }
  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => {
                e.preventDefault(); //
                handleOnClick(number);
              }}
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
