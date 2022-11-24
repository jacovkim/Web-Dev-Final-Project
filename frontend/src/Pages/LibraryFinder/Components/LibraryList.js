import React, { useState,useEffect } from "react";
import LibraryBlock from "./LibraryBlock";
import {Button, Box} from '@chakra-ui/react';
import axios from "axios";
import SlideEx from "./Slide";


const LibaryList = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [list, setList] = useState([]);
    const [loud, setLoud] = useState(50);
    const [open, setOpen] = useState(true);
    const [distance, setDistance] = useState(100)
    const [busy, setBusy] = useState(100);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    useEffect(() => {
        //getList()
     });

    /* Use the map() function to render multiple Blocks! */
     // TODO: edit this variable

    const update = (props) => {
        setList(posts => [props, ...posts]);
    }

    var posts = list.map((i) => <LibraryBlock key={i.name} name={i.name} description={i.description} image={i.image}></LibraryBlock>);

    const getList = (open, busy, distance, loud, lat, lng) => {
        console.log("oskkkiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        console.log(""+ open + busy +  distance + loud + lat + lng)
        //axios.get(`backendShit`, {timeout: 10 * 1000}).then((body) => {
		//console.log("Received response from server for Q2: ", body.data);
		//const libraries = body.data;
        setList([]);
        //sample data
        const libraries = [{name: 'oski library', description:"where to find oskis's torture chamber", image:'https://pbs.twimg.com/profile_images/1276527827848818688/dfr7_4Kn_400x400.jpg'},
        {name: 'bear library', description:"i like bears", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
      ,  {name: 'library 3', description:"This is libary 3 descriotoin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
,{name: 'library 4', description:"THis is libaraby 4 descrpotion.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
,  {name: 'library 5', description:"This is libary 5 descriotoin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}
,{name: 'library 6', description:"THis is libaraby 6 descrpotion.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:'https://cdn.britannica.com/41/156441-050-A4424AEC/Grizzly-bear-Jasper-National-Park-Canada-Alberta.jpg?w=400&h=300&c=crop'}

    ]
        libraries.reverse();
        for(const library of libraries) {
            update(library)
        }
    }

    const getListHelper = () => {
        getList(open, busy, distance, loud, lat, lng)
    }
    function updateSearchParameters(o, b, d, l, lat, lng){
        setOpen(o);
        setBusy(b);
        setDistance(d);
        setLoud(l);
        setLat(lat);
        setLng(lng);
    }


   return (
        <Box margin="20">
            <SlideEx apply={updateSearchParameters}></SlideEx>
             <Button margin='10' variant='solid' colorScheme='blue' onClick={getListHelper}>Get Libaries</Button>
             <Box  maxWidth="1500px">{posts}</Box>
        </Box>

    );
}

export default LibaryList;