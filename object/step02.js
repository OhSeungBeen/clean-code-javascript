// coumputed property name

const [state, setState] = useState({
  id: '',
  password: '',
});

const handleChange = (e) => {
  setState({
    [e.tager.name]: e.tager.value,
  });
};

return (
  <>
    <input value={state.id} onChange={handleChange} name="name" />
    <input value={state.password} onChange={handleChange} name="password" />
  </>
);
