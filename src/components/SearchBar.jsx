export default function SearchBar(props) {
   console.log(props)
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch('id')}>Agregar</button>
      </div>
   );
}
