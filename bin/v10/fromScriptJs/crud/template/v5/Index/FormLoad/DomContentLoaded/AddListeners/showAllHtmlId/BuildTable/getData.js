import showAllJson from '../BuildTable/configs/showAll.json' with {type: 'json'};

const getData = async () => {
    const fetchEndPoint = showAllJson.endPoints.read;

    const config = await fetch(fetchEndPoint);
    const data = await config.json();

    return await data;
};

export default getData;