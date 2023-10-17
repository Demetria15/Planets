export const Header = () =>{
    let imageObject = {
        imgUrl: "./planets.png",
        imgAlt: "An image of the solar system",
    }

const header = "The planets";

return (
    <header>
        <img src={imageObject.imgUrl} alt={imageObject.imgAlt} />
        <h1>{header}</h1>
    </header>
);
}