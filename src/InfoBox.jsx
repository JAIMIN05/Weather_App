import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    
    const INIT_URL = 
        "https://d2h8hramu3xqoh.cloudfront.net/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp"

    let HOT_URL = "https://www.shutterstock.com/shutterstock/photos/360422789/display_1500/stock-photo-standalone-trees-during-a-very-hot-summer-360422789.jpg"
    let COLD_URL = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.webp"
    let RAIN_URL = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?t=st=1721234030~exp=1721237630~hmac=5243e32666797717f001229f5a4c8507365b2a695db39f8684ea0d6ba533a15d&w=996"
    
    return (
        <div className="InfoBox">
            {/* <h2>WeatherInfo - {info.weather}</h2> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {
                        info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                            info.humidity > 80 
                            ? <ThunderstormIcon/> : info.temp > 15 
                            ? <WbSunnyIcon/> : <AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity} </p>
                        <p>Min Temp = {info.tempMin}&deg;C </p>
                        <p>Max Temp = {info.tempMax}&deg;C </p>
                        <p>
                            The weather can be described as <i>{info.weather}</i> and
                            feels like {info.feelsLike}&deg;C 
                        </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}