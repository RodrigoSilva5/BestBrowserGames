import "./styles.css"

const Card = ({img, title, p, link}) => {
    return (
        <>
            <main>
            <div className="card">
                <img src={img} alt="" />
                <div className="card-content">
                <h2>
                    {title}
                </h2>
                <p>
                    {p}
                </p>
                <a href={link} className="button">
                    Clique aqui 
                    <span className="material-symbols-outlined">
                    arrow_right_alt
                    </span>
                </a>
                </div>
            </div>
            </main>
        </>
    )
}

export {Card}