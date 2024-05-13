import Button from "./Button"

export default function Card() {
    return(
        <div className="Card flex-column text-center justify-center p-3 m-3">
            <img src={data.data[0].image } alt="Image test" />
            <h2>Fade</h2>
            <p>Studying front end-development</p>
            <Button />
        </div>
    )
}
