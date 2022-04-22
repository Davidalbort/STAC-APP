
const Navbar = ({setMode,setSearchValue}) =>{
    const options = ['characters','comics','creators','events','series'];
    const onChange = (text) =>{
        alert(text);
        setMode(text);
        setSearchValue('')

    }
    const optionList = options.map(option => (
        <div tabIndex={0} key={option} className='option'>
        <input id={option} type='radio' name='options'
            onChange={event => onChange(event.target.id) }
        />
        <label htmlFor={option}>{option}</label>
        </div>
    ))
    return(
        <nav className="navbar">
            {optionList}
        </nav>
    )
}

export {Navbar};