import { Box, Button, Heading,Checkbox } from "@chakra-ui/react";
import SliderMarkExample from "./Slider";
import location from "./location";
import { useState } from "react";
import onToggle from './Slide'


const Form = (props) => {
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);
const [loud, setLoud] = useState(100);
const [distance, setDistance] = useState(100)
const [busy, setBusy] = useState(100);
const [open, setOpen] = useState(true);

if(props.isLoggedIn){
    updateSearchParameters(props.loginValues.open, props.loginValues.busy, props.loginValues.distance, props.loginValues.loud)
}

function updateSearchParameters(o, b, d, l){
    setOpen(o);
    setBusy(b);
    setDistance(d);
    setLoud(l);
}

    const applyAndClose = () =>{
         props.func()
         props.apply(open,busy,distance,loud,lat,lng)
    }
    const getLocation = () => {
        if(!navigator.geolocation){setStatus("not supported")} else{
            setStatus("locating");

        
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }, () => {setStatus('unable to get location');});}};

    return(
       <Box margin={2}>
        <Button onClick={getLocation}>get location</Button>
        <Heading>location</Heading>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
        <Checkbox defaultChecked onChange={(e) => setOpen(e.target.checked)}>Is Open</Checkbox>
<Box>Loudness <SliderMarkExample returnValue={setLoud}></SliderMarkExample>
</Box>
<Box>Distance <SliderMarkExample returnValue={setDistance}></SliderMarkExample>
</Box>
<Box>Busyness <SliderMarkExample returnValue={setBusy}></SliderMarkExample>
</Box>
<Button onClick={applyAndClose}>Apply FIlters</Button>

        </Box> 
    )
}

export default Form;