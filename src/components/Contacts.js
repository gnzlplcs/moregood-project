import Contact from "./Contact";

const Contacts = (props) => {
  const makeContactById = props.list.map((id) => <Contact key={id} id={id} />);

  return <div>{makeContactById}</div>;
};

export default Contacts;
