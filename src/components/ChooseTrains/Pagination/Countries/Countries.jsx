
const Countries = ({ countries, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <ul className="list__group">
                {countries.map((el, index) => (
                    <li className="list__group__item" key={index}>
                        {el.name}
                        <img src="#" alt="" />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Countries;