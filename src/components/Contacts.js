import Contact from "./Contact";

const Contacts = ({ list, filteredSearch }) => {
  const makeContactById = list.map((id) => <Contact key={id} id={id} filter={filteredSearch}/>);

  const loadingMessage = <h2 className="display-5 text-center">Loading...</h2>

  return <div>{list.length === 0 ? loadingMessage : makeContactById}</div>;
};

export default Contacts;
