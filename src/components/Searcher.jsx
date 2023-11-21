const Searcher = () => {
  return (
    <>
      <div className="container__options--searcher">
        <input type="text" className='searcher' placeholder='Busca tu pokemon' />


        <div className="container__select-categories">
          <p className="text">Categorias</p>
          <select>
            <option>FUEGO</option>
            <option>VENENO</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Searcher;