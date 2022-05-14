import Contact from "./Contact";

const Contacts = ({ list, filteredSearch }) => {
  const makeContactById = list.map((id) => <Contact key={id} id={id} filter={filteredSearch}/>);

  return <div>{makeContactById}</div>;
};

export default Contacts;
